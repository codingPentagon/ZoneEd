package codingpentagon.sms.backend.RoleController;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import RoleModel.StudentReg;
import RoleModel.TeacherReg;
import codingpentagon.sms.backend.RoleRepo.StuRegRepo;
import codingpentagon.sms.backend.RoleRepo.TchRegRepo;

@RestController
@RequestMapping("api/v1/")
@CrossOrigin  (origins = "http://localhost:4200")

public class loginController {
    @Autowired
    private StuRegRepo stuRegRepo;

    @Autowired
    private TchRegRepo tchRegRepo;

    @GetMapping("/login/{fullName}")
    public Optional<StudentReg> getStudentRegById(@PathVariable ("fullName") String fullName) {
        return stuRegRepo.findById(fullName);
    }
    // @GetMapping("/regStuData/{fullName}")
    // public Optional<TeacherReg> getTeacherRegById(@PathVariable ("fullName") String fullName) {
    //     return tchRegRepo.findById(fullName);
    // }
}
