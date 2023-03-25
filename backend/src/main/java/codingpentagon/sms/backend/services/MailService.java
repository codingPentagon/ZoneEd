package codingpentagon.sms.backend.services;

import codingpentagon.sms.backend.models.Mail;
import codingpentagon.sms.backend.repositories.MailRepository;

import java.util.List;
import java.util.Optional;
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
        return this.mailRepository.findByReceiverIDOrderByDateDesc(userID);
    }

    public List<Mail> findSentboxMail(int userID) {
        return this.mailRepository.findBySenderIDOrderByDateDesc(userID);
    }


    public void updateAsRead(int mailID) {
        Optional<Mail> mail = this.mailRepository.findById(mailID);
        mail.ifPresent(theMail -> {
            theMail.setIsRead(true);
            this.mailRepository.save(theMail);
        });
    }

    public void removeMails(int[] mailIDs) {
        for (int id:mailIDs) {
            this.mailRepository.deleteById(id);
        }
    }
}
