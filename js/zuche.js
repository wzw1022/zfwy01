var input_ = document.getElementsByTagName('input');
var yzm = document.getElementsByClassName('fsyzm')[0];
var hqyzm_ = document.getElementById('hqyzm');
var yzm_ = 6666;
touch.on(hqyzm_, 'tap', function () {
    alert('验证码为' + yzm_);
    yzm.className = "notclick fsyzm";
    yzm.style.color = "black";
    yzm.style.backgroundColor = "white";
    var num = 60;
    var time_js = setInterval(function () {
        num--;
        yzm.innerHTML = num + '秒后重新获取';
        if (num == 0) {
            yzm.style.backgroundColor = 'orange';
            yzm.style.color = "white"
            yzm.innerHTML = '获取验证码';
            alert('验证码已过期，请重新获取');
            yzm_++;
            yzm.classList.remove("notclick");
            clearInterval(time_js);
        }
    }, 1000);
})

touch.on(input_[3], 'tap', function () {
    var phone_ = /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/;
    var mma = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9~!@&%#_]{8,16}$/;
    if (input_[0].value == '') {
        alert('手机号不能为空！');
    } else if (input_[1].value == '') {
        alert('验证码不能为空！');
    } else if (input_[2].value == '') {
        alert('密码不能为空！');
    } else if (!phone_.test(input_[0].value)) {
        alert('手机号格式错误');
    } else if (input_[1].value != yzm_) {
        alert('验证码错误');
    } else if (!mma.test(input_[2].value)) {
        alert('密码格式错误');
    } else {
        localStorage.setItem("phone", input_[0].value);
        localStorage.setItem("password", input_[2].value);
        alert('注册成功,即将跳转到登录页面');
        setTimeout(window.location.href = 'login.html', 2);
    }
})
