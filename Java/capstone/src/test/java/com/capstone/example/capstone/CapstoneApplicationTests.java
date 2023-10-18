package com.capstone.example.capstone;

import com.capstone.example.capstone.models.Answer;
import com.capstone.example.capstone.models.Question;
import com.capstone.example.capstone.models.QuestionLevel;
import com.capstone.example.capstone.models.User;
import com.capstone.example.capstone.repositories.AnswerRepository;
import com.capstone.example.capstone.repositories.QuestionRepository;
import com.capstone.example.capstone.repositories.UserRepository;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class CapstoneApplicationTests {

	@Autowired
	UserRepository userRepository;
	@Autowired
	QuestionRepository questionRepository;
	@Autowired
	AnswerRepository answerRepository;


	@Test
	void contextLoads() {
	}

//	@Test
//	public void addUser(){
//		User jimmy = new User("Jimmy", 3, 15, 2, "WeeJimmy", "password");
//		userRepository.save(jimmy);
//	}

//	@Test
//	public void addQuestionAndAnswer(){
//		Question question = new Question("This is a question", "This is a hint", 2, QuestionLevel.BEGINNER);
//		questionRepository.save(question);
//		Answer answer = new Answer("This is an answer", true, question);
//		answerRepository.save(answer);
//	}
}
