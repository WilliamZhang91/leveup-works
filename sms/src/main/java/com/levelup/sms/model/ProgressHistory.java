package com.levelup.sms.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="progress")
public class ProgressHistory implements Serializable {
    @EmbeddedId
    private ProgressHistoryID id;

    @MapsId("project")
    @ManyToOne
    @JoinColumn(name="project_id")
    private Project project;

    @MapsId("student")
    @ManyToOne
    @JoinColumn(name="student_id")
    private Student student;

    private String fileName;
    private String date_submitted;
    private String completed;
    @Lob
    private byte[] data;

    public ProgressHistory() {
    }

    public ProgressHistory(ProgressHistoryID id, String date_submitted, String complete) {
        this.id = id;
        this.date_submitted = date_submitted;
        this.completed = complete;
    }

    public ProgressHistoryID getId() {
        return id;
    }

    public void setId(ProgressHistoryID id) {
        this.id = id;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getDate_submitted() {
        return date_submitted;
    }

    public void setDate_submitted(String date_submitted) {
        this.date_submitted = date_submitted;
    }

    public String getCompleted() {
        return completed;
    }

    public void setCompleted(String completed) {
        this.completed = completed;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }
}
