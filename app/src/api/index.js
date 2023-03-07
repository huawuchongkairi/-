// 当前这个模块：API进行统一管理
import requests from "./request";
import mockRequests from './mockAjax'
// import { get } from "core-js/core/dict"; 
// 三级联动接口
// /api/product/getBaseCategoryList   get 无参数
 //  发请求 :axios发请求返回的是Promise对象
export const reqCategoryList=()=>requests({url:'/product/getBaseCategoryList',method:'get'});

export const reqGetBannnerList=()=>mockRequests.get('/banner');

//获取floor数据
export const reqFloorList=()=>mockRequests.get('/floor')


export const reqGetSearchInfo=(params)=>requests({url:"/list",method:"post",data:params})

export const reqGoodsInFo=(skuId)=>requests({url:`/item/${skuId}`,method:'get'})

// 将产品添加到购物车中
export const reqAddOrUpdateShopCart=(skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'});

// 获取购物车列表接口
export const reqCartList=()=>requests({url:'/cart/cartList',method:'get'})

export const reqDeleteCartById=(skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})

export const reqUpdateChecked=(skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'});
