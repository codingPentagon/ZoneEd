package codingpentagon.sms.backend.services;

import codingpentagon.sms.backend.models.*;
import codingpentagon.sms.backend.repositories.ReliefRecordRepository;
import codingpentagon.sms.backend.repositories.ScheduleRepository;
import codingpentagon.sms.backend.repositories.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ReliefService {
    private final LeaveService leaveService;
    private final TeacherRepository teacherRepository;
    private final ScheduleRepository scheduleRepository;
    private final ReliefRecordRepository reliefRecordRepository;

    @Autowired
    public ReliefService(LeaveService leaveService, TeacherRepository teacherRepository, ScheduleRepository scheduleRepository, ReliefRecordRepository reliefRecordRepository) {
        this.leaveService = leaveService;
        this.teacherRepository = teacherRepository;
        this.scheduleRepository = scheduleRepository;
        this.reliefRecordRepository = reliefRecordRepository;
    }

    public List<ReliefSlotCandidates> findReliefSlotsCandidates(int sclID, int teacherID) {
        List<ReliefSlotCandidates> reliefSlotsWithCandidates = new ArrayList<>();
        Calendar calendar = Calendar.getInstance();
        String dayName = calendar.getDisplayName(Calendar.DAY_OF_WEEK, Calendar.LONG, Locale.ENGLISH).toLowerCase().substring(0, 3);

        List<Integer> teachersOnLeaveIDs = this.leaveService.findLeavesToday(sclID).stream().map(Teacher::getId).toList();
        List<Teacher> teachersPresent = this.teacherRepository.findBySclIDAndIdNotIn(sclID, teachersOnLeaveIDs);

        //getting vacant classes with periods
        Schedule schedule1 = this.scheduleRepository.findByTeacherID(teacherID);
        schedule1.getSchedule().forEach((SchedulePeriod schedulePeriod) -> {
            String slot = schedulePeriod.getSlotByDay().get(dayName);
            if (!slot.equals("---")) {
                ReliefSlotCandidates reliefSlotCandidates = new ReliefSlotCandidates();
                reliefSlotCandidates.setPeriod(schedulePeriod.getPeriod());
                reliefSlotCandidates.setClassName(slot);
                reliefSlotCandidates.setAllocatedTeacherID(this.findAllocatedTeacher(sclID, schedulePeriod.getPeriod(), slot));
                //finding available teachers for the vacant
                reliefSlotCandidates.setAvailableTeachers(this.findAvailableTeachers(teachersPresent, dayName, schedulePeriod.getPeriod()));
                reliefSlotsWithCandidates.add(reliefSlotCandidates);
            }
        });
        return reliefSlotsWithCandidates;
    }

    private List<Teacher> findAvailableTeachers(List<Teacher> teachersPresent, String dayName, int period) {
        List<Teacher> availableTeachers = new ArrayList<>();

        for (Teacher teacher : teachersPresent) {
            Schedule schedule = this.scheduleRepository.findByTeacherID(teacher.getId());

            schedule.getSchedule().forEach((SchedulePeriod schedulePeriod2) -> {
                if (schedulePeriod2.getPeriod() == period) {
                    String slot = schedulePeriod2.getSlotByDay().get(dayName);
                    if (slot.equals("---")) {
                        availableTeachers.add(teacher);
                    }
                }
            });
        }
        return availableTeachers;
    }

    public void saveReliefAllocations(ReliefRecord[] reliefRecords) {
        for (ReliefRecord reliefRecord : reliefRecords) {
            reliefRecord.setId(new Random().nextInt(100000));
        }
        this.reliefRecordRepository.saveAll(List.of(reliefRecords));
    }

    public int findAllocatedTeacher(int sclID, int period, String className) {
        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.HOUR_OF_DAY, 5);
        calendar.set(Calendar.MINUTE, 30);
        calendar.set(Calendar.SECOND, 0);
        calendar.set(Calendar.MILLISECOND, 0);
        calendar.set(Calendar.AM_PM, Calendar.AM);
        Date date1 = calendar.getTime();
        calendar.add(Calendar.DATE, 1);
        Date date2 = calendar.getTime();

        try {
            return this.reliefRecordRepository.findBySclIDAndPeriodAndClassNameAndDateBetween(sclID, period, className, date1, date2).getAllocatedTeacherID();
        } catch (NullPointerException e) {
            return  0;
        }
    }
}
