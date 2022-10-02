package com.levelup.sms.service.project;

import com.levelup.sms.model.Project;

import java.util.List;

public interface ProjectService {
    //Project
    public Project saveProject(Project project);
    public List<Project> getAllProjects();
}
