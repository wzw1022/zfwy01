function setRem() {
    var ui_w = 375;
    var client_W = document.documentElement.clientWidth || document.body.clientWidth;
    var html = document.getElementsByTagName('html')[0];
    html.style.fontSize = client_W / ui_w * 10 + 'px';
}
window.onload = setRem;
window.onresize = setRem;
