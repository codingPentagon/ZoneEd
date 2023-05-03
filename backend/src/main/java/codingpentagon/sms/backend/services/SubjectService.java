package codingpentagon.sms.backend.services;

import codingpentagon.sms.backend.models.Student;
import codingpentagon.sms.backend.models.Subject;
import codingpentagon.sms.backend.repositories.StudentRepository;
import codingpentagon.sms.backend.repositories.SubjectRepository;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class SubjectService {
    private final SubjectRepository subjectRepository;
    private final StudentRepository studentRepository;

    public SubjectService(SubjectRepository subjectRepository, StudentRepository studentRepository) {
        this.subjectRepository = subjectRepository;
        this.studentRepository = studentRepository;
    }

    public List<Subject> findTakenSubjects(int studentId) {
        Optional<Student> student = this.studentRepository.findById(studentId);
        if (student.isPresent()) {
            int[] subjectIds = student.get().getTakenSubjectIDs();
            return this.subjectRepository.findAllById(Arrays.stream(subjectIds).boxed().toList());
        }
        return null;
    }
}
