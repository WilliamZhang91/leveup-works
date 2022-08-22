package com.levelup.sms.controller;

import com.levelup.sms.model.Project;
import com.levelup.sms.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/project")
@CrossOrigin(origins = "*")
public class ProjectController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add_project")
    public String add(@RequestBody Project project) {
        studentService.saveProject(project);
        return "New Project has been added";
    }

    @GetMapping("/all_projects")
    public List<Project> getAllProjects() {
        return studentService.getAllProjects();
    }

}
