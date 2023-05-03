package codingpentagon.sms.backend.controllers;

import codingpentagon.sms.backend.models.Subject;
import codingpentagon.sms.backend.services.SubjectService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SubjectController {
    private final SubjectService subjectService;

    public SubjectController(SubjectService subjectService) {
        this.subjectService = subjectService;
    }

    @GetMapping("/subjects/taken/{studentId}")
    public List<Subject> fetchTakenSubjects(@PathVariable int studentId) {
        return subjectService.findTakenSubjects(studentId);
    }

}
