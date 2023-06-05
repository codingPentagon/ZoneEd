package codingpentagon.sms.backend.services;

import codingpentagon.sms.backend.models.AcsGrantRequest;
import codingpentagon.sms.backend.repositories.AcsGrantRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Random;

@Service
public class AcsGrantService {
    private final AcsGrantRequestRepository acsGrantRequestRepository;

    @Autowired
    public AcsGrantService(AcsGrantRequestRepository acsGrantRequestRepository) {
        this.acsGrantRequestRepository = acsGrantRequestRepository;
    }

    public List<AcsGrantRequest> findAcsGrantRequests(int sclID) {
        return acsGrantRequestRepository.findBySclID(sclID);
    }

    public void saveAcsGrantRequest(AcsGrantRequest acsGrantRequest) {
        if (acsGrantRequest.getId() == 0) {
            acsGrantRequest.setId(new Random().nextInt(500));
        }
        acsGrantRequestRepository.save(acsGrantRequest);
    }
}
