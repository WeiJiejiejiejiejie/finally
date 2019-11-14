<template>
    <div onscroll="changeScrollTop" v-if="shopphoto.selectchina">
        <p class="return"><a href="#/list"><img src="../assets/img/d_02.jpg"></a><img src="../assets/img/d_04.jpg"></p>
        <div class="swiper">
            <van-swipe :autoplay="2000" :loop="false" indicator-color="#fff">
                <van-swipe-item v-for="(image, index) in shopphoto.SwiperImg" :key="index">
                    <img :src="image">
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="font">
            <p style="color:#000;font-size: 0.16rem;padding-left:0.1rem">{{shopphoto.fonteqiu}}</p>
            <p style="font-size: 0.18rem;margin: 0.06rem 0;padding-left:0.1rem">￥{{shopphoto.fontprize}}</p>
            <p style="font-size: 0.16rem;margin: 0.04rem 0;padding-left:0.1rem">{{shopphoto.fontaplprize}}</p>
            <p style="font-size: 0.14rem;padding-left:0.1rem">{{shopphoto.fontcheape}}</p>
            <p style="font-size: 0.14rem;margin: 0.02rem 0;padding-left:0.1rem">{{shopphoto.fontphoto}}</p>
            <p style="font-size: 0.14rem;padding-left:0.1rem">{{shopphoto.fontstroage}}</p>
        </div>
        <div class="photoz" v-if="shopphoto.photozchina">
            <p><img src="../assets/img/d_08.jpg"><span>{{shopphoto.photozchina[0]}}</span><img src="../assets/img/d_08.jpg"><span>{{shopphoto.photozchina[1]}}</span></p>
            <p style="border-bottom: 0.005rem solid #ccc" class="clear"><img src="../assets/img/d_08.jpg"><span>{{shopphoto.photozchina[2]}}</span></p>
        </div>
        <p class="showPrice"><span class="alopen">{{shopphoto.selectchina[0]}}</span><img src="../assets/img/d_12.jpg"></p>
        <p class="select"><span class="alopen">{{shopphoto.selectchina[1]}}</span><span >{{shopphoto.selectchina[2]}}</span></p>
        <p class="select"><span class="alopen" style="margin-top: 0rem">{{shopphoto.selectchina[3]}}</span><span style="margin-top: 0rem">{{shopphoto.selectchina[4]}}</span></p>
        <p class="services">{{shopphoto.selectchina[5]}}</p>
        <p class="servicesz"><span>{{shopphoto.selectchinab[0]}}</span><span>{{shopphoto.selectchina[1]}}</span><span>{{shopphoto.selectchinab[2]}}</span></p>
        <p class="fotdown"><img src="../assets/img/buy_02.jpg"><img src="../assets/img/buy_03.jpg"><img src="../assets/img/buy_04.jpg" @click="tshow"><img src="../assets/img/buy_05.jpg">
            <van-cell is-link @click="showPopup">立即购买</van-cell>
            <van-popup v-model="shopphoto.show"><img src="../assets/img/money.jpg" style="width: 100%;height: 100%;"></van-popup></p>
        <p class="longphoto"><img :src="shopphoto.LongImg[0]"></p>
        <p class="longphoto"><img :src="shopphoto.LongImg[1]"></p>
        <p class="longphoto"><img :src="shopphoto.LongImg[2]"></p>
    </div>
</template>

<script>
    window.scroll(0, 0);
    import shopnum from '../apis/cartApi';
    import { Popup,Cell } from 'vant';
    import { Swipe, SwipeItem } from 'vant'
    export default {
        name: "shopping",
        data() {
            return {
                shopphoto:[],
                // eslint-disable-next-line vue/no-dupe-keys
            }
        },
        methods: {
            showPopup() {
                this.shopphoto.show = true;
            },
            tshow(){
                this.$router.replace('/detail')
            },
            async _numberFPx () {
                // eslint-disable-next-line no-undef,no-console
                console.log("2222")
                // eslint-disable-next-line no-undef
                let data = await shopnum.getCartInfoByUserId()
                this.shopphoto = data
                // eslint-disable-next-line no-console
                console.log(data)
            },
        },

        components:{
            "van-swipe":Swipe,
            "van-swipe-item":SwipeItem,
            "van-cell":Cell,
            "van-popup":Popup
        },
        beforeMount() {
            this._numberFPx()
        }
    }
