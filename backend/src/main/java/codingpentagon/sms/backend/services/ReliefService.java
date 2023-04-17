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
    private final DateTimeService dateTimeService;

    @Autowired
    public ReliefService(LeaveService leaveService, TeacherRepository teacherRepository, ScheduleRepository scheduleRepository, ReliefRecordRepository reliefRecordRepository, DateTimeService dateTimeService) {
        this.leaveService = leaveService;
        this.teacherRepository = teacherRepository;
        this.scheduleRepository = scheduleRepository;
        this.reliefRecordRepository = reliefRecordRepository;
        this.dateTimeService = dateTimeService;
    }

    public List<ReliefSlotCandidates> findReliefSlotsCandidates(int sclID, int teacherID) {
        List<ReliefSlotCandidates> reliefSlotsWithCandidates = new ArrayList<>();
        String dayName = this.dateTimeService.getTodayName().toLowerCase().substring(0, 3);

        //getting vacant classes with periods
        Schedule schedule1 = this.scheduleRepository.findByTeacherID(teacherID);
        schedule1.getSchedule().forEach((SchedulePeriod schedulePeriod) -> {
            String slot = schedulePeriod.getSlotByDay().get(dayName);
            int period = schedulePeriod.getPeriod();
            if (!slot.equals("---")) {
                ReliefSlotCandidates reliefSlotCandidates = new ReliefSlotCandidates();
                reliefSlotCandidates.setPeriod(schedulePeriod.getPeriod());
                reliefSlotCandidates.setClassName(slot);
                //finding if any teacher allocated for the vacant
                int allocatedTeacherID = this.findAllocatedTeacher(sclID, period, slot);
                reliefSlotCandidates.setAllocatedTeacherID(allocatedTeacherID);
                //finding available teachers for the vacant
                reliefSlotCandidates.setAvailableTeachers(this.findAvailableTeachers(sclID ,dayName, period, allocatedTeacherID));
                reliefSlotsWithCandidates.add(reliefSlotCandidates);
            }
        });
        return reliefSlotsWithCandidates;
    }

    private List<Teacher> findAvailableTeachers(int sclID, String dayName, int period, int allocatedTeacherID) {
        List<Teacher> availableTeachers = new ArrayList<>();
        List<Integer> unavailableTeacherIDs = new ArrayList<>();

        unavailableTeacherIDs.addAll(this.leaveService.findLeavesToday(sclID).stream().map(Teacher::getId).toList());
        //adds allocated teachers as unavailable for the period including the teacher who is already allocated
        unavailableTeacherIDs.addAll(findAllocatedTeacherIDs(sclID, period));

        List<Teacher> teachersPresent = this.teacherRepository.findBySclIDAndIdNotIn(sclID, unavailableTeacherIDs);

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
        //gets already allocated teacher for this vacant and adds to the list
        if (allocatedTeacherID != 0) {
            this.teacherRepository.findById(allocatedTeacherID).ifPresent(availableTeachers::add);
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
        Date date1 = this.dateTimeService.getToday().getTime();
        Date date2 = this.dateTimeService.getTomorrow().getTime();

        try {
            return this.reliefRecordRepository.findBySclIDAndPeriodAndClassNameAndDateBetween(sclID, period, className, date1, date2).getAllocatedTeacherID();
        } catch (NullPointerException e) {
            return  0;
        }
    }

    public List<Integer> findAllocatedTeacherIDs(int sclID, int period) {
        List<Integer> allocatedTeacherIDs = new ArrayList<>();
        Date date1 = this.dateTimeService.getToday().getTime();
        Date date2 = this.dateTimeService.getTomorrow().getTime();

        try {
            this.reliefRecordRepository.findBySclIDAndPeriodAndDateBetween(sclID, period, date1, date2).forEach(reliefRecord -> {
                allocatedTeacherIDs.add(reliefRecord.getAllocatedTeacherID());
            });
            return allocatedTeacherIDs;
        }
        catch (NullPointerException e) {
            return null;
        }
    }
}
