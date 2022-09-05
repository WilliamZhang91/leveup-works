package com.levelup.sms.model;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.MappedSuperclass;
import java.io.Serializable;

@Embeddable
@MappedSuperclass
public class ProgressHistoryID extends SubmitUser implements Serializable {

    private static final long serialVersionUID = -5996859146238658742L;
    @Column(name="student_id")
    Integer student_id;

    @Column(name="project_id")
    Integer project_id;

    //---------------------------------

//    public ProgressHistoryID(Integer project_id, Integer student_id) {
//        super(project_id, student_id);
//        this.student_id = student_id;
//        this.project_id = project_id;
//    }
//
//    @Override
//    public void setProject_id(Integer project_id) {
//        this.project_id = project_id;
//    }
//
//    @Override
//    public void setStudent_id(Integer student_id) {
//        this.student_id = student_id;
//    }
}

