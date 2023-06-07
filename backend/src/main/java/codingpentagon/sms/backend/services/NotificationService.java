package codingpentagon.sms.backend.services;

import codingpentagon.sms.backend.models.Notification;
import codingpentagon.sms.backend.models.NotificationToken;
import codingpentagon.sms.backend.repositories.NotificationTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import codingpentagon.sms.backend.repositories.NotificationRepository;

import java.util.Arrays;
import java.util.List;
import java.util.Random;

@Service
public class NotificationService {

    NotificationRepository notificationRepository;
    NotificationTokenRepository notificationTokenRepository;

    @Autowired
    public NotificationService(NotificationRepository notifRepo, NotificationTokenRepository notifTokenRepo) {
        this.notificationRepository = notifRepo;
        this.notificationTokenRepository = notifTokenRepo;
    }

    public List<Notification> findNotifications(int userID) {
        return this.notificationRepository.findByReceiverID(userID);
    }

    public void saveNotification(Notification notification) {
        notification.setId(new Random().nextInt(3000));
        this.notificationRepository.save(notification);
    }

    public void updateNotification(Notification notification) {
        this.notificationRepository.save(notification);
    }

    public void saveToken(NotificationToken token) {
        NotificationToken notifToken = this.notificationTokenRepository.findByUserID(token.getUserID());
        if (notifToken != null) {
            if (Arrays.toString(notifToken.getTokens()).contains(token.getTokens()[0])) {
                return;
            }
            String[] currentTokens = notifToken.getTokens();
            String[] newTokens = Arrays.copyOf(currentTokens, currentTokens.length + 1);
            newTokens[newTokens.length - 1] = token.getTokens()[0];
            notifToken.setTokens(newTokens);
            this.notificationTokenRepository.save(notifToken);
        }
        else {
            token.setId(new Random().nextInt(3000));
            this.notificationTokenRepository.save(token);
        }
    }
}