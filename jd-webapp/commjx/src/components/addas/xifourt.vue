<template>
    <div>
        <div class="clict">
            <p><img src="https://fms.res.meizu.com/dms/2018/04/11/ec8cb46d-5340-428a-b9bc-3893f4749d80.png"></p>
            <p >{{xifour[0]}}</p>
        </div>
        <div class="clict">
            <p><img src="https://fms.res.meizu.com/dms/2018/04/11/0ba8483f-464e-4500-879a-66c834b62128.png"></p>
            <p >{{xifour[1]}}</p>
        </div>
        <div class="clict">
            <p><img src="https://fms.res.meizu.com/dms/2018/04/11/9ef59a5f-aa24-46a7-9443-275347f42773.png"></p>
            <p >{{xifour[2]}}</p>
        </div>
        <div class="clict">
            <p><img src="https://fms.res.meizu.com/dms/2018/04/11/deff1f64-aeff-4b1a-a321-e54626c25d7d.png"></p>
            <p >{{xifour[3]}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "xifour",
        data(){
            return{
                xifour:["产品","Flyme","云服务","专卖店"]
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