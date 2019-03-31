<template>
    <div>
        <div class="wx-code">
            <div class="wx-code-img">
                <img src="../assets/imgs/wx.jpg" width="88" height="88" alt="wx">
                <span>DBK订阅号</span>
            </div>
            <div class="wx-dbk">
                <img src="../assets/imgs/wx.png" width="88" height="88" alt="wx">
                <span>DBK微信号</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style>
        *{
            margin: 0;
            padding: 0;
        }
    .el-footer {
        height: 200px !important;
    }
    .wx-code-img,.wx-dbk {
        display: block;
        float: left;
        margin: 50px;
    }
    .wx-code-img>span,.wx-dbk>span {
        display: block;
     
    }
    .wx-code {
        display: block;
        float: left;
        width: 400px;
        height: 200px;
    }
    .wx-chat {
        display: inline-block;
    }
    .el-footer{
        position: relative;;
        bottom: 0;
        
        width: 100%;
        height: 200px;
        background-color: beige;
    }
</style>