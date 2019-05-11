/* eslint-disable */
<template>
	<div class="box">
		<div class="logins">
			<div class="nav">
			</div>
			<div class="login">
				<div class="nav-1">
					<img class="nav-logo" src="../assets/imgs/logo.jpg" alt="" style="height:150px;width:270px;margin-left:30%;margin-top:0%;">
					<p style="font-size:50px; margin-left:40%;margin-top:70%;">Share</p>
					<h3 style=" margin-left:60%;">分享你的生活</h3>
				</div>
				<div class="login-split"></div>
				<div class="login-info">
					<el-form ref="loginForm" :model="user" status-icon label-width="80px">
						<el-form-item label="用户名" prop="name">
							<el-input v-model="user.name"></el-input>
						</el-form-item>
						<el-form-item label="密码" prop="pass">
							<el-input v-model="user.pass" type="password"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" icon="el-icon-upload" @click="login">登录</el-button>
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
	</div>
</template>
<script>
	export default {
		methods: {
			login() {
				// let  _this = this ;
				this.$refs.loginForm.validate((valid) => {
					if (valid) {
						this.axios.post('/users/validate', this.user).then((res) => {
							var data = res.data;
							if (this.user.name == data.name && this.user.pass == data.pass) {
								this.$store.dispatch('login', this.user.name).then(() => {
									// console.log(res);//数据库返回数据
									// console.log(data.name);
									// console.log(data.pass);							
									if (this.user.name == undefined || this.user.pass == undefined) {
										this.$message({
											type: 'error',
											message: '用户名或密码为空！请重新输入！',
											duration: 3000
										})
									} else {
										this.$router.replace('/');
									}	
								})
							} else {
								this.$message({
									type: 'error',
									message: '用户名或密码错误！请重新输入！',
									duration: 3000
								})
							}
						})
					} else {
						return false;
					}
				})
			}
		},
		data() {
			return {
				user: {
					name: '',
					pass: ''
				},
			}
		},
		
	}
</script>

<style scoped>
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
		background-color: white;
		box-shadow: 0px 0px 10px 7px grey;
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
	.logins {
		width: 980px;
		height: 800px;
		margin: auto;
	}
	.box {
		width: 100%;
		height: 1000px;
		background-image: url('../assets/imgs/back3.jpg');
		background-size: 100%;
	}
</style>