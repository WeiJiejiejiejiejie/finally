<template>
    <div>
        <p class="return"><a href="#/list?id='+index"><img src="../assets/img/d_02.jpg"></a><span class="carsize">购物车</span></p>
        <div class="blackbag">
            <div class="sizabun">
                <p>登录后可显示您账号中已加入的商品</p>
                <a href="#/login?id='+index"><button>去登录</button></a>
            </div>

        </div>
    </div>
    
</template>

<script>

    export default {
        name: "vshoptwo"
    }
</script>

<style scoped>
    div .return{
        width: 100%;
        margin: 0 auto;
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0.18rem;

    }
    div .return img{
        float: left;
        height: 0.3rem;
        margin-top: 0.05rem;
    }
    div .carsize{
        margin-left: 1.2rem;
    }
    div .blackbag{
        width:100%;
        height: 6.2rem;
        background-color:#EEEEEE;
        opacity: 2;
        margin-top: 0;
    }
    div .sizabun{
        width: 100%;
        height: 1rem;
        margin-top: 0rem;
        padding-top: 1.5rem;
        text-align: center;
        font-size: 0;
    }
    div .sizabun p{
        margin-top: 0;
        font-size: 0.12rem;
    }
    div .sizabun a{
        display: inline-block;

        font-size: 0.18rem;
        margin: 0 auto;
        color: black;
        margin-top: 0.2rem;
    }
    div .sizabun a button{
        width: 1.1rem;
        height: 0.4rem;
        line-height: 0.4rem;
        background-color: #00C3F5;
        border: none;
    }

</style>