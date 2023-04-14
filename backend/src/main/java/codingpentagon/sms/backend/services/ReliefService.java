package codingpentagon.sms.backend.services;

import codingpentagon.sms.backend.models.LeaveRecord;
import codingpentagon.sms.backend.models.Teacher;
import codingpentagon.sms.backend.repositories.LeaveRecordRepository;
import codingpentagon.sms.backend.repositories.TeacherRepository;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.List;

@Service
public class ReliefService {
    private final LeaveRecordRepository leaveRecordRepository;
    private final TeacherRepository teacherRepository;

    public ReliefService(LeaveRecordRepository leaveRecordRepository, TeacherRepository teacherRepository) {
        this.leaveRecordRepository = leaveRecordRepository;
        this.teacherRepository = teacherRepository;
    }

    public List<Teacher> findTeachersOnLeave(int sclID) {
        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.HOUR, 0);
        calendar.set(Calendar.MINUTE, 0);
        calendar.set(Calendar.SECOND, 0);
        calendar.set(Calendar.MILLISECOND, 0);
        calendar.set(Calendar.AM_PM, Calendar.AM);
        calendar.set(Calendar.ZONE_OFFSET, 0);

        List<Integer> teacherIDs = this.leaveRecordRepository.findBySclIDAndDatesContaining(sclID, calendar.getTime()).stream().map(LeaveRecord::getTeacherID).toList();

        return this.teacherRepository.findAllById(teacherIDs);
    }
}
