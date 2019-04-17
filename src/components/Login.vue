/* eslint-disable */
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
			<div class="login-info">
				<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="50px" class="demo-ruleForm2">
					<el-form-item label="用户名" prop="User">
						<el-input type="text" v-model="ruleForm2.User" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="密码" prop="Pass">
						<el-input type="password" v-model="ruleForm2.Pass" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
						<el-button @click="resetForm('ruleForm2')">重置</el-button>
					</el-form-item>
				</el-form>
				<div class="register">
					<router-link to="/Register">
						<a>还没注册?</a>
					</router-link>
				</div>
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
					if (this.ruleForm2.Pass !== '') {
						this.$refs.ruleForm2.validateField('Pass');
					}
					callback();
				}
			};
			return {
				ruleForm2: {
					User: '',
					Pass: '',
				},
				rules2: {
					User: [{
							validator: validateUser,
							trigger: 'blur',
						},
					],
					Pass: [{
							validator: validatePass,
							trigger: 'blur'
						},
					],
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						if (this.ruleForm2.User === 'admin' && this.ruleForm2.Pass === '12345678') {
							this.$store.dispatch('Login',this.ruleForm2).then(()=>{
								this.$notify({
								type: 'success',
								message: '欢迎你' + this.ruleForm2.User + '!',
								duration: 3000,
							})
							this.$router.replace("/");
							})
							
						} else {
							this.$message({
								type: 'error',
								message: "用户名或密码错误",
								showClose: true,
							})
						}
					}
					else{
						return false;
					}
				})
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
		font-size: 14px;
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
	.login-info {
		float: left;
		margin: 120px 60px;
		width: 400px;
	}
	/* 用户名密码 布局 */
	.el-form-item__label {
		position: relative;
		width: 50px !important;
		padding-right: 7px !important;
		text-align: center;
		top: 13px !important;
	}
	/* 注册 */
	.register {
		position: relative;
		left: 150px;
		top: 20px;
	}
</style>