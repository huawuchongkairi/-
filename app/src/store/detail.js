import { reqGoodsInFo,reqAddOrUpdateShopCart } from "@/api";
import {getUUID} from '@/utils/uuid_token'
const state={
    goodInfo:{},
    uuid_token:getUUID()
}
const mutations={
    GETGOODINFO(state,goodInfo){
        state.goodInfo=goodInfo
    }
};
const actions={
    // 获取产品信息
  async  getGoodInfo({commit},skuId){
      let result= await reqGoodsInFo(skuId)
      if(result.code==200){
        commit('GETGOODINFO',result.data)
      }
    },
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
       let result =await reqAddOrUpdateShopCart(skuId,skuNum)
    //    console.log(result)
        if(result.code==200){
            return "ok"
        }else{
            return Promise.reject(new Error('falie'))
        }
    }
};
const getters={
    categoryView(state){
        return state.goodInfo.categoryView
    },
    skuInfo(state){
        return state.goodInfo.skuInfo
    },
    // 产品售卖属性的简化
    spuSaleAttrList(){
    return state.goodInfo.spuSaleAttrList||{}
    }

}
export default{
    state,
    actions,
    mutations,
    getters,
}