package com.artamonov.tetris.locale;

class EnglishLocalization extends Localization {

    @Override
    void initMessages() {
        //signin.jsp
        addMessage("signin_banner", "Sign in");
        addMessage("signin_input_login_label", "Nickname");
        addMessage("signin_input_password_label", "Password");
        addMessage("signin_input_login_placeholder", "Nickname");
        addMessage("signin_input_password_placeholder", "Password");
        addMessage("signin_register_link", "Sign up");
        addMessage("signin_button", "Sign in");
        //signup.jsp
        addMessage("signup_banner", "Sign up");
        addMessage("signup_input_login_label", "Nickname");
        addMessage("signup_input_password_label", "Password");
        addMessage("signup_confirm_password_label", "Password again");
        addMessage("signup_input_login_placeholder", "Nickname");
        addMessage("signup_input_password_placeholder", "Password");
        addMessage("signup_confirm_password_placeholder", "Password again");
        addMessage("signup_login_link", "Sign in");
        addMessage("signup_button", "Sign up");
        //main.jsp
        addMessage("main_banner", "Main menu");
        addMessage("play_label", "Play tetris");
        addMessage("small_button", "L");
        addMessage("medium_button", "XL");
        addMessage("large_button", "XXL");
        addMessage("leaderboards", "Leaderboards");
        addMessage("log_out", "Exit");
        addMessage("welcome_banner", "Hello, ");
        //game.jsp
        addMessage("game_banner", "Game");
        addMessage("player_info", "Player: ");
        addMessage("player_score", "Your score: ");
        addMessage("info_left_right", " - move left/right");
        addMessage("info_bottom", " - move bottom");
        addMessage("info_top", " - rotate");
        addMessage("button_back", "Back");
        addMessage("button_reset", "New game");
        addMessage("game_over", "Game over.");
        //leaderboards.jsp
        addMessage("number", "№");
        addMessage("player", "Player");
        addMessage("score", "Score");

    }

    @Override
    public String getLocaleCode() {
        return "en";
    }
}
