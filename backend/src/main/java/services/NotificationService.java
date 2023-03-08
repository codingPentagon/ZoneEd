package services;

import models.Notification;
import org.springframework.stereotype.Service;
import repositories.NotificationRepository;

import java.util.List;
import java.util.Random;

@Service
public class NotificationService {

    NotificationRepository notificationRepository;

    public NotificationService(NotificationRepository notifRepo) {
        this.notificationRepository = notifRepo;
    }

    public List<Notification> findNotifications(int userID) {
        return this.notificationRepository.findByReceiverID(userID);
    }

    public void saveNotification(Notification notification) {
        notification.setId(new Random().nextInt(3000));
        this.notificationRepository.save(notification);
    }
}