package com.artamonov.tetris.locale;

class RussianLocalization extends Localization {

    @Override
    void initMessages() {
        //signin.jsp
        addMessage("signin_banner", "Войдите");
        addMessage("signin_input_login_label", "Пользователь");
        addMessage("signin_input_password_label", "Пароль");
        addMessage("signin_input_login_placeholder", "Пользователь");
        addMessage("signin_input_password_placeholder", "Пароль");
        addMessage("signin_register_link", "Зарегистрироваться");
        addMessage("signin_button", "Войти");
        //signup.jsp
        addMessage("signup_banner", "Зарегистрируйтесь");
        addMessage("signup_input_login_label", "Пользователь");
        addMessage("signup_input_password_label", "Пароль");
        addMessage("signup_confirm_password_label", "Пароль ещё раз");
        addMessage("signup_input_login_placeholder", "Пользователь");
        addMessage("signup_input_password_placeholder", "Пароль");
        addMessage("signup_confirm_password_placeholder", "Пароль ещё раз");
        addMessage("signup_login_link", "Войти");
        addMessage("signup_button", "Зарегистрироваться");
    }
}
