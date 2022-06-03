var pt_ = document.getElementsByClassName('ptdl')[0];
var yzm_ = document.getElementsByClassName('yzmdl')[0];
var ptf_ = document.getElementsByClassName('ptdlf')[0];
var yzmf_ = document.getElementsByClassName('yzmdlf')[0];
var input_ = document.getElementsByTagName('input');
var hqyzm_ = document.getElementById('hqyzm');
var phone_ = localStorage.getItem('phone');
var password_ = localStorage.getItem('password');
window.onload = function () {
    input_[0].value = phone_;
    input_[1].value = password_;
    input_[3].value = phone_;
}
var aaa_ = 8888;
touch.on(hqyzm_, 'tap', function () {
    alert('验证码为' + aaa_);
    hqyzm_.className = "notclick";
    hqyzm_.style.color = "black";
    hqyzm_.style.backgroundColor = "white";
    var num = 60;
    var time_js = setInterval(function () {
        num--;
        hqyzm_.innerHTML = num + '秒后重新获取';
        if (num == 0) {
            hqyzm_.innerHTML = '获取验证码';
            alert('验证码已过期，请重新获取');
            aaa_++;
            hqyzm_.classList.remove("notclick");
            clearInterval(time_js);
        }
    }, 1000);
})
touch.on(yzm_, 'tap', function () {
    ptf_.style.display = 'none';
    yzmf_.style.display = 'block';
    pt_.className = 'ptdl';
    yzm_.className = 'yzmdl in-on';
})
touch.on(pt_, 'tap', function () {
    yzmf_.style.display = 'none';
    ptf_.style.display = 'block';
    yzm_.className = 'yzmdl';
    pt_.className = 'ptdl in-on';
})
var phonez_ = /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/;
touch.on(input_[2], 'tap', function () {
    if (input_[0].value == '') {
        alert('手机号不能为空！');
    } else if (input_[2].value == '') {
        alert('密码不能为空！');
    } else if (!phonez_.test(input_[0].value)) {
        alert('手机号格式错误');
    } else if (phone_ == null) {
        alert('请先注册！');
    } else if (input_[1].value == password_) {
        alert('登录成功!');
        setTimeout(window.location.href = 'index.html', 2);
    } else {
        alert('密码错误！')
    }
})

touch.on(input_[5], 'tap', function () {
    if (input_[3].value == '') {
        alert('手机号不能为空！');
    } else if (input_[4].value == '') {
        alert('验证码不能为空！')
    } else if (input_[4].value != aaa_) {
        alert('验证码错误！');
    } else if (!phonez_.test(input_[3].value)) {
        alert('手机号格式错误');
    } else {
        alert('登陆成功！');
        localStorage.setItem("phone", input_[0].value);
        setTimeout(window.location.href = 'myLogin.html', 2);
    }
})

