package codingpentagon.sms.backend.RoleController;

import RoleModel.TeacherReg;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import codingpentagon.sms.backend.RoleRepo.TchRegRepo;

@RestController
@RequestMapping("api/v1/tch")
@CrossOrigin (origins = "http://localhost:4200")



public class TchRegController {
    @Autowired
    TchRegRepo tchRegRepo;

    @PostMapping("/regTch")
    public TeacherReg register(@RequestBody TeacherReg teachertReg){

        return  tchRegRepo.save(teachertReg);

    }

    @GetMapping ("/regTchData/{fullName}")
    public Optional<TeacherReg> getStudentRegById(@PathVariable ("fullName") String fullName) {
        return tchRegRepo.findById(fullName);
    }
    
}
