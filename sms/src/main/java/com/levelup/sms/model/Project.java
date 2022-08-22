package com.levelup.sms.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer project_id;
    private String activity_type;
    private String year;
    private String course;
    private String subscription;
    private String instructions;
    private String video;
    private String subject_matter1;
    private String subject_matter2;
    private String subject_matter3;

    @JsonIgnore
    @OneToMany(mappedBy = "project")
    private Set<ProgressHistory> progressHistories = new HashSet<>();

    public Project() {}

    public int getProjectID() {
        return project_id;
    }

    public String getActivityType() {
        return activity_type;
    }

    public String getYear() {
        return year;
    }

    public String getCourse() {
        return course;
    }

    public String getSubscription() {
        return subscription;
    }

    public String getInstructions() {
        return instructions;
    }

    public String getVideo() {
        return video;
    }

    public String getSubjectMatter1() {
        return subject_matter1;
    }

    public String getSubjectMatter2() {
        return subject_matter2;
    }

    public String getSubjectMatter3() {
        return subject_matter3;
    }
}
