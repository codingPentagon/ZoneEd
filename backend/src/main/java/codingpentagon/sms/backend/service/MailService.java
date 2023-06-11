package codingpentagon.sms.backend.service;

import RoleModel.AuthUser;


import javax.mail.MessagingException;

public interface MailService {
        void sendResetInitMail(AuthUser user) throws MessagingException;

    
}
