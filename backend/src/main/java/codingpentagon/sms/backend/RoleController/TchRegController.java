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
    TchRegRepo tchRegRepo;   // Autowire the TchRegRepo dependency for accessing and manipulating TeacherReg entities in the database.

    @PostMapping("/regTch")
    public TeacherReg register(@RequestBody TeacherReg teachertReg){

               // Endpoint to register a teacher.
        // It takes a TeacherReg object in the request body.

        return  tchRegRepo.save(teachertReg);  // Save the provided TeacherReg object to the database using the tchRegRepo and return the saved object.

    }

    @GetMapping ("/regTchData/{fullName}")
    public Optional<TeacherReg> getStudentRegById(@PathVariable ("fullName") String fullName) {
        // Endpoint to retrieve a teacher's registration by their full name.
        // It takes the full name as a path variable.
        return tchRegRepo.findById(fullName);  // Retrieve the TeacherReg object from the database based on the provided full name using the tchRegRepo.
    }
    
}
