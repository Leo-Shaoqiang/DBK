<template>
    <div id="sidebar">
        <el-button type="warning" class="button-hot">实时热搜</el-button>
        <div class="hot-issues">
            <ul>
            <li>绿皮书</li>
            <li>流浪地球</li>
            <li>爱乐之城</li>  
            <li>白蛇.缘起</li> 
            <li>魔术大师的自行车</li> 
            <li>等我们在一起的时候</li> 
            <li>后看来得我们</li> 
            <li>小幸运</li> 
            <li>白色巨塔</li>
             <li>非自然死亡</li> 
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
    margin:0;
    font-size:20px;
}
#sidebar
{
   
    width:350px;
    float: right;
    margin-right: 7%;
    height:300px;
}
.hot-issues
{
    background-image: url("../assets/imgs/hotback.jpg") ;
    background-size: 100% 100%;
    /* border:1px solid orange; */
    border-radius:25px;
   box-shadow: 0 20px 18px rgba(41, 39, 37, 0.12);
    height:500px;
    width:100%;
    font-size:20px;
}
ul
{
    list-style-type: none;
}
li
{
     margin-top:20px;
    height:5%;
    margin:2% 0;
}
</style>