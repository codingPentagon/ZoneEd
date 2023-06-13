package codingpentagon.sms.backend.services;

import codingpentagon.sms.backend.models.Subject;
import codingpentagon.sms.backend.repositories.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class SubjectService {
    SubjectRepository subjectRepository;
    @Autowired
    public SubjectService(SubjectRepository subjectRepository){
        this.subjectRepository=subjectRepository;
    }

    public List<Subject> findSubjects(List<Integer> subjectID){
        return this.subjectRepository.findAllById(subjectID);
    }


    public void saveSubject(Subject subject) {
        subject.setId(new Random().nextInt(50));
        this.subjectRepository.save(subject);
    }

    public Optional<Subject> findSubject(int subjectID) {
        return this.subjectRepository.findById(subjectID);
    }
}
