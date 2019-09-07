<template>
<div class="connt">
    <div class="top">
        <a href="#">
            <img src="../../static/dou.png" class="douLogo">
        </a>
        <a href="#" class="up">
            <div>
                <strong>豆瓣</strong>
                <span>写了日记</span>
            </div>
            <p>2017-03-01 19:30:41</p>
        </a>

    </div>
    <div class="middle">
        <h2 class="titles">
            豆瓣App 4.12.0 主要更新
        </h2>
        <p class="text">
            - 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...
        </p>
    </div>
    <div class="foot">
        <p>
            <img src="https://img3.doubanio.com/f/talion/7a0756b3b6e67b59ea88653bc0cfa14f61ff219d/pics/card/ic_like_gray.svg">
            <span class="num">4</span>
        </p>
        <p>
            <img src="https://img3.doubanio.com/f/talion/ac8a7e0d5f471480549c7abf45fc0fa4c3b4184f/pics/card/ic_comment.svg">
            <span class="num">0</span>
        </p>
        <p>
            <img src="https://img3.doubanio.com/f/talion/8604ef3950b947d55406e2a6f5cf6ca7f0b934e3/pics/card/ic_retweet_gray.svg">
            <span class="num">1</span>
        </p>
        <p class="more">
            <img src="https://img3.doubanio.com/f/talion/be268c0a1adb577c8dfdcfbe48c818af3983ed62/pics/card/more.svg">
        </p>
    </div>
</div>
    
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .connt{
        margin: .2rem;
        border-bottom: .01rem solid #e8e8e8;
    }
    .douLogo{
        width:.48rem;
        height: .48rem;
        border-radius: 50%;
    }
    .up{
        font-size: .17rem;
        line-height: .25rem;
        color: #494949;
        display: inline-block;
        margin-left: .1rem;
    }
    span{
        color: #aaa;
        font-weight: 100;
    }
    .middle{
        margin: .1rem 0.1rem .2rem .6rem;
        padding: .15rem;
        border-radius: .02rem;
        border: .01rem solid #d8d8d8;
    }
    .titles{
        font-size: .18rem;
        font-weight: 100;
        color: #494949;
        line-height: .14rem;
        margin-bottom:.05rem;
    }
    .text{
        font-size: .12rem;
        line-height: .16rem;
        color: #aaa;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .foot{
        margin-left: .6rem;
        display: flex;
        margin-bottom: .1rem;
    }
    .foot p{
        margin-right: .2rem;
    }
    .foot img{
        width: .24rem;
        height: .24rem;
        float: left;
    }
    .num{
        line-height: .24rem;
        margin-left: .05rem;
    }
    .foot .more{
        margin-left: .7rem;
        margin-right: 0;
    }
</style>