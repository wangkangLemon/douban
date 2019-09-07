<template>
    <div class="box" >
        <div class="waiting" v-if="arr.length<=0">
            <img src="static/loading.gif">
        </div>
        <div class="detai" v-else>
            <heads></heads>
            <bgs :textpro="textpro"></bgs>
            <div class="connet" >
                <h2>
                    {{arr[0].title}}
                    <span>{{arr[0].loc_name}}</span>
                </h2>
                <div class="imgs">
                    <img :src="arr[0].image">
                </div>
            </div>
            <div class="section">
                <span>时间：</span>
                <ul>
                    <li>{{arr[0].begin_time}}</li>
                    <li>{{arr[0].end_time}}</li>
                </ul>
            </div>
            <div class="section">
                <span>地点：</span>
                <ul>
                    <li>{{arr[0].address}}</li>
                </ul>
            </div>
            <div class="section">
                <span>费用：</span>
                <ul>
                    <li>{{arr[0].price_range}}</li>
                </ul>
            </div>
            <div class="section">
                <span>类型：</span>
                <ul>
                    <li>{{arr[0].category_name}}</li>
                </ul>
            </div>
            <div class="section">
                <span>起始时间：</span>
                <ul>
                    <li>{{arr[0].category_name}}</li>
                </ul>
            </div>
            <div class="tags">
                <ul>
                    <li v-for="(v,i) in arr[0].tags.split(',')" :key="i">
                        <a href="#">{{v}}</a>
                    </li>
                </ul>
            </div>
            <div class="intro">
                <h2>活动详情</h2>
                <div class="minu" v-html="arr[0].content">
                </div>
            </div>
            <footer-logo></footer-logo>
        </div>
        
    </div>
</template>
<script>
import heads from '../components/heads'
import bgs from '../components/bgs'
import footerLogo from '../components/footerLogo'
export default {
    data() {
        return {
            textpro:"每天看点好内容",
            arr:[]
        }
    },
    components:{
        heads,
        bgs,
        footerLogo 
    },

     created() {
        this.axios({
            url:"/shouye",
            method:"get",
            // console.log(this.$route.query.id)
        }).then(
            (ok)=>{
                console.log(ok.data.shouye)
                this.arr=ok.data.shouye.filter((v,i)=>{
                    if(this.$route.query.id==v.id){
                        return v
                    }
                });
            console.log(this.arr)
        })
    }
}
</script>
<style scoped>

    .box{
        margin-top: .6rem;
        width: 100%;
    }
    .detai{
        width: 100%;
    }
    .connet{
        margin:.4rem .12rem .12rem;
    }
    .connet h2{
        margin: .2rem 0;
        color: #494949;
        font-size: .17rem;
        line-height: .2rem;
    }
    .connet span{
        margin-bottom: .03rem;
        vertical-align: middle;
        line-height: .18rem;
        font-size: .12rem;
        color: #fff;
        background-color: #ff8263;
        border-radius: .02rem;
        padding:.05rem;
    }
    .imgs{
        margin: .2rem auto;
        text-align: center;
    }
    .imgs img{
        width:2.6rem;
    }
    .section{
        margin-left: .2rem;
        margin-bottom: .1rem;
        min-height: .15em;
        font-size: .14rem; 
        display: flex;
    }
    .section span{
        color: #666;
        line-height: .25rem;
    }
    .section ul{
        width: 80%;
    }
    .tags{
        margin-left: .2rem;
    }
    .tags ul li{
        display: inline-block;
        margin: .1rem .2rem 0 0;
        font-size: .15rem;
    }
    .tags a{
        display: block;
        padding: 0 .12rem;
        line-height: .28rem;
        border-radius: .28rem;
        text-align: center;
        color: #494949;
        background: #f5f5f5;
    }
    .intro{
        /* margin-left: .2rem; */
        margin-bottom: .6rem;
        width: 90%;
        margin: auto;
        overflow: hidden;
    }
    .intro h2{
        color: #072;
        margin: .2rem 0;
        font-size: .18rem;
    }
    .intro .middle img{
        width: .5rem;
    }
</style>