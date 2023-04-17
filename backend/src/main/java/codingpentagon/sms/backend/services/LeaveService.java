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

    @Autowired
    public LeaveService(LeaveRecordRepository leaveRecordRepository, TeacherRepository teacherRepository) {
        this.leaveRecordRepository = leaveRecordRepository;
        this.teacherRepository = teacherRepository;
    }

    public void saveLeaveRecord(LeaveRecord leaveRecord) {
        leaveRecord.setId(new Random().nextInt(999));
        this.leaveRecordRepository.save(leaveRecord);
    }

    public List<Teacher> findLeavesToday(int sclID) {
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
}
