package com.levelup.sms.service.file;

import com.levelup.sms.model.FileDB;
import com.levelup.sms.repository.FileDBRepository;
import com.levelup.sms.service.file.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.stream.Stream;

@Service
public class FileServiceImplementation implements FileService {
    @Autowired
    private FileDBRepository fileDBRepository;

    public FileDB store(MultipartFile file) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        LocalDateTime myDateObj = LocalDateTime.now();
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
        String formattedDate = myDateObj.format(myFormatObj);
        FileDB fileDB = new FileDB(fileName, file.getContentType(), file.getBytes(), formattedDate);

        return fileDBRepository.save(fileDB);
    }

    @Override
    public Stream<File> getAllSubmissions() {
        return null;
    }

    @Override
    public FileDB getSubmission() {
        return null;
    }

    public FileDB getSubmission(String id) {
        return fileDBRepository.findById(id).get();
    }
}
