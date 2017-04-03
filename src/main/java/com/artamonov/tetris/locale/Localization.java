package com.artamonov.tetris.locale;

import java.util.HashMap;
import java.util.Map;

public abstract class Localization {

    private Map<String, String> dictionary;

    protected Localization() {
        dictionary = new HashMap<>();
        initMessages();
    }

    protected final void addMessage(String name, String value) {
        dictionary.put(name, value);
    }

    public final String getMessage(String name) {
        return dictionary.get(name);
    }

    abstract void initMessages();
}
