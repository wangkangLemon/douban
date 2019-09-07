<template>
    <div class="footer">
        <div class="top">
            <img src="../../static/dou.png">
            <div class="info">
                <strong>豆瓣</strong>
                <p>我们的精神角落</p>
            </div>
        </div>
        <a href="#">去 App Store 免费下载 iOS 客户端</a>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
    .footer{
        text-align: center;
        margin-bottom: .5rem;
    }
    .top{
        display: flex;
        justify-content: center;
        margin-bottom:.2rem;
        text-align: left;
    }
    img{
        width: .55rem;
        height: .55rem;
    }
    .info{
        margin-left: .1rem;
    }
    strong{
        font-size: .24rem;
        font-weight: 100;
        line-height: .28rem;
    }
    p{
        font-size: .14rem;
        color: #333;
    }
    a{
        color: #42bd56;
        font-size: .14rem;
    }
</style>