<template>
    <div>
	<link rel="stylesheet" href="../themes/default/default.css" />
	<Navbar></Navbar>
	<div class="messagecommand">
		<div>
			<span class="commandtitle">相关推荐</span>
			<div class="commandstyle">
				<ul class="commandissue">
					<li>第一篇文章</li>
					<li>第二篇文章</li>
					<li>第三篇文章</li>
				</ul>
			</div>
		</div>
		<div>
			<span class="commandtitle">我的文章</span><br>
			<div class="commandstyle"></div>
		</div>
		<div>
			<span class="commandtitle">我的草稿</span>
			<div class="commandstyle"></div>
		</div>
	</div>
	<div class="compile">
		<form>
		<input type="text" placeholder="请输入标题" class="inputstyle">
		<input type="text" placeholder="请输入标签" class="inputstyle" style="margin-left:5%;"><br>
		<div class="edit_container">
        <quill-editor 
            v-model="content" 
            ref="myQuillEditor" 
            :options="editorOption" 
            @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
        </quill-editor>
		</div>
		<div class="buttons">
		<button style="float:left;margin-left:20%;">提交</button>
		<button style="float:right;margin-right:20%;">暂时保存</button>
		</div>
		</form>
	</div>
</div>
</template>
<script>
import Navbar from '@/views/Navbar.vue';
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
export default {
    components: {
		Navbar,
		quillEditor
	},
data() {
        return {
            content: ``,
            editorOption: {}
        }
    },
    methods: {
        onEditorReady() { // 准备编辑器
 
        },
        onEditorBlur(){}, // 失去焦点事件
        onEditorFocus(){}, // 获得焦点事件
		onEditorChange(){}, // 内容改变事件
		
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill;
        },
    }
}
</script>
<style>
	.messagecommand
	{
		float:left;
		margin-top:20px;
		margin-left:15px;
	}
	.compile
	{
		float: right;
		margin-top: 20px;
		margin-right:10%;
		width:70%;
	}
	.inputstyle
	{
		display: inline-block;
		width:500px;
		margin-bottom:25px;
		height:30px;
		border-radius:10px;
		border: solid 1px gray;
	}
	textarea
	{
		width:800px;
		height:300px;
	}
	.buttons
	{
		margin-top:20px;
	}
	button
	{
		padding:13px 30px;
		background-color:orange;
		color:white;
		border: none;
		border-radius:3px;
		cursor: pointer;
	}
	.commandtitle
	{
		padding:10px 20px;
		background-color:orange;
		color:white;
		font-family:幼圆;
		border-radius:3px;
	}
	.commandstyle
	{
		border:1px solid orange;
		width:200px;
		height:300px;
		margin:25px 0px;
	}
	.commandissue
	{
		list-style-type:none;
		margin:20px 0px 0px 10px;
		float: left;
	}
	.commandissue li
	{
		margin-bottom:5px;
	}
</style>


