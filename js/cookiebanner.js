var s = document.body.firstChild;
var gtm = document.createElement('div');
gtm.setAttribute("id", "footer-cookie");
var userLang = navigator.language || navigator.userLanguage;
if (userLang.includes('de')) {
    privacy_text = "Wir verwenden Cookies, um unsere Dienste bereitzustellen und zu verbessern. Durch die Nutzung dieser Website akzeptieren Sie Cookies."
    privacy_policy_text = "Datenschutzerklärung"
    accept_text = "Akzeptieren"
} else {
    privacy_text = "We use cookies to provide and improve our services. By using this site you accept cookies."
    privacy_policy_text = "Privacy Policy"
    accept_text = "Accept"
}
gtm.innerHTML = "<span id=\"description\">" + privacy_text + " <a href=\"https://kaaaxcreators.de/datenschutz.html\">" + privacy_policy_text + "</a> </span> <span id=\"accept\"><a href=\"javascript:void(0)\" target=\"_self\" title=\"" + accept_text + "\">" + accept_text + "</a></span>";
s.parentNode.insertBefore(gtm, s);


var footerCookie = document.querySelector("#footer-cookie");
var footerCookieAccept = document.querySelector("#accept");

if (document.cookie.indexOf("AcceptCookie=") == -1) {
    footerCookie.style.display = "flex";
}

footerCookieAccept.onclick = function (e) {
    var cookieDate = new Date();
    cookieDate.setTime(new Date().getTime() + 31104000000);

    document.cookie = "AcceptCookie = 1; path=/; secure; expires=" + cookieDate.toUTCString();

    footerCookie.style.display = "none";
};