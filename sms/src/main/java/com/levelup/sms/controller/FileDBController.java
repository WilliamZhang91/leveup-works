package com.levelup.sms.controller;

import com.levelup.sms.message.ResponseMessage;
import com.levelup.sms.service.StudentService;
import com.levelup.sms.service.StudentServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Controller
@RequestMapping("/project")
@CrossOrigin(origins = "*")
public class FileDBController {

    @Autowired
    private StudentServiceImplementation studentServiceImplementation;

    @PostMapping("/submit")
    public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file)  {
        String message = "";
        try {
            studentServiceImplementation.store(file);
            message = "Uploaded the file successfully: " + file.getOriginalFilename();
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
        } catch (Exception e) {
            message = "The file " + file.getOriginalFilename() + " could not be uploaded";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }
    }
}
