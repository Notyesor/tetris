package com.artamonov.tetris.utils;

import com.artamonov.tetris.db.DBTools;
import com.artamonov.tetris.dto.Player;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

public class AuthUtils {

    public static boolean isAuthorized(HttpSession session, HttpServletRequest request) {
        String exit = request.getParameter("exit");
        if (exit != null) {
            session.removeAttribute("login");
            session.removeAttribute("password");
            return false;
        }
        String login = request.getParameter("login");
        String password = request.getParameter("password");
        if (login == null || password == null) {
            String sessionLogin = (String) session.getAttribute("login");
            String sessionPassword = (String) session.getAttribute("password");
            if (sessionLogin == null || sessionPassword == null) {
                return false;
            }
            else {
                return checkPlayer(sessionLogin, sessionPassword);
            }
        } else {
            boolean status = checkPlayer(login, password);
            if (status) {
                session.setAttribute("login", login);
                session.setAttribute("password", password);
                return true;
            } else return false;
        }
    }

    private static boolean checkPlayer(String login, String password) {
        Player player = DBTools.getPlayer(login);
        return player != null && player.getPassword().equals(password);
    }
}
