package com.levelup.sms.dbinit;

import com.levelup.sms.model.Student;
import com.levelup.sms.repository.StudentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class StudentDbInitialiser implements CommandLineRunner {
    private StudentRepository studentRepository;

    public StudentDbInitialiser(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public void run (String... strings) throws Exception {
        Student student1 = new Student(1, "Bobby Brown", "bobbybrown@email.com", "Glenfield Primary School", "images/profile_pic/bobby_brown.png", 0, 12345678, 1);
        Student student2 = new Student(2, "Chandler Jacobs", "c.jacobs@email.com", "Mt Roskill Primary School", "images/profile_pic/chandler_jacobs.png", 0, 9876543, 1);
        Student student3 = new Student(3, "Nikol Milly", "n.milly@email.com", "Mt Roskill Primary School", "images/profile_pic/nikol_milly.png", 0, 23432123, 1);
        Student student4 = new Student(4, "Jaydn Patrick", "j.patrick@email.com", "Glenfield Primary School", "images/profile_pic/jaydn_patrick.png", 0, 34253234, 1);

        studentRepository.save(student1);
        studentRepository.save(student2);
        studentRepository.save(student3);
        studentRepository.save(student4);
    }


}
