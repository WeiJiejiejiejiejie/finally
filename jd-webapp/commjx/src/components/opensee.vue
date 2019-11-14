<template>
    <div>
        <div class="tttile">
        <p class="meizuTitYe">魅族官网</p><p class="meizuTitYet"><a href="#/list?id='+index"><img src="http:////bbs.res.meizu.com/static_new/h5/img/close.58557e4.png"/></a></p>
        </div>
        <xi-four class="shopp"></xi-four>
        <xi-two class="shoppp"></xi-two>
        <div class="cccbag">
        <xi-fourt class="shopp"></xi-fourt>
        <xi-two-three class="shopthree"></xi-two-three>

        </div>
        <xi-four-footer class="shopp"></xi-four-footer>
    </div>
    
</template>

<script>
    import xifour  from "./addas/xifour";
    import xitwo from "./addas/xitwo";
    import xifourt  from "./addas/xifourt";
    import xitwothree  from "./addas/xitwothree";
    import xifourfooter  from "./addas/xifourfooter";
    export default {
        name: "opensee",
        components:{
            "xi-four":xifour,
            "xi-two":xitwo,
            "xi-fourt":xifourt,
            "xi-two-three":xitwothree,
            "xi-four-footer":xifourfooter
        }
    }
</script>

<style scoped>
    div .tttile{
        width: 100%;
        display: flex;

    }
    div .shoppp{
        margin-left: 0.18rem;
        width: 50%;
        display: flex;
    }


   .meizuTitYe{
        width: 90%;
        font-size: 0.18rem;
        padding-left: 42%;
        margin: 0 auto;
        height: 0.4rem;
        line-height: 0.4rem;
        font-weight: 200;
        color: black;
    }
    .meizuTitYet{
        width: 10%;
        margin: 0 auto;
        height: 0.4rem;
        font-size: 0;
    }
    .meizuTitYet img{
        width:0.3rem;
        height: 0.3rem;
        margin-top: 0.05rem;
    }
    div .shopp{
        width: 90%;
        margin: 0.1rem auto;
        display: flex;
    }
    .cccbag{
        width: 100%;
        height: 1.7rem;
        margin-top: 0.1rem;
        background-color: #EEEEEE;
    }
    .shopthree{
        width: 80%;
        display: flex;
        margin-left: 0.18rem;
    }

</style>