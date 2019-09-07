<template>
    <div class="con">
        <heades></heades>
        <div class="bg">
            <bgs :textpro="textpro"></bgs>
        </div>
            <user></user>
            <radios></radios>
            <radios></radios>
            <radios></radios>
            <radios></radios>
            <radios></radios>
            <radios></radios>
            <radios></radios>
            <radios></radios>
            <radios></radios>
            <a href="#" class="shows">
                显示更多广播
            </a>
            <footer-logo></footer-logo>
    </div>
</template>
<script>
import heades from '../components/heads'
import bgs from '../components/bgs'
import user from '../components/user'
import radios from '../components/radios'
import footerLogo from '../components/footerLogo'
export default {
    data(){
        return{
            textpro:"打开App, 浏览更多"
        }
    },
    components:{
        heades,
        bgs,
        user,
        radios,
        footerLogo
    }
}
</script>
<style scoped>
    .con{
        margin-top: .6rem;
    }
    .shows{
        display: block;
        padding: .2rem 0 .6rem;
        font-size: .16rem;
        line-height: .18rem;
        text-align: center;
        color: #42bd56;
    }
</style>