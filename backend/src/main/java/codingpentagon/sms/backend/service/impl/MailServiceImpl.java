package codingpentagon.sms.backend.service.impl;

import java.util.HashMap;
import java.util.Map;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import RoleModel.AuthUser;
import codingpentagon.sms.backend.service.MailService;
import codingpentagon.sms.backend.shared.GmailSender;
import lombok.var;

import static codingpentagon.sms.backend.shared.Constant.LANG_KEY;


@Service

public class MailServiceImpl implements MailService{

        @Value("${mail.reset-password-url}")
    private String resetPasswordUrl;

    @Autowired
    private GmailSender gmailSender;

    @Override
    public void sendResetInitMail(AuthUser user) throws MessagingException {

        var url = resetPasswordUrl + user.getResetPasswordCode();
        System.out.println("url : " + url);

        Map<String, Object> props = new HashMap<>();
        props.put("salutation_name", user.getFullName());
        props.put("reset_url", url);
        props.put("reset_key", user.getResetPasswordCode());
        gmailSender.sendMail(props, user.getEmail(),
                "passwordResetEmail", "email.reset.title", LANG_KEY);
    }
    
}
