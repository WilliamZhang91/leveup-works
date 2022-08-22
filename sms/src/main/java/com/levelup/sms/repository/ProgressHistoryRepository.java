package com.levelup.sms.repository;

import com.levelup.sms.model.ProgressHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProgressHistoryRepository extends JpaRepository<ProgressHistory, Integer> {
    @Query(value = "SELECT * FROM progress INNER JOIN student ON progress.student_id = student.student_id", nativeQuery = true)
    List<ProgressHistory> getProgressHistory();

    //INNER JOIN student ON progress.student_id = student.student_id
}
