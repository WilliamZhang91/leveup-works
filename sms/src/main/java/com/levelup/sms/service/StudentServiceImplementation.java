package com.levelup.sms.service;

import com.levelup.sms.model.ProgressHistory;
import com.levelup.sms.model.Project;
import com.levelup.sms.model.Role;
import com.levelup.sms.model.Student;
import com.levelup.sms.repository.ProgressHistoryRepository;
import com.levelup.sms.repository.ProjectRepository;
import com.levelup.sms.repository.RoleRepository;
import com.levelup.sms.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.w3c.dom.ls.LSProgressEvent;

import java.util.List;

@Service
public class StudentServiceImplementation implements StudentService{

    //<Student> ------------------------------------------------------
    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    //<Project> ------------------------------------------------------
    @Autowired
    private ProjectRepository projectRepository;

    @Override
    public Project saveProject(Project project) {
        return projectRepository.save(project);
    }

    @Override
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    //<ProgressHistory> ------------------------------------------------------
    @Autowired
    private ProgressHistoryRepository progressHistoryRepository;

    @Override
    public ProgressHistory saveProgressHistory(ProgressHistory progressHistory) {
        return progressHistoryRepository.save(progressHistory);
    }

    @Override
    public List<ProgressHistory> getAllProgressHistory() {
        return progressHistoryRepository.findAll();
    }

    @Override
    public List<ProgressHistory> getProgressHistory() {
        var history = (List<ProgressHistory>) progressHistoryRepository.getProgressHistory();
        return history;
    }

    //<Role> ------------------------------------------------------
    @Autowired
    private RoleRepository roleRepository;

    public Role createNewRole(Role role) {
        return roleRepository.save(role);
    }
}
