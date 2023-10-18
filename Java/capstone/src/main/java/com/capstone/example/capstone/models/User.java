package com.capstone.example.capstone.models;
import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Column(name = "streak")
    private int streak;
    @Column(name = "score")
    private int score;

    @Column(name = "username")
    private String username;
    @Column(name = "uid")
    private String uid;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "id")
    private Long id;

    public User(int streak, int score, String username, String uid) {

        this.streak = streak;
        this.score = score;
        this.username = username;
        this.uid = uid;
    }

    public User() {
    }

    public int getStreak() {
        return streak;
    }

    public void setStreak(int streak) {
        this.streak = streak;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
