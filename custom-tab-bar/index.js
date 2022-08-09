// custom-tab-bar/index.js
import {storeBindingsBehavior} from "mobx-miniprogram-bindings"
import {store} from "../store/store"

Component({
    "options":{
        styleIsolation:"shared"
    },
    behaviors:[storeBindingsBehavior],
    storeBindings:{
        store,
        fields: {
            // numA:()=>store.numA,  不需要
            // numB:()=>store.numB,
            sum:'sum',
            active:'activeindex'
        },
        actions:{
            // buttonTap:'updateNum1'
            updateActive :'updateActiceIndex'
        },
    },
    observers:{
        'sum':function(value) {
            console.log(value)
            this.setData({
                'list[2].info':value
            })
        }
    },
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        // active:0,
        "list": [
            {
                "pagePath": "/pages/home/home",
                "text": "首页",
                "selectedIconPath": "/images/selected.png",
                "iconPath": "/images/home.png"
  
            },
            {
                  "pagePath": "/pages/contact/contact",
                  "text": "联系",
                  "selectedIconPath": "/images/selected.png",
                  "iconPath": "/images/contact.png"
            },
            {
              "pagePath": "/pages/message/message",
              "text": "信息",
              "selectedIconPath": "/images/selected.png",
              "iconPath": "/images/message.png",
              info:2
        }
        ]

    },
    /**
     * 组件的方法列表
     */
    methods: {
        onChange(event) {
            // event.detail 的值为当前选中项的索引
            console.log("1111")
            console.log(event.detail)
            console.log('22222')
            // this.setData({ active: event.detail })
            this.updateActive(event.detail)
            wx.switchTab({
              url: this.data.list[event.detail].pagePath,
            })

          },
    
    }
})
