package codingpentagon.sms.backend.services;
import codingpentagon.sms.backend.models.Class;
import codingpentagon.sms.backend.repositories.ClassRepository;
import org.springframework.stereotype.Service;

import java.util.List;

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
        classRepository.save(cls);
    }
}
