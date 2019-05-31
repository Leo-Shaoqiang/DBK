<template>
    <div>
        <Navbar></Navbar>
        <div class="sea-back">
                
                <el-row>
                        <el-col :span="14" :offset="12">
                                <img src="../assets/imgs/headerimg.jpg" class="font-img">
                                 <div class="font-title">{{title}}</div>
                        </el-col>
                    </el-row>
            </div>
            <el-container>
                <el-aside width="320px" style="margin-top:100px;margin-left:50px;">
                    <div class="comtitle">相关推荐</div>
                    <div class="comstyle">
                        <ul class="comissue" v-for="item in list" :key="item._id">
                            <li><a href="http://localhost:8080/"></a></li>
                        </ul>
                    </div>
                </el-aside>
                <el-container>
                    <el-main>
                        
                        <el-row style="margin-top:5%;">
                            <el-col :span="4" :offset="4">
                                <div class="font-tag">用户id:yyc123</div>
                            </el-col>
                            <el-col :span="4" :offset="2">
                                <div class="font-tag">推荐星级:
                                    <el-rate v-model="value" disabled show-score text-color="#ff9900"
                                        score-template="{value}">
                                    </el-rate>

                                </div>
                            </el-col>
                            <el-col :span="8" :offset="2">
                                <div class="font-tag">发表于：{{this.time}}</div>
                            </el-col>
                        </el-row>
                        <el-row style="margin-top:5%;">
                            <el-col :span="18" :offset="2">
                                <div class="font-content" v-html="content"></div>
                            </el-col>
                        </el-row>

                        <el-row>
                             <el-col :span="4" :offset="2">
                                       
                                              <div class="block"  style="padding-top:10px;">
                                                    <span class="demonstration" style="display: inline">你的评价：</span>
                                                    <el-rate v-model="value1"  style="display: inline"></el-rate>
                                                  </div>
                                    </el-col>
                            <el-col :span="1" :offset="9">
                                <img src="../assets/imgs/icons/review1.png" @click="comment" style="width:50px;height:40px;">

                            </el-col>
                            <el-col :span="4">

                                <ul class="detail">
                                    <li>
                                        <img src="../assets/imgs/icons/bonus1.png" width="40px"
                                            v-show="isLiked !== index" @click="ClickBar(index)">
                                        <img src="../assets/imgs/icons/bonus2.png" width="40px" style="display:none;"
                                            v-show="isLiked === index" @click="ClickBar(index)">
                                    </li>
                                    <li><img src="../assets/imgs/icons/star1.png" width="40px" v-show="star !== index"
                                            @click="ClickStar(index)">
                                        <img src="../assets/imgs/icons/star2.png" width="40px" style="display:none;"
                                            v-show="star === index" @click="ClickStar(index)">
                                    </li>
                                    <li class="share"><img src="../assets/imgs/icons/share.png" width="38px">
                                    </li>

                                </ul>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="16" :offset="2">
                                <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="input"
                                    style="display: none" v-show="true">
                                </el-input>

                            </el-col>
                            <el-col :span="2">
                                <el-button icon="el-icon-edit" v-on:click="send" v-show="true">发送</el-button>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="17" :offset="2">
                                <ul v-for="item in lists" :key="item._id">
                                    <li>
                                            <div class="comment-content">
                                                <img src="../assets/imgs/a2.png"
                                            style="width:50px;height:30px;float:left; border-radius: 80px;">
                                            <div style="text-align:left">&nbsp;:&nbsp;&nbsp;&nbsp;{{item.comment}}</div>
                                        </div>
                                    </li>
                                </ul>
                            </el-col>
                        </el-row>
                    </el-main>
                </el-container>



            </el-container>


        





    </div>

</template>

<script>

    import Navbar from '@/views/Navbar.vue';
    export default {
        name: "ContentInfo",
        data() {
            return {
                title: '',
                tag: '',
                content: '',
                id: '',
                isLiked: -1,
                star: -1,
                input: "",
                flag: false,
                lists: [],
                index: "",
                list: [],
                value:3.7,
                time:'',
                colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
                value1:null
            }
        },
        components: {
            Navbar,

        },
        methods: {
            send() {
                console.log(this.input);
                this.axios.post('/users/ContentInfo/Submit/' + this.id, { 'input': this.input }).then((res) => {
                    
                })
                if(this.input==''){
                    this.$message({
                                        type: 'error',
                                        message: '评论失败！内容不能为空',
                                        duration:3000
                                    })
                        
                    }else{
                        this.$message({
                                        type: 'success',
                                        message: '发表成功！',
                                        duration:3000
                                    })
                this.lists.push({ 'comment': this.input })
                this.input=''
                    }

            },
            comment() {
                this.flag = !this.flag
            },
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
            },
        },
        mounted() {
            this.id = this.$route.params.id
            this.axios.get('/users/ContentInfo/' + this.id).then((res) => {
                this.time = res.data.blog.time
                this.title = res.data.blog.title
                this.lists = res.data.comt;
                console.log(this.lists)
                this.content = res.data.blog.content

            })

        }


    }
</script>


<style>
    * {
        margin: 0;
        padding: 0;
    }

    /* 头部标题 */
    .sea-back {
        background-image: url('../assets/imgs/sea.jpg');
        background-size:100% 100%;
        width: 100%;
        height:600px;
    }

    .font-title {
        color:cornsilk;
        font-size:80px;
        margin-top:500px;
        border: 1px;
        border-bottom: 1px solid goldenrod;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        float: left;
        font-size: 40px;
    }
    .font-img{
        width:150px;
        position: absolute;
        top:300px;
        left:49%;
        height:150px;
        border-radius:80px;
    }
    .font-tag {
        font-family: Arial, Helvetica, sans-serif;
        float: left;
        font-size: 30px;
    }

    .font-content {
        width: 100%;
        font-family: Arial, Helvetica, sans-serif;
        border: 1px;
        float: left;

        background-color: ivory;
    }

    .comtitle {
        margin-left: 100px;
        width: 100px;
        margin-top: 25px;
        padding: 10px 20px;
        background-color: orange;
        color: white;
        font-family: 幼圆;
        border-radius: 3px;
    }

    .comstyle {
        border: 1px solid orange;
        width: 98%;
        height: 500px;
        background-color: ivory;
    }

    .comissue {
        list-style-type: none;

    }

    .comissue li {
        margin-bottom: 5px;
    }


    /* 点赞 收藏 转发  */
    .detail {
        width: 300px;
        list-style-type: none;
        float: right;
        bottom: 10px;
    }

    .detail ul {
        position: relative;
        margin-top: 20px;
        margin-left: 300px;

    }

    .detail li {
        display: inline;
        cursor: pointer;
        margin-right: 10%;

    }
    .comment-content{
        width:100%;
        border-top:1px;
        
    }
   
</style>