// 1.验证手机号是否合法
// 1.获取输入框内容
var phonez_ = /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/;
var mma = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9~!@&%#_]{8,16}$/;
var t1 = document.getElementById('t1');
var t2 = document.getElementById('t2');
var t3 = document.getElementById('t3');
var t4 = document.getElementById('t4');
// var agg = 0;

// t1.oninput = function () {
//     var arr_ = /^1[3578]\d{9}$/;
//     // if (!arr_.test(t1.value)) {
//     //     alert('请输入正确的手机号');
//     // } else {
//     //     alert('输入正确')


//     // }
// }

// t2.oninput = function () {
//     // if (t2.value == obj) {
//     //     alert('验证码错误')
//     // } else {
//     //     alert('输入正确')

//     // }
// }

// t3.oninput = function () {
//     var arr = /^\w{6,10}$/;
//     if (!arr.test(t3.value)) {

//     } else {

//     }
// }

// t4.oninput = function () {
//     if (t4.value != t3.value) {

//     } else {

//     }
// }
var su = 0;
var tableText = document.getElementsByClassName('getCode')[0];
var obj;
var timer;
tableText.onclick = function () {
    tableText.style.pointerEvents = "none";
    var num_ = 60;
    obj = [];
    clearInterval(timer)
    timer = setInterval(function () {
        num_--;
        if (num_ == 0) {
            clearInterval(timer)
            num_ = 60;
            tableText.style.pointerEvents = "";
            tableText.innerHTML = '重新发送'
        } else {
            tableText.innerHTML = num_ + '秒后可重新发送';
        }
        if (num_ == 57) {
            for (var i = 0; i < 4; i++) {
                var num = Math.floor(Math.random() * 10);
                obj.push(num)
            }
            obj = obj.join('');
            su = obj;
            console.log(su);
            alert('你的验证码为：' + obj);
        }
    }, 1000)
}
console.log(su);
var submit = document.getElementById('submit');
touch.on(submit, 'tap', function () {
    if (t1.value == '') {
        alert('手机号不能为空！');
    } else if (t2.value == '') {
        alert('验证码不能为空！');
    } else if (t3.value == '') {
        alert('密码不能为空！');
    } else if (t4.value == '') {
        alert('确认密码不能为空！');
    } else if (!phonez_.test(t1.value)) {
        alert('手机号格式错误');
    } else if (t2.value != su) {
        alert('验证码错误');
    } else if (!mma.test(t3.value)) {
        alert('密码格式错误，请输入8-16位并带有1个大写和小写字母');
    } else if (t3.value != t4.value) {
        alert('两次密码不一致！');
    } else {
        localStorage.setItem("phone", t1.value);
        localStorage.setItem("password", t3.value);
        alert('找回密码成功,即将跳转到登录页面');
        setTimeout(window.location.href = 'login.html', 2);
    }
})
