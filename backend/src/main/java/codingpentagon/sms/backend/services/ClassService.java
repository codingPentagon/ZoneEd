package codingpentagon.sms.backend.services;

import codingpentagon.sms.backend.repositories.ClassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import codingpentagon.sms.backend.models.Class;
import java.util.List;

@Service
public class ClassService {
    private final ClassRepository classRepository;
    @Autowired
    public ClassService(ClassRepository classRepository) {
        this.classRepository = classRepository;
    }

    public List<Class> findClasses(int sclID) {
        return classRepository.findClassesBySclID(sclID);
    }
}
