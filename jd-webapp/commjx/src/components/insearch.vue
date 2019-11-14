<template>
    <div>
        <van-search
                placeholder="请输入搜索关键词"
                show-action
                shape="round"
                @search="onSearch"
        >
            <div slot="action" @click="onSearch">{{insearchChina[0]}}</div>
        </van-search>
        <hr style="border: 0.02rem solid #ccc;margin:0 auto">
        <p class="indentxx">{{insearchChina[1]}}</p>
        <p class="vcricle">{{insearchChina[2]}}</p><p class="vcricle">{{insearchChina[3]}}</p><p class="vcricle">{{insearchChina[4]}}</p>
        <hr style="border: 0.02rem solid #ccc;margin:0.3rem auto">
        <p class="indentxx">{{insearchChina[5]}}</p>
        <hr style="border: 0.005rem solid #ccc;margin:0.1rem auto">
        <p class="indentxxt">{{insearchChina[6]}}</p>
        <a  href="#/list"><van-button type="primary" size="large" class="foootbut">{{insearchChina[7]}}</van-button></a>
    </div>
</template>

<script>
    import { Search } from 'vant';
    import { Button } from 'vant';
    export default {
        name: "vinsearch",
        data(){
            return {
                insearchChina:["搜索","大家都在搜","魅族Pop2","魅族Max","魅族16pro","历史记录","暂无搜索记录","返回首页"]
            }
        },
        methods:{
            onSearch(){
               this.value='http://www.baidu.com'
            }
        },
        components:{
            "van-search":Search,
            "van-button":Button
        }
    }
</script>

<style scoped>
    div .indentxx{
        width:100%;
        font-size: 0.16rem;
        margin-top: 0.1rem;
        margin-bottom: 0;
        text-indent: 0.2rem;
    }
    div .vcricle{
        margin-left: 0.2rem;
        width:0.8rem;
        text-align: center;
        height: 0.3rem;
        line-height: 0.3rem;
        margin-top: 0.01rem;
        margin-bottom: 0rem;
        font-size: 0.12rem;
        border: 0.005rem solid #ccc;
        border-radius: 0.1rem;
    }
    div .indentxxt{
        width:100%;
        margin: 0.1rem auto;
        font-size: 0.14rem;
        text-align: center;
    }
    div .foootbut{
        position: fixed;
        bottom: 0rem;
        height: 0.6rem;
        background-color: #cccccc;
        border: none;
    }

</style>
