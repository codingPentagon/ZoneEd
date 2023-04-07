package codingpentagon.sms.backend.services;

import codingpentagon.sms.backend.models.AttendanceRecord;
import codingpentagon.sms.backend.repositories.AttendanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
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
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        calendar.set(Calendar.HOUR_OF_DAY, 0);
        calendar.set(Calendar.MINUTE, 0);
        calendar.set(Calendar.SECOND, 0);
        calendar.set(Calendar.MILLISECOND, 0);
        Date dayStart = calendar.getTime();

        calendar.add(Calendar.DATE, 1);
        Date dayEnd = calendar.getTime();

        return this.attendanceRepository.findByClassIDAndDateBetween(clsID, dayStart, dayEnd);
    }

    public void addAttendance(AttendanceRecord attendanceRecord) {
        attendanceRecord.setId(new Random().nextInt(50000));
        this.attendanceRepository.save(attendanceRecord);
    }
}
