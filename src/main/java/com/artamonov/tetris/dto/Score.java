package com.artamonov.tetris.dto;

public class Score {
    private String login;
    private int value;

    public Score(String login, int value) {
        this.login = login;
        this.value = value;
    }

    public String getLogin() {
        return login;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }
}
