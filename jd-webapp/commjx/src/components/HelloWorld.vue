<template>
  <div>
      <van-nav-bar
              left-text="返回"
              title="购物车"
              left-arrow
              @click-left="onClickLeft"
      />
    <van-card
            :num="p.number"
            :key="i"
            v-for="(p,i) in cartInfo.list"
            :price="p.fontprize"
            v-model="cartInfo.list.show"
            :desc="p.fonteqiu"
            :title="p.fontphoto"
            :thumb="p.Meizuphotot"
    >
      <div slot="tags">
        <van-tag plain type="danger">加价购</van-tag>
        <van-tag plain type="danger">特价购</van-tag>
      </div>
      <div slot="footer">
        <van-button size="mini" @click="del(i)">减少</van-button>
        <van-button size="mini" @click="add(i)">添加</van-button>
      </div>
    </van-card>
      <van-submit-bar
              :price="cartInfo.allprice"
              button-text="提交订单"
              @submit="onSubmit"
      />
      <van-popup v-model="cartInfo.show"><img src="../assets/img/money.jpg" style="width: 100%;height: 100%;"></van-popup>
    <van-tabbar v-model="cartInfo.active">
          <van-tabbar-item icon="home-o" @click-left="onClickLeft">首页</van-tabbar-item>
          <van-tabbar-item icon="search">详情</van-tabbar-item>
          <van-tabbar-item icon="friends-o">购物车</van-tabbar-item>
          <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
    import cartapi from '../apis/cartApi'
    import { NavBar } from 'vant';
  import { Card,Tag,Tabbar,TabbarItem,SubmitBar,Popup } from 'vant';
  import { button } from "vant"
export default {
  name: 'HelloWorld',
  components:{
      "van-card":Card,
      "van-nav-bar":NavBar,
      "van-tag":Tag,
      "van-button":button,
      "van-tabbar":Tabbar,
      "van-tabbar-item":TabbarItem,
      "van-submit-bar":SubmitBar,
      "van-popup":Popup
  },
    data(){
      return {
          cartInfo:[],
      }
    },
  props: {
    msg: String
  },
    methods:{
        onClickLeft() {
            this.$router.replace('/list')
        },
        onSubmit(){
            this.cartInfo.show=true

        },
        add(i){
            this.cartInfo.list[i].number++
            this.cartInfo.allprice += (this.cartInfo.list[i].number*this.cartInfo.list[i].fontprize)*100
        },
        del(i){
            if(this.cartInfo.list[i].number<=1){
                this.cartInfo.list[i].number=1
            }else{
                this.cartInfo.list[i].number--
                this.cartInfo.allprice = (this.cartInfo.list[i].number*this.cartInfo.list[i].fontprize)*100
            }

        },
        async _initPageData () {
            let data = await cartapi.getCartInfoByUserId()
            this.cartInfo = data
            // eslint-disable-next-line no-console
            console.log(data)
        },
    },
    beforeMount () {
        this._initPageData()
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
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
