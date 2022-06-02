// 1.验证手机号是否合法
// 1.获取输入框内容
var t1 = document.getElementById('t1');
var t2 = document.getElementById('t2');
var t3 = document.getElementById('t3');
var t4 = document.getElementById('t4');
// var agg = 0;

t1.oninput = function () {
    var arr_ = /^1[3578]\d{9}$/;
    // if (!arr_.test(t1.value)) {
    //     alert('请输入正确的手机号');
    // } else {
    //     alert('输入正确')


    // }
}

t2.oninput = function () {
    // if (t2.value == obj) {
    //     alert('验证码错误')
    // } else {
    //     alert('输入正确')

    // }
}

t3.oninput = function () {
    var arr = /^\w{6,10}$/;
    if (!arr.test(t3.value)) {

    } else {

    }
}

t4.oninput = function () {
    if (t4.value != t3.value) {

    } else {

    }
}

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
            alert('你的验证码为：' + obj);
        }
    }, 1000)
}

var submit = document.getElementById('submit');
submit.onclick = function () {
    submit.innerHTML = '注册成功'
}