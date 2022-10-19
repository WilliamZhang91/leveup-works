package com.levelup.sms.controller;

import com.levelup.sms.model.Role;
import com.levelup.sms.service.role.RoleServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/role")
@CrossOrigin
public class RoleController {
    @Autowired
    private RoleServiceImplementation roleServiceImplementation;

    @PostMapping("/new_role")
    public String createNewRole(@RequestBody Role role) {
        roleServiceImplementation.createNewRole(role);
        return "New Role has been added";
    }
}
