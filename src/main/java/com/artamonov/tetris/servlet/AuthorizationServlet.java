package com.artamonov.tetris.servlet;

import com.artamonov.tetris.db.DBTools;
import com.artamonov.tetris.dto.Player;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/server/auth")
public class AuthorizationServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException {
        try {
            String login = request.getParameter("login");
            String password = request.getParameter("password");
            Player player = DBTools.getPlayer(login);
            if (player != null) {
                if (player.getPassword().equals(password)) {
                    response.setStatus(200);
                    response.getWriter().print("ok");
                    response.getWriter().close();
                }
            } else {
                response.setStatus(200);
                response.getWriter().println("Invalid Data");
                response.getWriter().close();
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw new ServletException(e);
        }
    }
}
