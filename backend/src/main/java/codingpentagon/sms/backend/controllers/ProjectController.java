package codingpentagon.sms.backend.controllers;


import codingpentagon.sms.backend.models.Project;
import codingpentagon.sms.backend.models.Proposal;
import codingpentagon.sms.backend.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProjectController {
    ProjectService projectService;

    @Autowired
    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping("projects/proposals/{sclID}")
    public List<Proposal> fetchProposals(@PathVariable int sclID){
      return this.projectService.findProposals(sclID);
    }

    @GetMapping("projects/{sclID}")
    public List<Project> fetchProjects(@PathVariable int sclID){
        return this.projectService.findProjects(sclID);
    }

}
