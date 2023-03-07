<template>
    <div class="pagination">
        <button :disabled="pageNo==1" @click="$emit('getPageNo',pageNo-1)">上一页</button>
        <button v-if="startNumEndNum.start>1" @click="$emit('getPageNo',1)" :class="{active:pageNo==1}">1</button>
        <button v-if="startNumEndNum.start>2">···</button>
        <!-- 中间部分 -->
       
        <button v-for="page in startNumEndNum.end" :key="page" v-if="page >= startNumEndNum.start" @click="$emit('getPageNo',page)" :class="{active:pageNo==page}">{{ page }}</button>
        <button v-if="startNumEndNum.end<totalPage-1">...</button>
        <button v-if="startNumEndNum.end<totalPage" @click="$emit('getPageNo',totalPage)">{{totalPage}}</button>
        <button :disabled="pageNo==totalPage" @click="$emit('getPageNo',pageNo+1)">下一页</button>
        <button style="margin-left: 30px" :class="{active:getPageNo=totalPage}">共 {{total}} 条</button>
    </div>
</template>
  
<script>
export default {
    name: "Pagination",
    props:['total',"pageSize","pageNo","continues"],
    computed:{
        totalPage() {
      //向上取整数
      return Math.ceil(this.total / this.pageSize);
    },
        // 计算页码其实结束事件
        startNumEndNum() {
      //算出连续页码:开始与结束这两个数字
      let start = 0;
      let  end = 0;
      const { totalPage, continues, pageNo} = this;
      //特殊情况:总共页数小于连续页码数
      if (totalPage < continues) {
        start = 1;
        end = totalPage;
      } else {
        //正常情况：分页器总页数大于连续页码数
        start = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);
        //约束start|end在合理范围之内
        //约束头部
        if (start < 1) {
          start = 1;
          end = continues;
        }
        //约束尾部
        if (end > totalPage) {
          end = totalPage;
          start = totalPage - continues + 1;
        }
      }
      return { end,start };
    },
    }
}
</script>
  
<style lang="less" scoped>
.pagination{
    text-align: center;
}
.pagination {
    button {
        margin: 0 5px;
        background-color: #f4f4f5;
        color: #606266;
        outline: none;
        border-radius: 2px;
        padding: 0 4px;
        vertical-align: top;
        display: inline-block;
        font-size: 13px;
        min-width: 35.5px;
        height: 28px;
        line-height: 28px;
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
        border: 0;

        &[disabled] {
            color: #c0c4cc;
            cursor: not-allowed;
        }

        &.active {
            cursor: not-allowed;
            background-color: #409eff;
            color: #fff;
        }
    }
}
.active{
    background-color: skyblue;
}
</style>