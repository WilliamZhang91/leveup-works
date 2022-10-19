package com.levelup.sms.service.progress;

import com.levelup.sms.model.ProgressHistory;

import java.io.IOException;
import java.util.List;


public interface ProgressHistoryService {
    public ProgressHistory saveProgressHistory(Integer studentID, Integer projectID) throws IOException;
    public List<ProgressHistory> getAllProgressHistory();
    public List<ProgressHistory> getProgressHistory();
}
