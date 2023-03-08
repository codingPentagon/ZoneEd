package codingpentagon.sms.backend.controllers;

import codingpentagon.sms.backend.models.Teacher;
import codingpentagon.sms.backend.repositories.TeacherRepository;
import codingpentagon.sms.backend.services.TeacherService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TeacherController {

    TeacherService teacherService;

    public TeacherController(TeacherRepository teacherRepo){
        this.teacherService = new TeacherService(teacherRepo);
    }

    @GetMapping("teachers/{sclID}")
    public List<Teacher> pushTeachers(@PathVariable int sclID){
        return this.teacherService.getTeachers(sclID);
    }

    @PostMapping("teachers/")
    public void storeTeacher(@RequestBody Teacher teacher){
        this.teacherService.saveTeacher(teacher);
    }
}