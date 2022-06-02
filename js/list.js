var fenl_ = document.getElementsByClassName('fenl')[0];
var li_ = fenl_.firstElementChild.children;
var yc_ = document.getElementsByClassName('yc')[0].children;
var zz_ = document.getElementsByClassName('zhezhao')[0];
var yc_4 = document.getElementsByClassName('yc-4')[0].getElementsByTagName('li');
var span3_ = document.getElementsByClassName('yc-3')[0].getElementsByTagName('span');

for (let i = 0; i < (yc_4.length - 2); i++) {
    touch.on(yc_4[i], 'tap', function () {
        this.style.border = '1px solid orange';
    })
}

var clear_ = document.getElementsByClassName('clear')[0];
touch.on(clear_, 'tap', function () {
    for (i of yc_4) {
        i.style.border = '1px solid rgb(210,210,210)';
    }
})


for (let i = 0; i < span3_.length; i++) {
    touch.on(span3_[i], 'tap', function () {
        if (this.className == '') {
            this.className = 'xuanz';
        } else if (this.className == 'xuanz') {
            this.className = '';
        }
    })
}

var yca = document.getElementsByClassName('yc-1')[0].getElementsByTagName('a');
for (let i = 0; i < yca.length; i++) {
    touch.on(yca[i], 'tap', function () {
        if (this.className == '') {
            this.className = 'yca';
        } else if (this.className == 'yca') {
            this.className = '';
        }
    })
}

function dj() {
    for (i of yc_) {
        i.style.display = 'none';
    }
    for (i of li_) {
        i.className = '';
    }
    for (i of li_) {
        i.firstElementChild.className = '';
    }
}
var a = 0;
var b = 0;
var c = 0;
var d = 0;
touch.on(li_[0], 'tap', function () {
    a++; b = 0; c = 0; d = 0;
    if (a == 1) {
        dj();
        li_[0].className = 'ys';
        li_[0].firstElementChild.className = 'sj';
        fenl_.classList = 'fenl dj';
        yc_[0].style.display = 'block';
        zz_.style.display = 'block';
    } else {
        dj();
        fenl_.classList = 'fenl';
        zz_.style.display = 'none';
        a = 0;
    }
})

touch.on(li_[1], 'tap', function () {
    b++; a = 0; c = 0; d = 0;
    if (b == 1) {
        dj();
        li_[1].className = 'ys';
        li_[1].firstElementChild.className = 'sj';
        fenl_.classList = 'fenl dj';
        yc_[1].style.display = 'block';
        zz_.style.display = 'block';
    } else {
        dj();
        fenl_.classList = 'fenl';
        zz_.style.display = 'none';
        b = 0;
    }
})

touch.on(li_[2], 'tap', function () {
    c++; a = 0; b = 0; d = 0
    if (c == 1) {
        dj();
        li_[2].className = 'ys';
        li_[2].firstElementChild.className = 'sj';
        fenl_.classList = 'fenl dj';
        yc_[2].style.display = 'block';
        zz_.style.display = 'block';
    } else {
        dj();
        fenl_.classList = 'fenl';
        zz_.style.display = 'none';
        c = 0;
    }
})

touch.on(li_[3], 'tap', function () {
    d++; a = 0; b = 0; c = 0;
    if (d == 1) {
        dj();
        li_[3].className = 'ys';
        li_[3].firstElementChild.className = 'sj';
        fenl_.classList = 'fenl dj';
        yc_[3].style.display = 'block';
        zz_.style.display = 'block';
    } else {
        dj();
        fenl_.classList = 'fenl';
        zz_.style.display = 'none';
        d = 0;
    }
})

touch.on(zz_, 'tap', function () {
    dj();
    fenl_.classList = 'fenl';
    zz_.style.display = 'none';
})

