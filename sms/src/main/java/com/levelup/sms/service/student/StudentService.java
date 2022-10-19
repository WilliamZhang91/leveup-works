package com.levelup.sms.service.student;

import com.levelup.sms.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

public interface StudentService {

    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
    public ResponseEntity<Student> getStudentById(Integer id);

}