</script>

<style scoped>
    div{
        -webkit-overflow-scrolling : touch;
    }
    div .return{
        width: 100%;
        display: flex;
        height: 0.4rem;
        justify-content: space-between;
        font-size: 0;
    }
    div .return img{
        height: 0.4rem;
    }
    div .swiper {
        width: 100%;
        height: 2.8rem;
    }
    div .swiper .van-swipe{
        width: 100%;height: 100%;
    }
    div .swiper .van-swipe img {
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
    div .swiper .custom-indicator {
        position: absolute;
        right: 5px;
        bottom: 5px;
        padding: 2px 5px;
        font-size: 12px;
        color: #fff;
        background: #fff;
    }
    div .font{
        width: 100%;
        color: indianred;
        height: 2.2rem;
        border-bottom: 0.005rem solid #ccc;
        border-top: 0.005rem solid #ccc
    }
    .photoz{
        width: 100%;
        font-size: 0;
    }
    .photoz p {
        width: 100%;
        height: 0.4rem;
        line-height: 0.4rem;
    }
    .photoz p img{
        float: left;
    }
    .photoz p span{
        display: inline-block;
        font-size: 0.12rem;
        height: 0.4rem;
        float: left;
        line-height: 0.4rem;
    }
    .showPrice{
        width: 100%;
        height: 0.4rem;
        border-bottom: 0.005rem solid #ccc;
        margin: 0.02rem 0;
    }
    .showPrice .alopen{
        display: inline-block;
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0.18rem;
        float: left;
        text-indent: 0.2rem;
        width: 0.8rem;
    }
    .showPrice img{
        float: left;
        height: 0.3rem;
        margin-top: 0.08rem;
        line-height: 0.3rem;
    }
    .select{
        width: 100%;
        height: 0.5rem;
        font-size: 0rem;
        background-color: #ccc;
        margin: 0 auto;
    }
    .select span{
        font-size: 0.14rem;
        height: 0.4rem;
        display: inline-block;
        line-height: 0.4rem;
        background-color: white;
        margin-top: 0.04rem;
        width: 2.94rem;
    }
    .select .alopen{
        display: inline-block;
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0.18rem;
        float: left;
        text-indent: 0.2rem;
        width: 0.8rem;
        margin-top: 0.04rem;
    }
    .services{
        width: 100%;
        font-size: 0.14rem;
        height: 0.4rem;
        line-height: 0.4rem;
        text-align: center;
        margin: 0 auto;
        /*margin-left: 0.1rem;*/
    }
    .servicesz{
        width: 100%;
        display: flex;
        margin: 0 auto;
        height: 0.4rem;
        line-height: 0.4rem;
        border-top: 0.005rem solid #ccc;
        border-bottom: 0.005rem solid #ccc;
        justify-content: space-around;
    }
    .servicesz span{
        width: 32%;
        font-size: 0.14rem;
        text-align: center;
    }
    .servicesz span:nth-child(1){
        color: cornflowerblue;
    }
    .fotdown{
        width: 100%;
        display: flex;
        margin: 0 auto;
        position: fixed;
        bottom: 0rem;
    }
    .fotdown img:nth-child(1){
        width: 14%;
    }
    .fotdown img:nth-child(2){
        width: 14%;
    }
    .fotdown img:nth-child(3){
        width: 14%;
    }
    .fotdown img:nth-child(4){
        width: 29%;
    }
    .fotdown img:nth-child(5){
        width: 29%;
    }
    .longphoto{
        width: 100%;
        margin: 0 auto;
        height: 5.9rem;
    }
    .longphoto img{
        width:100%;
        height: 100%;
    }
   .van-cell__right-icon{
       display: none;
   }
    .van-cell__value--alone{
        text-align: center;
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0.16rem;
        margin-top: 0.06rem;
    }
    .van-cell{
        padding: 0 0;
        background-color: orange;
        height: 0.55rem;
        line-height: 0.55rem;
    }
    .van-popup--center{
        font-size: 0.28rem;
        background-color: #cccccc;
        color: red;
    }
    .van-popup--center{
        height: 2rem;
    }



</style>
