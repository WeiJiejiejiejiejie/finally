/**
 * model 数据层
 **/

module.exports = {
    /**
     * 获取订单列表
     * @returns {*[]}
     */
    getOrders(){
        let orderArr =
            {
                // eslint-disable-next-line vue/no-dupe-keys
                show:false,
                LongImg:[
                    'https://openfile.meizu.com/group1/M00/07/81/Cgbj0V22PpuAQ8IPAAYbNAba4KE126.jpg',
                    'https://openfile.meizu.com/group1/M00/07/67/Cgbj0F2v6_aAHX_4AAqp6uaqdVA938.jpg',
                    'https://openfile.meizu.com/group1/M00/07/6A/Cgbj0F2yYkuAIwl0AAPlvDz8ySg479.jpg'
                ],
                SwiperImg: [
                    'https://openfile.meizu.com/group1/M00/07/7A/Cgbj0V2upxqANyVFAAjApUYA58w668.png',
                    'https://openfile.meizu.com/group1/M00/07/48/Cgbj0F1jhu-AaV4AAAlk4z4lkt0463.png',
                    'https://openfile.meizu.com/group1/M00/07/2C/Cgbj0FzvRI6AWu1jAAxIbnS8M5Q295.png',
                    'https://openfile.meizu.com/group1/M00/07/23/Cgbj0FzaXQqAH-L3AAeSSra0qAg862.png',
                    'https://openfile.meizu.com/group1/M00/05/E2/Cgbj0FtqgnmAFgJPAAhgnScaoFg724.png',
                ],
                fonteqiu:"魅族 Note9",
                fontprize:"1199.00",
                fontaplprize:"分期价 ￥107.40*12期",
                fontcheape:"【限时领劵最高立减100】【限时6期免息】骁龙675|后置",
                fontphoto:"4800万|前置2000万|独家定制水滴设计全面屏|4000Ah大",
                fontstroage:"容量电池|18w mCharge快充|吃鸡不卡 拍她更美",
                photozchina:["花呗分期","顺丰发货","7天无理由退货(激活后不支持)"],
                selectchina:["领劵","已选","全网通公开版，幻黑，4+64GB,官方标配&nbsp;&nbsp;&nbsp;x1","配送","广东省 佛山市","本产品由魅族负责发货并提供售后服务"],
                selectchinab:["图文详情","规格参数","常见问题"],
                allprice:0,
                active:0,
                list:[
                    {
                        number:0,
                        fonteqiu: "魅族 Note9",
                        fontprize:"1199.00",
                        fontphoto:"4800万|前置2000万|独家定制水滴设计全面屏|4000Ah大",
                        Meizuphotot:"https://openfile.meizu.com/group1/M00/06/CC/Cgbj0VvINL-AGM20AAw4GirVtYA698.png@240x240.jpg"
                    },
                    {
                        number:0,
                        fonteqiu: "魅族 16s Pro",
                        fontprize:"2199.00",
                        fontphoto:"【限时3期免息】骁龙845 | 屏幕下指纹 | 前后2000万像素摄像头",
                        Meizuphotot:"http://openfile.meizu.com/group1/M00/07/48/Cgbj0F1jhu-AaV4AAAlk4z4lkt0463.png"
                    }
                ],
                "totalMoney":0,
                "checked":true,
                "shops":[
                    {
                        "shopName":"苹果专卖店",
                        "degree":1,
                        "totalShopMoney":0,
                        "checked":true,
                        "products":[
                            {
                                "title":"1-Apple MacBook Pro 13.3英寸笔记本电脑 银色(Core i5 处理器/8GB内存/128GB SSD闪存/Retina屏 MF839CH/A)",
                                "pic":"assets/computer.jpg",
                                "weight":"3.3kg",
                                "color":"标配版",
                                "ver":"13.3英寸",
                                "price":3000,
                                "num":1,
                                "checked":true
                            },
                            {
                                "title":"2-Apple MacBook Pro 13.3英寸笔记本电脑 银色(Core i5 处理器/8GB内存/128GB SSD闪存/Retina屏 MF839CH/A)",
                                "pic":"assets/computer.jpg",
                                "weight":"13.3kg",
                                "color":"1标配版",
                                "ver":"113.3英寸",
                                "price":13000,
                                "num":1,
                                "checked":true
                            }
                        ]

                    },
                    {
                        "shopName":"华为专卖店",
                        "degree":1,
                        "totalShopMoney":0,
                        "checked":true,
                        "products":[
                            {
                                "title":"1-huawei MacBook Pro 13.3英寸笔记本电脑 银色(Core i5 处理器/8GB内存/128GB SSD闪存/Retina屏 MF839CH/A)",
                                "pic":"assets/computer.jpg",
                                "weight":"6.3kg",
                                "color":"标配版",
                                "ver":"18.3英寸",
                                "price":8000,
                                "num":1,
                                "checked":true
                            },
                            {
                                "title":"2-huawei MacBook Pro 13.3英寸笔记本电脑 银色(Core i5 处理器/8GB内存/128GB SSD闪存/Retina屏 MF839CH/A)",
                                "pic":"assets/computer.jpg",
                                "weight":"90.3kg",
                                "color":"1标配版",
                                "ver":"1138.3英寸",
                                "price":9000,
                                "num":1,
                                "checked":true
                            }
                        ]

                    }
                ]
            }


        return orderArr;
    }
}
