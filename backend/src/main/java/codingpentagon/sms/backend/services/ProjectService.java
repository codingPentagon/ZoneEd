package codingpentagon.sms.backend.services;

import codingpentagon.sms.backend.models.Project;
import codingpentagon.sms.backend.models.Proposal;
import codingpentagon.sms.backend.repositories.ProjectRepository;
import codingpentagon.sms.backend.repositories.ProposalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {
    ProposalRepository proposalRepository;
    ProjectRepository projectRepository;

    @Autowired
    public ProjectService(ProposalRepository proposalRepository,ProjectRepository projectRepository) {
        this.proposalRepository = proposalRepository;
        this.projectRepository = projectRepository;
    }


    public List<Proposal> findProposals(int sclID) {
        return this.proposalRepository.findBySchoolID(sclID);
    }

    public List<Project> findProjects(int sclID) {
        return this.projectRepository.findBySchoolID(sclID);
    }

    public void saveProposal(Proposal proposal) {
        this.proposalRepository.save(proposal);
    }
}
