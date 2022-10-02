package com.levelup.sms.service.progress;

import com.levelup.sms.model.ProgressHistory;
import com.levelup.sms.repository.ProgressHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProgressHistoryServiceImplementation implements ProgressHistoryService {
    @Autowired
    private ProgressHistoryRepository progressHistoryRepository;

    @Override
    public ProgressHistory saveProgressHistory(ProgressHistory progressHistory) {
        return progressHistoryRepository.save(progressHistory);
    }

    @Override
    public List<ProgressHistory> getAllProgressHistory() {
        return progressHistoryRepository.findAll();
    }

    @Override
    public List<ProgressHistory> getProgressHistory() {
        var history = (List<ProgressHistory>) progressHistoryRepository.getProgressHistory();
        return history;
    }
}
