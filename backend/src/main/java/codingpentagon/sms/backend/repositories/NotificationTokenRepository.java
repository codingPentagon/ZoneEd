package codingpentagon.sms.backend.repositories;

import codingpentagon.sms.backend.models.NotificationToken;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface NotificationTokenRepository extends MongoRepository<NotificationToken, Integer> {
    NotificationToken findByUserID(int userID);
}
