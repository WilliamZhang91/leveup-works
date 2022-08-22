package com.levelup.sms.controller;

import com.levelup.sms.model.Role;
import com.levelup.sms.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/role")
@CrossOrigin
public class RoleController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/new_role")
    public String createNewRole(@RequestBody Role role) {
        studentService.createNewRole(role);
        return "New Role has been added";
    }
}
