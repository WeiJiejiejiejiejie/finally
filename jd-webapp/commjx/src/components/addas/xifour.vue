<template>
    <div>
        <div class="clict">
            <p><img src="https://fms.res.meizu.com/dms/2018/08/14/15569c6b-5e3f-41da-8dbf-edfd557191fb.png"></p>
            <p >{{xifour[0]}}</p>
        </div>
        <div class="clict">
            <p><img src="https://fms.res.meizu.com/dms/2018/08/14/00963788-63ab-4dfc-8722-b59d4096c437.png"></p>
            <p >{{xifour[1]}}</p>
        </div>
        <div class="clict">
            <p><img src="https://fms.res.meizu.com/dms/2018/08/14/6c017770-c969-472b-a9b5-47eca996be65.png"></p>
            <p >{{xifour[2]}}</p>
        </div>
        <div class="clict">
            <p><img src="https://fms.res.meizu.com/dms/2018/08/14/b39b0e5a-f912-4733-a98d-3acdf4a83940.png"></p>
            <p >{{xifour[3]}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "xifour",
        data(){
            return{
                xifour:["个人中心","我的订单","我的红包","我的优惠券"]
            }
        }
    }
</script>

<style scoped>
    div  .clict{
        width: 25%;
        font-size: 0.12rem;
        text-align: center;
    }
    div  .clict p{
        margin: 0 auto;
    }
    div  .clict p img{
        width: 60%;
    }

</style>