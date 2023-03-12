package codingpentagon.sms.backend.repositories;

import codingpentagon.sms.backend.models.Mail;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface MailRepository extends MongoRepository<Mail, Integer> {
    List<Mail> findBySenderID(int SenderID);

}
