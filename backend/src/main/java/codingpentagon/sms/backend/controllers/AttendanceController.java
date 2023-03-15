package codingpentagon.sms.backend.controllers;

import codingpentagon.sms.backend.models.AttendanceRecord;
import codingpentagon.sms.backend.services.AttendanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
public class AttendanceController {
    private final AttendanceService attendanceService;
    @Autowired
    public AttendanceController(AttendanceService attendanceService) {
        this.attendanceService = attendanceService;
    }

    @GetMapping("attendance/{clsID}/{date}")
    public List<AttendanceRecord> fetchAttendance(@PathVariable int clsID, @PathVariable Date date){
        return this.attendanceService.findAttendance(clsID,date);
    }

    @PostMapping("attendance/")
    public void addAttendance(@RequestBody AttendanceRecord attendanceRecord){
        this.attendanceService.addAttendance(attendanceRecord);
    }


}
