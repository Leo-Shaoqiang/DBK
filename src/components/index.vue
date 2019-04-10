<template>
  <div>
    <Navbar></Navbar>
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
  import Navbar from '@/views/Navbar.vue';

  export default {
    components: {
      IndexCommend,
      SideBar,
      Footer,
      Navbar,
    },
    data() {  
      return {
        imgList: [
          {id: 0, idView: require('../assets/imgs/3.jpg')},
          {id: 1, idView: require('../assets/imgs/4.jpg')},
          {id: 2, idView: require('../assets/imgs/3.jpg')},
          {id: 3, idView: require('../assets/imgs/4.jpg')},
        ]
      };
    },
  
  }
</script>
     
<style>

</style>