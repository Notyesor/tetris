package com.artamonov.tetris.servlet;

import com.artamonov.tetris.db.DBTools;
import com.artamonov.tetris.dto.Player;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/server/reg")
public class RegistrationServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            String login = request.getParameter("login");
            String password = request.getParameter("password");
            if (login != null && password != null) {
                Player player = DBTools.getPlayer(login);
                if (player == null) {
                    boolean status = DBTools.addPlayer(login, password);
                    if (status) {
                        response.getWriter().print("ok");
                    } else {
                        response.getWriter().print("error");
                    }
                } else {
                    response.getWriter().print("error");
                }
            } else {
                response.getWriter().print("error");
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new ServletException(e);
        }
    }
}
