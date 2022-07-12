<template>
    <div class="home_h">
        <header class="m_header">
            <div class="m_header_box" id="my_search" ref="mySearch" >
                <a href="#" class="icon_logo"></a>
                <form action="#">
                    <span class="icon_search"></span>
                    <input type="search" class="search" placeholder="点击搜索商品" v-model="inputMsg">
                </form>
                <router-link to="/login" class="logo_btn">登录</router-link>
            </div>
        </header>
    </div>
</template>

<script>
export default{
    props:{
        bannerHeight:{
            type:Number
        }
    },
    data(){
        return{
            inputMsg:'',
        }
    },
    mounted(){
        const _this = this
        window.onscroll = function(){
            let top = document.documentElement.scrollTop;
            // console.log(top)
            if(top>_this.bannerHeight){
                _this.$refs.mySearch.style.background = "rgba(201,21,35,0.82)";                
            }else{
                let op = top/_this.bannerHeight * 0.82;
                _this.$refs.mySearch.style.background = "rgba(201,21,35," + op + ")"
            }
        }
    },
    methods:{
        
    }
}
</script>