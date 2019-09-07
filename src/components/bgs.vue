<template>
    <div class="doubg">
        <span>{{textpro}}</span>
        <div class="right">
            <p class="down">极速下载</p>
            <p class="open">打开</p>
        </div>
        
    </div>
</template>
<script>
export default {
    props:{
        textpro:{
            type:String,
            required:true
        }
    }
}
</script>
<style scoped>
    .doubg{
        width: 100%;
        height: .8rem;
        background: url(../../static/background.jpg);
        background-size: 100%;
        display: flex;
        align-items: center;
        line-height: .8rem;
        justify-content: space-between;
        padding: 0 .16rem;
    }
    span{
        color: #42bd56;
        font-size: .16rem;
        padding-left: .21rem;
    }
    .right{
        text-align: center;
    }
    p{
        display:inline-block;
        width: auto;
        padding: 0 .14rem;
        font-size: .13rem;
        font-weight: 700;
        line-height: .25rem;
        border: .01rem solid #42bd56;
        border-radius: .03rem;
    }
    .down{
        color: #fff;
        background: #42bd56;
    }
    .open{
        color: #42bd56;
    }
</style>