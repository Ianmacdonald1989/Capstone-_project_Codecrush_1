package com.capstone.example.capstone.controllers;

import com.capstone.example.capstone.models.Question;
import com.capstone.example.capstone.models.User;
import com.capstone.example.capstone.repositories.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class QuestionController {

    @Autowired
    QuestionRepository questionRepository;

    @GetMapping(value = "/questions")
    public ResponseEntity<List<Question>> GetAllQuestions(){
        return new ResponseEntity<>(questionRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/questions/{id}")
    public ResponseEntity getQuestionById(@PathVariable Long id){
        return new ResponseEntity<>(questionRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/questions")
    public ResponseEntity postQuestion(@RequestBody Question question){
        questionRepository.save(question);
        return new ResponseEntity<>(question, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/questions/{id}")
    public ResponseEntity deleteQuestion(@PathVariable Long id){
        questionRepository.deleteById(id);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @PutMapping(value = "/questions/{id}")
    public ResponseEntity updateQuestion(@RequestBody Question updatedQuestion, @PathVariable Long id){
        questionRepository.save(updatedQuestion);
        return new ResponseEntity(updatedQuestion, HttpStatus.OK);
    }
}
