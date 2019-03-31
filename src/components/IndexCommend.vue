<template>
    <div>
        <el-button type="warning"  class="button-commend" >推荐</el-button>
        <span class="hot-list" >按热度排名</span>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
/* 首页推荐 */

  /* 推荐按钮 */
  .el-button--warning{
    background-color: #FF9D00 !important;
  }
  .button-commend{
    position: relative;
    float: left;
    left: 100px;
    top: 80px;
  }
  .hot-list{
    position: relative;
    display: inline-block;
    float: left;
    left: 200px;
    top:90px;
  }
</style>