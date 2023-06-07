package codingpentagon.sms.backend.controllers;

import codingpentagon.sms.backend.models.Notification;
import codingpentagon.sms.backend.models.NotificationToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import codingpentagon.sms.backend.services.NotificationService;

import java.util.List;

@RestController
public class NotificationController {
    NotificationService notificationService;
    @Autowired
    public NotificationController(NotificationService notifService){
        this.notificationService = notifService;
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

    @PostMapping("notifications/tokens")
    public void addToken(@RequestBody NotificationToken token){
        this.notificationService.saveToken(token);
    }

    @GetMapping("notifications/tokens/{userID}")
    public NotificationToken fetchTokenSet(@PathVariable int userID){
        return this.notificationService.findTokenSet(userID);
    }
}
