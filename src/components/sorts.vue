<template>
    <div class="sort">
        <ul class="sort_list">
            <li v-for="(v,i) in sortprops" :key="i">
                <a :href="v.href" class="text">{{v.title}}</a>
                <span>&gt;</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        sortprops:{
            type:Array,
            required:true
        }
    }
    
}
</script>
<style scoped>
    .sort{
        margin-bottom: .3rem;
    }
    .sort_list{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .sort_list li{
        width: 50%;
        box-sizing: border-box;
        display: inline-block;
        font-size: .16rem;
        line-height: .5rem;
        height: .5rem;
        border-top: .01rem solid #eee;
        border-right: .01rem solid #eee;
        display: flex;
        justify-content: space-between;
        
    }
    .text{
        color: #42bd56;
        padding-left: .15rem;
    }
    span{
        color:#eee;
        padding-right: .15rem;
    }
</style>