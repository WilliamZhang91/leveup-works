package com.levelup.sms.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.levelup.sms.model.Project;
import com.levelup.sms.repository.ProjectRepository;
import com.levelup.sms.service.project.ProjectServiceImplementation;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@AutoConfigureMockMvc(addFilters = false) //bootstraps security without loading any filters
@EnableWebMvc
@WebMvcTest(ProjectController.class)
public class ProjectControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    ProjectRepository projectRepository;

    @MockBean
    ProjectServiceImplementation projectServiceImplementation;

    private String allProjectsURL = "/project/all_projects";
    private String projectURL = "/project/{projectId}";

    @Test
    public void ShouldReturnListOfProjects() throws Exception {
        List <Project> projects = new ArrayList<>();
        projects.add(new Project(1, "chatbot", "", "beginner", "free", "", "", "computer_science", "Introduction", "/images/projects/project1.png"));
        projects.add(new Project(2, "animation", "", "beginner", "free", "", "", "maths", "My Birthday", "/images/projects/project2.png"));

        when(projectServiceImplementation.getAllProjects()).thenReturn(projects);

        mockMvc.perform(get(allProjectsURL)
                .content(objectMapper.writeValueAsString(projects)))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.size()", is(2)))
                .andDo(print());
    }
}
