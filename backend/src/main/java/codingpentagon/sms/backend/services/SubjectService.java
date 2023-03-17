package codingpentagon.sms.backend.services;

import codingpentagon.sms.backend.models.Subject;
import codingpentagon.sms.backend.repositories.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubjectService {
    SubjectRepository subjectRepository;
    @Autowired
    public SubjectService(SubjectRepository subjectRepository){
        this.subjectRepository=subjectRepository;
    }

    public String findSubjectName(int subjectID){
        return this.subjectRepository.findById(subjectID).ifPresent(subject -> {return subject.getSubjectName()});
    }
}
