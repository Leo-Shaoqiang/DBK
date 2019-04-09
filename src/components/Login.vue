/* eslint-disable */
<template>
	<div>
	<div class="nav">
			<img src="../assets/imgs/logo.jpg" alt="">
			<div class="nav-1">
				<p>Share</p>
				<p>分享你的生活</p>
			</div>
		</div>
		<div class="content">

			<img src="../assets/imgs/logo.jpg" alt="" width="280px" height="260px" />

			<div class="user">
				用户名：<el-input v-model="input" placeholder="请输入内容"></el-input>
			</div>
			<div class="psd">
				密码：<el-input placeholder="请输入密码" v-model="input11" show-password></el-input>
			</div>
			<div class="checkbox">
				<div class="findpsd">
					<el-button type="text">忘记密码</el-button>
				</div>
			</div>
			<div class="buttton">
				<el-button type="primary">登录</el-button>
			</div>
		</div>
		<footer>
			copyright@大博客share版权所有
		</footer>

	</div>
</template>


<style>
	body {

		width: 960px;
		height: 800px;
		margin: auto;
	}

	.nav {
		height: 180px;
	}

	.nav img {
		float: left;
		margin-top: 140px;
		margin-left: 40px;
		width: 60px;
		height: 50px;
	}

	.nav-1 {
		float: left;
		margin-top: 110px;
		margin-right: 50px;
		margin-left: 20px;
		font-size: 20px;
		color: #666;


	}

	.content {
		margin-top: 60px;
		background: #FFFF66;
		width: 960px;
		height: 400px;


	}

	img {
		height: 260px;
		width: 480px;
		margin-top: 66px;
		box-shadow: 1px solid #CCC;
		margin-left: 60px;

	}

	.form {
		float: right;
		width: 280px;
		height: 300px;
		background: #FFF;
		margin-right: 80px;
		margin-top: 60px;



	}

	.form p {
		font-size: 18px;
		text-align: center;
	}

	.content el-input {
		width: 150px;
		height: 24px;
		margin-top: 20px;
		margin-bottom: 20px;
		margin-left: 30px;

	}

	.user {
		height: 40px;
		margin-left: 10px;
		margin-bottom: 20px;
	}

	.el-input[type="text"] {
		height: 25px;
		width: 160px;
		margin-top: 20px;
		margin-left: 10px;
		margin-bottom: 40px;
		font-size: 12px;

	}

	.password {
		height: 40px;
		margin-left: 24px;
		margin-bottom: 20px;
	}

	.el-input[type="button"] {
		background: #FFFF66;
		width: 160px;
		height: 30px;
		margin-right: 10px;
		color: #FFF;
	}

	.checkbox span {
		font-size: 13px;
		color: #000;
	}

	.findpsd {
		font-size: 12px;
		margin-left: 160px;

	}

	.button {
		margin-top: 10px;
		margin-bottom: 10px;
		margin-left: 30px;

	}

	footer {
		text-align: center;
	}
</style>