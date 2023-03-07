import { reqGetSearchInfo } from "@/api";
// search模块的小仓库
const state={
    searchList:{}
};
const mutations={
    GETSEARCHLIST(state,searchList){
        state.searchList=searchList
    }
};
const actions={
    // 获取search模块数据
    async getSearchList({commit},params={}){
       let result= await reqGetSearchInfo(params);
       if(result.code==200){
        commit('GETSEARCHLIST',result.data)
       }
    }
};
let getters = {
    //计算新的属性:state,当前小仓库的数据
    goodsList(state) {
         return state.searchList.goodsList||{};
    },
    //品牌的数据
    trademarkList(state) {
         return state.searchList.trademarkList||{};
    },
    //商品属性
    attrsList(state) {
         return state.searchList.attrsList||{};
    }
};
export default{
    state,
    mutations,
    actions,
    getters
}