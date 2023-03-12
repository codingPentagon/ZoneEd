package codingpentagon.sms.backend.controllers;

import codingpentagon.sms.backend.models.Mail;
import codingpentagon.sms.backend.repositories.MailRepository;
import codingpentagon.sms.backend.services.MailService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MailController {
    MailService mailService;

    public MailController(MailRepository mailRepo) {
        this.mailService = new MailService(mailRepo);
    }

    @GetMapping("mails/posted/senderID}")
    public List<Mail> getPostedNotices(@PathVariable int senderID) {
        return this.mailService.findPostedMail(senderID);
    }

    @PostMapping("mails/")
    public void createNotice(@RequestBody Mail mail) {
        this.mailService.saveMail(mail);
    }
}
