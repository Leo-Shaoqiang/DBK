<template>
    <div>
        <div class="index">
            <ul v-for="item in lists" :key="item._id">
                <li>
                    <div class="back">
                        <el-row>
                            <el-row>
                                <el-col :span="20" style="margin-left:5%;">
                                    <img src="@/assets/imgs/icons/head2.jpg" width="50px" style="float:left;">
                                    <span id="usersname" style="float:left;margin-top:20px;">用户ID</span>
                                </el-col>
                            </el-row>
                            <el-row style="margin-top:2%;margin-bottom:2%;">
                                <el-col :span="6" style="margin-left:2%;">
                                    <div class="box-img">
                                        图片
                                    </div>
                                </el-col>
                                <el-col :span="16">
                                    <div class="title">
                                        <h1>{{item.title}}</h1>
                                        <h3 style="float:left">{{item.tag}}</h3>
                                    </div>
                                    <div class="box-content">
                                        <h5 v-html="item.content"> </h5>
                                    </div>
                                    <ul class="communication">
                                        <li class="bonus"><img src="@/assets/imgs/icons/bonus1.png" width="40px"><img src="@/assets/imgs/icons/bonus2.png" width="40px" style="display:none;">
                                        </li>
                                        <li class="star"><img src="@/assets/imgs/icons/star1.png" width="40px"><img src="@/assets/imgs/icons/star2.png" width="40px" style="display:none;">
                                        </li>
                                        <li class="share"><img src="@/assets/imgs/icons/share.png" width="38px">
                                        </li>
                                    </ul>
                                </el-col>
                            </el-row>
                        </el-row>
                    </div>
                </li>
            </ul>
            <el-pagination background
            layout="prev, pager,
            next" @current-change="currentChange"
            :total="total" :page-size = "3" >
            </el-pagination>
        </div>
        <div class="sidebar">
            <SideBar></SideBar>
        </div>
    </div>
</template>
<script>
    import SideBar from "@/components/SideBar.vue";
    $(document).ready(function() {
        var check1 = 0;
        var check2 = 0;
        $(".bonus").on('click', function() {
            console.error("fkm");
            if (check1 == 0) {
                $(this).children("img:first").hide();
                $(this).children("img:last").show();
                check1 = 1;
            } else if (check1 == 1) {
                $(this).children("img:first").show();
                $(this).children("img:last").hide();
                check1 = 0;
            }
        });
        $(".star").on('click', function() { 
            if (check2 == 0) {
                $(this).children("img:first").hide();
                $(this).children("img:last").show();
                check2 = 1;
            } else if (check2 == 1) {
                $(this).children("img:first").show();
                $(this).children("img:last").hide();
                check2 = 0;
            }
        });
    });
    export default {
        data() {
            return {
                title: '',
                tag: '',
                content: '',
                lists: [],
                page:1,
                total:0,
            }
        },
        components: {
            SideBar,
        },
        created () {
            this.getData();
        },
        methods: {
            currentChange(page){
                this.page = page;
                this.getData();
            },
            getData(){
                this.axios
                .get(`/users/list?page=${this.page}`)
                .then(res =>res.data) 
                .then(({ data })=>{
                    this.lists = data.lists;
                    this.total = data.pagination.total;
                    console.log(data.lists);
                    
                })  
                }
            },
        mounted() {
            this.axios.get('/users/', this.blog).then((res) => {
                this.lists = res.data;
                console.log(this.lists)
            })
        },
    }
</script>
<style>
    .title {
        border: 1px;
        float: left;
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
        border-top: 1px solid grey;
        margin-top: 10%;
        margin-left: 5%;
    }
    .sidebar {
        position: absolute;
        top: 100px;
        left: 70%;
        border: 1px;
        margin-left: 5%;
    }
    .box-img {
        border: 1px solid black;
        width: 200px;
        height: 300px;
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