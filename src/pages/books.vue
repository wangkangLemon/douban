<template>
    <div class="book">
        <heads></heads>
        <div class="xugou">
            <titles :titleprops="titleprops1"></titles>
            <solider :objprops="newArr1"></solider>
        </div>
        <div class="feixugou">
            <titles :titleprops="titleprops2"></titles>
            <solider :objprops="newArr2"></solider>
        </div>
         <div class="page">
            <titles :titleprops="titleprops3"></titles>
            <div class="zaowu">
                <img src="../../static/book.jpg">
                <div class="text">
                    <h2>
                        造物
                        <span>￥68</span>
                    </h2>
                    <p>改变世界的万物图典，3000幅图里的发明与冒险</p>
                </div>
            </div>
            <solider :objprops="newArr2"></solider>
        </div>
        <div class="findbook">
            <titles :titleprops="titleprops4"></titles>
            <find :findprops="findtext"></find>
        </div>
        <div class="sort">
            <titles :titleprops="titleprops5"></titles>
            <sorts :sortprops="sortarr"></sorts>
        </div>
        <div class="foot">
            <footerLogo></footerLogo>
        </div>

    </div>
</template>
<script>
import heads from '../components/heads'
import titles from '../components/titles'
import solider from '../components/solider'
import find from '../components/find'
import sorts from '../components/sorts'
import footerLogo from '../components/footerLogo'

export default {
    components:{
        heads,
        titles,
        solider,
        find,
        sorts,
        footerLogo
    },
    data(){
        return{
            titleprops1:"最受关注图书 | 虚构类",
            titleprops2:"最受关注图书 | 非虚构类",
            titleprops3:"豆瓣纸书",
            titleprops4:"发现好书",
            titleprops5:"分类浏览",
            arr:[],
            newArr1:[],
            newArr2:[],
            findtext:[],
            sortarr:[]
        }
        
    },
    created() {
        this.axios({
            url:"/books",
            method:"get"
        }).then(
            (ok)=>{
                console.log(ok)
                this.arr=ok.data.books
                for(let i=0;i<this.arr.length;i++){
                    if(i<7){
                        this.newArr1.push(this.arr[i])
                    }else if(i>=7){
                        this.newArr2.push(this.arr[i])
                    }
                }
                this.findtext=ok.data.goodBook
                this.sortarr=ok.data.fenlei
            })
    }
}
</script>
<style scoped>
    .book{
        margin-top: .7rem;
    }
    .zaowu{
        display: flex;
        margin-bottom: .2rem;
    }
    .text{
        margin: .1rem;
    }
    img{
        width: 1.5rem;
        height: 2.23rem;
    }
    h2{
        font-size: .2rem;
        color: #333;
        font-weight:100 ;

    }
    h2>span{
        color: red;
        font-size: .16rem;
        float: right;
    }
    .zaowu p{
        font-size: .12rem;
        margin-top: .2rem;
    }
</style>