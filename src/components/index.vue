<template>
  <div>
    <Navbar></Navbar>
    <!-- 轮播图 -->
    <div id="banner">
      <div class="img-wrap">
        <ul>
          <li class="item " style="display: block;">
            <img src="../assets/imgs/1.jpg" width="1890" height="620" alt="">
          </li>
          <li class="item">
            <img src="../assets/imgs/2.jpg" width="1890" height="620" alt="">
          </li>
          <li class="item">
            <img src="../assets/imgs/3.jpg" width="1890" height="620" alt="">
          </li>
          <li class="item">
            <img src="../assets/imgs/4.jpg" width="1890" height="620" alt="">
          </li>
          <li class="item">
            <img src="../assets/imgs/5.jpg" width="1890" height="620" alt="">
          </li>
        </ul>
      </div>
      <div class="lr-tab">
        <div class="left btn"></div>
        <div class="right btn"></div>
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
    <el-row>
      <IndexCommend></IndexCommend>
      <Footer></Footer>
    </el-row>
  </div>
</template>

<script>
  import $ from 'jquery';
  import IndexCommend from './IndexCommend.vue';
  import Footer from './Footer.vue';
  import Navbar from '@/views/Navbar.vue';
  export default {
    components: {
      IndexCommend,
      Footer,
      Navbar,
    },
    mounted() {
      // 轮播图
      var index = 0;
      $(".tab-btn .btn").click(function() {
        index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".item").eq(index).fadeIn().siblings().fadeOut();
      });
      $(".lr-tab .right").click(function() {
        index++;
        if (index > 4) {
          index = 0;
        }
        $(".item").eq(index).fadeIn().siblings().fadeOut();
        $(".tab-btn .btn").eq(index).addClass("active").siblings().removeClass("active");
      });
      $(".lr-tab .left").click(function() {
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
     
<style>
  @import '../../static/css/tab.css';
</style>