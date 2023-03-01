package codingpentagon.sms.backend.service;


import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import codingpentagon.sms.backend.userRepo.UserRepo;


@Service
public class UserServiceImpl implements UserService{

@Autowired
private UserRepo userRepo;

    @Override
    public String save(User user) {
      return userRepo.save(user);  }


    }
    

