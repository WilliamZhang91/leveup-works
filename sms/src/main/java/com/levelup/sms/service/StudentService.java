package com.levelup.sms.service;

import com.levelup.sms.model.ProgressHistory;
import com.levelup.sms.model.Project;
import com.levelup.sms.model.Role;
import com.levelup.sms.model.Student;
import org.apache.http.auth.Credentials;

import java.util.List;

public interface StudentService {

    //Student
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
    //public Student getStudentById(int id);

    //Project
    public Project saveProject(Project project);
    public List<Project> getAllProjects();

    //Role
    public Role createNewRole(Role role);

    //ProgressHistory
    public ProgressHistory saveProgressHistory(ProgressHistory progressHistory);
    public List<ProgressHistory> getAllProgressHistory();
    public List<ProgressHistory> getProgressHistory();

}
