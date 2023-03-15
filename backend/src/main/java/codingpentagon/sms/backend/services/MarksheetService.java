package codingpentagon.sms.backend.services;
import codingpentagon.sms.backend.models.Marksheet;
import codingpentagon.sms.backend.repositories.MarksheetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Random;

@Service
public class MarksheetService {
    private final MarksheetRepository marksheetRepository;
    @Autowired
    public MarksheetService(MarksheetRepository marksheetRepository) {
        this.marksheetRepository = marksheetRepository;
    }

    public List<Marksheet> findMarksheet(int studentID, int year, int term) {
        return this.marksheetRepository.findByStudentIDAndYearAndTerm(studentID,year,term);
    }

    public void addMarksheet(Marksheet marksheet) {
        marksheet.setId(new Random().nextInt(50000));
        this.marksheetRepository.save(marksheet);
    }
}
