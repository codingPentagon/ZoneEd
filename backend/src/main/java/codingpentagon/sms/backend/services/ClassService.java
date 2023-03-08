package codingpentagon.sms.backend.services;
import codingpentagon.sms.backend.models.Class;
import codingpentagon.sms.backend.repositories.ClassRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class ClassService {

    ClassRepository classRepository;

    public ClassService(ClassRepository classRepo){
        this.classRepository=classRepo;
    }

    public List<Class> getClasses(int sclID){
        return classRepository.findBySclID(sclID);
    }

    public void storeClass(Class cls) {
        if (cls.getId()==0){
            cls.setId(new Random().nextInt(500));
        }
        classRepository.save(cls);
    }
}