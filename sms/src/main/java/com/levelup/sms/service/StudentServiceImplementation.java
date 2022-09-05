package com.levelup.sms.service;

import com.levelup.sms.model.*;
import com.levelup.sms.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.util.StringUtils;

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

    //<FileDB> ------------------------------------------------------

    @Autowired
    private FileDBRepository fileDBRepository;

    public FileDB store(MultipartFile file) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        LocalDateTime myDateObj = LocalDateTime.now();
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
        String formattedDate = myDateObj.format(myFormatObj);
        FileDB fileDB = new FileDB(fileName, file.getContentType(), file.getBytes(), formattedDate);

        return fileDBRepository.save(fileDB);
    }

//    public FileDB addID (ProgressHistoryID progressHistoryID) {
//
//    }

//    public FileDB getSubmission(String id) {
//        return fileDBRepository.findById(id).get();
//    }

    public Stream<FileDB> getAllSubmissions() {
        return fileDBRepository.findAll().stream();
    }

}
