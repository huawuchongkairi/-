import { reqCategoryList, reqGetBannnerList,reqFloorList } from "@/api";
// home模块的小仓库
let state={
    // state中数据默认别瞎写
    categoryList:[],
    bannerList:[],
    floorList:[]
};
let mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList;
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList=bannerList;
    },
    GETFLOORLIST(state,floorList){
        state.floorList = floorList;
    }
};
let actions={

    // 通过API里面的接口函数调用，向服务器发请求
    async categoryList({commit}){
       let result=await reqCategoryList();
        if(result.code==200){
            commit("CATEGORYLIST",result.data);
        }
    },
    async getBannerList({commit}){
       let result=await reqGetBannnerList()
       if(result.code==200){
        commit('GETBANNERLIST',result.data)
       }
    },
    async getFloorList({ commit, state, dispatch }) {
        let result = await reqFloorList();
        if (result.code == 200) {
            commit('GETFLOORLIST', result.data);
            // console.log(result.data);
        }
    }
};

const getters={};
export default{
    state,
    mutations,
    actions,
    getters
}