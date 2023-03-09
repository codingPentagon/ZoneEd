package codingpentagon.sms.backend.controllers;

import codingpentagon.sms.backend.models.Notification;
import org.springframework.web.bind.annotation.*;
import codingpentagon.sms.backend.repositories.NotificationRepository;
import codingpentagon.sms.backend.services.NotificationService;

import java.util.List;

@RestController
public class NotificationController {
    NotificationService notificationService;
    public NotificationController(NotificationRepository notifRepo){
        this.notificationService = new NotificationService(notifRepo);
    }

    @GetMapping("notifications/{userID}")
    public List<Notification> getNotifications(@PathVariable int userID){
        return this.notificationService.findNotifications(userID);
    }

    @PostMapping("notifications/")
    public void createNotification(@RequestBody Notification notification){
        this.notificationService.saveNotification(notification);
    }
    @PutMapping("notifications/")
    public void updateNotification(@RequestBody Notification notification ){
        this.notificationService.updateNotification(notification);
    }
}
