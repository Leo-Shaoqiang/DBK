<template>
    <div>
            <Navbar></Navbar>
       <div>
        <div id="header">
             <p>{{title}}</p>   <span>{{tag}}</span>    <span>推荐星级：{{id}}</span>
        </div> 
     <img src="IMG_7568.JPG" style=" width:200px; height:260px" >
    
        <div id="content">
             {{content}}
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


 
        
      
    </div>

</template>

<script>
    
    import Navbar from '@/views/Navbar.vue';
    export default {
        name:"ContentInfo",
        data(){
            return{
                title: '',
                tag: '',
                content: '',
                id:'',
            }
        },
        components: {
            Navbar
        },
        mounted(){
            this.id=this.$route.params.id
            this.axios.get('/users/ContentInfo/' + this.id).then((res) => {
               
                this.title=res.data.title
                // this.tag=res.data.tag
                this.content=res.data.content
                console.log(res.data)
            })

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
        }   
 
 
    }
</script>


<style >
 *{
    margin: 0;
    padding: 0;   
 } 
 /* 头部标题 */
#header{
    margin-top:5%;
    
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