<template>
    <div class="index">
        <el-row>
        <el-col :span="5">
            <div class="box">
            <img src="../../src/assets/imgs/icons/head2.jpg" width="50px" style="float:left;">
            <span id="usersname" style="float:left;margin-top:20px;">用户ID</span>
            <br>
            <img src="../../src/assets/imgs/icons/head1.jpg" width="50%;" style="margin:0 25%;">
            <p>艾迪（汤姆·哈迪 Tom Hardy 饰）是一位深受观众喜爱的新闻记者，和女友安妮（米歇尔·威廉姆斯Michelle Williams饰）相恋多年，彼此之间感情十分要好。
            </p>
            <ul class="communication">
                <li class="bonus"><img src="../../src/assets/imgs/icons/bonus1.png" width="25px"><img src="../../src/assets/imgs/icons/bonus2.png" width="25px" style="display:none;"></li>
                <li class="star"><img src="../../src/assets/imgs/icons/star1.png" width="25px"><img src="../../src/assets/imgs/icons/star2.png" width="25px" style="display:none;"></li>
                <li class="share"><img src="../../src/assets/imgs/icons/share.png" width="23px"></li>
            </ul>
            </div>
        </el-col>
        <el-col :span="5">
            <div class="box">
            <img src="../../src/assets/imgs/icons/head2.jpg" width="50px" style="float:left;">
            <span id="usersname" style="float:left;margin-top:20px;">用户ID</span>
            <br>
            <img src="../../src/assets/imgs/icons/head1.jpg" width="50%;" style="margin:0 25%;">
            <p>艾迪（汤姆·哈迪 Tom Hardy 饰）是一位深受观众喜爱的新闻记者，和女友安妮（米歇尔·威廉姆斯Michelle Williams饰）相恋多年，彼此之间感情十分要好。
            </p>
            <ul class="communication">
                <li class="bonus"><img src="../../src/assets/imgs/icons/bonus1.png" width="25px"><img src="../../src/assets/imgs/icons/bonus2.png" width="25px" style="display:none;"></li>
                <li class="star"><img src="../../src/assets/imgs/icons/star1.png" width="25px"><img src="../../src/assets/imgs/icons/star2.png" width="25px" style="display:none;"></li>
                <li class="share"><img src="../../src/assets/imgs/icons/share.png" width="23px"></li>
            </ul>
            </div>
        </el-col>
        <el-col :span="5">
            <div class="box">
            <img src="../../src/assets/imgs/icons/head2.jpg" width="50px" style="float:left;">
            <span id="usersname" style="float:left;margin-top:20px;">用户ID</span>
            <br>
            <img src="../../src/assets/imgs/icons/head1.jpg" width="50%;" style="margin:0 25%;">
            <p>艾迪（汤姆·哈迪 Tom Hardy 饰）是一位深受观众喜爱的新闻记者，和女友安妮（米歇尔·威廉姆斯Michelle Williams饰）相恋多年，彼此之间感情十分要好。
            </p>
            <ul class="communication">
                <li class="bonus"><img src="../../src/assets/imgs/icons/bonus1.png" width="25px"><img src="../../src/assets/imgs/icons/bonus2.png" width="25px" style="display:none;"></li>
                <li class="star"><img src="../../src/assets/imgs/icons/star1.png" width="25px"><img src="../../src/assets/imgs/icons/star2.png" width="25px" style="display:none;"></li>
                <li class="share"><img src="../../src/assets/imgs/icons/share.png" width="23px"></li>
            </ul>
            </div>
        </el-col>
        <SideBar></SideBar>
        </el-row>
        <el-row>
        <el-col :span="5">
            <div class="box">
            <img src="../../src/assets/imgs/icons/head2.jpg" width="50px" style="float:left;">
            <span id="usersname" style="float:left;margin-top:20px;">用户ID</span>
            <br>
            <img src="../../src/assets/imgs/icons/head1.jpg" width="50%;" style="margin:0 25%;">
            <p>艾迪（汤姆·哈迪 Tom Hardy 饰）是一位深受观众喜爱的新闻记者，和女友安妮（米歇尔·威廉姆斯Michelle Williams饰）相恋多年，彼此之间感情十分要好。
            </p>
            <ul class="communication">
                <li class="bonus"><img src="../../src/assets/imgs/icons/bonus1.png" width="25px"><img src="../../src/assets/imgs/icons/bonus2.png" width="25px" style="display:none;"></li>
                <li class="star"><img src="../../src/assets/imgs/icons/star1.png" width="25px"><img src="../../src/assets/imgs/icons/star2.png" width="25px" style="display:none;"></li>
                <li class="share"><img src="../../src/assets/imgs/icons/share.png" width="23px"></li>
            </ul>
            </div>
        </el-col>
        </el-row>
    </div>
</template>
<script>
    import SideBar from "@/components/SideBar.vue";
    export default {
    components: {
        SideBar,
    },
    mounted() {
        var check1=0;
        var check2=0;
        $(".bonus").on('click',function(){
            if(check1==0)
            {
                $(this).children("img:first").hide();
                $(this).children("img:last").show();
                check1=1;
            }
            else if(check1==1)
            {
                $(this).children("img:first").show();
                $(this).children("img:last").hide();
                check1=0;
            }
         });
         $(".star").on('click',function(){
            if(check2==0)
            {
                $(this).children("img:first").hide();
                $(this).children("img:last").show();
                check2=1;
            }
            else if(check2==1)
            {
                $(this).children("img:first").show();
                $(this).children("img:last").hide();
                check2=0;
            }
         });
    },
}
</script>
<style>
    .el-row
    {
        width:100%;
    }
    .index
    {
        margin-top: 3%;
        border: 3px solid yellow;
        margin-left: 5%;
        width: 90%;
        height: 1500px;
    }
    .box
    {
        border: 1px solid rgb(248, 250, 159);
        margin-left: 0;
        width: 100%;
        height: 500px;
    }
    .communication
    {
        list-style-type:none;
        float: left;
        position: absolute;
        bottom:10px;
        margin-left:30px;
        width:auto;
    }
     .communication ul{
        position: relative;
        margin-top: 20px;
     }
    .communication li
    {
        position: relative;
        display:inline;
        cursor: pointer;
        margin-right:20px;
    }
    p
    {
        font-size:15px;
        margin:7% 5%;
        width:80%;
        height:100%;
    }
</style>