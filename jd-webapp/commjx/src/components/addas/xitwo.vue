<template>
    <div>
        <div class="clicthree">
            <p><img src="https://fms.res.meizu.com/dms/2018/08/14/15569c6b-5e3f-41da-8dbf-edfd557191fb.png"></p>
            <p >{{xitwo[0]}}</p>
        </div>
        <div class="clicthree">
            <p><img src="https://fms.res.meizu.com/dms/2018/08/14/00963788-63ab-4dfc-8722-b59d4096c437.png"></p>
            <p >{{xitwo[1]}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "xitwo",
        data(){
            return{
                xitwo:["我的地址","我的收藏"]
            }
        }
    }
</script>

<style scoped>
    div  .clicthree{
        width: 50%;
        font-size: 0.12rem;
        text-align: center;
    }
    div  .clicthree p{
        margin: 0 auto;
    }
    div  .clicthree p img{
        width: 60%;
    }


</style>