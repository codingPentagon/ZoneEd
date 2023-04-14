package codingpentagon.sms.backend.services;

import codingpentagon.sms.backend.models.LeaveRecord;
import codingpentagon.sms.backend.models.Schedule;
import codingpentagon.sms.backend.models.SchedulePeriod;
import codingpentagon.sms.backend.models.ScheduleSlotDetail;
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

        List<Integer> teacherIDs = this.leaveRecordRepository.findBySclIDAndDatesContaining(sclID, calendar.getTime()).stream().map(LeaveRecord::getTeacherID).toList();

        return this.teacherRepository.findAllById(teacherIDs);
    }

    public List<ScheduleSlotDetail> findVacantSlots(int teacherID) {
        List<ScheduleSlotDetail> slotDetails = new ArrayList<>();
        Calendar calendar = Calendar.getInstance();
        String dayName = calendar.getDisplayName(Calendar.DAY_OF_WEEK, Calendar.LONG, Locale.ENGLISH).toLowerCase().substring(0,3);

        Schedule schedule = this.scheduleRepository.findByTeacherID(teacherID);
        try{
            schedule.getSchedule().forEach((SchedulePeriod schedulePeriod) -> {
                String slot = schedulePeriod.getSlotByDay().get(dayName);
                if (!slot.equals("---")) {
                    slotDetails.add(new ScheduleSlotDetail(schedulePeriod.getPeriod(), slot));
                }
            });
            return slotDetails;
        }
        catch (NullPointerException e){
            return null;
        }
    }

    public List<Teacher> fetchAvailableTeachers(int sclID,int period){
        List<Integer> teachersOnLeaveIDs = this.findTeachersOnLeave(sclID).stream().map(Teacher::getId).toList();
        List<Teacher> teachersPresent = this.teacherRepository.findBySclIDAndIdNotIn(sclID, teachersOnLeaveIDs);

        List<Teacher> availableTeachers = new ArrayList<>();
        Calendar calendar = Calendar.getInstance();
        String dayName = calendar.getDisplayName(Calendar.DAY_OF_WEEK, Calendar.LONG, Locale.ENGLISH).toLowerCase().substring(0,3);

        for(Teacher teacher:teachersPresent){
            Schedule schedule = this.scheduleRepository.findByTeacherID(teacher.getId());
            try{
                schedule.getSchedule().forEach((SchedulePeriod schedulePeriod) -> {
                    if(schedulePeriod.getPeriod()==period){
                        String slot = schedulePeriod.getSlotByDay().get(dayName);
                        if (slot.equals("---")) {
                            availableTeachers.add(teacher);
                        }
                    }
                });
            }
            catch (NullPointerException ignored){
            }
        }
        return availableTeachers;
    }
}
