package codingpentagon.sms.backend.services;

import codingpentagon.sms.backend.models.School;
import codingpentagon.sms.backend.repositories.SchoolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SchoolService {
    SchoolRepository schoolRepository;

 @Autowired
 public SchoolService(SchoolRepository schoolRepository){
  this.schoolRepository=schoolRepository;
 }

 public List<School> findSchools() {
     return this.schoolRepository.findAll();
 }

    public void saveSchool(School school) {
        this.schoolRepository.save(school);
    }
}
