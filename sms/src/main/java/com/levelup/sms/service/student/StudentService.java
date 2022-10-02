package com.levelup.sms.service.student;

import com.levelup.sms.model.Student;

import java.util.List;

public interface StudentService {

    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
    //public Student getStudentById(int id);

}
