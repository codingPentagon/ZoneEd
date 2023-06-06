package codingpentagon.sms.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import RoleModel.Stud_marks;
import codingpentagon.sms.backend.RoleRepo.MarksRepo;

@Service
@RestController
public class MarksService {
    private final MarksRepo marksRepo;




    @Autowired
    public MarksService(MarksRepo marksRepo){
        this.marksRepo=marksRepo;
    }

    @GetMapping("/getmarks")
    public List<Stud_marks> geStu_marks(){
        return marksRepo.findAll();
    }
}
