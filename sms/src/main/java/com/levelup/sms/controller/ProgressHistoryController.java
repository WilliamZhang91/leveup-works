package com.levelup.sms.controller;

import com.levelup.sms.message.ResponseMessage;
import com.levelup.sms.model.ProgressHistory;
import com.levelup.sms.service.progress.ProgressHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/students", produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin(origins = "*")
public class ProgressHistoryController {

    @Autowired
    private ProgressHistoryService progressHistoryService;

    @GetMapping("/progress_history")
    public List<ProgressHistory> getAllProgressHistory() {
        return progressHistoryService.getProgressHistory();
    }

    @PostMapping(value = "/submit", consumes = {
            MediaType.APPLICATION_JSON_VALUE,
            MediaType.APPLICATION_XML_VALUE
    })
    public ResponseEntity<ResponseMessage> submitFile(
            @RequestParam("student_id") Integer student,
            @RequestParam("project_id") Integer project)
    {
        String message = "";
        try {
            progressHistoryService.saveProgressHistory(student, project);
            message = "Uploaded file successfully";
            return ResponseEntity.status(HttpStatus.OK).
                    body(new ResponseMessage(message));
        } catch (Exception e) {
            message = "File could not be uploaded";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).
                    body(new ResponseMessage(message));
        }
    }
}
