<template>
    <div>
	<div class="messagecommand">
		<div>
			<dl>相关推荐</dl>
			<div style="border:1px solid black;width:200px;height:300px;"></div>
		</div>
		<div>
			<dl>我的文章</dl>
			<div style="border:1px solid black;width:100px;height:200px;"></div>
		</div>
		<div>
			<dl>我的草稿</dl>
			<div style="border:1px solid black;width:100px;height:150px;"></div>
		</div>
	</div>
	<div class="compile">
		标题:<el-input v-model="input" placeholder="请输入内容"></el-input><br>
		标签:<el-input v-model="input" placeholder="请输入内容"></el-input><br>
	<el-input
  		type="textarea"
  		:rows="2"
  		placeholder="请输入内容"
  		v-model="textarea">
	</el-input>
		<el-button type="warning" class="button-hot">提交</el-button>
		<el-button type="warning" class="button-hot">存草稿</el-button>
	</div>
</div>
</template>
<script>
export default {
    
}
</script>
<style>
	.messagecommand
	{
		float:left;
	}
	.compile
	{
		margin-left:25%;
	}

</style>


