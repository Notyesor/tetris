<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ page import="com.artamonov.tetris.locale.Localization" %>
<%@ page import="com.artamonov.tetris.locale.LocalizationFactory" %>
<%@ page import="com.artamonov.tetris.locale.Languages" %>
<%
    Localization localization;
    String sessionLocale = (String) session.getAttribute("locale");
    String locale = (String) request.getParameter("locale");
    if (locale == null) {
        if (sessionLocale != null) locale = sessionLocale;
        else locale = "en";
    } else {
        if ((sessionLocale != null && !locale.equals(sessionLocale)) || sessionLocale == null) {
            session.setAttribute("locale", locale);
        }
    }
    switch (locale) {
        case "ru":
            localization = LocalizationFactory.createLocalization(Languages.RUSSIAN); break;
        case "en":
            localization = LocalizationFactory.createLocalization(Languages.ENGLISH); break;
        default:
            localization = LocalizationFactory.createLocalization(Languages.ENGLISH); break;
    }
%>
<html>
<head>
    <meta charset="UTF-8">
    <title>localization.getMessage("signin_banner")</title>
    <link href="css/styles.css" rel="stylesheet"/>
    <script src="js/main.js"></script>
</head>
<body onload="initLogo('<%=locale%>')">
<div id="container">
    <canvas id="logo"></canvas>
    <form action="">
        <p class="banner"><%=localization.getMessage("signin_banner")%></p>
        <table id="login_table">
            <tr>
                <td align="right" width="200px">
                    <label for="inputLogin"><%=localization.getMessage("signin_input_login_label")%>:</label>
                </td>
                <td>
                    <input type="text" id="inputLogin" class="inputs"
                           placeholder="<%=localization.getMessage("signin_input_login_placeholder")%>"
                           required autofocus autocomplete="off">
                </td>
            </tr>
            <tr>
                <td align="right" width="200px">
                    <label for="inputPassword"><%=localization.getMessage("signin_input_password_label")%>:</label>
                </td>
                <td>
                    <input type="password" id="inputPassword" class="inputs"
                           placeholder="<%=localization.getMessage("signin_input_password_placeholder")%>"
                           required autocomplete="off">
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <label>
                        <a href="signup.jsp"><%=localization.getMessage("signin_register_link")%>
                    </label>
                </td>
            </tr>
            <tr>
                <td></td>
                <td align="right">
                    <button type="submit"><%=localization.getMessage("signin_button")%></button>
                </td>
            </tr>
        </table>
    </form>
</div>

<div>
<%
    switch (locale) {
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
    <form id="languageForm" action="signin.jsp">
        <input type="hidden" id="locale" name="locale" />
    </form>
</div>
<script src="js/logo.js"></script>
</body>
</html>
