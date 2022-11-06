package com.levelup.sms.repository;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.levelup.sms.controller.StudentController;
import com.levelup.sms.service.student.StudentServiceImplementation;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@AutoConfigureMockMvc
@EnableWebMvc
@WebMvcTest(StudentController.class)
public class StudentRepositoryTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private StudentRepository studentRepository;

    @MockBean
    StudentServiceImplementation studentServiceImplementation;

    @BeforeEach
    void setup(){
        studentRepository.deleteAll();
    }

    @Test
    @WithMockUser(username = "testUser", authorities = {"SCOPE_read:student"})
    public void createStudentTest() throws Exception {

    }


}
