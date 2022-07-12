<template>
    <div class="home_ban">
        <div class="m_banner clearfix" id="my_banner">
            <ul class="banner_box" ref="bannerBox" :style="[bannerTransition,bannerTransfrom]">
                <!-- 因为这里ul的width是li的10倍，所以最多放置10张照片，可以将style改响应式，解决这个问题 -->
                <li ref="bannerBoxChildren"
                v-for="item in imgBoxArr" :key="item.index" 
                @touchstart="touchstart($event)"
                @touchmove="touchmove($event)"
                @touchend="touchend()">
                    <img :src="item.imgUrl" />
                </li>
            </ul>
            <ul class="point_box">
                <li v-for="(item,index) in imgBoxArr" :key="index" :class="now(index)"></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            bannerHeight:0,
            bannerChildWidth:0,
            imgBoxArr:[
                {imgUrl:require("../assets/images/l1.jpg")},
                {imgUrl:require("../assets/images/l2.jpg")},
                {imgUrl:require("../assets/images/l3.jpg")},
                {imgUrl:require("../assets/images/l4.jpg")},
                {imgUrl:require("../assets/images/l5.jpg")},
                {imgUrl:require("../assets/images/l6.jpg")},
                {imgUrl:require("../assets/images/l7.jpg")},
                {imgUrl:require("../assets/images/l8.jpg")},
            ],
            square:0,
            timer:null,
            transitionOnOff:true,
            distance:0,
            startX:0,
            endX:0,
            moveX:0
        }
    },
    mounted(){

        const _this =this
        window.onload = function(){
            // console.log(_this)
            _this.bannerHeight =_this.$refs.bannerBox.firstChild.offsetHeight
            // console.log(_this.$refs.bannerBox.firstChild.clientHeight)
            _this.$emit('sendBannerHeight',_this.bannerHeight)
        }
        this.bannerChildWidth = this.$refs.bannerBox.firstChild.offsetWidth
        
        // console.log(this.bannerChildWidth)
        this.timer = setInterval(this.timerFnc,3000)
        // console.log("xianzai:",this.square)
    },
    computed:{
        bannerTransition: function(){
            const style = {
                "transition":"all .3s ease 0s",
            }
            return this.transitionOnOff? style:null
        },
        bannerTransfrom: function(){
            const style = {
                "transform" : "translateX(" + this.distance + "px)",
            }
            return style
        },
        now: function(){
            return function(index){
                // console.log(index)
                return index == this.square ? "now" : null
            }
        }
    },
    methods:{
        timerFnc (){
            this.transitionOnOff = true
            this.square++
            if(this.square > this.imgBoxArr.length-1 ){
                this.square = 0
            }
            // console.log("timer",this.square)
            this.distance = (-this.square*this.bannerChildWidth)
            // if(this.square = )
            
        },
        touchstart(e) {
            // console.log(e)
            let event = e || window.event;
            this.startX = event.touches[0].clientX
            // console.log(this.square)
        },
        touchmove(e) {
            let event = e || window.event
            event.preventDefault()

            clearInterval(this.timer)
            this.endX = event.touches[0].clientX
            this.moveX = this.startX - this.endX
            this.transitionOnOff = false
            this.distance = -(this.square)*this.bannerChildWidth - this.moveX
        },
        touchend() {
            if(Math.abs(this.moveX) > (1 /3 *this.bannerChildWidth) && this.endX != 0) {
            if(this.moveX > 0) {
                if( ++this.square > this.imgBoxArr.length - 1){
                    this.square = this.imgBoxArr.length -1
                }
            }
            else{
                if( --this.square < 0){
                this.square = 0
                }
            }

            }
            this.transitionOnOff = true
            // console.log(this.square)
            this.distance = -(this.square)*this.bannerChildWidth
            this.startX = 0;
            this.endX = 0;
            this.timer = setInterval(this.timerFnc,3000)
        }
    }
}
</script>