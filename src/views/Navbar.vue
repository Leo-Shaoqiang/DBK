<template>
    <div>
 <el-row>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#fff" text-color="#333" active-text-color="#FFCC00">
        <el-col :span="6">
          <div class="head-logo">
            <a class="logo" title="share博客" href="#">
              <img src="" alt="">
            </a>
          </div>
        </el-col>
        <el-col :span="1">
          <router-link to="/"><el-menu-item index="1">首页</el-menu-item></router-link>
        </el-col>
        <el-col :span="1">
          <router-link to="/Movie"><el-menu-item index="2">电影</el-menu-item></router-link>
        </el-col>
        <el-col :span="1">
          <el-menu-item index="3">美食</el-menu-item>
        </el-col>
        <el-col :span="1">
          <el-menu-item index="4">旅游</el-menu-item>
        </el-col>
        <el-col :span="1">
          <el-menu-item index="5">音乐</el-menu-item>
        </el-col>
<<<<<<< HEAD
        <el-col :span="5">
=======
        <el-col :span="7">
>>>>>>> 0b4fc73cd3eafd3f0705cfd8eb2671246ddf47b3
          <el-autocomplete v-model="state2" :fetch-suggestions="querySearch" placeholder="请输入内容" :trigger-on-focus="false">
          </el-autocomplete>
          <el-button class="button-search">搜索</el-button>
        </el-col>
<<<<<<< HEAD
        <el-col :span="2">
=======
        <el-col :span="5">
>>>>>>> 0b4fc73cd3eafd3f0705cfd8eb2671246ddf47b3
         <div class="login-registe">
            <span v-if="user">{{user.name}}
                <a @click="logout()">注销</a>
            </span>
          
            <a href="#" @click="login()" v-else>登录</a>
            <span class="split"> | </span>
            <router-link to="/Register"><a href="#">注册</a></router-link>
          </div>
        </el-col>
      </el-menu>
    </el-row>
    </div>
    
</template>

<script lang="ts">
    export default {
        data() {
            return {
                 // 菜单栏
        activeIndex: "1",
        //search 
        restaurants: [],
        state1: '',
        state2: '',
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
      login(){
        this.$router.replace('./Login')
      },
      logout(){
        this.$store.dispatch('logout').then(()=>{
          this.$router.replace('./Login');
        })
      }
    },
    computed: {
      user(){
        return this.$store.state.User;
      }
    }
    }
</script>

<style>
  #mainpagebanner
  {
    height:auto;
  }
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
    margin-left: 5px !important;
  }
  .nav-first {
    left: 10% !important;
  }
  /* 搜索框 */
  .el-input__inner {
    position: relative;
    margin-top: 5% !important;
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