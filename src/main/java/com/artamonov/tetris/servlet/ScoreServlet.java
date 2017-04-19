package com.artamonov.tetris.servlet;

import com.artamonov.tetris.db.DBTools;
import com.artamonov.tetris.dto.Score;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/server/score")
public class ScoreServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int score = Integer.parseInt(request.getParameter("score"));
        String login = (String) request.getSession().getAttribute("login");
        Score dbScore = DBTools.getScore(login);
        if (dbScore == null) {
            boolean status = DBTools.addScore(login, score);
            if (status) response.getWriter().print("ok");
            else response.getWriter().print("error");
        } else {
            if (dbScore.getValue() < score) {
                boolean status = DBTools.updateScore(login, score);
                if (status) response.getWriter().print("ok");
                else response.getWriter().print("error");
            }
        }
    }
}
