package com.levelup.sms.controller;

import com.levelup.sms.model.Project;
import com.levelup.sms.service.project.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/project")
@CrossOrigin(origins = "*")
public class ProjectController {
    @Autowired
    private ProjectService projectService;

    @PostMapping("/add_project")
    public String add(@RequestBody Project project) {
        projectService.saveProject(project);
        return "New Project has been added";
    }

    @GetMapping("/all_projects")
    public List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    @GetMapping("{projectId}")
    public ResponseEntity<Project> getProjectById(@PathVariable("projectId") Integer projectId) {
        return projectService.getProjectById(projectId);
    }

}
