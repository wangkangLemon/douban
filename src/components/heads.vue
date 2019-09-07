<template>
    <div id="head">
       <router-link to="/index"><img src="../../static/logo.png" class="logo"></router-link>
       <ul class="nav">
           <li>
                <router-link to="/movieHot">电影</router-link>
           </li>
           <li>
                <router-link to="/books">图书</router-link>
           </li>
           <li>
                <router-link to="/radio">广播</router-link>
           </li>
           <li>
                <router-link to="/group">小组</router-link>
           </li>
      
       <router-link to="/seach">
           <img src="../../static/seach.png" class="seach">
        </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #head{
        position: fixed;
        left: 0;
        right: 0; 
        top: 0; 
        z-index:999; 
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: .6rem;
        padding: 0 .18rem;
        border-bottom: .01rem solid #f3f3f3;
        background: white;
    }
    .nav{
        display: flex;
    }
    .nav li{
        margin:.11rem .05rem 0;
    }
    .logo{
        width: .55rem;
        margin-right: .18rem;
        margin-top: .1rem;
    }
    .seach{
        width: .28rem;
        margin-top: .15rem;
        margin-left: .1rem;
    }
</style>