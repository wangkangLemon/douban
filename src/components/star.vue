<template>
    <div>
        <el-rate
            v-model="value"
            disabled
            show-score
            text-color="#ff9900"
            :score-template="v">
        </el-rate>
    </div>
</template>
<script>
export default {
     data() {
      return {
        value:0
      }
    },
    props:{
        score:{
            type:Number,
            required:true
        }
    },
    computed: {
        v(){
            return (this.value*2).toFixed(1)
        }
    },
    created() {
        this.value=this.score/2
    }
}
</script>
<style>
    .el-rate__icon{
        font-size: .24rem;
        margin-right: -.05rem;
    }
    .el-rate__text{
        margin-left: .16rem;
        font-size: .18rem; 
    }
</style>