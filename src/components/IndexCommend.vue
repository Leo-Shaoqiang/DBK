<template>
    <div class="index">
        <el-row>
            <IndexCommend></IndexCommend>
            <SideBar></SideBar>
        </el-row>
        <el-row>
        <el-col :span="4">
            <div class="box">
            <img src="" width="25px" style="float:left;">
            <span id="usersname" style="float:left;">用户ID</span>
            <br>
            <img src="" width="200px;">
            <p style="width:200px;">艾迪（汤姆·哈迪 Tom Hardy 饰）是一位深受观众喜爱的新闻记者，和女友安妮（米歇尔·威廉姆斯Michelle Williams饰）相恋多年，彼此之间感情十分要好。安妮是一名律师，接手了生命基金会的案件，在女友的邮箱里，艾迪发现了基金会老板德雷克不为人知的秘密....
            </p>
            <ul class="communication">
                <li><img src="../../src/assets/imgs/icons/赞1.png" width="25px"></li>
                <li><img src="../../src/assets/imgs/icons/星星1.png" width="25px"></li>
                <li><img src="../../src/assets/imgs/icons/评论1.png" width="25px"></li>
                <li><img src="../../src/assets/imgs/icons/分享.png" width="23px"></li>
            </ul>
            </div>
        </el-col>
        <el-col :span="4">
            <div class="box">
            <img src="" width="25px" style="float:left;">
            <span id="usersname" style="float:left;">用户ID</span>
            <br>
            <img src="" width="200px;">
            <p style="width:200px;">艾迪（汤姆·哈迪 Tom Hardy 饰）是一位深受观众喜爱的新闻记者，和女友安妮（米歇尔·威廉姆斯Michelle Williams饰）相恋多年，彼此之间感情十分要好。安妮是一名律师，接手了生命基金会的案件，在女友的邮箱里，艾迪发现了基金会老板德雷克不为人知的秘密....
            </p>
            <ul class="communication">
                <li><img src="../../src/assets/imgs/icons/赞1.png" width="25px"></li>
                <li><img src="../../src/assets/imgs/icons/星星1.png" width="25px"></li>
                <li><img src="../../src/assets/imgs/icons/评论1.png" width="25px"></li>
                <li><img src="../../src/assets/imgs/icons/分享.png" width="23px"></li>
            </ul>
            </div>
        </el-col>
        <el-col :span="4">
            <div class="box">
            <img src="" width="25px" style="float:left;">
            <span id="usersname" style="float:left;">用户ID</span>
            <br>
            <img src="" width="200px;">
            <p style="width:200px;">艾迪（汤姆·哈迪 Tom Hardy 饰）是一位深受观众喜爱的新闻记者，和女友安妮（米歇尔·威廉姆斯Michelle Williams饰）相恋多年，彼此之间感情十分要好。安妮是一名律师，接手了生命基金会的案件，在女友的邮箱里，艾迪发现了基金会老板德雷克不为人知的秘密....
            </p>
            <ul class="communication">
                <li><img src="../../src/assets/imgs/icons/赞1.png" width="25px"></li>
                <li><img src="../../src/assets/imgs/icons/星星1.png" width="25px"></li>
                <li><img src="../../src/assets/imgs/icons/评论1.png" width="25px"></li>
                <li><img src="../../src/assets/imgs/icons/分享.png" width="23px"></li>
            </ul>
            </div>
        </el-col>
        <el-col :span="4">
            <div class="box">
            <img src="" width="25px" style="float:left;">
            <span id="usersname" style="float:left;">用户ID</span>
            <br>
            <img src="" width="200px;">
            <p style="width:200px;">艾迪（汤姆·哈迪 Tom Hardy 饰）是一位深受观众喜爱的新闻记者，和女友安妮（米歇尔·威廉姆斯Michelle Williams饰）相恋多年，彼此之间感情十分要好。安妮是一名律师，接手了生命基金会的案件，在女友的邮箱里，艾迪发现了基金会老板德雷克不为人知的秘密....
            </p>
            <ul class="communication">
                <li><img src="../../src/assets/imgs/icons/赞1.png" width="25px"></li>
                <li><img src="../../src/assets/imgs/icons/星星1.png" width="25px"></li>
                <li><img src="../../src/assets/imgs/icons/评论1.png" width="25px"></li>
                <li><img src="../../src/assets/imgs/icons/分享.png" width="23px"></li>
            </ul>
            </div>
        </el-col>
        <el-col :span="4">
            <div class="box">
            <img src="" width="25px" style="float:left;">
            <span id="usersname" style="float:left;">用户ID</span>
            <br>
            <img src="" width="200px;">
            <p style="width:200px;">艾迪（汤姆·哈迪 Tom Hardy 饰）是一位深受观众喜爱的新闻记者，和女友安妮（米歇尔·威廉姆斯Michelle Williams饰）相恋多年，彼此之间感情十分要好。安妮是一名律师，接手了生命基金会的案件，在女友的邮箱里，艾迪发现了基金会老板德雷克不为人知的秘密....
            </p>
            <ul class="communication">
                <li><img src="" width="25px"></li>
                <li><img src="" width="25px"></li>
                <li><img src="" width="25px"></li>
                <li><img src="" width="23px"></li>
            </ul>
            </div>
        </el-col>
        </el-row> 
    </div>
</template>
<script>
    import IndexCommend from "@/components/IndexCommend.vue"
    import SideBar from "@/components/SideBar.vue";
    export default {
    components: {
        SideBar,
        ndexCommend
    }
}
</script>
<style>
    .index
    {
        margin-top: 3%;
        border: 3px solid yellow;
        margin-left: 10%;
        width: 80%;
        height: 1200px;
    }
    .box
    {
        border: 1px solid rgb(248, 250, 159);
        margin-left: 0;
        width: 100%;
        height: 494px;
    } 
</style>