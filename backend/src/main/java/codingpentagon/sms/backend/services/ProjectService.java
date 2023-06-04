package codingpentagon.sms.backend.services;

import codingpentagon.sms.backend.models.Project;
import codingpentagon.sms.backend.models.Proposal;
import codingpentagon.sms.backend.repositories.ProjectRepository;
import codingpentagon.sms.backend.repositories.ProposalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

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
        if (proposal.getId() == 0) {
            proposal.setId(new Random().nextInt(5000));
        }
        this.proposalRepository.save(proposal);
    }

    public void saveProject(Project project) {
        if (project.getId() == 0) {
            project.setId(new Random().nextInt(50000));
        }
        this.projectRepository.save(project);
    }
}
