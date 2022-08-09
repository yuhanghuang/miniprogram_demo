// 在该文件中创建Store实例对象
import {observable,action} from "mobx-miniprogram"

// 可挂载一些共享的数据
export const store =  observable({
    // 数据字段
    numA: 1,
    numB: 2,
    activeindex:0,
    // 计算属性  get表示sum只是可读
    get sum(){
        return this.numA+this.numB
    },
    // actions方法用来修改store中的数据
    updateNum1:action(function(step){
        this.numA+=step
    }),
    updateNum2:action(function(step){
        this.numB+=step
    }),
    updateActiceIndex:action(function(index){
        this.activeindex = index
    })
})