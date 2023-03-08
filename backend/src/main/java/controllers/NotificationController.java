package controllers;

import models.Notification;
import org.springframework.web.bind.annotation.*;
import repositories.NotificationRepository;
import services.NotificationService;

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
}
