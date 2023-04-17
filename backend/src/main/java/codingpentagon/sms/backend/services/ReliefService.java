package codingpentagon.sms.backend.services;

import codingpentagon.sms.backend.models.*;
import codingpentagon.sms.backend.repositories.ReliefRecordRepository;
import codingpentagon.sms.backend.repositories.ScheduleRepository;
import codingpentagon.sms.backend.repositories.TeacherRepository;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ReliefService {
    private final LeaveService leaveService;
    private final TeacherRepository teacherRepository;
    private final ScheduleRepository scheduleRepository;
    private final ReliefRecordRepository reliefRecordRepository;

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
        try {
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
        } catch (NullPointerException e) {
            return null;
        }
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
        for (ReliefRecord reliefRecord: reliefRecords) {
            reliefRecord.setId(new Random().nextInt(100000));
        }
        this.reliefRecordRepository.saveAll(List.of(reliefRecords));
    }
}
