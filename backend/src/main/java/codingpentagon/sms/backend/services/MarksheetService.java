package codingpentagon.sms.backend.services;

import codingpentagon.sms.backend.models.Marksheet;
import codingpentagon.sms.backend.repositories.MarksheetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Arrays;
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
        return this.marksheetRepository.findByClassIDAndYearAndTerm(classID, year, term);
    }

    public void saveMarksheet(Marksheet marksheet) {
        if (marksheet.getId() == 0) {
            marksheet.setId(new Random().nextInt(10000));
        }
        Arrays.stream(marksheet.getMarks()).forEach(subjectMark -> {
            marksheet.setTotalMarks(marksheet.getTotalMarks() + subjectMark.getMark());
        });
        this.marksheetRepository.save(marksheet);
    }

    public List<Integer> findStudentClassIDs(int studentID) {
        return this.marksheetRepository.findDistinctClassIDsByStudentID(studentID);
    }


    public void rankMarksheets(int classID, int year, int term) {
        List<Marksheet> marksheetList = this.marksheetRepository.findByClassIDAndYearAndTermOrderByTotalMarksDesc(classID, year, term);

        int rank = 1;
        Marksheet previous = marksheetList.get(0);
        for (Marksheet marksheet : marksheetList) {
            if (previous.getTotalMarks() != marksheet.getTotalMarks()) {
                rank++;
            }
            marksheet.setRank(rank);
            previous = marksheet;
        }
        this.marksheetRepository.saveAll(marksheetList);
    }
}
