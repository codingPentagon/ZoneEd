package codingpentagon.sms.backend.repositories;

import codingpentagon.sms.backend.models.Proposal;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ProposalRepository extends MongoRepository<Proposal,Integer> {
    List<Proposal> findBySchoolID(int sclID);
}
