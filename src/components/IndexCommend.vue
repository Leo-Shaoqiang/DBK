<template>
        <div class="index">
                <el-row>
                        <el-col :span="6" :offset="20">
                        

                        
    <div id="sidebar">
        <el-button type="warning">实时热搜</el-button>
        
            <ul>
            <li>绿皮书<i class="el-icon-caret-top"></i></li>
            <li>流浪地球<i class="el-icon-caret-top"></i></li>
            <li>爱乐之城<i class="el-icon-caret-bottom"></i></li>  
            <li>白蛇.缘起<i class="el-icon-caret-top"></i></li>

            </ul>
        
    </div>

                        </el-col>
                </el-row>




        </div>
</template>
<script>
        export default {
                
        }
</script>
<style>
        .index {
                margin-top: 3%;
                border: 3px solid yellow;
                margin-left: 10%;
                width: 80%;
                height: 1200px;
        }

        /* 电影页外面的大边框  */
        #sidebar
    {   
        margin-top:80%;
        border:2px solid gold;
        width:50%;
        height:500px;
    }
    #sidebar ul li{
        padding: 10px 10px;
        list-style-type: none;
    }
</style>