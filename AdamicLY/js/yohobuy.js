// tab栏换背景颜色
var $bgc = $('#bgc');
var $lis = $bgc.children();
$lis.mouseover(function () {
    $(this).addClass('selected').siblings().removeClass('selected');
    // $lis.eq(index).addClass('selected').siblings().removeClass('selected');
});
// logo自动播放
function change(n) {
    if (n > 2)
        n = 1;
    document.getElementById("test").setAttribute("src", "images/" + n + ".png");
    n++;
    setTimeout("change(" + n + ")", 1000);
}
setTimeout("change(1)", 1000);
// 输入框获取焦点
var $ipt = $('#ipt');
$ipt.focus(function () {
    $(this).val('');
})
// 轮播图
var box = document.getElementById('box');
var screenBox1 = box.children[0].children[0];
var screenBox2 = box.children[0].children[1];
// console.log(screenBox1,screenBox2)
var imgWidth = screenBox1.offsetWidth;
// console.log(imgWidth);
var ul1 = screenBox1.children[0];
var ul2 = screenBox2.children[0];
// console.log(ul1,ul2);
var lisUl1 = ul1.children;
var lisUl2 = ul2.children;
// console.log(lisUl1,lisUl2);
var index = 0;
for (var i = 0; i < lisUl2.length; i++) {
    lisUl2[i].index = i;
    // console.log(i);
    lisUl2[i].style.left = i * 138 + 6.5 * i + 'px';
    lisUl1[i].style.left = i * imgWidth + 'px';
    lisUl2.onmouseover = function () {
        if (index === lisUl1.length - 1) {
            lisUl2[index].className = '';
            lisUl1[index].className = '';
            ul1.style.left = 0 + 'px';
        } else {
            this.className = 'current';
            lisUl1[index].className = 'show';
            index = this.index;
            var target = -this.index * imgWidth;
            move(ul1, target);
        }
    }
}
var lt = document.getElementById('Lt');
var rt = document.getElementById('Rt');
// ul1.appendChild(lisUl1[0].cloneNode());
var li = document.createElement('li');
li.style.display = 'block';
li.innerHTML = '<a href="#"><img src="pic/lb1.jpg"></a>'
ul1.appendChild(li);
// console.log(ul1.children[8]);
// ul1.children[8].innerHTML='<a href="#"><img src="../pic/lb1.jpg"></a>';

ul1.children[8].style.left = 1150 * 8 + 'px';
rt.onclick = function () {
    if (index === lisUl1.length - 1) {
        ul1.style.left = 0 + 'px';
        index = 0;
    }
    lisUl2[index].className = '';
    index++;
    var target = -index * imgWidth;
    move(ul1, target);
    if (index === lisUl1.length - 1) {
        lisUl2[0].className = 'current';
        lisUl1[0].className = 'show';
    } else {
        lisUl2[index].className = 'current';
        lisUl1[index].className = 'show';
    }
}
lt.onclick = function () {
    if (index === 0) {
        ul1.style.left = -(lisUl1.length - 1) * imgWidth + 'px';
        index = lisUl1.length - 1;
    }
    if (index === lisUl1.length - 1) {
        lisUl2[0].className = '';
        lisUl1[0].className = '';
    } else {
        lisUl2[index].className = '';
        lisUl1[index].className = '';
    }
    // lisUl2[index].className = '';
    index--;
    var target = -index * imgWidth;
    move(ul1, target);
    lisUl2[index].className = 'current';
    lisUl1[index].className = 'show';
}
var timerId2 = setInterval(function () {
    rt.click();
}, 2000);
box.onmouseover = function () {
    lt.style.display = 'block';
    rt.style.display = 'block';
    clearInterval(timerId2);
}
box.onmouseout = function () {
    lt.style.display = 'none';
    rt.style.display = 'none';
    timerId2 = setInterval(function () {
        rt.click();
    }, 2000);
}
// 固定定位
var $erweima = $('#erweima');
var $t = $erweima.parents('.t');
var $big=$('#big');
$erweima.mouseover(function () {
    console.log($t);
    $big.css({
        display:'block'
    });
});
$erweima.mouseout(function () {
    console.log($t);
    $big.css({
        display:'none'
    });
});
// 设置点击按钮隐藏
var $col=$('#col');
var $gd=$('#gd');
$col.click(function(){
    $gd.hide();
    return false;
});