package codingpentagon.sms.backend.controllers;

import codingpentagon.sms.backend.models.Mail;
import codingpentagon.sms.backend.repositories.MailRepository;
import codingpentagon.sms.backend.services.MailService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MailController {
    MailService mailService;

    public MailController(MailRepository mailRepo)
    {
        this.mailService = new MailService(mailRepo);
    }

    @GetMapping("mails/inbox/{userID}")
    public List<Mail> getInboxMails(@PathVariable int userID) {
        return this.mailService.findInboxMail(userID);
    }
    @GetMapping("mails/sentbox/{userID}")
    public List<Mail> getSentboxMails(@PathVariable int userID) {
        return this.mailService.findSentboxMail(userID);
    }

    @PostMapping("mails/")
    public void createMail(@RequestBody Mail mail) {
        this.mailService.saveMail(mail);
    }

    @PatchMapping("mails/")
    public void patchAsRead(@RequestBody int mailID){
        this.mailService.updateAsRead(mailID);
    }


}
