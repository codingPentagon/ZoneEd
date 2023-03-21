package codingpentagon.sms.backend.services;

import codingpentagon.sms.backend.models.LeaveRecord;
import codingpentagon.sms.backend.models.LeaveRequest;
import codingpentagon.sms.backend.repositories.LeaveRecordRepository;
import codingpentagon.sms.backend.repositories.LeaveRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class LeaveService {
    LeaveRequestRepository leaveRequestRepository;
    LeaveRecordRepository leaveRecordRepository;

    @Autowired
    public LeaveService(LeaveRequestRepository leaveRequestRepository,LeaveRecordRepository leaveRecordRepository){
        this.leaveRequestRepository=leaveRequestRepository;
        this.leaveRecordRepository=leaveRecordRepository;

    }

    public List<LeaveRequest> findleaveRequest(int teacherID) {
        return this.leaveRequestRepository.findByTeacherID(teacherID);
    }

    public void saveleaveRequest(LeaveRequest leaveRequest) {
        leaveRequest.setId(new Random().nextInt(900));
        this.leaveRequestRepository.save(leaveRequest);
    }

    public void saveleaveRecord(LeaveRecord leaveRecord) {
        leaveRecord.setId(new Random().nextInt(999));
        this.leaveRecordRepository.save(leaveRecord);
    }

    public void updateLeaveRequest(Object patchRecord) {

    }
}
