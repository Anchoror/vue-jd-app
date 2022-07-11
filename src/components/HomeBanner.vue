<template>
    <div class="home_ban">
        <div class="m_banner clearfix" id="my_banner">
            <ul class="banner_box" :style="[bannerTransition,bannerTransfrom]">
                <li ref="forli"  v-for="item in imgBoxArr" :key="item.index">
                    <img :src="item.imgUrl" />
                </li>
            </ul>
            <ul class="point_box">
                <li v-for="item in imgBoxArr" :key="item.index" :class="now(item.index)"></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
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
            // transfromOnOff:false,
            distance:10,
            // bannerTransfrom:{"transform" : "translateX(10px)"}
        }
    },
    mounted(){
        this.timer = setInterval(()=>{
            this.square++
            // console.log(this.square)
        },3000)
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
            return (index)=>{
                console.log(11,index)
                return index = this.square? "now" : null
            }
        }
    },
    methods:{
        //控制img动画
        addTransition(){
            this.transitionOnOff = true
        },

        removeTransition() {
            this.transitionOnOff = false
        },
    }
}
</script>