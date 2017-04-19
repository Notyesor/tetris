<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ page import="com.artamonov.tetris.locale.Localization" %>
<%@ page import="com.artamonov.tetris.locale.LocalizationFactory" %>
<%@ page import="com.artamonov.tetris.utils.AuthUtils" %>
<%@ page import="com.artamonov.tetris.dto.Score" %>
<%@ page import="java.util.List" %>
<%@ page import="com.artamonov.tetris.db.DBTools" %>
<%@ page import="java.util.Comparator" %>
<%
    Localization localization = LocalizationFactory.createLocalization(session, request);
    boolean authStatus = AuthUtils.isAuthorized(session, request);
    if (!authStatus) {
        request.getRequestDispatcher("/signin.jsp").forward(request, response);
    }
%>
<html>
<head>
    <meta charset="UTF-8">
    <title><%=localization.getMessage("leaderboards")%></title>
    <link href="css/styles.css" rel="stylesheet"/>
    <script src="js/main.js"></script>
</head>
<body onload="initLogo('<%=localization.getLocaleCode()%>')">
<div id="container">
    <canvas id="logo"></canvas>
    <table class="tetris_table">
        <tr>
            <td>
                <p class="banner"><%=localization.getMessage("leaderboards")%></p>
            </td>
            <td align="right">
                <form action="main.jsp">
                    <button type="submit"><%=localization.getMessage("button_back")%></button>
                </form>
            </td>
        </tr>
    </table>
    <table id="leaderboard">
        <thead>
            <tr>
                <th style="width: 50px">
                    <%=localization.getMessage("number")%>
                </th>
                <th style="width: 275px">
                    <%=localization.getMessage("player")%>
                </th>
                <th style="width: 275px">
                    <%=localization.getMessage("score")%>
                </th>
            </tr>
        </thead>
        <tbody>
            <%
                List<Score> scores = DBTools.getScores();
                scores.sort(new Comparator<Score>() {
                    @Override
                    public int compare(Score o1, Score o2) {
                        if (o1.getValue() < o2.getValue()) return 1;
                        else if(o1.getValue() > o2.getValue()) return -1;
                        else return 0;
                    }
                });
                for (int i = 0; i < scores.size(); i++) {
                    Score score = scores.get(i);
                    %>
            <tr>
                <td>
                    <%=i + 1%>
                </td>
                <td>
                    <%=score.getLogin()%>
                </td>
                <td>
                    <%=score.getValue()%>
                </td>
            </tr>
            <%
                }
            %>
        </tbody>
    </table>
</div>
<div>
    <%
        switch (localization.getLocaleCode()) {
            case "ru": {
    %><img id="languageChange" src="img/united-states-flag.png" onclick="changeLanguage('en')"/><%
    } break;
    case "en": {
%><img id="languageChange" src="img/russia-flag.png" onclick="changeLanguage('ru')"/><%
    } break;
    default: {
%><img id="languageChange" src="img/russia-flag.png" onclick="changeLanguage('ru')"/><%
        } break;
    }
%>
    <form id="languageForm" action="leaderboards.jsp">
        <input type="hidden" id="locale" name="locale" />
    </form>
</div>
<script src="js/logo.js"></script>
</body>
</html>
