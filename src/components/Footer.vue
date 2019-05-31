<template>
    <div id="footer">
        <div class="wx-code">
            <el-col :span="2">
            <div class="wx-code-img">
                <img src="../assets/imgs/wx.jpg" width="88" height="88" alt="wx">
                <span>DBK订阅号</span>
            </div>
            </el-col>
             <el-col :span="2" :push="6">
            <div class="wx-dbk">
                <img src="../assets/imgs/wx.png" width="88" height="88" alt="wx">
                <span>DBK微信号</span>
            </div>
             </el-col>
        </div>

        <el-row :gutter="20">
             <el-col :span="5">
                 <div class="link-left">
                     <p>share</p>
                     <ul>
                         <li>中国年轻一代用的大博客</li>
                         <li>分享记录你自己的吃穿住行</li>
                         <li>上万旅行者的旅行借鉴</li>
                       
                      </ul>
                   </div>
                </el-col>
             <el-col :span="4">
                 <div class="link">
                     <p>关于我们</p>
                     <ul>
                         <li> 关于share</li> <li>联系我们</li>
                     </ul>
                     <ul>
                        <li> 隐私政策</li> <li>商标声明</li>
                     </ul>
                     <ul>
                        <li> 服务协议</li> <li>有机协议</li>
                     </ul>
                  </div>
                </el-col>
                <el-col :span="6">
                 <div class="link-right">
                     <ul>
                         <li><i class="el-icon-phone"></i></li>
                         <li>13111865085</li>
                     </ul>
                     <ul>   
                          <li><i class=" el-icon-message"></i></li>
                           <li>share@icloud.com</li>
                       </ul>  
                 </div> 
                 </el-col>

        </el-row>
  
     <!-- <div class="link">
          <ul>
            <li> 关于share</li> <li>联系我们</li>
          </ul>
         <ul>
            <li> 隐私政策</li> <li>商标声明</li>
         </ul>
         <ul>
            <li> 服务协议</li> <li>有机协议</li>
            </ul>
      </div> -->

   </div>
</template>
 
<script>
    export default {
    }
</script>

<style>
        *{
            margin: 0;
            padding: 0;
        }
    .el-footer {
        height: 300px !important;
    }
    .wx-code-img,.wx-dbk {
        display: block;
        float: left;
        margin: 50px;
    }
    .wx-code-img>span,.wx-dbk>span {
        display: block;
     
    }
    .wx-code {
        display: block;
        float: left;
        width: 400px;
        height: 200px;
        bottom: 0px;
    }
    .wx-chat {
        display: inline-block;
    }
    .el-footer{
        position: relative;;
        bottom: 0;
        
        width: 100%;
        height: 200px;
        background-color: beige;
    }
    .link-left {
         margin-top:40px;
        margin-left:20px;
        
    }
    .link{
        margin-top:40px;
        margin-left:20px;

    }

    .link ul{
        margin-bottom:10px;
    }
    .link li{
     display: inline;
     margin-top:20px;
     margin-right:10px;    
    }
  li{
      font-size: 14px; 
  }
  .link-right{
      margin-top:100px;
      margin-left:40px;
  }
  .link-right ul{
      margin-top:10px;
  }
  .link-right li{
     display: inline;
     margin-left: 10px;
     margin-top:10px;
     font-size: 16px;
  }
    #footer
    {
        position:absolute;
        bottom:-15%;
        background-color:papayawhip;
        width:100%;
    }
</style>