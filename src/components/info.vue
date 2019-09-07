<template>
<div>
    <div class="info" v-for="(v,i) in objpro" :key="i" >
        <img :src="v.images.small" class="pic">
        <div class="title">
            <h2>{{v.title}}</h2>
            <span>{{v.group_member}}人</span>
        </div>
        <div class="text">
            <span>{{v.group_topic.time}}</span>
            <p>{{v.group_topic.title}}</p>
        </div>
    </div>
</div>
    
</template>
<script>
export default {
    props:{
        objpro:{
            type:Array,
            required:true
        },
        morepro:{
            type:String,
            required:true
        }
    }
}
</script>
<style scoped>
    .info{
        margin:.1rem .2rem;
        border-bottom: .01rem solid #f2f2f2;
    }
    img{
        width: .48rem;
        height: .48rem;
        float: left;
    }
    .title{
        line-height: .35rem;
        display: inline-block;
        display: flex;
        justify-content: space-between;
    }
    h2{
        font-size: .18rem;
        font-weight: 100;
        margin-left: .1rem;
        width: 70%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .title span{
        color: #ccc;
        font-size: .15rem;
    }
    .text{
        width: 100%;
        display: flex;
        padding: .2rem 0 .1rem;
        font-size: .15rem;
        color: #aaa;
        line-height: .15rem;
    }
    .text p{
        width: 68%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
</style>