<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@ page import="com.artamonov.tetris.locale.Localization" %>
<%@ page import="com.artamonov.tetris.locale.LocalizationFactory" %>
<%
    Localization localization = LocalizationFactory.createLocalization(session, request);
%>
<html>
<head>
    <meta charset="UTF-8">
    <title><%=localization.getMessage("signup_banner")%></title>
    <link href="css/styles.css" rel="stylesheet"/>
    <script src="js/main.js"></script>
</head>
<body onload="initLogo('<%=localization.getLocaleCode()%>')">
<div id="container">
    <canvas id="logo"></canvas>
    <form id="signupForm" action="main.jsp" method="get">
        <p class="banner"><%=localization.getMessage("signup_banner")%></p>
        <table class="tetris_table">
            <tr>
                <td align="right" width="200px">
                    <label for="login"><%=localization.getMessage("signup_input_login_label")%>:</label>
                </td>
                <td>
                    <input type="text" id="login" name="login" class="inputs"
                           placeholder="<%=localization.getMessage("signup_input_login_placeholder")%>"
                           required autofocus autocomplete="off">
                </td>
            </tr>
            <tr>
                <td align="right" width="200px">
                    <label for="password"><%=localization.getMessage("signup_input_password_label")%>:</label>
                </td>
                <td>
                    <input type="password" id="password" name="password" class="inputs"
                           placeholder="<%=localization.getMessage("signup_input_password_placeholder")%>"
                           required autocomplete="off">
                </td>
            </tr>
            <tr>
                <td align="right" width="200px">
                    <label for="confirmPassword"><%=localization.getMessage("signup_confirm_password_label")%>:</label>
                </td>
                <td>
                    <input type="password" id="confirmPassword" class="inputs"
                           placeholder="<%=localization.getMessage("signup_confirm_password_placeholder")%>"
                           required autocomplete="off">
                </td>
            </tr>
        </table>
    </form>
    <table class="tetris_table">
        <tr>
            <td>
                <label>
                    <a href="signin.jsp"><%=localization.getMessage("signup_login_link")%>
                </label>
            </td>
            <td align="right">
                <button onclick="signup()"><%=localization.getMessage("signup_button")%></button>
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
    <form id="languageForm" action="signup.jsp">
        <input type="hidden" id="locale" name="locale" />
    </form>
</div>
<script src="js/logo.js"></script>
</body>
</html>
