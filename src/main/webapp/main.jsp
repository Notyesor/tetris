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
%>
<html>
<head>
    <meta charset="UTF-8">
    <title><%=localization.getMessage("main_banner")%></title>
    <link href="css/styles.css" rel="stylesheet"/>
    <script src="js/main.js"></script>
</head>
<body onload="initLogo('<%=localization.getLocaleCode()%>')">
<div id="container">
    <canvas id="logo"></canvas>
    <p class="banner"><%=localization.getMessage("welcome_banner") + session.getAttribute("login")%></p>
    <form action="game.jsp">
        <table class="tetris_table">
            <tr>
                <td>
                    <label><%=localization.getMessage("play_label")%></label>
                </td>
                <td>
                    <button id="L" type="submit" name="size" value="small">
                        <%=localization.getMessage("small_button")%>
                    </button>
                </td>
                <td>
                    <button id="XL" type="submit" name="size" value="medium">
                        <%=localization.getMessage("medium_button")%>
                    </button>
                </td>
                <td>
                    <button id="XXL" type="submit" name="size" value="large">
                        <%=localization.getMessage("large_button")%>
                    </button>
                </td>
            </tr>
        </table>
    </form>
    <table class="tetris_table">
        <tr>
            <td colspan="4">
                <form action="leaderboards.jsp">
                    <button class="menu_button"><%=localization.getMessage("leaderboards")%></button>
                </form>
            </td>
        </tr>
        <tr>
            <td colspan="4">
                <form action="">
                    <button class="menu_button" name="exit" type="submit"><%=localization.getMessage("log_out")%></button>
                </form>
            </td>
        </tr>
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
    <form id="languageForm" action="main.jsp">
        <input type="hidden" id="locale" name="locale" />
    </form>
</div>
<script src="js/logo.js"></script>
</body>
</html>
