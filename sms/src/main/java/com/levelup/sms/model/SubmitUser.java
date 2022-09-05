package com.levelup.sms.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SubmitUser {
    @JsonProperty("project_id")
    private Integer project_id;

    @JsonProperty("student_id")
    private Integer student_id;

    public SubmitUser() {}

    public SubmitUser(Integer project_id, Integer student_id) {
        this.project_id = project_id;
        this.student_id = student_id;
    }

    public void setProject_id(Integer project_id) {
        this.project_id = project_id;
    }

    public void setStudent_id(Integer student_id) {
        this.student_id = student_id;
    }

    public Integer getProject_id() {
        return project_id;
    }

    public Integer getStudent_id() {
        return student_id;
    }
}
