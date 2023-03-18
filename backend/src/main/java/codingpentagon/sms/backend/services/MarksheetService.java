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

    public List<Marksheet> findMarksheets(int classID, int year, int term) {
        return this.marksheetRepository.findByClassIDAndYearAndTerm(classID,year,term);
    }

    public void saveMarksheet(Marksheet marksheet) {
        marksheet.setId(new Random().nextInt(50000));
        this.marksheetRepository.save(marksheet);
    }

    public List<Integer> findStudentClassIDs(int studentID) {
       return this.marksheetRepository.findByTheStudentID(studentID);
    }


}
