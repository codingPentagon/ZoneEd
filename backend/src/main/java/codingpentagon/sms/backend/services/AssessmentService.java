package codingpentagon.sms.backend.services;

import codingpentagon.sms.backend.models.Assessment;
import codingpentagon.sms.backend.repositories.AssessmentRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
public class AssessmentService {
    private final AssessmentRepository assessmentRepository;

    public AssessmentService(AssessmentRepository assessmentRepository) {
        this.assessmentRepository = assessmentRepository;
    }

    public List<Assessment> findAssessments(int sclID, int clsID, int subjectID) {
        return this.assessmentRepository.findAssessmentsBySclIDAndClsIDAndSubjectID(sclID, clsID, subjectID);
    }

    public void saveAssessment(Assessment assessment) {
        assessment.setId(new Random().nextInt(5000));
        this.assessmentRepository.save(assessment);
    }

    public void deleteAssessments(List<Integer> ids) {
        this.assessmentRepository.deleteAllById(ids);
    }
}
