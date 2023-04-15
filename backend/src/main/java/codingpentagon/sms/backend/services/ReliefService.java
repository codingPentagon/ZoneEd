package codingpentagon.sms.backend.services;

import codingpentagon.sms.backend.models.LeaveRecord;
import codingpentagon.sms.backend.models.ReliefSlotCandidates;
import codingpentagon.sms.backend.models.Schedule;
import codingpentagon.sms.backend.models.SchedulePeriod;
import codingpentagon.sms.backend.models.Teacher;
import codingpentagon.sms.backend.repositories.LeaveRecordRepository;
import codingpentagon.sms.backend.repositories.ScheduleRepository;
import codingpentagon.sms.backend.repositories.TeacherRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Locale;

@Service
public class ReliefService {
    private final LeaveRecordRepository leaveRecordRepository;
    private final TeacherRepository teacherRepository;
    private final ScheduleRepository scheduleRepository;

    public ReliefService(LeaveRecordRepository leaveRecordRepository, TeacherRepository teacherRepository, ScheduleRepository scheduleRepository) {
        this.leaveRecordRepository = leaveRecordRepository;
        this.teacherRepository = teacherRepository;
        this.scheduleRepository = scheduleRepository;
    }

    public List<Teacher> findTeachersOnLeave(int sclID) {
        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.HOUR, 5);
        calendar.set(Calendar.MINUTE, 30);
        calendar.set(Calendar.SECOND, 0);
        calendar.set(Calendar.MILLISECOND, 0);
        calendar.set(Calendar.AM_PM, Calendar.AM);      //equals to 0:00 in UTC
//        calendar.set(Calendar.DATE, calendar.get(Calendar.DATE) - 1);

        List<Integer> teacherIDs = this.leaveRecordRepository.findBySclIDAndDatesContaining(sclID, calendar.getTime()).stream().map(LeaveRecord::getTeacherID).toList();

        return this.teacherRepository.findAllById(teacherIDs);
    }

    public List<ReliefSlotCandidates> findReliefSlotsCandidates(int sclID, int teacherID){
        List<ReliefSlotCandidates> reliefSlotsWithCandidates = new ArrayList<>();
        Calendar calendar = Calendar.getInstance();
        String dayName = calendar.getDisplayName(Calendar.DAY_OF_WEEK, Calendar.LONG, Locale.ENGLISH).toLowerCase().substring(0,3);

        List<Integer> teachersOnLeaveIDs = this.findTeachersOnLeave(sclID).stream().map(Teacher::getId).toList();
        List<Teacher> teachersPresent = this.teacherRepository.findBySclIDAndIdNotIn(sclID, teachersOnLeaveIDs);

        //getting vacant classes with periods
        Schedule schedule1 = this.scheduleRepository.findByTeacherID(teacherID);
        try{
            schedule1.getSchedule().forEach((SchedulePeriod schedulePeriod) -> {
                String slot = schedulePeriod.getSlotByDay().get(dayName);
                if (!slot.equals("---")) {
                    ReliefSlotCandidates reliefSlotCandidates = new ReliefSlotCandidates();
                    reliefSlotCandidates.setPeriod(schedulePeriod.getPeriod());
                    reliefSlotCandidates.setClassName(slot);
                    //finding available teachers for the vacant
                    reliefSlotCandidates.setAvailableTeachers(this.findAvailableTeachers(teachersPresent, dayName, schedulePeriod.getPeriod()));
                    reliefSlotsWithCandidates.add(reliefSlotCandidates);
                }
            });
        }
        catch (NullPointerException e){
            return null;
        }
        return reliefSlotsWithCandidates;
    }

    private List<Teacher> findAvailableTeachers(List<Teacher> teachersPresent, String dayName, int period){
        List<Teacher> availableTeachers = new ArrayList<>();

        for(Teacher teacher:teachersPresent){
            Schedule schedule = this.scheduleRepository.findByTeacherID(teacher.getId());

            schedule.getSchedule().forEach((SchedulePeriod schedulePeriod2) -> {
                if(schedulePeriod2.getPeriod()==period){
                    String slot = schedulePeriod2.getSlotByDay().get(dayName);
                    if (slot.equals("---")) {
                        availableTeachers.add(teacher);
                    }
                }
            });
        }
        return availableTeachers;
    }
}
