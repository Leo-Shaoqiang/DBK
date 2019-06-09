/* eslint-disable */
<template>
        <div>
                <el-row>
                        <el-col>
                                <div class="tag-classify">分类</div>
                        </el-col>
                </el-row>
                <el-row>
                        <el-col>
                                <div class="classify-box">
                                        <el-row>
                                                <el-col :span="20" class="place">
                                                        <el-button type="warning" style="float:left;">地区</el-button>
                                                        <div style="float:left;" v-for="(place,index) in places"
                                                                class="button-place" @click="change(index,$event)"
                                                                :class="{background:changebackground==index}">
                                                                {{place.name}}
                                                        </div>
                                                </el-col>
                                        </el-row>
                                        <el-row>
                                                <el-col :span="20" class="place">
                                                        <el-button type="warning" style="float:left;">年份</el-button>
                                                        <div style="float:left;" v-for="(year,index2) in years"
                                                                class="button-place" @click="change2(index2,$event)"
                                                                :class="{background:changebackground2==index2}">
                                                                {{year.name}}
                                                        </div>
                                                </el-col>
                                        </el-row>
                                        <el-row>
                                                <el-col :span="20" class="place">
                                                        <el-button type="warning" style="float:left;">类型</el-button>
                                                        <div style="float:left;" v-for="(cla,index3) in classes"
                                                                class="button-place" @click="change3(index3,$event)"
                                                                :class="{background:changebackground3==index3}">
                                                                {{cla.name}}
                                                        </div>
                                                </el-col>
                                        </el-row>
                                        <el-row>
                                                <el-col :span="20" class="place">
                                                        <el-button type="warning" style="float:left;">主要演员</el-button>
                                                        <div style="float:left;" v-for="(actor,index4) in actors"
                                                                class="button-place" @click="change4(index4,$event)"
                                                                :class="{background:changebackground4==index4}">
                                                                {{actor.name}}
                                                        </div>
                                                </el-col>
                                        </el-row>
                                </div>
                        </el-col>
                </el-row>
                <el-row>

                        <el-col :span="2" :offset="2">
                                <div class="tag-hot">分类博客</div>
                        </el-col>
                        <el-col :span="6" :offset="11">
                                <div class="tag-write">
                                        <el-button type="warning" class="el-icon-edit" style="margin-top:20px;"
                                                @click="write">写博客</el-button>
                                </div>
                        </el-col>
                        </el-col>
                </el-row>
                <div class="index">
                        <ul v-for="(item,index) in lis" :key="item._id">
                                <li>
                                        <div class="back">
                                                <el-row>
                                                        <el-row>
                                                                <el-col :span="6"
                                                                        style="margin-left:5%;padding-top:2%;">
                                                                        <img src="../assets/imgs/icons/head2.jpg"
                                                                                width="50px" style="float:left;">
                                                                        <span id="usersname"
                                                                                style="float:left;margin-top:20px;">{{item.Auid}}</span>
                                                                </el-col>
                                                                <el-col :span="16" style="padding-top:2%;">
                                                                        <!-- <h1>{{item._id}}</h1>   id                                    -->
                                                                        <div class="blogt">
                                                                                <h2>{{item.title}}</h2>
                                                                                <h4>{{item.tag}}</h4>
                                                                        </div>
                                                                </el-col>
                                                        </el-row>
                                                        <el-row style="margin-top:2%;margin-bottom:2%;">
                                                                <el-col :span="6" style="margin-left:2%;">
                                                                        <div class="box-img">
                                                                                <img src="../assets/imgs/jay.jpg"
                                                                                        style="width:300px;height:200px">
                                                                        </div>
                                                                </el-col>
                                                                <el-col :span="12" style="margin-left:5%;">
                                                                        <div class="box-content">
                                                                                <h5 v-html="item.content"> </h5>
                                                                        </div>
                                                                        <ul class="communication">
                                                                                <li><img src="../assets/imgs/icons/bonus1.png"
                                                                                                width="40px"
                                                                                                v-show="isLiked !== index"
                                                                                                @click="ClickBar(index)">
                                                                                        <img src="../assets/imgs/icons/bonus2.png"
                                                                                                width="40px"
                                                                                                style="display:none;"
                                                                                                v-show="isLiked === index"
                                                                                                @click="ClickBar(index)">
                                                                                </li>
                                                                                <li><img src="../assets/imgs/icons/star1.png"
                                                                                                width="40px"
                                                                                                v-show="star !== index"
                                                                                                @click="ClickStar(index)">
                                                                                        <img src="../assets/imgs/icons/star2.png"
                                                                                                width="40px"
                                                                                                style="display:none;"
                                                                                                v-show="star === index"
                                                                                                @click="ClickStar(index)">
                                                                                </li>
                                                                                <li class="share"><img
                                                                                                src="../assets/imgs/icons/share.png"
                                                                                                width="38px">
                                                                                </li>
                                                                                <li width="38px">
                                                                                        <router-link
                                                                                                :to="{name:'ContentInfo',params:{id:item._id}}">
                                                                                                阅读全文》
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
        export default {
                data() {
                        return {
                                places: [{
                                        name: '美国'
                                },
                                {
                                        name: '国产'
                                },
                                {
                                        name: '日韩'
                                },
                                {
                                        name: '欧洲'
                                },
                                {
                                        name: '泰国'
                                },
                                {
                                        name: '其他'
                                },
                                ],
                                years: [{
                                        name: '2019'
                                },
                                {
                                        name: '2010-2018'
                                },
                                {
                                        name: '00年代'
                                },
                                {
                                        name: '90年代'
                                },
                                {
                                        name: '80年代'
                                },
                                {
                                        name: '其他'
                                },
                                ],
                                classes: [{
                                        name: '喜剧'
                                },
                                {
                                        name: '科幻'
                                },
                                {
                                        name: '动作'
                                },
                                {
                                        name: '文艺'
                                },
                                {
                                        name: '爱情'
                                },
                                {
                                        name: '恐怖'
                                },
                                {
                                        name: '其他'
                                },
                                ],
                                actors: [{
                                        name: '成龙'
                                },
                                {
                                        name: '李连杰'
                                },
                                {
                                        name: '蔡徐坤'
                                },
                                {
                                        name: '周杰伦'
                                },
                                {
                                        name: '沈腾'
                                },
                                {
                                        name: '史泰龙'
                                },
                                {
                                        name: '其他'
                                },
                                ],
                                changebackground: 0,
                                changebackground2: 0,
                                changebackground3: 0,
                                changebackground4: 0,
                                link: 'ContentInfo/$(this.id)',
                                title: '',
                                tag: '',
                                content: '',
                                // 分页
                                lis: [],
                               my:"",
                                //点赞  收藏
                                isLiked: -1,
                                star: -1,
                        }
                },
                methods: {
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
                        write() {
                                this.$router.replace('/issue');
                        },
                        change(index, e) {
                                this.changebackground = index;
                               this.my=e.target.innerHTML.trim()
                                console.log(this.my)
                                this.axios.post('/users/Movie', {"my":this.my}).then((res) => {
                                         this.lis = res.data;
                console.log(res.data)
            })
                        },
                        // 地区栏的方法
                        change2(index2, e) {
                                this.changebackground2 = index2;
                                console.log(e.target.innerHTML)
                        },
                        // 年份栏的方法
                        change3(index3, e) {
                                this.changebackground3 = index3
                                console.log(e.target.innerHTML)
                        },
                        // 类型栏的方法
                        change4(index4, e) {
                                this.changebackground4 = index4
                                console.log(e.target.innerHTML)
                        },
                        // 演员栏的方法
                },
                
        }
