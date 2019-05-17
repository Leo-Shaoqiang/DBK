<template>
    <el-row>
        <el-col :span="3" :offset="3">
            <div class="border1">
                <div class="font1">&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;电&nbsp;&nbsp;&nbsp;影</div>

                <img src="../assets/imgs/movie.jpg" class="img1">
            </div>
        </el-col>
        <el-col :span="3" :offset="1">
            <div class="border1">
                <div class="font1">&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;美&nbsp;&nbsp;&nbsp;食</div>

                <img src="../assets/imgs/food.jpg" class="img1">
            </div>
        </el-col>
        <el-col :span="3" :offset="1">
            <div class="border1">
                <div class="font1">&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;旅&nbsp;&nbsp;&nbsp;游</div>

                <img src="../assets/imgs/tral.jpg" class="img1">
            </div>
        </el-col>
        <el-col :span="3" :offset="1">
            <div class="border1">
                <div class="font1">&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;音&nbsp;&nbsp;&nbsp;乐</div>

                <img src="../assets/imgs/music.jpg" class="img1">
            </div>
        </el-col>
        <el-col :span="3" :offset="1">
                <div class="border1">
                    <div class="font1">&nbsp;&nbsp;&nbsp;关于Share</div>
    
                    <img src="../assets/imgs/share.jpg" class="img1">
                </div>
            </el-col>
    </el-row>
</template>

<script>
    export default {
    }
</script>

<style>
    .border1 {
        border: 1px;
        width: 230px;
        height: 120px;
    }

    .img1 {
        cursor:pointer;
        filter: blur(2px);
        width: 230px;
        height: 120px;
        z-index: -99;
    }

    .font1 {
        line-height: 100px;
        color: white;
        position: absolute;

        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 40px;
        z-index: 99;
    }
</style>