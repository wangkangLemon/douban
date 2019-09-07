<template>
    <div>
        <heads></heads>
        <div class="logins">
            <user></user>
        </div>
        <div class="box room">
            <titles :titleprops="titleprops1" :moreprops="moreprops"></titles>
            <info :objpro="xiaozua" :morepro="morepro1" ></info>
             <p class="pmore">
                <a href="#" class="more">更多相关小组</a>
            </p>
        </div>
        <div class="box room">
            <titles :titleprops="titleprops2" :moreprops="moreprops"></titles>
            <info :objpro="xiaozub" :morepro="morepro2" ></info>
             <p class="pmore">
                <a href="#" class="more">来聊五块钱</a>
            </p>
        </div>
        <div class="box buy">
            <titles :titleprops="titleprops3" :moreprops="moreprops"></titles>
            <info :objpro="xiaozuc" :morepro="morepro3" ></info>
            <p class="pmore">
                <a href="#" class="more">更多相关小组</a>
            </p>
        </div>
        <div class="foot">
            <footer-logo></footer-logo>
        </div>
        
    </div>
</template>
<script>
import heads from '../components/heads'
import user from '../components/user'
import titles from '../components/titles'
import info from '../components/info'
import footerLogo from '../components/footerLogo'

export default {
    components:{
        heads,
        user,
        titles,
        info,
        footerLogo
    },
    data(){
        return{
            moreprops:"",
            titleprops1:"租房找舍友",
            titleprops2:"来聊五块钱",
            titleprops3:"买买买",
            xiaozua:[],
            xiaozub:[],
            xiaozuc:[],
            morepro1:"更多相关小组",
            morepro2:"来聊五块钱",
            morepro3:"更多相关小组",
        }
        
    },
    created() {
        this.axios({
            url:"/group",
            method:"get"
        }).then(
            (data)=>{
                console.log(data)
                this.xiaozua=data.data.xiaozua,
                this.xiaozub=data.data.xiaozub,
                this.xiaozuc=data.data.xiaozuc
            }
        )
    },
}
</script>
<style scoped>
    .logins{
        margin-top: .6rem;
    }
    .pmore{
        text-align: center;
    }
    .more{
        display: inline-block;
        margin-bottom: .3rem;
        padding: .15rem 0;
        font-size: .16rem;
        line-height: .18rem;
        color: #42bd56;
    }
</style>