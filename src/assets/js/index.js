function $id(id){
    return document.getElementById(id)
}
function $classname(classname){
    return document.getElementsByClassName(classname)
}
function bindEvent(){

    //控制search头部的背景颜色变化 

    window.onload = function(){
        let search = $id("my_search");
        let banner = $id("my_banner");
        // console.log(search,banner)
        let bannerHeight = banner.offsetHeight;
        console.log(banner)
        console.log(bannerHeight)
        window.onscroll = function(){
            let top = document.documentElement.scrollTop;
            console.log(top)
            if(top>bannerHeight){
                search.style.backgroundColor = "rgba(201,21,35,0.82)";
                console.log("大了")
                
            }else{
                let op = top/bannerHeight * 0.82;
                search.style.background = "rgba(201,21,35," + op + ")"
                console.log("不大了")
            }
        }
    }
}


function scrollPic(){
    let imgBox = $classname("banner_box")[0];
    let width = $id("my_banner").offsetWidth;
    let pointBox = $classname("point_box")[0];
    let ols = pointBox.children;
    let boxNum = ols.length;
    // let indexx = 1;
    let timer = null;
    let moveX = 0;
    let endX = 0;
    let startX = 0;
    let square = 0;


    //img动画
    function addTransition(){
        imgBox.style.transition = "all .3s ease 0s"
        imgBox.style.webkitTransition = "all .3s ease 0s"
    }

    function removeTransition() {
        imgBox.style.transition = "none"
        imgBox.style.webkitTransition = "none"
    }

    function setTransfrom(t) {
        imgBox.style.transform = 'translateX(' + t + 'px)'
        imgBox.style.webkitTransform = 'translateX(' + t + 'px)'
        // console.log("当前sq：",-t/width)
    }

    //点动画
    function pointActive(index){
        for(let i = 0; i < boxNum; i++){
        ols[i].className = ''
        ols[index].className = "now"
        }
    }


    //1.初始化

    pointActive(square)

    //定时器
    function timerFnc(){
        if(square > boxNum -1){
            square = 0;
        }
        addTransition();
        setTransfrom(-square*width);
        pointActive(square)
        // console.log(square, boxNum)
        square++;
        // removeTransition()
    }
    timer = setInterval(timerFnc,3000)
    // console.log(timer)



    //2、触摸反馈


    imgBox.addEventListener('touchstart', function(e){
        console.log('touchstart')
        let event = e || window.event;
        startX = event.touches[0].clientX
    },false)

    imgBox.addEventListener("touchmove", function(e){
        // console.log("touchmove")
        let event = e || window.event
        event.preventDefault()

        clearInterval(timer)
        endX = event.touches[0].clientX
        moveX = startX - endX
        removeTransition()
        setTransfrom(-(square-1)*width - moveX)
    }, false)

    imgBox.addEventListener("touchend", function(){
        console.log("touchend")

        // console.log("划动结束时的sq:",square)
        if(Math.abs(moveX) > (1 /3 *width) && endX != 0) {
        if(moveX > 0) {
            if( ++square > boxNum){
            square = boxNum
            }
        }
        else{
            if( --square < 1){
            square = 1
            }
        }

        // setTransfrom(-indexx*width)
        }
        // console.log("改变后的sq：" , square)
        addTransition()
        setTransfrom(-(square-1)*width)
        // removeTransition()
        startX = 0;
        endX = 0;
        // clearInterval(timer);
        timer = setInterval(timerFnc,3000)
        pointActive(square-1)
    })
}

module.exports = {
    bindEvent,
    scrollPic
}
