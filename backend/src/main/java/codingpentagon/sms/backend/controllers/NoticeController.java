package codingpentagon.sms.backend.controllers;

import codingpentagon.sms.backend.models.Notice;
import codingpentagon.sms.backend.services.NoticeService;
import org.springframework.web.bind.annotation.*;
import codingpentagon.sms.backend.repositories.NoticeRepository;

import java.util.List;

@RestController
public class NoticeController {
    NoticeService noticeService;

    public NoticeController(NoticeRepository noticeRepo) {
        this.noticeService = new NoticeService(noticeRepo);
    }

    @GetMapping("notices/{category}")
    public List<Notice> getNotices(@PathVariable String category) {
        return this.noticeService.findNotices(category);
    }

    @GetMapping("notices/posted/{userID}")
    public List<Notice> getPostedNotices(@PathVariable int userID) {
        return this.noticeService.findPostedNotices(userID);
    }

    @PostMapping("notices/")
    public void createNotice(@RequestBody Notice notice) {
        this.noticeService.saveNotice(notice);
    }
}
