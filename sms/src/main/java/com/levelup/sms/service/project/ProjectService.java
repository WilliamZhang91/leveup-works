package com.levelup.sms.service.project;

import com.levelup.sms.model.Project;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ProjectService {
    public Project saveProject(Project project);
    public List<Project> getAllProjects();
    public ResponseEntity<Project> getProjectById(Integer id);
}
