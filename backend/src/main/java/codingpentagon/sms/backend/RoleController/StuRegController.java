package codingpentagon.sms.backend.RoleController;


import RoleModel.StudentReg;
import codingpentagon.sms.backend.RoleRepo.StuRegRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/stu")
@CrossOrigin (origins = "http://localhost:4200")
public class StuRegController {

    @Autowired
    StuRegRepo stuRegRepo;

    @PostMapping("/regStu")
    public StudentReg register(@RequestBody StudentReg studentReg){

        return  stuRegRepo.save(studentReg);

    }

}
