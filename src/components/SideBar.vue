<template>
    <div id="sidebar">
        <el-button type="warning" class="button-hot">实时热搜</el-button>
        <div class="hot-issues">
            <ul>
            <li>绿皮书</li>
            <li>流浪地球</li>
            <li>爱乐之城</li>
            <li>白蛇.缘起</li>

            </ul>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style>
    #sidebar
    {
        float:right;
    }
    .button-hot {
        position: relative;
        right: -540px;
        top: 200px;
    }
    .hot-issues {
        position: relative;
        display: inline-block;
        width: 300px;
        height: 300px;
         right: -410px;
        top: 380px;
        border: 1px solid #FF9D00;
       border-radius: 10px;
    }
    .hot-issues ul li{
        padding: 10px 10px;
        list-style-type: none;
    }
    
</style>