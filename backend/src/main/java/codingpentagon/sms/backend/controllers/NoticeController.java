package codingpentagon.sms.backend.controllers;

import codingpentagon.sms.backend.models.Notice;
import codingpentagon.sms.backend.services.NoticeService;
import org.springframework.web.bind.annotation.*;
import codingpentagon.sms.backend.repositories.NoticeRepository;

import java.util.List;

@RestController
public class NoticeController {
    NoticeService noticeService;

    public NoticeController(NoticeRepository noticeRepo){
        this.noticeService = new NoticeService(noticeRepo);
    }

    @GetMapping()
    public List<Notice> getNotices(@PathVariable int userID){
        return this.noticeService.findNotices(userID);
    }

    @PostMapping()
    public void createNotice(@RequestBody Notice notice){
        this.noticeService.saveNotice(notice);
    }
}
