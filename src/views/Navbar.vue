<template>
  <div>
    <el-row>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#fff" text-color="#333" active-text-color="#FFCC00">
        <el-col :span="2">  
          <router-link to="/">
            <el-menu-item index="1">首页</el-menu-item>  
          </router-link>
        </el-col>
        <el-col :span="2">
          <router-link to="/Movie">
            <el-menu-item index="2">电影</el-menu-item>
          </router-link>
        </el-col>
        <el-col :span="2">
          <el-menu-item index="3">美食</el-menu-item>
        </el-col>
        <el-col :span="2">
          <el-menu-item index="4">旅游</el-menu-item>
        </el-col>
        <el-col :span="2">
          <el-menu-item index="5">音乐</el-menu-item>
        </el-col>
        <el-col :span="2">
            <div>
                <router-link class="publish-a" to="/Issue"> <span class="publish"> <el-menu-item index="6">写博客</el-menu-item></span></router-link>
            </div>
        </el-col>
        <el-col :span="2">
          <div class="search">
             <el-input placeholder="请输入内容"  class="input-with-select" style="width:300px;">
            <el-button slot="append"  class="search-icon" icon="el-icon-search"></el-button>
          </el-input>
          </div>
         
        </el-col>
        
        <el-col :span="2">
          <div class="login-registe">
            <span v-if="Cookie">
              <router-link to="/Myinfo"><span style="margin-right: 5px; color:#FF9D00;">{{ Cookie }}</span></router-link>
                  <a @click="logout()" style="cursor: pointer;" >注销</a>                
              </span>
            <a href="#" @click="login()" v-else>登录</a>
            <!-- <span>{{ time }}</span> -->
            <span class="split"> | </span>
            <router-link to="/Register"><a href="#">注册</a></router-link>
          </div>
        </el-col>
          <div @click="checkCookie()" style="float: right ;right : 200px;">查Cookie</div>
       
       
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
        Cookie: '',
      };
    },
    methods:{ 
      login() {
        this.$router.replace('./Login');
      },
      logout() {
        
        this.axios.get('/users/deleteCookie',{withCredentials : true}).then(()=>{
            this.$store.dispatch('logout').then(() => {
               this.$router.replace('./Login');
             })
        }).catch((err)=>{
          console.log(err);
          
        })
        
      },
       checkCookie(){
        this.axios.get('/users/checkCookie',{withCredentials: true}).then((res) => {
            this.Cookie = res.data;
         
        }).catch((err) => {
          console.log(err);
        });
     },
    },
    created () {
      this.checkCookie();
    }
  }
  
</script>

<style scoped>
.el-input
{
  font-size:20px; 
}
li
{
  font-size:20px;
}
  #mainpagebanner {
    height: auto;
  }
  /* 导航鼠标移入 */
  li.el-menu-item:hover {
    background-color: #fff !important;
  }
  /* 导航之间的间距 */
  .el-menu--horizontal>.el-menu-item {
    position: absolute;
    margin-left: 25px;
    width: 25px;
    
  }
  .nav-first {
    left: 10%;
  }
  .search{
    margin-top: 7% !important;
    position: relative;
    left:130px;
  }
  /* 登陆注册 */
  .login-registe {
    display: inline-block;
    position: relative;
    top: 15px;
    left:330px;
    font-size:20px;
  }
  .login-registe>a {
    text-decoration: none;
    color: #FF9D00;
    cursor: pointer;
  }
  .split {
    color: rgb(211, 211, 208)
  }

  /* 导航下划线 */
  a:-webkit-any-link {
    text-decoration: none !important;
  }
 .el-input-group__append{
   height:20px !important;
    margin-top: 7% !important;
  }
  /* 发表文章 */
 
</style>