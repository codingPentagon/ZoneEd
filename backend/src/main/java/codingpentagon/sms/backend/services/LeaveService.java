package codingpentagon.sms.backend.services;

import codingpentagon.sms.backend.repositories.LeaveRecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import codingpentagon.sms.backend.models.LeaveRecord;

import java.util.List;
import java.util.Random;

@Service
public class LeaveService {
    private final LeaveRecordRepository leaveRecordRepository;

    @Autowired
    public LeaveService(LeaveRecordRepository leaveRecordRepository){
        this.leaveRecordRepository=leaveRecordRepository;
    }

    public void saveLeaveRecord(LeaveRecord leaveRecord) {
        leaveRecord.setId(new Random().nextInt(999));
        this.leaveRecordRepository.save(leaveRecord);
    }

    public List<LeaveRecord> findTodayLeaveRecord(int sclID) {
        return this.leaveRecordRepository.findBySclID(sclID);
    }
}
