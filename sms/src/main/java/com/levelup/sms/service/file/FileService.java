package com.levelup.sms.service.file;

import com.levelup.sms.model.FileDB;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.stream.Stream;

public interface FileService {
    public FileDB store(MultipartFile file) throws IOException;

    public Stream<File> getAllSubmissions();

    public FileDB getSubmission();

    //    public FileDB saveFileDB(FileDB fileDB);
}
