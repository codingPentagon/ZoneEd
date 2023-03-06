package codingpentagon.sms.backend.controllers;

import codingpentagon.sms.backend.models.Class;
import codingpentagon.sms.backend.repositories.ClassRepository;
import codingpentagon.sms.backend.services.ClassService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ClassController {

    private final ClassService classService;

    public ClassController(ClassRepository classRepo) {
        this.classService = new ClassService(classRepo);
    }

    @GetMapping("classes/{sclID}")
    public List<Class> pushClasses(@PathVariable int sclID){
        return classService.getClasses(sclID);
    }

    @PostMapping("classes/")
    public void pullClass(@RequestBody Class cls){
        classService.storeClass(cls);
    }
}
