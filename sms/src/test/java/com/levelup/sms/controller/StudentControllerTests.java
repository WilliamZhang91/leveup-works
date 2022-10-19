package com.levelup.sms.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.levelup.sms.model.Student;
import com.levelup.sms.repository.StudentRepository;
import com.levelup.sms.service.student.StudentServiceImplementation;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@AutoConfigureMockMvc
@EnableWebMvc
@WebMvcTest(StudentController.class)
public class StudentControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    StudentRepository studentRepository;

    @MockBean
    StudentServiceImplementation studentServiceImplementation;

    private String allStudentsURL = "/student/all_students";
    private String studentURL = "/student/{studentId}";

    @Test
    public void shouldRejectGetAllStudentsWhenUnauthorised() throws Exception{

        mockMvc.perform(get(allStudentsURL))
                .andDo(print())
                .andExpect(status().isUnauthorized())
                .andReturn();
    }

    @Test
    @WithMockUser(username = "testUser", authorities = {"SCOPE_read:teacher"}) //need to hide roles
    public void shouldReturnListOfStudentsWhenAuthorised() throws Exception {
        List<Student> students = new ArrayList<>();
        students.add(new Student(1, "john doe", "johndoe@email.com", "Something primary school", "", 1, 1234567, 1));
        students.add(new Student(2, "jane doe", "janedoe@email.com", "Something primary school", "", 1, 7654321, 1));

        when(studentServiceImplementation.getAllStudents()).thenReturn(students);

        mockMvc.perform(get(allStudentsURL)
                .content(objectMapper.writeValueAsString(students)))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.size()", is(2)))
                .andDo(print());
    }

    @Test
    public void shouldReturnStudentNotFound() throws Exception {
        Student student = new Student(2, "jane doe", "janedoe@email.com", "Something primary school", "", 1, 7654321, 1);
        Integer studentId = 1;

        when(studentServiceImplementation.getStudentById(studentId))
                .thenReturn(new ResponseEntity<>(HttpStatus.NOT_FOUND));

        mockMvc.perform(get(studentURL, studentId))
                .andExpect(status().is4xxClientError())
                .andDo(print());
    }

    @Test
    @WithMockUser(username = "testUser", authorities = {"SCOPE_read:student"})
    public void shouldReturnAStudentWhenAuthorised() throws Exception {
        Student student = new Student(2, "jane doe", "janedoe@email.com", "Something primary school", "", 1, 7654321, 1);
        Integer studentId = 2;

//        when(studentServiceImplementation.getStudentById(2)).thenReturn(student);
    }


}
