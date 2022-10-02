package com.levelup.sms.service.progress;

import com.levelup.sms.model.ProgressHistory;

import java.util.List;


public interface ProgressHistoryService {
    public ProgressHistory saveProgressHistory(ProgressHistory progressHistory);
    public List<ProgressHistory> getAllProgressHistory();
    public List<ProgressHistory> getProgressHistory();
}
