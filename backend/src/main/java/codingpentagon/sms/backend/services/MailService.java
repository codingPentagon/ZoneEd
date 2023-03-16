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

    public void saveMail(Mail mail) {
        mail.setId(new Random().nextInt(6000));
        this.mailRepository.save(mail);
    }

    public List<Mail> findInboxMail(int userID) {
        return this.mailRepository.findByReceiverID(userID);
    }

    public List<Mail> findSentboxMail(int userID) {
        return this.mailRepository.findBySenderID(userID);
    }
}
