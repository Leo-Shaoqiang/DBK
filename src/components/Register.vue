<template>
<div>
<Navbar></Navbar>
    <div class="box">
        
        <div class="nav">
            
        </div>
        <div class="login">
                <div class="nav-1">
                <img class="nav-logo" src="../assets/imgs/logo.jpg" alt="" style="height:150px;width:270px;margin-left:30%;margin-top:0%;">
                        <p style="font-size:50px; margin-left:40%;margin-top:70%;">Share</p>
                        <h4 style=" margin-left:60%;">分享你的生活</h4>
                </div>
            <div class="login-split"></div>
            <div class="register-info">
                <el-form ref="loginForm" :model="user"  label-width="80px">
                    <el-form-item label="用户名" prop="name">
                        <el-input v-model="user.name"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input v-model="user.pass" type="password"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkpass">
                        <el-input v-model="user.checkpass" type="password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" icon="el-icon-upload" @click="register()">注册</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import Navbar from '@/views/Navbar.vue';
    export default {
        components: {
      Navbar,
		},
        methods: {
            register() {
                this.$refs.loginForm.validate((valid) => {
                    if (valid) {
                        this.axios.post('/users/register', this.user).then((res) => {
                            
                            if (!res.data.name) {
                                // 校验规则
                                if (this.user.pass !== this.user.checkpass) {
                                    this.$message({
                                        type: 'error',
                                        message: '两次密码不一致！请重新输入！',
                                        duration: 3000
                                    })
                                }else if(this.user.name == ' ' || this.user.pass == ' ' || this.user.checkpass ==' '){
                                     this.$message({
                                    type: 'error',
                                    message: '有一项信息为空！请重新输入！',
                                    duration: 3000
                                })
                                }
                                else if(this.user.name == undefined || this.user.pass == undefined || this.user.checkpass ==undefined){
                                     this.$message({
                                    type: 'error',
                                    message: '有一项信息为空！请重新输入！',
                                    duration: 3000
                                })
                                } 
                                else {
                                    this.$message({
                                        type: 'success',
                                        message: '注册成功,' + this.user.name + '!',
                                        duration: 3000
                                    })
                                    this.$router.replace('/Login');
                                }
                            } else {
                                this.$message({
                                    type: 'error',
                                    message: '用户名已存在！请重新输入！',
                                    duration: 3000
                                })
                            }
                        })
                    } else {
                        return false;
                    }
                })
            },
        },
        data() {
            return {
                user: {},
            }
        }
    }
</script>

<style>
    body {
        margin: auto;
    }
    /* 上面logo整体 */
    .nav {
        height: 180px;
    }
    /* logo */
    .nav-logo {
        float: left;
        margin-top: 120px;
        margin-left: 40px;
        width: 60px;
        height: 50px;
    }
    /* 文字 */
    .nav-1 {
        float: left;
        margin: 100px 30px;
        font-size: 16px;
        color: #666;
    }
    /* 总体 */
    .login {
        width: 980px;
        height: 500px;
        margin: 0 auto;
        background-color:white; 
		box-shadow:0px 0px 10px 7px grey;
    }
    /* 左边图片 */
    .left-img {
        float: left;
        width: 150px;
        height: 200px;
        margin: 120px -240px;
    }
    /* 中间分割线 */
    .login-split {
        width: 2px;
        height: 300px;
        border-left: 1px solid #ccc;
        float: left;
        margin-left: 100px;
        margin-top: 100px;
    }
    /* 右边登录 */
    .register-info {
        float: left;
        margin: 120px 60px;
        width: 400px;
    }
    /* 用户名密码 布局 */
    .el-form-item__label {
        position: relative;
        width: 58px !important;
        padding-right: 0px !important;
        text-align: center;
        left: 20px;
        top: 13px !important;
    }
    /* 注册 */
    .register {
        position: relative;
        left: 150px;
        top: 20px;
    }
    .box{
		width:100%;
		height:1000px;
		background-image: url('../assets/imgs/back3.jpg');
		background-size: 100%;
	}
</style>