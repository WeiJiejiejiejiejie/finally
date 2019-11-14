<template>
    <div>
        <div class="clictf">
            <p><img src="https://fms.res.meizu.com/dms/2019/04/28/b473ad80-39e8-4e79-96f6-e7238c87b61f.png"></p>
            <p >{{xifourf[0]}}</p>
        </div>
        <div class="clictf">
            <p><img src="https://fms.res.meizu.com/dms/2019/05/30/a6a42f8c-e0ea-4d6c-a0d4-a1cbbd41e65b.png"></p>
            <p >{{xifourf[1]}}</p>
        </div>
        <div class="clictf">
            <p><img src="https://fms.res.meizu.com/dms/2019/04/28/bd43b2ba-d2d8-4946-a8a5-38d5aa7e16ac.jpg"></p>
            <p >{{xifourf[2]}}</p>
        </div>
        <div class="clictf">
            <p><img src="https://fms.res.meizu.com/dms/2019/05/16/98055a85-393c-4138-8cad-9353b7a6edce.png"></p>
            <p >{{xifourf[3]}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "xifourf",
        data(){
            return{
                xifourf:["魅族16s","魅族16Xs","以旧换新","M码通道"]
            }
        }
    }
</script>

<style scoped>
    div  .clictf{
        width: 25%;
        font-size: 0.12rem;
        text-align: center;
    }
    div  .clictf p{
        margin: 0 auto;
    }
    div  .clictf p img{
        width: 60%;
    }

</style>