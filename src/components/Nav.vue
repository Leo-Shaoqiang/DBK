<template>
    <div>
        <el-row>
            <el-col :span="2" :offset="2">
                <a href="http://localhost:8080/">
                    <h2>返回</h2>
                </a>
            </el-col>
            <el-col :span="10" :offset="1">
                <h2>当前搜索内容为：{{msg}}</h2>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="2" :offset="2">
                <div class="tag-hot">发现博客</div>
            </el-col>
        </el-row>
        <div class="index">
            <ul v-for="(item,index) in list">
                <li>
                    <div class="back1">
                        <el-row>
                            <el-row>
                                <el-col :span="6" style="margin-left:5%;padding-top:2%;">
                                    <img src="../assets/imgs/icons/head2.jpg" width="50px" style="float:left;">
                                    <span id="usersname" style="float:left;margin-top:20px;">用户ID</span>
                                </el-col>
                                <el-col :span="6" style="padding-top:2%;">
                                    <h1>{{item.title}}</h1>
                                    <h3>{{item.tag}}</h3>
                                </el-col>
                            </el-row>
                            <el-row style="margin-top:2%;margin-bottom:2%;">
                                <el-col :span="6" style="margin-left:2%;">
                                    <div class="box-img1">
                                        <img src="../assets/imgs/jay.jpg" style="width:300px;height:200px">
                                    </div>
                                </el-col>
                                <el-col :span="12" style="margin-left:5%;">
                                    <div class="box-content1">
                                        <h5 v-html="item.content"> </h5>
                                    </div>
                                    <ul class="communication1">
                                        <li><img src="../assets/imgs/icons/bonus1.png" width="40px"
                                                v-show="isLiked !== index" @click="ClickBar(index)">
                                            <img src="../assets/imgs/icons/bonus2.png" width="40px"
                                                style="display:none;" v-show="isLiked === index"
                                                @click="ClickBar(index)">
                                        </li>
                                        <li><img src="../assets/imgs/icons/star1.png" width="40px"
                                                v-show="star !== index" @click="ClickStar(index)">
                                            <img src="../assets/imgs/icons/star2.png" width="40px" style="display:none;"
                                                v-show="star === index" @click="ClickStar(index)">
                                        </li>
                                        <li class="share"><img src="../assets/imgs/icons/share.png" width="38px">
                                        </li>
                                        <li width="38px">
                                            <router-link :to="{name:'ContentInfo',params:{id:item._id}}"> 阅读全文》
                                            </router-link>
                                            <router-view></router-view>
                                        </li>
                                    </ul>
                                </el-col>
                            </el-row>
                        </el-row>
                    </div>
                </li>
            </ul>

        </div>

    </div>
</template>

<script>

    import { mapGetters } from 'vuex'
    export default {

        data() {
            return {
                link: 'ContentInfo/$(this.id)',
                title: '',
                tag: '',
                content: '',
                // 分页
                list: [],
                page: 1,
                total: 0,
                //点赞  收藏
                isLiked: -1,
                star: -1,

            };
        },
        computed: mapGetters({
            msg: 'GET_MSG'
        }),
        methods: {
            // 点赞


            ClickBar(index) {
                if (this.isLiked == -1) {
                    this.isLiked = index;
                } else {
                    this.isLiked = -1;
                }
            },
            //收藏
            ClickStar(index) {
                if (this.star == -1) {
                    this.star = index;
                } else {
                    this.star = -1;
                }
            }
        },
        mounted() {
            console.log(this.msg)
            if (this.msg == "") {
                this.$message({
                    type: 'error',
                    message: '搜索失败！内容不能为空',
                    duration: 3000
                })
                this.$router.replace('./');
            } else {
                this.$message({
                    type: 'success',
                    message: '搜索结果如下！',

                })
            };

            this.axios.post('/users/Nav', { "msg": this.msg }).then((res) => {
                this.list = res.data
                console.log(res.data)

            })

        }
    }
</script>

<style>
    .back1 {
        border: 1px;
    }

    .back1 :hover {
        background-color: rgb(250, 245, 245);
    }

    .box-content1 {
        border: 1px;
        width: 100%;
        height: 150px;
        border-top: 1px solid rgb(247, 250, 99);
        overflow: hidden;
        margin-left: 5%;
    }

    .sidebar1 {
        position: absolute;
        top: -30px;
        left: 75%;
        border: 1px;
        margin-left: 1%;
    }

    .box-img1 {
        border: 1px solid black;
        width: 300px;
        height: 200px;
    }

    .index1 {
        border: 3px;
        border-top: 2px solid goldenrod;
        margin-left: 10%;
        width: 60%;
        height: 1400px;
    }

    .box1 {
        border: 1px solid #f7fa63;
        margin-left: 0;
        width: 100%;
        height: 300px;
    }

    .communication1 {
        list-style-type: none;
        position: absolute;
        bottom: 10px;
        width: 300px;
        left: 70%;
    }

    .communication1 ul {
        position: relative;
        float: right;
    }

    .communication1 li {
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