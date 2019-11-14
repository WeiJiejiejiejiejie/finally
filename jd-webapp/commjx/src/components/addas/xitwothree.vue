<template>
    <div>
        <div class="clicta">
            <p><img src="https://fms.res.meizu.com/dms/2018/04/11/7a170057-4036-4088-bda3-c0cfbfe70c03.png"></p>
            <p >{{xifourr[0]}}</p>
        </div>
        <div class="clicta">
            <p><img src="https://fms.res.meizu.com/dms/2018/04/11/2b57d6ff-3f1d-4907-8e6a-8aab99c89b8b.png"></p>
            <p >{{xifourr[1]}}</p>
        </div>
        <div class="clicta">
            <p><img src="https://fms.res.meizu.com/dms/2018/11/19/6d9b6d21-a84f-439b-a995-b86bbe2aba4d.png"></p>
            <p >{{xifourr[2]}}</p>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "xitwothree",
        data(){
            return{
                xifourr:["服务支持","社区","App下载"]
            }
        }
    }
</script>

<style scoped>
    div  .clicta{
        width: 32%;
        font-size: 0.12rem;
        text-align: center;
    }
    div  .clicta p{
        margin: 0 auto;
    }
    div  .clicta p img{
        width: 60%;
    }

</style>