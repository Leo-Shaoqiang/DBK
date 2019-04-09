<template>
  <div class="mainpagecommand">
    <el-button type="warning"  class="button-commend" >推荐</el-button>
    <br>
    <div>
      <p>按热度推荐</p><br>
    </div>
    <div class="showleft">
      <img src="../assets/imgs/icons/u=2165492359,3798978431&fm=26&gp=0.jpg" width="25px" style="float:left;">
      <span id="usersname" style="float:left;">用户ID</span>
      <br>
      <img src="../assets/imgs/icons/u=919262547,2004138580&fm=26&gp=0.jpg" width="200px;">
      <p style="width:200px;">艾迪（汤姆·哈迪 Tom Hardy 饰）是一位深受观众喜爱的新闻记者，和女友安妮（米歇尔·威廉姆斯 Michelle Williams 饰）相恋多年，彼此之间感情十分要好。安妮是一名律师，接手了生命基金会的案件，在女友的邮箱里，艾迪发现了基金会老板德雷克不为人知的秘密....</p>
      <ul class="communication">
        <li><img src="../assets/imgs/icons/赞1.png"    width="25px" ></li>
        <li><img src="../assets/imgs/icons/星星1.png"  width="25px"></li>
        <li><img src="../assets/imgs/icons/评论1.png" width="25px"></li>
        <li><img src="../assets/imgs/icons/分享.png"  width="23px"></li>
      </ul>
    </div>
    <div class="showright">
      <img src="../assets/imgs/icons/u=2165492359,3798978431&fm=26&gp=0.jpg" width="25px" style="float:left;">
      <span id="usersname" style="float:left;">用户ID</span>
      <br>
      <img src="../assets/imgs/icons/u=919262547,2004138580&fm=26&gp=0.jpg" width="200px;">
      <p style="width:200px;">艾迪（汤姆·哈迪 Tom Hardy 饰）是一位深受观众喜爱的新闻记者，和女友安妮（米歇尔·威廉姆斯 Michelle Williams 饰）相恋多年，彼此之间感情十分要好。安妮是一名律师，接手了生命基金会的案件，在女友的邮箱里，艾迪发现了基金会老板德雷克不为人知的秘密....</p>
      <ul class="communication">
        <li><img src="../assets/imgs/icons/赞1.png"    width="25px" ></li>
        <li><img src="../assets/imgs/icons/星星1.png"  width="25px"></li>
        <li><img src="../assets/imgs/icons/评论1.png" width="25px"></li>
        <li><img src="../assets/imgs/icons/分享.png"  width="23px"></li>
      </ul>
    </div>
    <br>
    <div class="showleft">
      <img src="../assets/imgs/icons/u=2165492359,3798978431&fm=26&gp=0.jpg" width="25px" style="float:left;">
      <span id="usersname" style="float:left;">用户ID</span>
      <br>
      <img src="../assets/imgs/icons/u=919262547,2004138580&fm=26&gp=0.jpg" width="200px;">
      <p style="width:200px;">艾迪（汤姆·哈迪 Tom Hardy 饰）是一位深受观众喜爱的新闻记者，和女友安妮（米歇尔·威廉姆斯 Michelle Williams 饰）相恋多年，彼此之间感情十分要好。安妮是一名律师，接手了生命基金会的案件，在女友的邮箱里，艾迪发现了基金会老板德雷克不为人知的秘密....</p>
      <ul class="communication">
        <li><img src="../assets/imgs/icons/赞1.png"    width="25px" ></li>
        <li><img src="../assets/imgs/icons/星星1.png"  width="25px"></li>
        <li><img src="../assets/imgs/icons/评论1.png" width="25px"></li>
        <li><img src="../assets/imgs/icons/分享.png"  width="23px"></li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
/* 首页推荐 */
.mainpagecommand
{
  margin-top:20px;
  margin-left:20px;
  float: left;
  margin-bottom:200px;
}
  /* 推荐按钮 */
  .el-button--warning{
    background-color: #FF9D00 !important;
  }
  .button-commend{
    float: left;
    left: 100px;
    top: 80px;
  }
  .communication
{
    list-style-type:none;
    float: left;
    margin-top:10px;
    margin-left:10px;
}
.communication li
{
    display: inline;
    margin-right:10px;
    cursor: pointer;
}
.showleft
{
  float: left;
}
.showright
{
  margin-left:100px;
  float: right;
}
</style>
