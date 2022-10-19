package com.levelup.sms.service.progress;

import com.levelup.sms.model.ProgressHistory;
import com.levelup.sms.model.ProgressHistoryID;
import com.levelup.sms.repository.ProgressHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class ProgressHistoryServiceImplementation implements ProgressHistoryService {

    @Autowired
    private ProgressHistoryRepository progressHistoryRepository;

    @Override
    public List<ProgressHistory> getAllProgressHistory() {
        return progressHistoryRepository.findAll();
    }

    @Override
    public List<ProgressHistory> getProgressHistory() {
        var history = (List<ProgressHistory>) progressHistoryRepository.getProgressHistory();
        return history;
    }

    @Override
    public ProgressHistory saveProgressHistory(Integer studentID, Integer projectID) {
        ProgressHistoryID progressHistoryID = new ProgressHistoryID(studentID, projectID);
//        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        LocalDateTime myDateObj = LocalDateTime.now();
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        String formattedDate = myDateObj.format(myFormatObj);
        ProgressHistory progressHistory = new ProgressHistory(progressHistoryID, formattedDate, formattedDate);
        return progressHistoryRepository.save(progressHistory);
    }
}
