import { reqCartList ,reqDeleteCartById,reqUpdateChecked} from "@/api";

const state = {
    cartList: []
};
const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList
    }
};
const actions = {
    async getCartList({ commit }) {
        let result = await reqCartList();
        if (result.code == 200) {
            commit("GETCARTLIST", result.data)
        }
    },
    async deleteCartById({commit},skuId){
       let result=await reqDeleteCartById(skuId);
       if(result.code==200){
        return 'ok'
       }else{
        return Promise.reject(new Error("faile"))
       }
    },
    // 修改购物车某一个产品的选中状态
  async  changeChecked({commit},{skuId,isChecked}){
       let result=await reqUpdateChecked(skuId,isChecked)
       if(result.code==200){
        return 'ok';
       }else{
        return Promise.reject(new Error('faile'))
       }
    },
    deleteAllCart({dispatch,getters}){
        let PromiseAll=[]
        getters.cartList.cartInfoList.forEach(item => {
            // let promis=item.isChecked
            let promise=item.isChecked==1?dispatch('deleteCartById',item.skuId):'';
        });
        return Promise.all(PromiseAll)
    },
    allUpdateChecked({dispatch,state},isChecked){
        let prommiseAll=[]
        state.cartList[0].cartInfoList.forEach(item=>{
            // item.isChecked==!item.isChecked
         let promise = dispatch('changeChecked',{skuId:item.skuId,isChecked})
         prommiseAll.push(promise)
        })
        return Promise.all(prommiseAll)
     
    }
}
const getters = {
    cartList(){
        return state.cartList[0]||{}
    },
}
export default {
    state,
    mutations,
    actions,
    getters
}