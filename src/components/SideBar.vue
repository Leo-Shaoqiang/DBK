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
.button-hot
{
    margin:5% 0;
}
#sidebar
{
    width:30%;
    float: right;
    margin-right: 5%;
    height:400px;
}
.hot-issues
{
    border:1px solid orange;
    height:100%;
    width:100%;
}
ul
{
    list-style-type: none;
}
li
{
    height:5%;
    margin:2% 0;
}
</style>