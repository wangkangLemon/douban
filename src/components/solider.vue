<template>
    <div class="solids">
        <div class="box">
            <div class="pic" v-for="(v,i) in objprops" :key="i">
                <a :href="v.alt">
                    <img :src="v.images.small" class="image">
                    <p class="names">{{v.title}}</p>
                    <star :score="v.rating.average"></star>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import star from "./star";
export default {
    props:{
        objprops:{
            type:Array,
            required:true
        }
    },
    components:{
        star
    }
}
</script>
<style scoped>
    .box{
        display: flex;
        overflow-x: auto;
        flex-shrink: 0;
        width: 100%;
        height: 100%;
    }
    .pic{
        padding-bottom: .1rem;
    }
    .image{
        display:block;
        width: 1.5rem;
        height: 2.23rem;
        margin-right: .1rem;
        
    }
    .names{
        font-size: .18rem;
        color: #333;
        line-height: .18rem;
        text-align: center;
        margin-top: .2rem;
        /* width: 70%; */
        /* white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; */
    }
</style>
