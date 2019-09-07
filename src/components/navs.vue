<template>
    <div class="nav">
        <ul>
            <li>
                <router-link to="/movieHot">影院热映</router-link>
            </li>
            <li>
                <router-link to="/usNew">欧美新碟榜</router-link>
            </li>
            <li>
                <router-link to="/reg">注册账号</router-link>
            </li>
            <li>
                <router-link to="/login">登录豆瓣</router-link>
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    
}
</script>
<style scoped>
    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    li{
        padding: .05rem;
        width: 50%;
        box-sizing: border-box;
    }
   ul>li>a{
        display:block;
        width: 100%;
        padding: .12rem;
        font-size: .15rem;
        background: #f6f6f6;
        color: #494949;
        border-radius: .02rem;
        text-align: center;
        line-height: .2rem;
   }
   .nav{
       margin:.5rem .2rem 0;
       padding-top: .2rem;
   }
</style>