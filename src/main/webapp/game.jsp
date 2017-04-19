<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ page import="com.artamonov.tetris.locale.Localization" %>
<%@ page import="com.artamonov.tetris.locale.LocalizationFactory" %>
<%@ page import="com.artamonov.tetris.utils.AuthUtils" %>
<%
    Localization localization = LocalizationFactory.createLocalization(session, request);
    boolean authStatus = AuthUtils.isAuthorized(session, request);
    if (!authStatus) {
        request.getRequestDispatcher("/signin.jsp").forward(request, response);
    }
    String gameSize = request.getParameter("size");
    if (gameSize == null) gameSize = "medium";
    String login = (String) session.getAttribute("login");
%>
<html>
<head>
    <meta charset="UTF-8">
    <title><%=localization.getMessage("game_banner")%></title>
    <link href="css/styles.css" rel="stylesheet"/>
</head>
<body onload="initTetris('<%=gameSize%>')">
<div id="container">
    <table>
        <tr>
            <td>
                <form action="main.jsp">
                    <button type="submit"><%=localization.getMessage("button_back")%></button>
                </form>
            </td>
            <td align="right">
                <form action="game.jsp" method="get">
                    <input type="hidden" name="size" value="<%=gameSize%>"/>
                    <button type="submit"><%=localization.getMessage("button_reset")%></button>
                </form>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <p class="banner" id="game_over" style="visibility: hidden"><%=localization.getMessage("game_over")%></p>
            </td>
        </tr>
        <tr>
            <td>
                <canvas id="tetris" width="400" height="800" style="border: solid 5px black"></canvas>
            </td>
            <td style="vertical-align: top">
                <p class="game_info"><%=localization.getMessage("player_info") + login%></p>
                <p class="game_info"><%=localization.getMessage("player_score")%><label id="scoreLabel">0</label></p>
                <p class="game_info"><img src="img/left_arrow.png"><img src="img/right_arrow.png"><%=localization.getMessage("info_left_right")%></p>
                <p class="game_info"><img src="img/bottom_arrow.png"><%=localization.getMessage("info_bottom")%></p>
                <p class="game_info"><img src="img/top_arrow.png"><%=localization.getMessage("info_top")%></p>
            </td>
        </tr>
    </table>
</div>
    <script src="js/tetris.js"></script>
</body>
</html>
