<template>
    <div>
        <div class="top">
            <span class="close" @click="close()">关闭</span>
            <input type="text" id="sousuo">
        </div>
        <ul>
            <li class="con">
                <router-link to="/index" v-for="(v,i) in obj" :key="i">
                    <p class="title" :style="v.color">{{v.tit}}</p>
                    <span class="little">{{v.text}}</span>
                </router-link>
            </li>
        </ul>
        <div class="footer">
                <router-link to="/reg">注册账号</router-link>
                <router-link to="/login">登录豆瓣</router-link>
                <router-link to="/index">使用桌面版</router-link>
                <router-link to="/index">使用豆瓣APP</router-link>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            obj:[]
        }
    },
    methods:{
        close(){
            this.$router.go(-1)
        }
    },
     created() {
        this.axios({
            url:"/seach",
            method:"get",
        }).then(
            (ok)=>{
                console.log(ok)
            this.obj=ok.data.seach;
            console.log(this.obj)
        })
    }
}
</script>
<style scoped>
    .top{
        border-bottom: .01rem solid #f6f6f6;
    }
    .close{
        display: inline-block;
        font-size: .16rem;
        color: #42bd56;
        margin: .2rem;
    }
    #sousuo{
        width: 75%;
        background:#f6f6f6 url(../../static/seachs.png) no-repeat center center;
        background-size: .22rem;
        border-radius: .03rem;
        height: .32rem;
        font-size: .14rem; 
        border: 0;
    }
    ul{
        width: 100%;
        padding-top: .25rem;
    }
    .con{
        display: flex;
        justify-content: space-between;
        flex: 1;
        width: 100%;
        flex-wrap: wrap;
    }
    .con a{
        display: inline-block;
        width: 33.33%;
        text-align: center;
        margin-bottom: .3rem;
    }
    .title{
        font-size: .24rem;
        line-height: .28rem;
        margin-bottom: 0;
    }
    .little{
        font-size: .14rem;
        letter-spacing: .01rem;
        color: #999;
    }
    .footer{
        width: 100%;
        border: .01rem solid #f3f3f3;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
    }
    
    .footer a{
        width: 50%;
        display: inline-block;
        box-sizing: border-box;
        font-size: .15rem;
        color: #42bd56;
        line-height: .5rem;
    }
</style>