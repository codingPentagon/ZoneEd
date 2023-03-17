package codingpentagon.sms.backend.controllers;

import codingpentagon.sms.backend.models.Subject;
import codingpentagon.sms.backend.services.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
public class SubjectController {
    SubjectService subjectService;
    @Autowired
    public SubjectController(SubjectService subjectService){
        this.subjectService = subjectService;
    }

    @GetMapping("subjects/{subjectID}")
    public List<Subject> fetchSubjects(@PathVariable List<Integer> subjectID){
        return this.subjectService.findSubjects(subjectID);
    }

    @PostMapping("subjects/")
    public void addSubject(@RequestBody Subject subject){
        this.subjectService.saveSubject(subject);
    }
}
