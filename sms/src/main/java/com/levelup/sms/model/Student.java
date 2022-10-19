package com.levelup.sms.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Student implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer student_id;
    private String name;
    private String email;
    private String School;
    private String picture;
    private Integer teacherID;
    private Integer phone;
    private Integer role; //1: teacher, 2: student

    @JsonIgnore
    @OneToMany(mappedBy = "student")
    private Set<ProgressHistory> progressHistories = new HashSet<>();

    public Student() {}

    public Student(Integer student_id, String name, String email, String school, String picture, Integer teacherID, Integer phone, Integer role) {
        this.student_id = student_id;
        this.name = name;
        this.email = email;
        this.School = school;
        this.picture = picture;
        this.teacherID = teacherID;
        this.phone = phone;
        this.role = role;
    }

    public void setStudent_id(Integer student_id) {
        this.student_id = student_id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setSchool(String school) {
        School = school;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public void setTeacherID(Integer teacherID) {
        this.teacherID = teacherID;
    }

    public void setPhone(Integer phone) {
        this.phone = phone;
    }

    public void setRole(Integer role) {
        this.role = role;
    }

    public int getStudentID() {
        return student_id;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getSchool() {
        return School;
    }

    public String getPicture() {
        return picture;
    }

    public int getTeacherID() {
        return teacherID;
    }

    public long getPhone() {
        return phone;
    }

    public int getRole() {
        return role;
    }
}
