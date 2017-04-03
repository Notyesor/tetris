package com.artamonov.tetris.locale;

public class LocalizationFactory {
    
    public static Localization createLocalization(Languages language) {
        switch (language) {
            case RUSSIAN: return new RussianLocalization();
            case ENGLISH: return new EnglishLocalization();
        }
        throw new IllegalArgumentException();
    }
}
