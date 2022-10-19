package com.levelup.sms.dbinit;

import com.levelup.sms.model.Project;
import com.levelup.sms.repository.ProjectRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class ProjectDbInitialiser implements CommandLineRunner {
    private ProjectRepository projectRepository;

    public ProjectDbInitialiser(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @Override
    public void run (String... strings) throws Exception {
        Project project1 = new Project(1, "chatbot", "", "beginner", "free", "", "", "computer_science", "Introduction", "/images/projects/project1.png");
        Project project2 = new Project(2, "animation", "", "beginner", "free", "", "", "maths", "My Birthday", "/images/projects/project2.png");
        Project project3 = new Project(3, "game", "", "beginner", "free", "", "", "language", "Block Challenge", "/images/projects/project3.png");
        Project project4 = new Project(4, "augmented reality", "", "intermediate", "free", "", "", "art", "Build A Band", "/images/projects/project4.png");
        Project project5 = new Project(5, "chatbot", "", "intermediate", "free", "", "", "music", "The Bear And The Monkey", "/images/projects/project5.png");
        Project project6 = new Project(6, "animation", "", "intermediate", "free", "", "", "computer_science", "Debugging", "/images/projects/project6.png");
        Project project7 = new Project(7, "game", "", "intermediate", "free", "", "", "computer_science", "About Me", "/images/projects/project7.png");
        Project project8 = new Project(8, "augmented reality", "", "intermediate", "free", "", "", "language", "I Am Here", "/images/projects/project8.png");
        Project project9 = new Project(9, "game", "", "advanced", "free", "", "", "art", "Funny Faces", "/images/projects/project9.png");
        Project project10 = new Project(10, "animation", "", "advanced", "premium", "", "", "music", "It Tickles", "/images/projects/project10.png");
        Project project11 = new Project(11, "animation", "", "advanced", "premium", "", "", "computer_science", "Penguin In A Desert", "/images/projects/project11.png");
        Project project12 = new Project(12, "augmented reality", "", "advanced", "premium", "", "", "maths", "Time Travel", "/images/projects/project12.png");
        Project project13 = new Project(13, "chatbot", "", "advanced", "premium", "", "", "language", "Birthday Card", "/images/projects/project13.png");
        Project project14 = new Project(14, "game", "", "advanced", "premium", "", "", "computer_science", "The Lion And The Mouse 1", "/images/projects/project14.png");
        Project project15 = new Project(15, "game", "", "advanced", "premium", "", "", "computer_science", "The Lion And The Mouse 2", "/images/projects/project15.png");

        projectRepository.save(project1);
        projectRepository.save(project2);
        projectRepository.save(project3);
        projectRepository.save(project4);
        projectRepository.save(project5);
        projectRepository.save(project6);
        projectRepository.save(project7);
        projectRepository.save(project8);
        projectRepository.save(project9);
        projectRepository.save(project10);
        projectRepository.save(project11);
        projectRepository.save(project12);
        projectRepository.save(project13);
        projectRepository.save(project14);
        projectRepository.save(project15);
    }
}
