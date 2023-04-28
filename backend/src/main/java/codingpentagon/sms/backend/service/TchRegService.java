package codingpentagon.sms.backend.service;



import RoleModel.TeacherReg;

import codingpentagon.sms.backend.RoleRepo.TchRegRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TchRegService {

    @Autowired
    private TchRegRepo tchRegRepo;

    public TeacherReg save(TeacherReg teacherReg){
        return  tchRegRepo.save(teacherReg);        // Saves the given TeacherReg object to the database using the TeacherReg and returns the saved object.
    }
}
 

