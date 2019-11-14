<template>

    <div class="menuall">
        <van-nav-bar
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
        <div class="menuList">
            <ul>
                <li @click="flag = true" style="border-right: 0.005rem solid #ccc;">
                    {{list[0]}}
                </li>
                <li @click="flag = false">
                    {{list[1]}}
                </li>
            </ul>
        </div>

            <div  v-if="flag" class="tabCon">
                <input type="text" placeholder="手机号/Flyme账号">
                <input type="password" placeholder="密码">
                <p class="caa"><input type="text" placeholder="点击按钮进行验证"><van-loading type="spinner" color="#1989fa" /></p>
                <p class="onlybag"><input type="checkbox">：记住登录状态<a>忘记密码?</a></p>
                <button>登录</button>
                <button style="background-color: white;color: black;margin-top: 0;border: none">注册</button>
            </div>
            <div  v-else class="tabCon">
                <input type="text" maxlength="11" placeholder="手机号码" v-model="captche">
                <button>登录</button>
                <button style="background-color: white;color: black;margin-top: 0;border: none">注册</button>

            </div>

    </div>
    
</template>

<script>
    import { NavBar } from 'vant';
    import {Loading} from  'vant'
    export default {
        name: "loginlu",
        components:{
            "van-loading":Loading,
            "van-nav-bar":NavBar
            },
        data() {
            return {
                captche:"",
                Toast:"",
                sms:"",
                username:"",
                phone:"",
                flag: true,
                num: 0,
                list: ["账号登录", "验证码登录"],
            }
        },
        methods:{
            onClickLeft() {
                this.$router.replace('/list')
            },
        }
    }
</script>

<style scoped>
    .menuall{
        width: 100%;
        height: 5rem;
        margin: 0.2rem auto;
        background-color: #fff;

    }
    .active {
        color: #fff;
        background: #e74c3c;
    }


    .menuList {
        width:  70%;
        margin: 0 auto;
        height: 0.6rem;
        background-color: white;
    }

    ul {
        width: 100%;
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
        color: black;
        font-size: 0.16rem;
        line-height: 0.6rem;

    }

    ul li {
        width: 50%;
        text-align: center;
        border: none;
        cursor: pointer;
    }

    .tabCon {
        width: 90%;
        margin: 0 auto;
        padding: 0.2rem 0.2rem;
        color: #999;
        font-size: 0.14rem;
        background-color: #fff;
    }
    .tabCon input{
        width:100%;
        margin: 0 auto;
        height: 0.46rem;
        text-indent: 0.12rem;
        margin-bottom: 0.2rem;
        border: 0.005rem solid #ccc;
    }
    .caa{
        width: 100%;
        font-size: 0.14rem;
        margin: 0 0;
        display: flex;
    }
    .caa input{
        width: 74%;
        margin: 0 0;
    }
    .van-loading__spinner--spinner {
        margin-top:0.08rem;
        margin-left: 0.2rem;
    }
    .onlybag{
        width: 100%;
    }

    .onlybag  input{
        width: 0.2rem;
        height:0.2rem;
        float: left;
    }
    .onlybag a{
        float: right;
        color: #00C3F5;
    }
    .tabCon button{
         outline: none;
         border-radius: 0.04rem;
         width: 100%;
         font-size: 0.14rem;
         margin-top: 0.2rem;
         color: white;
         height: 0.5rem;
         background-color: #198DED;;
     }
    .van-hairline--bottom::after{
        border-bottom-width:0 ;
    }


</style>