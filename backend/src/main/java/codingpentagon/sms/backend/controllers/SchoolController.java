package codingpentagon.sms.backend.controllers;
import codingpentagon.sms.backend.models.School;
import codingpentagon.sms.backend.services.SchoolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SchoolController {
    SchoolService schoolService;

    @Autowired
    public SchoolController(SchoolService schoolService) {
        this.schoolService = schoolService;
    }

    @GetMapping("schools/")
    public List<School> fetchSchools() {
        return this.schoolService.findSchools();
    }

    @PostMapping("schools/")
    public void addSchool(@RequestBody School school){
        this.schoolService.saveSchool(school);
    }

}
