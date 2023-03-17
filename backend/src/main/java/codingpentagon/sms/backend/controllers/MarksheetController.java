package codingpentagon.sms.backend.controllers;
import codingpentagon.sms.backend.models.Marksheet;
import codingpentagon.sms.backend.services.MarksheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
public class MarksheetController{
    private final MarksheetService marksheetService;
    @Autowired
    public MarksheetController(MarksheetService marksheetService) {
        this.marksheetService = marksheetService;
    }

    @GetMapping("marksheet/{classID}/{year}/{term}")
    public List<Marksheet> fetchMarksheets(@PathVariable int classID, @PathVariable int year, @PathVariable int term){
        return this.marksheetService.findMarksheets(classID,year,term);
    }

    @PostMapping("marksheet/")
    public void addMarksheet(@RequestBody Marksheet marksheet){
        this.marksheetService.addMarksheet(marksheet);
    }



}
