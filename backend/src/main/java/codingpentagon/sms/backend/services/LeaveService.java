package codingpentagon.sms.backend.services;

import codingpentagon.sms.backend.repositories.LeaveRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import codingpentagon.sms.backend.models.LeaveRecord;

import java.util.*;

@Service
public class LeaveService {
    private final LeaveRecordRepository leaveRecordRepository;

    @Autowired
    public LeaveService(LeaveRecordRepository leaveRecordRepository) {
        this.leaveRecordRepository = leaveRecordRepository;
    }

    public void saveLeaveRecord(LeaveRecord leaveRecord) {
        leaveRecord.setId(new Random().nextInt(999));
        this.leaveRecordRepository.save(leaveRecord);
    }

    public List<Integer> findTodayLeaveRecord(int sclID) {
        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.HOUR, 0);
        calendar.set(Calendar.MINUTE, 0);
        calendar.set(Calendar.SECOND, 0);
        calendar.set(Calendar.MILLISECOND, 0);
        calendar.set(Calendar.ZONE_OFFSET, 0);
        return this.leaveRecordRepository.findBySclIDAndDatesContaining(sclID, calendar.getTime()).stream().map(LeaveRecord::getTeacherID).toList();
    }
}
