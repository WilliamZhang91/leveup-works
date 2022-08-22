package com.levelup.sms.controller;

import com.levelup.sms.model.ProgressHistory;
import com.levelup.sms.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/students", produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin(origins = "*")
public class ProgressHistoryController {
    @Autowired
    private StudentService studentService;

    @GetMapping("/progress_history")
    public List<ProgressHistory> getProgressHistory() {
        return studentService.getProgressHistory();
    }

}
