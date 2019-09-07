<template>
    <div class="find">
        <ul class="find_list">
            <li v-for="(v,i) in findprops" :key="i">
                <a :href="v.href" class="text" :style="{color:v.color}" v-if="!v.line">{{v.title}}</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        findprops:{
            type:Array,
            required:true
        }
    }
    
}
</script>
<style scoped>
   
    .find_list{
        /* display: flex; */
        white-space: nowrap;
        /* flex-shrink: 0; */
        overflow-x: auto;
    }
    .find_list li{
        display: inline-block;
        border: .01rem solid rgb(255, 172, 45);
        font-size:.16rem ;
        height: .5rem;
        line-height:.5rem;
        border-radius: .04rem;
        margin: 0 0 .08rem .16rem;
    }
    .text{
        padding: 0 .24rem;
        letter-spacing: .02rem;
    }
    li:empty{
        width: 100%;
        display: block;
        height: 0.05rem;
        border: 0;
        margin: 0;
    }
</style>