

const CARTURL = 'http://182.92.70.128:3000/cart'

export default {
  /**
     * 获取店铺的信息
     */
  async getCartInfoByUserId () {
    let res = await fetch(CARTURL)
    let data = await res.json()
    return data
  }

}
