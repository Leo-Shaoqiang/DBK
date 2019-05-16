<template>
  <div>
    
   <h3>好评推荐</h3>
    <div id="banner">
      
     
        <ul>
          <li class="item " style="display: block;">
            <img src="../assets/imgs/1.jpg" width="350px" height="200px" alt="">
          </li>
          <li class="item">
            <img src="../assets/imgs/2.jpg" width="350px" height="200px" alt="">
          </li>
          <li class="item">
            <img src="../assets/imgs/3.jpg" width="350px" height="200px" alt="">
          </li>
          <li class="item">
            <img src="../assets/imgs/4.jpg" width="350px" height="200px" alt="">
          </li>
          <li class="item">
            <img src="../assets/imgs/5.jpg" width="350px" height="200px" alt="">
          </li>
        </ul>
      
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
    
    
  </div>
</template>

<script>

  export default {
    mounted() {
      // 轮播图
      
        var index = 0;
      $(".tab-btn .btn").click(function() {
       
        index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".item").eq(index).fadeIn().siblings().fadeOut();
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
    left:40%;
    top:180px;
  }
  
  
</style>