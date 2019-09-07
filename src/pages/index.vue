<template>
    <div>
        <div class="header">
            <heads></heads>
        </div>
        <navs></navs>
                                                        <!-- //详情页 1-->
        <div class="culm" v-for="(v,i) in obj" :key="i" @click="fun(v.id)">
            <router-link to="" class="list">
                <div class="left">
                    <h3 class="titles">{{v.title}}</h3>
                    <p class="con">{{v.content}}</p>
                    <p class="foo">{{v.category_name}}</p>
                </div>
                <div class="right">
                    <img :src="v.image" class="images">
                    <span>本活动来自栏目&nbsp;&nbsp;&nbsp;{{v.category_name}}</span>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
import heads from '../components/heads'
import navs from '../components/navs'
export default {
    components:{
        heads,
        navs
    },
    data(){
        return{
             obj:[]
        }
       
    },
    //详情页2
    methods: {
        fun(i){
            this.$router.push("/details?id="+i)
        }
    },
    // mounted(){
    //     var localToken = window.localStorage.getItem("token");
    //     console.log(localToken);
    //     if(localToken){
    //         this.axios({
    //         url:"http://localhost:3000/index",
    //         method:"get",
    //         params:{localToken}
    //         }).then(
    //             (ok)=>{
    //                 console.log(ok)
    //                 if(ok.data.linkid==4) {
                        
    //                     confirm('欢迎您'+ok.data.email)
    //                 }else if(ok.data.linkid==5){
    //                     confirm("请先登录")
    //                 }
    //             }
    //         )
    //     }else {
    //         confirm("请登录")
    //         // window.location.href="http://localhost:8080/#/login"
    //     }     
    // },
    created() {
        this.axios({
            url:"/shouye",
            method:"get",
        }).then(
            (ok)=>{
                console.log(ok)
            this.obj=ok.data.shouye;
            console.log(this.obj)
        })
    }
}

</script>
<style scoped>
   
    .list{
        width: 100%;
        display: flex;
        justify-content: space-around;
        border-bottom: .01rem solid #e3e3e3;
        margin-top: .3rem;
    }
    .left{
        width: 60%;
    }
    .left .titles{
        font-size: .16rem;
        color: #494949;
        line-height: .24rem;
        font-weight: 100;
        margin-bottom: .1rem;
        text-align: justify;
    }
    .con{
        font-size: .14rem;
        color: #aaa;
        line-height: .15rem;
        overflow: hidden;
        height: .3rem;
    }
    .foo{
        font-size: .14rem;
        color: #ccc;
        line-height: .4rem;
    }
    .images{
        width: .8rem;
    }
    .right span{
        display: block;
        font-size: .12rem;
        color: #ccc;
        line-height: .4rem;
        margin-left: -0.4rem
    }
</style>