package com.levelup.sms.controller;

import com.levelup.sms.model.Message;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/account", produces = MediaType.APPLICATION_JSON_VALUE)
@CrossOrigin(origins = "*")
public class LoginController {

    @GetMapping("/public")
    public Message publicEndpoint() {
        return new Message("All good. You DO NOT need be authenticated to call public");
    }

    @GetMapping("/private")
    public Message privateEndpoint() {
        return new Message("All good. You can see this because you are authenticated");
    }

    @GetMapping("/private-scoped")
    public Message privateScopedEndpoint() {
        return new Message("All good. You can see this because you are authenticated with a Token granted the 'read:messages' scope");
    }
}
