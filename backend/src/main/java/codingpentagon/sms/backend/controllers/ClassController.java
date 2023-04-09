package codingpentagon.sms.backend.controllers;

import codingpentagon.sms.backend.services.ClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import codingpentagon.sms.backend.models.Class;
import java.util.List;

@RestController
public class ClassController {
    private final ClassService classService;

    @Autowired
    public ClassController(ClassService classService) {
        this.classService = classService;
    }

    @GetMapping("/classes/{sclID}")
    public List<Class> fetchClasses(@PathVariable int sclID) {
        return classService.findClasses(sclID);
    }
}
