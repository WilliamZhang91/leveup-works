package com.levelup.sms.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Role {
    @Id
    private String role_name;
    private String role_description;

    public String getRoleName() {
        return role_name;
    }

    public String getRoleDescription() {
        return role_description;
    }
}
