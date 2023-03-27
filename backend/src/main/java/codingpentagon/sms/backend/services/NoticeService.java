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
    public List<Notice> findNotices(String category) {
        return this.noticeRepository.findByReceiverCategoriesContainsIgnoreCaseOrderByDateDesc(category);
    }

    public List<Notice> findPostedNotices(int userID) {
        return this.noticeRepository.findBySenderIDOrderByDateDesc(userID);
    }

    public void saveNotice(Notice notice) {
        notice.setId(new Random().nextInt(4000));
        this.noticeRepository.save(notice);
    }

    public void deleteNotices(List<Integer> noticeIDs) {
        this.noticeRepository.deleteAllById(noticeIDs);
    }
}

