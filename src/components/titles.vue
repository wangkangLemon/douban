<template>
    <div class="solids">
        <div class="culm">
            <h3 class="title">{{titleprops}}</h3>
            <span class="more">{{moreprops}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        titleprops:{
            type:String,
            required:true
        },
         moreprops:{
            type:String,
            default:"更多"
        }
    }
}
</script>
<style scoped>
    .solids{
        margin: 0 .15rem;
    }
    .culm{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: .1rem 0;
    }
    .title{
        font-size: .18rem;
        color: #333;
        font-weight: 100;
    }
    .more{
        font-size: .14rem;
        color: #42bd56;
    }
    
</style>