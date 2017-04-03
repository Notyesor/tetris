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
    }
}