</script>
<style>
        .tag-classify {
                margin-left: 10%;
                border: 1px solid yellow;
                background-color: gold;
                color: white;
                width: 80px;
                height: 40px;
                font-size: 30px;
                margin-top: 5%;
        }

        .classify-box {
                margin-left: 10%;
                border: 3px solid gold;
                color: white;
                width: 80%;
                height: 400px;
        }

        .place {
                margin-top: 3%;
                margin-left: 5%;
        }

        .button-place {
                line-height: 40px;
                float: left;
                color: black;
                border: 1px;
                width: 10%;
                height: 40px;
                cursor: pointer;
        }

        .font {
                margin-left: 10%;
                margin-top: 10%;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                font-size: 20px;
        }

        .background {
                color: white;
                background-color: orange;
        }

        .blogt {
                float: left
        }

        .el-dropdown-link {
                cursor: pointer;
                color: goldenrod;
        }

        .el-icon-arrow-down {
                font-size: 12px;
        }

        .tag-write {
                width: 150px;

        }

        .tag-hot {
                border: 1px;
                margin-top: 5%;
                color: goldenrod;
                width: 200px;
                height: 60px;
                font-size: 40px;
                margin-left: 5%;

        }

        .back {
                border: 1px;
        }

        .back :hover {
                background-color: rgb(250, 245, 245);
        }

        .box-content {
                border: 1px;
                width: 100%;
                height: 150px;
                border-top: 1px solid goldenrod;
                ;
                overflow: hidden;
                margin-left: 5%;
        }

        .sidebar {
                position: absolute;
                top: -30px;
                left: 75%;
                border: 1px;
                margin-left: 1%;
        }

        .box-img {
                border: 1px solid black;
                width: 300px;
                height: 200px;
        }

        .index {
                border: 3px;
                border-top: 2px solid goldenrod;
                margin-left: 10%;
                width: 60%;
                height: 1400px;
        }

        .box {
                border: 1px solid #f7fa63;
                margin-left: 0;
                width: 100%;
                height: 300px;
        }

        .communication {
                list-style-type: none;
                position: absolute;
                bottom: 10px;
                width: 300px;
                left: 65%;
        }

        .communication ul {
                position: relative;
                float: right;
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

        .littlechart {
                border: 1px;
                width: 350px;
                height: 300px;
                position: absolute;
                left: 75%;
                top: 600px;
        }
</style>