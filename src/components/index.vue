<template>
  <div>
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#fff" text-color="#333" active-text-color="#FFCC00">
          <div class="head-logo">
            <a class="logo" title="share博客" href="#">
              <img src="../assets/imgs/logo.jpg" alt="">
            </a>
          </div>
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">电影</el-menu-item>
          <el-menu-item index="3">美食</el-menu-item>
          <el-menu-item index="4">旅游</el-menu-item>
          <el-menu-item index="5">音乐</el-menu-item>
          <el-autocomplete class="inline-input" v-model="state2" :fetch-suggestions="querySearch" placeholder="请输入内容" :trigger-on-focus="false">
          </el-autocomplete>
          <el-button class="button-search">搜索</el-button>
          <div class="login-registe">
            <a href="#">登录</a>
            <span class="split"> | </span>
            <a href="#">注册</a>
          </div>
        </el-menu>
      </el-header>
      <el-main horizontalScrollPolicy="off" verticalScrollPolicy="off">
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
        <IndexCommend></IndexCommend>
        <SideBar></SideBar>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import $ from 'jquery';
  import IndexCommend from './IndexCommend.vue';
  import SideBar from './SideBar.vue';
  import Footer from './Footer.vue';
  export default {
    components: {
      IndexCommend,
      SideBar,
      Footer,
    },
    data() {
      return {
        // 菜单栏
        activeIndex: "1",
        //search 
        restaurants: [],
        state1: '',
        state2: ''
      };
    },
    methods: {
      //search 
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [{
            "value": "三全鲜食（北新泾店）",
            "address": "长宁区新渔路144号"
          },
          {
            "value": "Hot honey 首尔炸鸡（仙霞路）",
            "address": "上海市长宁区淞虹路661号"
          },
          {
            "value": "新旺角茶餐厅",
            "address": "上海市普陀区真北路988号创邑金沙谷6号楼113"
          },
        ];
      },
    },
    mounted() {
      //search 
      this.restaurants = this.loadAll();
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
  /* 导航鼠标移入 */
  li.el-menu-item:hover {
    background-color: #fff !important;
  }
  /* logo */
  .logo {
    position: relative;
    float: left;
    left: 360px;
  }
  .logo>img {
    width: 140px;
    height: 60px;
  }
  /* 导航之间的间距 */
  .el-menu--horizontal>.el-menu-item {
    float: left;
    left: 400px;
    margin-left: 15px !important;
  }
  .nav-first {
    left: 100px !important;
  }
  /* 搜索框 */
  .inline-input {
    position: relative;
    right: 150px !important;
  }
  .el-input__inner {
    margin-top: 13px !important;
  }
  /* 搜索按钮 */
  .button-search {
    position: relative;
    right: 150px;
  }
  /* 登陆注册 */
  .login-registe {
    display: inline-block;
  }
  .login-registe>a {
    text-decoration: none;
    color: #FF9D00;
    cursor: pointer;
  }
  .split {
    color: rgb(211, 211, 208)
  }
  /* main内边距 */
  .el-main {
    padding: 0 !important;
    width: 100% !important;
    height: 1900px !important;
  }
</style>