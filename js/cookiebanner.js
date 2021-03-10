var s = document.body.firstChild;
var gtm = document.createElement('div');
gtm.setAttribute("id", "footer-cookie");
gtm.innerHTML="<span id=\"description\"> Wir nutzen Cookies, um unsere Dienste zu erbringen und zu verbessern. Mit Nutzung dieser Seite akzeptieren Sie Cookies. <a href=\"https://kaaaxcreators.de/datenschutz.html\">Datenschutzerklärung</a> </span> <span id=\"accept\"><a href=\"javascript:void(0)\" target=\"_self\" title=\"Akzeptieren\">Akzeptieren</a></span>"; 
s.parentNode.insertBefore(gtm, s);


var footerCookie = document.querySelector("#footer-cookie");
var footerCookieAccept = document.querySelector("#accept");

if (document.cookie.indexOf("AcceptCookie=") == -1) {
    footerCookie.style.display = "block";
}

footerCookieAccept.onclick = function (e) {
    var cookieDate = new Date();
    cookieDate.setTime(new Date().getTime() + 31104000000);

    document.cookie = "AcceptCookie = 1; path=/; secure; expires=" + cookieDate.toUTCString();

    footerCookie.style.display = "none";
};