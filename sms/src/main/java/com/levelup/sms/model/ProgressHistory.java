package com.levelup.sms.model;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

@Entity
@Table(name="progress")
public class ProgressHistory implements Serializable {
    @EmbeddedId
    ProgressHistoryID id;
    private Date date_submitted;
    private Date completed;

    @MapsId("project")
    @ManyToOne
    @JoinColumn(name="student_id")
    private Student student;

    @MapsId("student")
    @ManyToOne
    @JoinColumn(name="project_id")
    private Project project;

    public ProgressHistory() {}

    public Date getDateSubmitted() {
        return date_submitted;
    }

    public Date getDateCompleted() {
        return completed;
    }

    public int getStudentID() {
        return student.getStudentID();
    }

    public String getStudent() {
        return student.getName();
    }

    public int getProjectID() {
        return project.getProjectID();
    }

    public String getProject() {
        return project.getSubjectMatter2();
    }
}
