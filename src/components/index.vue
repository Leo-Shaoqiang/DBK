<template>
  <div>
    <el-row>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#fff" text-color="#333" active-text-color="#FFCC00">
        <el-col :xs="1" :sm="2" :md="2" :lg="2" :xl="1">
          <div class="head-logo">
            <a class="logo" title="share博客" href="#">
              <img src="../assets/imgs/logo.jpg" alt="">
            </a>
          </div>
        </el-col>
        <el-col :xs="3" :sm="2" :md="2" :lg="1" :xl="1" :push="6">
           <router-link to="/Index"><el-menu-item index="1">首页</el-menu-item></router-link>
        </el-col>
        <el-col :xs="3" :sm="2" :md="2" :lg="1" :xl="1" :push="6">
          <router-link to="/Movie"><el-menu-item index="2">电影</el-menu-item></router-link>
        </el-col>
        <el-col :xs="3" :sm="2" :md="2" :lg="1" :xl="1" :push="6">
          <el-menu-item index="3">美食</el-menu-item>
        </el-col>
        <el-col :xs="3" :sm="2" :md="2" :lg="1" :xl="1" :push="6">
          <el-menu-item index="4">旅游</el-menu-item>
        </el-col>
        <el-col :xs="3" :sm="2" :md="2" :lg="1" :xl="1" :push="6">
          <el-menu-item index="5">音乐</el-menu-item>
        </el-col>
        <el-col :xs="14" :sm="8" :md="7" :lg="6" :xl="4" :push="6" class="inline-input">
          <el-autocomplete v-model="state2" :fetch-suggestions="querySearch" placeholder="请输入内容" :trigger-on-focus="false">
          </el-autocomplete>
          <el-button class="button-search">搜索</el-button>
        </el-col>
        <el-col :xs="10" :sm="4" :md="11" :lg="4" :xl="4" :push="6">
          <div class="login-registe">
            <a href="#">登录</a>
            <span class="split"> | </span>
            <a href="#">注册</a>
          </div>
        </el-col>
      </el-menu>
    </el-row>
    <!-- 轮播图 -->
    <el-row>
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in imgList" :key="item.id">
        <el-row>
         <el-col :span="24"><img ref="imgHeight" :src="item.idView" class="banner_img"/></el-col>
        </el-row>
        </el-carousel-item>
      </el-carousel>
    </el-row>
    <!-- 首页推荐 -->
    <el-row>
    <IndexCommend></IndexCommend>
      <SideBar></SideBar>
        <Footer></Footer>
    </el-row>
  </div>
  </template>

<script>
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
        state2: '',
        imgList: [
          {id: 0, idView: require('../assets/imgs/3.jpg')},
          {id: 1, idView: require('../assets/imgs/4.jpg')},
          {id: 2, idView: require('../assets/imgs/3.jpg')},
          {id: 3, idView: require('../assets/imgs/4.jpg')},
        ]
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
    }
  }
</script>
     
<style>
  /* 导航鼠标移入 */
  li.el-menu-item:hover {
    background-color: #fff !important;
  }
  /* logo */
  .logo {
    position: relative;   
    float: left;
  }
  .logo>img {
    width: 70px;
    height: 60px;
  }
  /* 导航之间的间距 */
  .el-menu--horizontal>.el-menu-item {
    position: absolute;
    margin-left: 15px !important;
  }
  .nav-first {
    left: 100px !important;
  }
  /* 搜索框 */
  .el-input__inner {
    position: relative;
    margin-top: 13px !important;
  }
  .inline-input{
    position: relative;

  }
  /* 登陆注册 */
  .login-registe {
    display: inline-block;
    position: relative;
    top: 20px;
    margin-left: 50px;
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
  /* 导航下划线 */
  a:-webkit-any-link {
    text-decoration: none !important;
  }
</style>