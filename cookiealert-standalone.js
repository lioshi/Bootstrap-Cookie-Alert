(function () {
    "use strict";

    var cookieAlert = document.querySelector(".cookiealert");
    var acceptCookies = document.querySelector(".acceptcookies");
    var cookieAlertAlwaysShowElement = document.querySelector(".cookiealert.alwaysshow");
    if(typeof cookieAlertAlwaysShowElement == "undefined"){
        var cookieAlertAlwaysShow = false
    } else {
        var cookieAlertAlwaysShow = true
    }
    var noacceptCookies = document.querySelector(".noacceptcookies");

    if(cookieAlert){
        cookieAlert.offsetHeight; // Force browser to trigger reflow (https://stackoverflow.com/a/39451131)

        if(cookieAlertAlwaysShow){
            if(getCookie("acceptCookies")=='true'){
                // display new phrase: vous avez accepté les cookie...
                // bouton refuser
            } else {
                // display new phrase: vous avez refusé les cookie...
                // bouton accepter
            }
        }

        if (!getCookie("acceptCookies")) {
            cookieAlert.classList.add("show");
        }

        acceptCookies.addEventListener("click", function () {
            setCookie("acceptCookies", true, 60);
            if(!cookieAlertAlwaysShow) cookieAlert.classList.remove("show");
        });

        noacceptCookies.addEventListener("click", function () {
            setCookie("acceptCookies", false, 60);
            if(!cookieAlertAlwaysShow) cookieAlert.classList.remove("show");
        });
    }
})();

// Cookie functions stolen from w3schools
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function getCookieValue(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
