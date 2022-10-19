package com.levelup.sms.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Project implements Serializable {
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

    public Project(Integer project_id, String activity_type, String year, String course, String subscription, String instructions, String video, String subject_matter1, String subject_matter2, String subject_matter3) {
        this.project_id = project_id;
        this.activity_type = activity_type;
        this.year = year;
        this.course = course;
        this.subscription = subscription;
        this.instructions = instructions;
        this.video = video;
        this.subject_matter1 = subject_matter1;
        this.subject_matter2 = subject_matter2;
        this.subject_matter3 = subject_matter3;
    }

    public int getProjectID() {
        return project_id;
    }

    public void setProject_id(Integer project_id) {
        this.project_id = project_id;
    }

    public void setActivity_type(String activity_type) {
        this.activity_type = activity_type;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public void setSubscription(String subscription) {
        this.subscription = subscription;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public void setVideo(String video) {
        this.video = video;
    }

    public void setSubject_matter1(String subject_matter1) {
        this.subject_matter1 = subject_matter1;
    }

    public void setSubject_matter2(String subject_matter2) {
        this.subject_matter2 = subject_matter2;
    }

    public void setSubject_matter3(String subject_matter3) {
        this.subject_matter3 = subject_matter3;
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
