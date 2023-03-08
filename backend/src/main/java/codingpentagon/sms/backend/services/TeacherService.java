package codingpentagon.sms.backend.services;

import codingpentagon.sms.backend.models.Teacher;
import org.springframework.stereotype.Service;
import codingpentagon.sms.backend.repositories.TeacherRepository;

import java.util.List;
import java.util.Random;

@Service
public class TeacherService {
    TeacherRepository teacherRepository;

    public TeacherService(TeacherRepository teacherRepo){
        this.teacherRepository = teacherRepo;
    }

    public List<Teacher> getTeachers(int sclID) {
        return this.teacherRepository.findBySclID(sclID);
    }

    public void saveTeacher(Teacher teacher) {
        teacher.setId(new Random().nextInt(1000));
        this.teacherRepository.save(teacher);
    }
}