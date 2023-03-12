package codingpentagon.sms.backend.services;

import codingpentagon.sms.backend.models.Mail;
import codingpentagon.sms.backend.repositories.MailRepository;

import java.util.List;
import java.util.Random;

public class MailService {

    MailRepository mailRepository;

    public MailService(MailRepository mailRepo) {
        this.mailRepository = mailRepo;
    }
    public List<Mail> findPostedMail(int senderID) {
        return this.mailRepository.findBySenderID(senderID);
    }
    public void saveMail(Mail mail) {
        mail.setId(new Random().nextInt(6000));
        this.mailRepository.save(mail);
    }
}
