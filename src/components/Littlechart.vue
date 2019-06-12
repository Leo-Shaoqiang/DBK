<template>
  <div>
    
   <h1 style="margin-bottom:5%;">Share推荐</h1>
    <div id="ban">
      
     
        <ul>
          <li class="it " style="display: block;">
          <div  class="news">
            <img src="../assets/imgs/vue.jpg" width="350px" height="200px" alt="">
            <ul>
                <li>实时热况</li>
              <li><a href="">IG爆冷输给TL 你舒服了吗</a></li>
              <li><a href="">SKT VS G2 欧美能否崛起</a></li>
              <li><a href="">新版本上分神奇-js</a></li>
              <li><a href="">vue开发详解</a></li>
              <li><a href="">jquery开发详解</a></li>
              <li><a href="">JAVA开发详解</a></li>
              <li><a href="">舒服了</a></li>
            </ul>
            </div>
          </li>
          <li class="it">
           <div  class="news">
            <img src="../assets/imgs/ba.jpg" width="350px" height="200px" alt="">
            <ul>
                <li>游戏-技巧</li>
                <li><a href="">王思聪的热狗</a></li>
                <li><a href="">MSI谁能问鼎</a></li>
                <li><a href="">我们是八强！</a></li>
                <li><a href="">我们是四强！</a></li>
                <li><a href="">全套SKT皮肤获得</a></li>
                <li><a href="">LOL补刀与守塔</a></li>
                <li><a href="">OW Dva教学</a></li>
              </ul>
              </div>
          </li>
          <li class="it">
           <div  class="news">
            <img src="../assets/imgs/ow.jpg" width="350px" height="200px" alt="">
            <ul>
                <li>电影-电视剧</li>
                <li><a href="">关于抗议权游烂尾</a></li>
                <li><a href="">皮卡丘大电影</a></li>
                <li><a href="">复仇者联盟4</a></li>
                <li><a href="">奇异博士</a></li>
                <li><a href="">雷神3</a></li>
                <li><a href="">巫师新剧年底上线</a></li>
              </ul>
              </div>
          </li>
          <li class="it">
           <div  class="news">
            <img src="../assets/imgs/zhou.jpg" width="350px" height="200px" alt="">
            <ul>
                <li>新歌榜</li>
                <li><a href="">说好的幸福呢</a></li>
                <li><a href="">你好吗</a></li>
                <li><a href="">鸡你太美</a></li>
                <li><a href="">王妃</a></li>
                <li><a href="">灰色头像</a></li>
                <li><a href="">修炼爱情</a></li>
              </ul>
              </div>
          </li>
          <li class="it">
           <div  class="news">
            <img src="../assets/imgs/ikun.jpg" width="350px" height="200px" alt="">
            <ul>
                <li>娱乐</li>
                <li><a href="">坤坤为何被黑？</a></li>
                <li><a href="">唱跳rap篮球技巧</a></li>
                <li><a href="">汪苏泷新恋情</a></li>
                <li><a href="">奔跑吧新一季很垃圾</a></li>
                <li><a href="">我们是八强</a></li>
                <li><a href="">舒服了</a></li>
              </ul>
              </div>
          </li>
        </ul>
      
      <div class="tb-b">
        <ul>
          <li class="b ac"></li>
          <li class="b"></li>
          <li class="b"></li>
          <li class="b"></li>
          <li class="b"></li>
        </ul>
      </div>
    </div>
    
    <span>查看更多》</span>
  </div>
  
</template>

<script>
  import $ from 'jquery';
  export default {
    mounted() {
      // 轮播图
      var timer=0;
      var index = 0;
      $(".tb-b .b").on('click',function() {
        
        index = $(this).index();
        $(this).addClass("ac").siblings().removeClass("ac");
        $(".it").eq(index).fadeIn().siblings().fadeOut();
      });
     
      timer=setInterval( function(){
        
        index++;
        if(index>4){index=0}  
      $(".b").eq(index).addClass("ac").siblings().removeClass("ac");
      $(".it").eq(index).fadeIn().siblings().fadeOut();
    },4000);
      
    }
  }
</script>
     
<style scoped>
  .news{
    /* border:1px solid grey; */
    width:350px;
    height:600px;
    font-size:20px;
      background-color: antiquewhite;
        border-radius:25px;
  }
  .news ul li{
   margin-top:15px;;
  }
   .news a{
  text-decoration: none;
  }
 
#ban ul li{
    list-style-type: none;	
}
            /* 轮播图图片 */
#ban .it{

    display: none;  
    position: absolute;

}
  #ban
  { 
  
    width:98%;
    margin-top:-1%;
    ybox-shadow: 0 20px 18px rgba(41, 39, 37, 0.12);
  }
  .tb-b
  {
    position:absolute;
    left:36%;
    top:200px;
  }
  *{
    margin: 0px;
    padding: 0px;
}
.tb-b .b{
    float: left;
    width: 6px;
    height: 6px;
    background: #868686;
    margin-left: 10px;
    border: 2px solid #c3c3c3;
    border-radius: 50%;
}
            /* 点切换伪类 */
.tb-b .b:hover{
    cursor: pointer;
    background: #e4e4e4;
    border-color: #f7f7f7;
}
            /* 点切换伪类 */
.tb-b .ac{
    background: #e4e4e4;
    border-color: #f7f7f7;
}
  
</style>