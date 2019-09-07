<template>
    <div class="regText">
        <h1>
            欢迎加入豆瓣
        </h1>
        <form action="">
            <label>
                <input type="text" placeholder="邮箱" v-model="email">
            </label>
            <label>
                <input :type="inputType?'password':'text'" placeholder="密码" v-model="psw"> 
                <span @click="eye()">
                    <img :src="inputType?imgOne:imgTwo">
                </span>
            </label>
            <label>
                <input type="text" placeholder="用户名" v-model="uname">
            </label>
            <label>
                <input type="button" value="立即注册" class="submit" @click="regClick()">
            </label>
        </form>
        <div>
            <div class="cli">
                点击「注册」代表你已阅读并同意用户使用协议
            </div>   
        </div>
        <div id="wait"></div>
    </div>
</template>
<script>

export default {  
    data(){
        return{
            inputType:true,
            imgOne:"static/pic03.png",
            imgTwo:"static/pic04.png",
            email:"",
            psw:"",
            uname:""
        }
    },
    methods: {
        eye(){
            this.inputType=!this.inputType
        },
        // regClick(){
        //     this.axios({
        //         url:"http://localhost:3000/reg",
        //         method:"get",
        //         params:{
        //             email:this.email,
        //             psw:this.psw,
        //             uname:this.uname
        //         }
        //     }).then((ok)=>{
        //         console.log(ok)
        //         if(ok.data.linkId==1){
        //             var i=4;
        //             var set=setInterval(function(){
        //                 i--;
        //                 if(i==0){
        //                     clearInterval(set)
        //                     window.location.href="http://localhost:8080/#/index"
        //                 }
        //                 $("#wait").html("<p>注册成功"+i+"s后跳转</p>")
        //             },1000)
        //         }else if(ok.data.linkId==0){
        //             $("#wait").html("<p>注册失败</p>")
        //         } 
        //     })
        // }
        regClick(){
            window.location.href="http://localhost:8080/#/index"
        }
    }
    

}
</script>
<style scoped>
    h1{
        font-size: .4rem;
        color: #42bd56;
        font-weight: 100;
        text-align: center;
        margin: 10% 0 9%;
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
    ::-webkit-input-placeholder{
        color: #ccc;
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
        margin-top: .1rem;
    }
    .cli{
        font-size: .14rem;
        color: #aaa;
        text-align: center;
    }
    
    span{
      position: absolute;
      right: .2rem;
      top: 2.05rem;
    }
    img{
        width: .28rem;
        height: .28rem;
    }
    .regText #wait{
        font-size: .5rem;
        text-align: center;
    }
</style>