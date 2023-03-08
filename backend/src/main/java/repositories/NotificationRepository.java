package repositories;

import models.Notification;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface NotificationRepository extends MongoRepository<Notification,Integer> {
    List<Notification> findByReceiverID(int userID);

}
