package com.levelup.sms.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "submit")
public class FileDB implements Serializable {
    @Id
    @GeneratedValue(generator="uuid")
    @GenericGenerator(name="uuid", strategy="uuid2")
    private String id;

    private String name;
    private String type;
    @Lob
    private byte[] data;
    private String date_submitted;

    // --- progressHistoryID as primary key
//    @MapsId("project")
//    @ManyToOne
//    @JoinColumn(name="student_id")
//    private Student student;
//
//    @MapsId("student")
//    @ManyToOne
//    @JoinColumn(name="project_id")
//    private Project project;
    // --- as foreign key
//    @ManyToOne
//    @JoinColumn(name = "project_id", referencedColumnName = "project_id")
//    private Project project;
//
//    @ManyToOne
//    @JoinColumn(name = "student_id", referencedColumnName = "student_id")
//    private Student student;

    public FileDB() {
    }

    public FileDB(String name, String type, byte[] data, String date_submitted) {
        this.name = name;
        this.type = type;
        this.data = data;
        this.date_submitted = date_submitted;
    }

//    public Project getProjectID() {
//        return project;
//    }
//
//    public Student getStudentID() {
//        return student;
//    }
//
//    public void setProject(Project project) {
//        this.project = project;
//    }
//
//    public void setStudent(Student student) {
//        this.student = student;
//    }

    public String getName() {
        return name;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setData(byte[] data) {
        this.data = data;
    }

    public void setDate_submitted(String date_submitted) {
        this.date_submitted = date_submitted;
    }

    public byte[] getData() {
        return data;
    }

    public String getDate_submitted() {
        return date_submitted;
    }

//    public void assignToStudent (Student student) {
//
//    }

}
