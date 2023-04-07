package codingpentagon.sms.backend.services;

import codingpentagon.sms.backend.models.AttendanceSheet;
import codingpentagon.sms.backend.repositories.AttendanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class AttendanceService {
    private final AttendanceRepository attendanceRepository;
    @Autowired
    public AttendanceService(AttendanceRepository attendanceRepository) {
        this.attendanceRepository = attendanceRepository;
    }

    public AttendanceSheet findAttendance(int clsID, Date date) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        calendar.set(Calendar.ZONE_OFFSET, (300+45)*60*1000);       //5.45 hours in milliseconds
        Date dayStart = calendar.getTime();

        calendar.add(Calendar.DATE, 1);
        Date dayEnd = calendar.getTime();

        return this.attendanceRepository.findByClassIDAndDateBetween(clsID, dayStart, dayEnd);
    }

    public void addAttendance(AttendanceSheet attendanceSheet) {
        attendanceSheet.setId(new Random().nextInt(50000));

        System.out.println(attendanceSheet.getDate());

        this.attendanceRepository.save(attendanceSheet);
    }
}
