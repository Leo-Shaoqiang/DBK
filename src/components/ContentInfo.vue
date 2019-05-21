<template>
    <div>
        <div id="header">
             <p>标题：</p>   <span>标签：</span>    <span>推荐星级：</span>
        </div> 
     <img src="IMG_7568.JPG" style=" width:200px; height:260px" >
    
        <div id="content">
             暗洞中，白蛇（张喆 配音）苦苦修炼却不得其法，小青见此情景，将发髻上的碧玉簪子取下，令白蛇攥在手中。
             那一刻，五百年前的记忆瞬间苏醒。五百年前，晚唐君主昏聩庸碌，掌握邪术的国师只手遮天，命令天下百姓捕蛇修法。
             为了拯救族群，白蛇冒险行刺，结果却遭遇挫败，还失去了记忆。当她再度醒来，发现自己被一个专门捕蛇的村落所救下，
             而那个胆小却善良的青年许宣（杨天翔 配音）则吸引了白蛇的注意。与此同时，国师派出爪牙四处追寻白蛇的下落，
             而蛇族更误解白蛇叛逃人类，接二连三派出杀手。
        </div>
            <div id="communication">
               <ul>
                 <li class="bonus"><img src="@/assets/imgs/icons/bonus1.png" width="30px"><img src="@/assets/imgs/icons/bonus2.png" width="32px" style="display:none;">
                 </li>
                 <li class="star"><img src="@/assets/imgs/icons/star1.png" width="30px"><img src="@/assets/imgs/icons/star2.png" width="32px" style="display:none;">
                 </li>
                <li class="share"><img src="@/assets/imgs/icons/share.png" width="26px">
                </li>
                </ul>
        </div>
           
        <div id="comments">
            <h3>评论</h3>
            <ul>
                <li>用户名1</li>    <li>sndncjvfvfvhfvfv</li>   <li class="bonus"><img src="@/assets/imgs/icons/bonus1.png" width="30px"><img src="@/assets/imgs/icons/bonus2.png" width="32px" style="display:none;">
                 </li> 
                
            </ul>
            <ul>
                <li>用户名2</li>    <li>sndncjvfvfvhfvfv</li>  <li class="bonus"><img src="@/assets/imgs/icons/bonus1.png" width="30px"><img src="@/assets/imgs/icons/bonus2.png" width="32px" style="display:none;">
                 </li>
            
            </ul>
            <ul>
                <li>用户名3</li>    <li>sndncjvfvfvhfvfv</li>  <li class="bonus"><img src="@/assets/imgs/icons/bonus1.png" width="30px"><img src="@/assets/imgs/icons/bonus2.png" width="32px" style="display:none;">
                 </li>
            </ul>
           

        </div>
        


 
        
      
    </div>

</template>

<script>
//     import Footer from './Footer.vue';
//    import Navbar from '@/views/Navbar.vue';

 $(document).ready(function() {
        var check1 = 0;
        var check2 = 0;
        $(".bonus").on('click', function() {
            console.error("fkm");
            if (check1 == 0) {
                $(this).children("img:first").hide();
                $(this).children("img:last").show();
                check1 = 1;
            } else if (check1 == 1) {
                $(this).children("img:first").show();
                $(this).children("img:last").hide();
                check1 = 0;
            }
        });
        $(".star").on('click', function() { 
            if (check2 == 0) {
                $(this).children("img:first").hide();
                $(this).children("img:last").show();
                check2 = 1;
            } else if (check2 == 1) {
                $(this).children("img:first").show();
                $(this).children("img:last").hide();
                check2 = 0;
            }
        });
    })
 

</script>


<style >
 *{
    margin: 0;
    padding: 0;   
 } 
 /* 头部标题 */
#header{
    margin-top:160px;
    
}
#header p{
    color:orangered;
    font-size:32px;
    margin-bottom: 40px;
    margin-right:20px;
}
#header span{
    color: orangered;
    margin-left: 180px;
}
img{
    margin-top:20px;
   
}
/* 文章内容 */
#content{
    width:960px;
    margin: auto;

}
/* 点赞 收藏 转发  */
#communication {
        width:960px;
        list-style-type: none;
        float: right;
        bottom: 10px;
        margin-left: 500px;
        margin-bottom: 80px;
    }
#communication ul {
        position: relative;
        margin-top: 20px;
        margin-left: 300px;
       
    }
#communication li {
        display: inline;
        cursor: pointer;
        margin-right: 10%;
    }
/* 评论 */
#comments{
    margin-top:50px;
}
#comments ul{
 margin-top:30px;   
 margin-right:360px;
}
#comments  ul li{
display: inline;
margin-left:30px;

}
#comments h3{
    color:orangered;
    margin-right:600px;
}
</style>