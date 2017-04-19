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
        //main.jsp
        addMessage("main_banner", "Главное меню");
        addMessage("play_label", "Играть в тетрис");
        addMessage("small_button", "L");
        addMessage("medium_button", "XL");
        addMessage("large_button", "XXL");
        addMessage("leaderboards", "Списки лидеров");
        addMessage("log_out", "Выход");
        addMessage("welcome_banner", "Привет, ");
        //game.jsp
        addMessage("game_banner", "Игра");
        addMessage("player_info", "Игрок: ");
        addMessage("player_score", "Твой счет: ");
        addMessage("info_left_right", " - двигать влево/вправо");
        addMessage("info_bottom", " - двигать вниз");
        addMessage("info_top", " - вращать");
        addMessage("button_back", "Назад");
        addMessage("button_reset", "Заново");
        addMessage("game_over", "Игра окончена.");
        //leaderboards.jsp
        addMessage("number", "№");
        addMessage("player", "Игрок");
        addMessage("score", "Счет");
    }

    @Override
    public String getLocaleCode() {
        return "ru";
    }
}
