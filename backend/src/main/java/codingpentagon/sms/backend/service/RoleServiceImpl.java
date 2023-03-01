package codingpentagon.sms.backend.service;


import RoleModel.Role;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import codingpentagon.sms.backend.RoleRepo.RoleRepo;


@Service
public abstract class RoleServiceImpl implements RoleService {

@Autowired
private RoleRepo roleRepo;


  //  @Override
    //public String save(User user) {
      //  return null;
  //  }

    @Override
    public Role save(Role role) {
        return roleRepo.save(role);
    }
}
    

