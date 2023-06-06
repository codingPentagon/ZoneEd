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

    @GetMapping("notices/{category}/{sclID}")
    public List<Notice> getNotices(@PathVariable String category, @PathVariable int sclID) {
        return this.noticeService.findNotices(category,sclID);
    }

    @GetMapping("notices/posted/{userID}")
    public List<Notice> getPostedNotices(@PathVariable int userID) {
        return this.noticeService.findPostedNotices(userID);
    }

    @PostMapping("notices/")
    public void createNotice(@RequestBody Notice notice) {
        this.noticeService.saveNotice(notice);
    }

    @DeleteMapping("notices/posted/{noticeIDs}")
    public void removeNotices(@PathVariable List<Integer> noticeIDs){
        this.noticeService.deleteNotices(noticeIDs);
    }
}
