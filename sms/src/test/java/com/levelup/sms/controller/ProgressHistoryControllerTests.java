package com.levelup.sms.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.levelup.sms.model.*;
import com.levelup.sms.repository.ProgressHistoryRepository;
import com.levelup.sms.service.progress.ProgressHistoryServiceImplementation;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.security.web.csrf.HttpSessionCsrfTokenRepository;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@AutoConfigureMockMvc(addFilters = false)
@EnableWebMvc
@WebMvcTest(ProgressHistoryController.class)
public class ProgressHistoryControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    ProgressHistoryRepository progressHistoryRepository;

    @MockBean
    ProgressHistoryServiceImplementation progressHistoryServiceImplementation;

    @Test
    public void shouldReturnListOfProgressHistory() throws Exception {
        List<ProgressHistory> progressHistories = new ArrayList<>();
        ProgressHistoryID id1 = new ProgressHistoryID(1,1);
        ProgressHistoryID id2 = new ProgressHistoryID(1,2);
        progressHistories.add(new ProgressHistory(id1, "2022-10-7", "2022-10-20"));
        progressHistories.add(new ProgressHistory(id2, "2022-10-18", "2022-10-20"));
        String url = "/students/progress_history";
        when(progressHistoryServiceImplementation.getProgressHistory()).thenReturn(progressHistories);

        mockMvc.perform(get(url)
                .content(objectMapper.writeValueAsString(progressHistories)))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.size()", is(2)))
                .andExpect(jsonPath("$.[0].id.student_id", is(1)))
                .andExpect(jsonPath("$.[0].id.project_id", is(1)))
                .andExpect(jsonPath("$.[1].id.student_id", is(1)))
                .andExpect(jsonPath("$.[1].id.project_id", is(2)))
                .andDo(print());
    }

    @Test
    public void ShouldPostCredentialsOnSubmit() throws Exception {

        String TOKEN_ATTR_NAME = "org.springframework.security.web.csrf.HttpSessionCsrfTokenRepository.CSRF_TOKEN";
        HttpSessionCsrfTokenRepository httpSessionCsrfTokenRepository = new HttpSessionCsrfTokenRepository();
        CsrfToken csrfToken = httpSessionCsrfTokenRepository.generateToken(new MockHttpServletRequest());
        int student_id = 1;
        int project_id = 1;
        String date = "2022-10-19";
        String url = "/students/submit?student_id=" + student_id + "&project_id=" + project_id;

        mockMvc.perform(post(url)
                        .sessionAttr(TOKEN_ATTR_NAME, csrfToken)
                        .param(csrfToken.getParameterName(), csrfToken.getToken()));

        ProgressHistoryID progressHistoryID = new ProgressHistoryID(student_id, project_id);
        ProgressHistory progressHistory = new ProgressHistory();


        when(progressHistoryServiceImplementation.saveProgressHistory(1, 1))
                .thenReturn(progressHistory);

        mockMvc.perform(post(url)
                        .contentType(MediaType.APPLICATION_JSON)
                        .accept(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(progressHistory)))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON));
    }

}
