package com.levelup.sms.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
@MappedSuperclass
public class ProgressHistoryID implements Serializable {

    private static final long serialVersionUID = -5996859146238658742L;
    @Column(name="student_id")
    private Integer student_id;

    @Column(name="project_id")
    private Integer project_id;

    public ProgressHistoryID() {
    }

    public ProgressHistoryID(Integer student_id, Integer project_id) {
        this.student_id = student_id;
        this.project_id = project_id;
    }

    public Integer getStudent_id() {
        return student_id;
    }

    public Integer getProject_id() {
        return project_id;
    }

    public void setStudent_id(Integer student_id) {
        this.student_id = student_id;
    }

    public void setProject_id(Integer project_id) {
        this.project_id = project_id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProgressHistoryID)) return false;
        ProgressHistoryID that = (ProgressHistoryID) o;
        return Objects.equals(getStudent_id(), that.getStudent_id()) &&
                Objects.equals(getProject_id(), that.getProject_id());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getStudent_id(), getProject_id());
    }

}

