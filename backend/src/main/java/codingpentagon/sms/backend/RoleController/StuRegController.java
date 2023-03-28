package codingpentagon.sms.backend.RoleController;


import RoleModel.StudentReg;
import codingpentagon.sms.backend.RoleRepo.StuRegRepo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/stu")
@CrossOrigin (origins = "http://localhost:4200")
public class StuRegController {

    @Autowired
    private StuRegRepo stuRegRepo;

    @PostMapping("/regStu")
    public StudentReg register(@RequestBody StudentReg studentReg){

       return stuRegRepo.save(studentReg);

    }
    @GetMapping("/regStuData")
    public List<StudentReg> getStudent(){
        return stuRegRepo.findAll();
    }

    // @GetMapping("/regStuData/{fullName}")
    // public Optional<StudentReg> getStudentRegById(@PathVariable ("fullName") String fullName) {
    //     return stuRegRepo.findById(fullName);
    // }
    
}
