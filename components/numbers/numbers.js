// components/numbers/numbers.js
import {storeBindingsBehavior} from "mobx-miniprogram-bindings"
import {store} from "../../store/store"

Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },
    behaviors:[storeBindingsBehavior],
    storeBindings :{
        // 数据源
        store,
        // 映射属性
        fields:{  
            numA:'numA', //第一个sumA是可以任意更改的
            numB:'numB',
            sum:'sum'
        },
        // 映射方法
        actions:{
            updateNum2:'updateNum2'
        }
    },
    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        btnHundker2(e){
            console.log('1111')
            console.log(e)
            this.updateNum2(e.target.dataset.step)
            
        }

    }
})
