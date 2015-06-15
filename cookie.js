function isCookieExists(name) {
    var cookies = document.cookie.split(';');
    for (key in cookies) {
        var cookie = $.trim(cookies[key]);
        if (cookie.indexOf(name + '=') === 0) {
            return true;
        }
    }
    return false
}

function createCookie(name, value, lifetime) {
    var date = new Date();
    date.setTime(date.getTime() + lifetime);
    document.cookie = name + '=' + value + '; expires=' + date.toUTCString() + '; path=/';
}