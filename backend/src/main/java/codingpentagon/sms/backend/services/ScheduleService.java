package codingpentagon.sms.backend.services;

import codingpentagon.sms.backend.models.Schedule;
import codingpentagon.sms.backend.repositories.ScheduleRepository;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class ScheduleService {
    ScheduleRepository scheduleRepository;

    public ScheduleService(ScheduleRepository scheduleRepo){
        this.scheduleRepository = scheduleRepo;
    }

    public Schedule getSchedule(int teacherID) {
        return this.scheduleRepository.findByTeacherID(teacherID);
    }

    public void storeSchedule(Schedule schedule) {
        if (schedule.getId() == 0) {
            schedule.setId(new Random().nextInt(2000));
        }
        this.scheduleRepository.save(schedule);
    }
}
