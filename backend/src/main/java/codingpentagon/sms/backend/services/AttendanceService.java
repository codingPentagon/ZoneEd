package codingpentagon.sms.backend.services;

import codingpentagon.sms.backend.models.AttendanceRecord;
import codingpentagon.sms.backend.repositories.AttendanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Random;

@Service
public class AttendanceService {
    private final AttendanceRepository attendanceRepository;
    @Autowired
    public AttendanceService(AttendanceRepository attendanceRepository) {
        this.attendanceRepository = attendanceRepository;
    }

    public List<AttendanceRecord> findAttendance(int clsID, Date date) {
        return this.attendanceRepository.findByClassIDAndDateAfter(clsID,date);
    }

    public void addAttendance(AttendanceRecord attendanceRecord) {
        attendanceRecord.setId(new Random().nextInt(50000));
        this.attendanceRepository.save(attendanceRecord);
    }
}
