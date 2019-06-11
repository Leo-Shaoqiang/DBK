<template>
    <div>
        <el-row>
            <el-col :span="2" :offset="2">
                <div class="tag-hot">热门博客</div>
            </el-col>
            <el-col :span="2">
                <el-dropdown :hide-on-click="false" style="margin-top:30px;">
                    <span class="el-dropdown-link">
                      筛选<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>时间</el-dropdown-item>
                        <el-dropdown-item>内容</el-dropdown-item>
                        <el-dropdown-item>人物</el-dropdown-item>
                        <el-dropdown-item>事件</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
            <el-col :span="6" :offset="9">
                <div class="tag-write">
                    <el-button type="warning" class="el-icon-edit" style="margin-top:20px;" @click="write">写博客</el-button>
                </div>
            </el-col>
        </el-row>
        <div class="index">
            <ul v-for="(item,index) in lists" :key="item._id">
                <li>
                    <div class="back">
                        <el-row>
                            <el-row>
                                <el-col :span="6" style="margin-left:5%;padding-top:2%;">
                                    <img src="../assets/imgs/icons/head2.jpg" width="50px" style="float:left;">
                                    <span id="usersname" style="float:left;margin-top:20px;">{{item.Auid}}</span>
                                </el-col>
                                <el-col :span="16" style="padding-top:2%;">
                                    <!-- <h1>{{item._id}}</h1>   id                                    -->
                                    <div class="blogt">
                                        <h2 >{{item.title}}</h2>
                                    <h4>{{item.tag}}</h4>
                                    </div>
                                    
                                </el-col>
                            </el-row>
                            <el-row style="margin-top:2%;margin-bottom:2%;">
                                <el-col :span="6" style="margin-left:2%;">
                                    <div class="box-img">
                                        <img src="../assets/imgs/jay.jpg" style="width:300px;height:200px">
                                    </div>
                                </el-col>
                                <el-col :span="12" style="margin-left:5%;">
                                    <div class="box-content">
                                        <h5 v-html="item.content"> </h5>
                                    </div>
                                    <ul class="communication">
                                        <li><img src="../assets/imgs/icons/bonus1.png" width="40px" v-show="isLiked !== index" @click="ClickBar(index)">
                                            <img src="../assets/imgs/icons/bonus2.png" width="40px" style="display:none;" v-show="isLiked === index"  @click="ClickBar(index)" >
                                        </li>
                                        <li><img src="../assets/imgs/icons/star1.png" width="40px" v-show="star !== index" @click="ClickStar(index)" >
                                            <img src="../assets/imgs/icons/star2.png" width="40px" style="display:none;" v-show="star === index"  @click="ClickStar(index)" > 
                                        </li>
                                        <li class="share"><img src="../assets/imgs/icons/share.png" width="38px">
                                        </li>
                                         <li width="38px"><router-link :to="{name:'ContentInfo',params:{id:item._id}}"> 阅读全文》
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
            <el-pagination background layout="prev, pager,
                next" @current-change="currentChange" :total="total" :page-size="3">
            </el-pagination>
        </div>
        <div class="sidebar">
            <SideBar></SideBar>
        </div>
        <div class="littlechart">
            <Littlechart></Littlechart>
        </div>
    </div>
</template>
<script>
    import SideBar from "@/components/SideBar.vue";
    import Littlechart from "@/components/Littlechart.vue";
    export default {
        data() {
            return {
                // 文章
                link: 'ContentInfo/$(this.id)',
                title: '',
                tag: '',
                content: '',
                // 分页
                lists: [],
                page: 1,
                total: 0,
                //点赞  收藏
                isLiked: -1,
                star: -1,
            }
        },
        components: {
            SideBar,
            Littlechart
        },
        created() {
            this.getData();
        },
        methods: {
            // 点赞
            ClickBar(index) {
                if(this.isLiked == -1){
                    this.isLiked = index;
                
                }else{
                    this.isLiked = -1;
                }
            },
            //收藏
            ClickStar(index){
                if(this.star == -1){
                    this.star = index;
                }else{
                    this.star = -1;
                }
            },
            write() {
                this.$router.replace('/issue');
            },
            currentChange(page) {
                this.page = page;
                this.getData();
            },
            getData() {
                this.axios
                .get(`/users/list?page=${this.page}`)
                .then(res =>res.data) 
                .then(({ data })=>{
                    this.lists = data.lists;
                    this.total = data.pagination.total;
                    // console.log(data.lists);                
                })  
                }
            },
        mounted() {
            this.axios.get('/users/', this.blog).then((res) => {
                this.lists = res.data;
                // console.log(this.lists)
            })
        },
    }
</script>
<style>
    .el-dropdown-link {
    cursor: pointer;
    color: goldenrod;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
    .tag-write{
        width:150px;
       
    }
    .tag-hot{
        border:1px;
        margin-top:5%;
        color:goldenrod;
        width:200px;
        height:60px;
        font-size:40px;
        margin-left:5%;
        
    }
    
    .back {
        border: 1px;
    }
    .back :hover {
        background-color: rgb(250, 245, 245);
    }
    .box-content {
        border: 1px;
        width:100%;
        height:150px;
        border-top: 1px solid rgb(247, 250, 99);
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
        left: 70%;
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