package codingpentagon.sms.backend.controllers;

import codingpentagon.sms.backend.models.Student;
import codingpentagon.sms.backend.repositories.StudentRepository;
import codingpentagon.sms.backend.services.StudentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentController {
    StudentService studentService;

    public StudentController(StudentRepository studentRepository){
      this.studentService=new StudentService(studentRepository);
    }

    @GetMapping("students/{clsID}")
    public List<Student> getStudents(@PathVariable int clsID) {
        return this.studentService.getStudents(clsID);
    }

    @PostMapping("students/")
    public void saveStudents(@RequestBody Student student){
        this.studentService.saveStudent(student);
    }
}