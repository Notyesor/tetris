function changeLanguage(language) {
    document.getElementById("locale").value = language;
    document.getElementById("languageForm").submit();
}

function signin() {
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    if (login == "" || password == "") return;
    if (password.length < 4) {
        alert("Пароль слишком короткий!");
        return;
    }
    if (password.length > 12) {
        alert("Пароль слишком длинный!");
        return;
    }
    if (login.length < 4) {
        alert("Логин слишком короткий!");
        return;
    }
    if (login.length > 12) {
        alert("Логин слишком длинный!");
        return;
    }
    var request = getXmlHttp();
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
                if (request.responseText == 'ok') {
                    document.getElementById("signinForm").submit();
                } else {
                    alert("Неправильный логин/пароль");
                }
            } else {
                alert("Ошибка соединения");
            }
        }
    };
    request.open('GET', '/server/auth?login=' + login + '&password=' + password, false);
    request.send(null);
}

function signup() {
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (login == "" || password == "" || confirmPassword == "") return;
    if (password.length < 4) {
        alert("Пароль слишком короткий!");
        return;
    }
    if (password.length > 12) {
        alert("Пароль слишком длинный!");
        return;
    }
    if (login.length < 4) {
        alert("Логин слишком короткий!");
        return;
    }
    if (login.length > 12) {
        alert("Логин слишком длинный!");
        return;
    }
    if (password != confirmPassword) {
        alert("Пароли не совпадают!");
        return;
    }
    var request = getXmlHttp();
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
                if (request.responseText == 'ok') {
                    document.getElementById("signupForm").submit();
                } else {
                    alert("Неправильный логин/пароль");
                }
            } else {
                alert("Ошибка соединения");
            }
        }
    };
    request.open('GET', '/server/reg?login=' + login + '&password=' + password, false);
    request.send(null);
}

function getXmlHttp(){
    var xmlhttp;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}