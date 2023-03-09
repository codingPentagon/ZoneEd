package codingpentagon.sms.backend.services;

import codingpentagon.sms.backend.models.Notice;
import codingpentagon.sms.backend.repositories.NoticeRepository;

import java.util.List;
import java.util.Random;

public class NoticeService {
    NoticeRepository noticeRepository;

    public NoticeService(NoticeRepository noticeRepo) {
        this.noticeRepository = noticeRepo;
    }
    public List<Notice> findNotices(int userID){
        return this.noticeRepository.findBySenderID(userID);
    }

    public void saveNotice(Notice notice){
        notice.setId(new Random().nextInt(4000));
        this.noticeRepository.save(notice);
    }
}

