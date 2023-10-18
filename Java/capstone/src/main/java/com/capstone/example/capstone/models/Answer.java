package com.capstone.example.capstone.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "answers")
public class Answer {
    @Column(name = "answer")
    private String answerText;
    @Column(name = "correct")
    private boolean correct;
    @JsonIgnoreProperties({"answers"})
    @ManyToOne
    @JoinColumn(name = "question_id", nullable = false)
    private Question question;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;


    public Answer(String answerText, boolean correct, Question question) {
        this.answerText = answerText;
        this.correct = correct;
        this.question = question;
    }

    public Answer(){};

    public String getAnswerText() {
        return answerText;
    }

    public void setAnswerText(String answerText) {
        this.answerText = answerText;
    }

    public boolean isCorrect() {
        return correct;
    }

    public void setCorrect(boolean correct) {
        this.correct = correct;
    }

    public Question getQuestion() {
        return question;
    }

    public void setQuestion(Question question) {
        this.question = question;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
