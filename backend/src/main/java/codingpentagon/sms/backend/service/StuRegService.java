package codingpentagon.sms.backend.service;


import RoleModel.StudentReg;
import codingpentagon.sms.backend.RoleRepo.StuRegRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StuRegService {

    @Autowired
    private StuRegRepo stuRegRepo; // Autowires an instance of StuRegRepo for database operations.

    public StudentReg save(StudentReg studentReg){
        return  stuRegRepo.save(studentReg);      // Saves the given StudentReg object to the database using the StuRegRepo and returns the saved object.
    }
}
