<template>
    <div class="loginText">
        
        <h4>
            <go-back class="back"></go-back>
           登录豆瓣
        </h4>
        <form>
            <label>
                <input type="text" placeholder="邮箱" v-model="email">
            </label>
            <label>
                <input :type="inputType?'password':'text'" placeholder="Token" v-model="psw"> 
                <span @click="eyes()" class="imgs">
                    <img :src="inputType?imgOne:imgTwo">
                </span>
            </label>
            <label>
                <input type="button" value="登录" class="submit">
            </label>
        </form>
        <div>
            <div class="cli">
                使用其他方式登录 & 找回密码
            </div> 
            <div class="zhuce">
                <p @click="funReg()">注册豆瓣账号</p>
                <span class="down">下载豆瓣App</span>
            </div>  
        </div>
        <div id="wait" v-html="wel"></div>
    </div>
</template>
<script>
import goBack from '../components/goBack'
export default {
    data(){
        return{
            inputType:true,
            imgOne:"static/pic03.png",
            imgTwo:"static/pic04.png",
            email:"",
            psw:"",
            wel:"",

        }
    },
    methods: {
        eyes(){
            this.inputType=!this.inputType
        },
        funReg(){
            window.location.href="http://localhost:8080/#/reg"
        },
        // login(){
        //     console.log(this.email)
        //     console.log(this.psw)
        
        //     let param = new URLSearchParams();
        //     param.append("email",this.email);
        //     param.append("psw",this.psw);
        //     this.axios({
        //         url:"http://localhost:3000/login",
        //         method:"post",
        //         data:param
        //     }).then(
        //         (ok)=>{
        //             console.log(ok)
        //             if(ok.data.linkid==2){
        //                 //保存后台发过来的token
        //                 window.localStorage.setItem("token",ok.data.token)
        //                 var i=4;
        //                 var set=setInterval(()=>{
        //                     i--;
        //                     if(i==0){
        //                         clearInterval(set)
        //                         window.location.href="http://localhost:8080/#/index"
        //                     }
        //                     this.wel="<span>登录成功"+i+"s后跳转</span>"
                            
        //                 },1000)
                         
        //             }else if(ok.data.linkid==3){
        //                this.wel="<p>请先注册</p>"
        //             }
        //         },
        //         (err)=>{
        //             if(ok.data.linkid==4){
        //                 this.wel="<p>请稍后重试</p>"
        //             }
        //         })
        // }

    //      login() {
    //     window.location.href="http://localhost:8080/#/index"
    // },
   
    },
    components:{
        goBack
    }
}
</script>
<style scoped>
    h4{
        font-size: .18rem;
        color: black;
        text-align: center;
        margin: 0 0 .1rem;
        line-height: .45rem;
        border-bottom: .01rem solid #eee;
        padding-right: .5rem;
    }
    .back{
        float: left;
        font-size: .16rem;
        color: #42bd56;
        margin-left: .2rem;
        font-weight: 100;
    }
    input:enabled{
        width: 100%;
        height: .5rem;
        outline: none;
        box-sizing: border-box;
        border: 1px solid #ccc;
        font-size: .16rem;
        padding:0 .08rem;
        border-top-left-radius: .03rem;
        border-top-right-radius: .03rem;
        position: relative;
    }
    form{
       font-size: 0;
        padding: .2rem .15rem;
    }
    form .submit{
        background:#42bd56;
        color: white;
        padding-left: 0;
        border-radius: .04rem;
    }
    .cli{
        font-size: .15rem;
        color: #aaa;
        text-align: center;
    }
    
    .imgs{
      position: absolute;
      right: .2rem;
      top: 1.54rem;
    }
    img{
        width: .28rem;
        height: .28rem;
    }
    .zhuce{
        text-align: center;
        color: #42bd56;
        font-size: .15rem;
        margin-top: .4rem;
        display: flex;
        justify-content: center;
    }
    .zhuce p{
        color: #42bd56;
        font-size: .15rem;
        padding-right: .15rem;
    }
   
    
</style>