package com.capstone.example.capstone.controllers;

import com.capstone.example.capstone.models.Answer;
import com.capstone.example.capstone.models.User;
import com.capstone.example.capstone.repositories.AnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AnswerController {

    @Autowired
    AnswerRepository answerRepository;

    @GetMapping(value = "/answers")
    public ResponseEntity<List<Answer>> GetAllAnswers(){
        return new ResponseEntity<>(answerRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/answers/{id}")
    public ResponseEntity getAnswerById(@PathVariable Long id){
        return new ResponseEntity<>(answerRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/answers")
    public ResponseEntity postAnswer(@RequestBody Answer answer){
        answerRepository.save(answer);
        return new ResponseEntity<>(answer, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/answers/{id}")
    public ResponseEntity deleteAnswer(@PathVariable Long id){
        answerRepository.deleteById(id);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @PutMapping(value = "/answers/{id}")
    public ResponseEntity updateAnswer(@RequestBody Answer updatedAnswer, @PathVariable Long id){
        answerRepository.save(updatedAnswer);
        return new ResponseEntity(updatedAnswer, HttpStatus.OK);
    }



}
