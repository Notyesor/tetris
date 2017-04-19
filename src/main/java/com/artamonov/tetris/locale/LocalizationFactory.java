package com.artamonov.tetris.locale;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

public class LocalizationFactory {
    
    public static Localization createLocalization(Languages language) {
        switch (language) {
            case RUSSIAN: return new RussianLocalization();
            case ENGLISH: return new EnglishLocalization();
        }
        throw new IllegalArgumentException();
    }
    public static Localization createLocalization(HttpSession session, HttpServletRequest request) {
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
                return createLocalization(Languages.RUSSIAN);
            case "en":
                return createLocalization(Languages.ENGLISH);
            default:
                return createLocalization(Languages.ENGLISH);
        }
    }
}
