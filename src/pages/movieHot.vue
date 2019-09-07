<template>
    <div>
        <heads></heads>
        <div class="section">
            <div class="solid">
                <titles :titleprops="titleprops1" ></titles>
                <solider :objprops="newArr1"></solider>
            </div>
            <div class="solid">
                <titles :titleprops="titleprops2"></titles>
                <solider :objprops="newArr2"></solider>
            </div>
            <div class="solid">
                <titles :titleprops="titleprops3"></titles>
                <solider :objprops="newArr2"></solider>
            </div>
            <div class="find">
                <titles :titleprops="titleprops4"></titles>
                <find :findprops="findtext"></find>
            </div>
            <div class="sort">
                <titles :titleprops="titleprops5"></titles>
                <sorts :sortprops="sortarr"></sorts>
            </div>
            <div class="foot">
                <footer-logo></footer-logo>
            </div>
        </div>
    </div>
</template>
<script>
import heads from '../components/heads'
import solider from '../components/solider'
import titles from '../components/titles'
import find from '../components/find'
import sorts from '../components/sorts'
import footerLogo from '../components/footerLogo'
export default {
    data(){
        return{
            titleprops1:"影院热映",
            titleprops2:"免费在线观影",
            titleprops3:"新片速递",
            titleprops4:"发现好电影",
            titleprops5:"分类浏览",
            arr:[],
            newArr1:[],
            newArr2:[],
            findtext:[],
            sortarr:[]
        }
    },
    components:{
        heads,
        solider,
        titles,
        find,
        sorts,
        footerLogo
    },
    created() {
        this.axios({
            url:"/movie",
            method:"get"
        }).then(
            (ok)=>{
                // console.log(ok)
                this.arr=ok.data.movie
                for(let i=0;i<this.arr.length;i++){
                    if(i<7){
                        this.newArr1.push(this.arr[i])
                    }else if(i>=7&&i<15){
                        this.newArr2.push(this.arr[i])
                    }
                }
                this.findtext=ok.data.faxianhaodianying
                this.sortarr=ok.data.fenlei
            })
    }
    
}
</script>
<style scoped>
    .section{
        margin-top: .7rem;
    }
    
</style>