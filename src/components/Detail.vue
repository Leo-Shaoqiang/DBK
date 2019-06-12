<template>
<div class="detail">
  <Nav></Nav>
    <el-row>
            <el-col :span="2" :offset="2">
                <div class="tag-hot">热搜榜</div>
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
                    <el-button type="warning" class="el-icon-edit" style="margin-top:20px;" @click="write">加入讨论</el-button>
                </div>
            </el-col>
        </el-row>
  
      
      <div class="detail-content">
         <el-row :gutter="20">
          <el-col :span="5">
            <div class="grid-content bg-purple">
           <img src= "../assets/imgs/music.jpg" width="180px" height="200px" >
            <p>不能说的秘密</p>
             <ul class="detail-commiunation">
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
            </div>
            </el-col>
           <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
           <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
           <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
          </el-row>
          <el-row :gutter="20">
          <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
           <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
           <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
           <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
          </el-row>>
             
       </div>
          <div class="detail-comment">
        <el-row :gutter="20">
          <el-col :span="7"><div class="comment-content bg-purple"></div></el-col>
           <el-col :span="7"><div class="comment-content  bg-purple"></div></el-col>
           <el-col :span="7"><div class="comment-content  bg-purple"></div></el-col>
  
           </el-row>
            <el-row :gutter="20">
          <el-col :span="7"><div class="comment-content bg-purple"></div></el-col>
           <el-col :span="7"><div class="comment-content  bg-purple"></div></el-col>
           <el-col :span="7"><div class="comment-content  bg-purple"></div></el-col>
  
           </el-row>
            <el-row :gutter="20">
          <el-col :span="7"><div class="comment-content bg-purple"></div></el-col>
           <el-col :span="7"><div class="comment-content  bg-purple"></div></el-col>
           <el-col :span="7"><div class="comment-content  bg-purple"></div></el-col>
  
           </el-row>
      </div>
</div> 
</template>

<script>
    import Navbar from '@/views/Navbar.vue';
    export default {
        name: "detail-commiunation",
        components: {
            Navbar,

        },
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
    }
         </script>


<style>
.detail{
  margin:auto;
}
h1{
  margin-top:60px;
}
.tag-write{
        width:100%;
        float:right;
        margin-bottom: 20px;
       
       
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

.detail-content{
 margin-left: 180px;
 margin-top:60px;
 border-top: 1px solid goldenrod;
}
.detail-content img{
     width: 160px;
    height:  180px; 
    margin-top:20px;
}
  .el-row {
    
    margin-top:40px;
  }
   .bg-purple{
     background: #c0c7d4;
  
   }
  .el-col {
    border-radius: 4px;
  }

  .grid-content {
   
    height:360px;
    border-radius: 4px;
    min-height: 36px;
  }
  
  .comment-content {
   
    height:80px;
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .detail-comment{
    margin-left:150px;
  }
</style>
