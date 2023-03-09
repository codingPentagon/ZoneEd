package codingpentagon.sms.backend.repositories;

import codingpentagon.sms.backend.models.Notice;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface NoticeRepository extends MongoRepository<Notice,Integer> {
    List<Notice> findBySenderID(int userID);
    List<Notice> findByReceiverCategoriesContainsIgnoreCase(String category);


}
