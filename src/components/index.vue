<template>
  <div>
    <Navbar></Navbar>
    <!-- 轮播图 -->
    <div id="banner">
      <div class="arrowleft"><img src="..\assets\imgs\icons\angle-left.png" width="50px"></div>
      <div class="arrowright"><img src="..\assets\imgs\icons\angle-right.png" width="50px"></div>
      <div class="img-wrap">
        <ul>
          <li class="item " style="display: block;">
            <img src="../assets/imgs/1.jpg" width="100%" height="500px" alt="">
          </li>
          <li class="item">
            <img src="../assets/imgs/2.jpg" width="100%" height="500px" alt="">
          </li>
          <li class="item">
            <img src="../assets/imgs/3.jpg" width="100%" height="500px" alt="">
          </li>
          <li class="item">
            <img src="../assets/imgs/4.jpg" width="100%" height="500px" alt="">
          </li>
          <li class="item">
            <img src="../assets/imgs/5.jpg" width="100%" height="500px" alt="">
          </li>
        </ul>
      </div>
      <div class="tab-btn">
        <ul>
          <li class="btn active"></li>
          <li class="btn"></li>
          <li class="btn"></li>
          <li class="btn"></li>
          <li class="btn"></li>
        </ul>
      </div>
    </div>
    <!-- 首页推荐 -->
    <Tagsoon style="margin-bottom:5%;"></Tagsoon>
    <el-row>
      
      <IndexCommend style="margin-top:-3%;"></IndexCommend>
      <Footer></Footer>
    </el-row>
  </div>
</template>

<script>
import Tagsoon from './Tagsoon.vue'
  import $ from 'jquery';
  import IndexCommend from './IndexCommend.vue';
  import Footer from './Footer.vue';
  import Navbar from '@/views/Navbar.vue';
  export default {
    components: {
      IndexCommend,
      Footer,
      Navbar,
      Tagsoon
    },
    mounted() {
      // 轮播图
      
      var index = 0;
      $(".tab-btn .btn").click(function() {
        index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".item").eq(index).fadeIn().siblings().fadeOut();
      });
      $(".arrowright").click(function() {
        index++;
        if (index > 4) {
          index = 0;
        }
        $(".item").eq(index).fadeIn().siblings().fadeOut();
        $(".tab-btn .btn").eq(index).addClass("active").siblings().removeClass("active");
      });
      $(".arrowleft").click(function() {
        index--;
        if (index < 0) {
          index = 4;
        }
        $(".item").eq(index).fadeIn().siblings().fadeOut();
        $(".tab-btn .btn").eq(index).addClass("active").siblings().removeClass("active");
      });
    }
  }
</script>
     
<style scoped>
  @import '../../static/css/tab.css';
  #banner
  {
    width:98%;
    margin-top:-1%;
  }
  .tab-btn
  {
    position:absolute;
    left:45%;
    bottom:15%;
  }
  .arrowleft
  {
    position:absolute;
    top:50%;
    z-index:6;
    left:2%;
    cursor: pointer;
  }
  .arrowright
  {
    position:absolute;
    top:50%;
    z-index:6;
    right:2%;
    cursor: pointer;
  }
</style>