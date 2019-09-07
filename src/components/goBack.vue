<template>
    <div>
        <span @click="del()">取消</span>
    </div>
</template>
<script>
export default {
    methods: {
        del(){
            this.$router.go(-1)
        }
    },
}
</script>
<style scoped>
    p{
        font-size: .16rem;
        color: #42bd56;
        margin: 0;
    }
</style>