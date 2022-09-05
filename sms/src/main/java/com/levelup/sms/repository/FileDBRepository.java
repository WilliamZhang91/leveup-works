package com.levelup.sms.repository;

import com.levelup.sms.model.FileDB;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FileDBRepository extends JpaRepository<FileDB, String> {

}
