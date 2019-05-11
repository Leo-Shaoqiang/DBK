<template>
    <div>
        <div class="index">
            <div class="back">
            <el-row>
                <el-row>
                    <el-col :span="20" style="margin-left:5%;">
                        <img src="../../src/assets/imgs/icons/head2.jpg" width="50px" style="float:left;">
                        <span id="usersname" style="float:left;margin-top:20px;">用户ID</span>
                    </el-col>
                </el-row>
                <el-row style="margin-top:2%;margin-bottom:2%;">
                   
                    <el-col :span="4" style="margin-left:2%;">
                            <div class="box-img">
                        <img src="../../src/assets/imgs/icons/head1.jpg" style="width:200px;height:300px;float:left">
                    </div>
                    </el-col>
                    
                    <el-col :span="18">
                        <div class="title">
                            <h1>关于毒液的简介</h1>
                        </div>
                        <div class="box-content">

                        <h5>艾迪（汤姆·哈迪 Tom Hardy 饰）是一位深受观众喜爱的新闻记者，和女友安妮（米歇尔·威廉姆斯Michelle Williams饰）相恋多年，
                            彼此之间感情十分要好。
                            《毒液：致命守护者》是美国哥伦比亚电影公司、腾讯影业、漫威影业联合出品，索尼电影娱乐公司发行的科幻电影，由鲁本·弗雷斯彻
                            执导，汤姆·哈迪、米歇尔·威廉姆斯、里兹·阿迈德等人主演。影片改编自漫威漫画，讲述了埃迪·布洛克受到不明外星物质共生体的入侵
                            与控制，成为亦正亦邪的另类超级英雄的故事。该片于2018年10月5日在美国上映，2018年11月9日在中国大陆上映。 >>></h5>
                            </div>
                            <ul class="communication">
                                    <li class="bonus"><img src="../../src/assets/imgs/icons/bonus1.png" width="40px"><img
                                            src="../../src/assets/imgs/icons/bonus2.png" width="40px" style="display:none;"></li>
                                    <li class="star"><img src="../../src/assets/imgs/icons/star1.png" width="40px"><img
                                            src="../../src/assets/imgs/icons/star2.png" width="40px" style="display:none;"></li>
                                    <li class="share"><img src="../../src/assets/imgs/icons/share.png" width="38px"></li>
                                </ul>
                        </el-col>
                </el-row>
               
            </el-row>
            </div>
        </div>
        <div class="sidebar">
            <SideBar></SideBar>
        </div>
    </div>
</template>
<script>
    import SideBar from "@/components/SideBar.vue";
    export default {
        
        components: {
            SideBar,
        },
        mounted() {
            var check1 = 0;
            var check2 = 0;
            $(".bonus").on('click', function () {
                if (check1 == 0) {
                    $(this).children("img:first").hide();
                    $(this).children("img:last").show();
                    check1 = 1;
                }
                else if (check1 == 1) {
                    $(this).children("img:first").show();
                    $(this).children("img:last").hide();
                    check1 = 0;
                }
            });
            $(".star").on('click', function () {
                if (check2 == 0) {
                    $(this).children("img:first").hide();
                    $(this).children("img:last").show();
                    check2 = 1;
                }
                else if (check2 == 1) {
                    $(this).children("img:first").show();
                    $(this).children("img:last").hide();
                    check2 = 0;
                }
            });
        },
    }
</script>
<style>
    .title{
        border:1px;
        float:left;
        margin-left:5%;
    }
    .back{
        border:1px;
    } 
    .back :hover {
        
        background-color:rgb(250, 245, 245);
    }
    .box-content{
        border:1px;
        margin-top:5%;
        margin-left:5%;
    }
    .sidebar {
        position: absolute;
        top: 0px;
        left: 70%;
        border: 1px;
        margin-left: 5%;
    }
    .box-img{
        border:1px;
        width:200px;
        height:300px;
    }
    .index {
        margin-top: 3%;
        border: 3px solid yellow;
        margin-left: 5%;
        width: 60%;
        height: 1500px;
    }

    .box {
        border: 1px solid rgb(248, 250, 159);
        margin-left: 0;
        width: 100%;
        height: 300px;
    }

    .communication {
        list-style-type: none;
        float: left;
        position: absolute;
        bottom: 10px;
        width: 300px;
    }

    .communication ul {
        position: relative;
        margin-top: 20px;
        float: left;

    }

    .communication li {
        display: inline;
        cursor: pointer;
        margin-right: 10%;
    }

    p {
        font-size: 18px;
        margin: 7% 5%;
        width: 80%;
        height: 100%;
    }

    #usersname {
        font-size: 20px;
    }
</style>