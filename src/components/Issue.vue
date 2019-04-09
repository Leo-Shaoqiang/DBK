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
		标题:<input type="text" style="width:300px;margin-bottom:30px;"><br>
		标签:<input type="text" style="width:300px;margin-bottom:30px;"><br>
		<textarea style="width:500px;height:700px;"></textarea><br>
		<button>提交</button>
		<button>存草稿</button>
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


