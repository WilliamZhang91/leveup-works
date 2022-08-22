package com.levelup.sms.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.MappedSuperclass;
import java.io.Serializable;

@Embeddable
@MappedSuperclass
public class ProgressHistoryID implements Serializable {
    private static final long serialVersionUID = -5996859146238658742L;
    @Column(name="student_id")
    Integer student_id;

    @Column(name="project_id")
    Integer project_id;
}

