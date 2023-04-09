package codingpentagon.sms.backend.controllers;

import codingpentagon.sms.backend.models.Assessment;
import codingpentagon.sms.backend.services.AssessmentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AssessmentController {
    private final AssessmentService assessmentService;

    public AssessmentController(AssessmentService assessmentService) {
        this.assessmentService = assessmentService;
    }

    @GetMapping("/assessments/{sclID}/{clsID}/{subjectID}")
    public List<Assessment> fetchAssessments(@PathVariable int sclID, @PathVariable int clsID, @PathVariable int subjectID) {
        return this.assessmentService.findAssessments(sclID, clsID, subjectID);
    }

    @PostMapping("/assessments/")
    public void addAssessment(@RequestBody Assessment assessment) {
        this.assessmentService.saveAssessment(assessment);
    }
}
