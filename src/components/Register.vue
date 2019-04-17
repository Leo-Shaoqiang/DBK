<template>
    <div>
        <div class="nav">
            <img class="nav-logo" src="../assets/imgs/logo.jpg" alt="">
            <div class="nav-1">
                <p>Share</p>
                <p>分享你的生活</p>
            </div>
        </div>
        <div class="login">
            <div class="left-img">
                <img src="../assets/imgs/logo.jpg" alt="" width="280px" height="260px" />
            </div>
            <div class="login-split"></div>
            <div class="register-info">
                <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="用户名" prop="User">
                        <el-input v-model.number="ruleForm2.User"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
                        <el-button @click="resetForm('ruleForm2')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            var validateUser = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入用户名'));
                } else {
                    if (this.ruleForm2.User !== '') {
                        this.$refs.ruleForm2.validateField('User');
                    }
                    callback();
                }
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm2.checkPass !== '') {
                        this.$refs.ruleForm2.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm2.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm2: {
                    pass: '',
                    checkPass: '',
                    User: ''
                },
                rules2: {
                    pass: [{
                            validator: validatePass,
                            trigger: 'blur'
                        },
                        {
                            min: 8,
                            max: 14,
                            message: '请输入8~14位密码'
                        }
                    ],
                    checkPass: [{
                        validator: validatePass2,
                        trigger: 'blur'
                    }],
                    User: [{
                            validator: validateUser,
                            trigger: 'blur'
                        },
                        {
                            min: 2,
                            max: 10,
                            message: '请输入2~10位用户名'
                        }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style>
    body {
        width: 960px;
        height: 800px;
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
        font-size: 18px;
        color: #666;
    }
    /* 总体 */
    .login {
        width: 100%;
        height: 500px;
        margin: 0 auto;
        background: papayawhip;
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
</style>