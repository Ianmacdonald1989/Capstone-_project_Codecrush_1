package com.capstone.example.capstone.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "questions")
public class Question {

    @Column(name = "question")
    private String questionText;
    @Column(name = "hint")
    private String hintText;
    @Column(name = "dayID")
    private int dayID;
    @Column(name = "explanation")
    private String explanation;
    @JsonIgnoreProperties({"question"})
    @OneToMany(mappedBy = "question")
    private List<Answer>answers;
    private int questionLevel;
    private ArrayList<String> haveAnswered;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;



    public Question(String questionText, String hintText, int dayID, int questionLevel, String explanation) {
        this.questionText = questionText;
        this.hintText = hintText;
        this.dayID = dayID;
        this.questionLevel = questionLevel;
        this.explanation = explanation;
        this.answers = new ArrayList<>();
        this.haveAnswered = new ArrayList<>();
    }

    public Question(){}

    public String getQuestionText() {
        return questionText;
    }

    public void setQuestionText(String questionText) {
        this.questionText = questionText;
    }

    public String getHintText() {
        return hintText;
    }

    public void setHintText(String hintText) {
        this.hintText = hintText;
    }

    public int getDayID() {
        return dayID;
    }

    public void setDayID(int dayID) {
        this.dayID = dayID;
    }

    public List<Answer> getAnswers() {
        return answers;
    }

    public void setAnswers(List<Answer> answers) {
        this.answers = answers;
    }

    public int getQuestionLevel() {
        return questionLevel;
    }

    public void setQuestionLevel(int questionLevel) {
        this.questionLevel = questionLevel;
    }

    public String getExplanation() {
        return explanation;
    }

    public void setExplanation(String explanation) {
        this.explanation = explanation;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ArrayList<String> getHaveAnswered() {
        return haveAnswered;
    }

    public void setHaveAnswered(ArrayList<String> haveAnswered) {
        this.haveAnswered = haveAnswered;
    }
}
