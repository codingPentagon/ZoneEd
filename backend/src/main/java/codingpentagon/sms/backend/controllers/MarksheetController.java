package codingpentagon.sms.backend.controllers;
import codingpentagon.sms.backend.models.Marksheet;
import codingpentagon.sms.backend.services.MarksheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MarksheetController{
    private final MarksheetService marksheetService;
    @Autowired
    public MarksheetController(MarksheetService marksheetService) {
        this.marksheetService = marksheetService;
    }

    @GetMapping("marksheets/{classID}/{year}/{term}")
    public List<Marksheet> fetchMarksheets(@PathVariable int classID, @PathVariable int year, @PathVariable int term){
        return this.marksheetService.findMarksheets(classID,year,term);
    }

    @PostMapping("marksheets/")
    public void addMarksheet(@RequestBody Marksheet marksheet){
        this.marksheetService.saveMarksheet(marksheet);
    }

    @GetMapping("marksheets/classids/{studentID}")
    public List<Integer> fetchStudentClassIDs(@PathVariable int studentID){
        return this.marksheetService.findStudentClassIDs(studentID);
    }

    @GetMapping("marksheets/rank/{classID}/{year}/{term}")
    public void rankMarksheets(@PathVariable int classID, @PathVariable int year, @PathVariable int term){
        this.marksheetService.rankMarksheets(classID,year,term);
    }

    @GetMapping("marksheets/student/{studentID}")
    public List<Marksheet> fetchStudentMarksheets(@PathVariable int studentID){
        return this.marksheetService.findStudentMarksheets(studentID);
    }
}
