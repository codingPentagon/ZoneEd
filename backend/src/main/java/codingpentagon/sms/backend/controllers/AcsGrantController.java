package codingpentagon.sms.backend.controllers;

import codingpentagon.sms.backend.models.AcsGrantRequest;
import codingpentagon.sms.backend.services.AcsGrantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AcsGrantController {
    private final AcsGrantService acsGrantService;

    @Autowired
    public AcsGrantController(AcsGrantService acsGrantService) {
        this.acsGrantService = acsGrantService;
    }

    @GetMapping("acs-grant/requests/{sclID}")
    public List<AcsGrantRequest> fetchAcsGrantRequests(@PathVariable int sclID) {
        return acsGrantService.findAcsGrantRequests(sclID);
    }

    @PostMapping("acs-grant/requests/")
    public void addAcsGrantRequest(@RequestBody AcsGrantRequest acsGrantRequest) {
        acsGrantService.saveAcsGrantRequest(acsGrantRequest);
    }
}
