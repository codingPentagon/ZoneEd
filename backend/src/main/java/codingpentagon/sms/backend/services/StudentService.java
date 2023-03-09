package codingpentagon.sms.backend.services;
import codingpentagon.sms.backend.models.Student;
import codingpentagon.sms.backend.repositories.StudentRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Random;

@Service
public class StudentService {
    StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepo){
        this.studentRepository = studentRepo;
    }


    public List<Student> getStudents(int clsID) {
        return this.studentRepository.findByClassID(clsID);
    }

    public void saveStudent(Student student) {
        student.setId(new Random().nextInt(10000));
        this.studentRepository.save(student);
    }
}
