package com.levelup.sms.model;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name = "submit")
public class FileDB {
    @Id
    @GeneratedValue(generator="uuid")
    @GenericGenerator(name="uuid", strategy="uuid2")
    private String id;
    private String name;
    private String type;
    @Lob
    private byte[] data;
    private String date_submitted;

    @OneToOne
    @JoinColumns({ @JoinColumn(name = "student_id", referencedColumnName = "student_id"),
            @JoinColumn(name = "project_id", referencedColumnName = "project_id") })
    private ProgressHistory progressHistory;

    public FileDB() {
    }

    public FileDB(String name, String type, byte[] data, String date_submitted) {
        this.name = name;
        this.type = type;
        this.data = data;
        this.date_submitted = date_submitted;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public ProgressHistory getProgressHistory() {
        return progressHistory;
    }

    public void setProgressHistory(ProgressHistory progressHistory) {
        this.progressHistory = progressHistory;
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

}
