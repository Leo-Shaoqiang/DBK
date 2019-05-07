<template>
  <div>
      <Navbar></Navbar>
    <el-row>
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="item in imgList" :key="item.id">
          <el-row>
           <el-col :span="24"><img ref="imgHeight" :src="item.idView" class="banner_img"/></el-col>
          </el-row>
          </el-carousel-item>
        </el-carousel>
      </el-row>
    <Classify></Classify>
    
    <IndexCommend></IndexCommend>
    

       
  </div>
  </template>

<script>
   import Navbar from '@/views/Navbar.vue';
  import Classify from './Classify.vue'
  import IndexCommend from './IndexCommend'

  export default {
    components: {
      Navbar,
      Classify,
      IndexCommend
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
          {id: 0, idView: require('@/assets/imgs/2.jpg')},
          {id: 1, idView: require('@/assets/imgs/2.jpg')},
          {id: 2, idView: require('@/assets/imgs/3.jpg')},
          {id: 3, idView: require('@/assets/imgs/4.jpg')},
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
     
<style scoped>
  /* 导航鼠标移入 */
  li.el-menu-item:hover {
    background-color: #fff !important;
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
    position: absolute;

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
</style>