package codingpentagon.sms.backend.services;

import codingpentagon.sms.backend.models.Teacher;
import codingpentagon.sms.backend.repositories.LeaveRecordRepository;
import codingpentagon.sms.backend.repositories.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import codingpentagon.sms.backend.models.LeaveRecord;

import java.util.*;

@Service
public class LeaveService {
    private final LeaveRecordRepository leaveRecordRepository;
    private final TeacherRepository teacherRepository;
    private final DateTimeService dateTimeService;

    @Autowired
    public LeaveService(LeaveRecordRepository leaveRecordRepository, TeacherRepository teacherRepository, DateTimeService dateTimeService) {
        this.leaveRecordRepository = leaveRecordRepository;
        this.teacherRepository = teacherRepository;
        this.dateTimeService = dateTimeService;
    }

    public void saveLeaveRecord(LeaveRecord leaveRecord) {
        leaveRecord.setId(new Random().nextInt(999));
        this.leaveRecordRepository.save(leaveRecord);
    }

    public List<Teacher> findLeavesToday(int sclID) {
        Date today = this.dateTimeService.getToday().getTime();
        List<Integer> teacherIDs = this.leaveRecordRepository.findBySclIDAndDatesContaining(sclID, today).stream().map(LeaveRecord::getTeacherID).toList();

        return this.teacherRepository.findAllById(teacherIDs);
    }
}
