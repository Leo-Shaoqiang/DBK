<template>
	<div>
		<link rel="stylesheet" href="../themes/default/default.css" />
		<Navbar></Navbar>
		<div class="messagecommand">
			<div>
				<span class="commandtitle">相关推荐</span>
				<div class="commandstyle">
					<ul class="commandissue" v-for="item in list" :key="item._id">
						<li><a href="http://localhost:8080/">{{item.title}}</a></li>
					</ul>
				</div>
			</div>
			
			
		</div>
		<div class="compile">
			<form>
				
					<input type="text" v-model="blog.title" placeholder="请输入标题" style="margin-bottom:2%;height:50px;width:300px;">
				
				
					<input type="text"  v-model="blog.tag" placeholder="请输入标签" style="margin-left:5%;margin-bottom:2%;height:50px;width:300px;">
				
					<div class="edit_container">
						<quill-editor v-model="blog.content" ref="myQuillEditor" :options="editorOption"
							@blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
							@change="onEditorChange($event)">
						</quill-editor>
					</div>
				
					<div class="buttons">
						<el-button style="float:left;margin-left:20%;" @click="submit" :plain="true">提交</el-button>
						<el-button style="float:right;margin-right:20%;" :plain="true">暂时保存</el-button>
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
		mounted(){
				this.axios.post('/users/issue', this.blog).then((res) => {
							this.list = res.data;
							console.log(res.data)
			})},
		components: {
			Navbar,
			quillEditor
		},
		data() {
			return {
				content: ``,
				editorOption: {},
				blog: {
					title: '',
					tag: '',
					content: ''
				},
				list:[]
			}
		},
		methods: {
			//TIJIA
			submit() {
				
						this.axios.post('/users/issue', this.blog).then((res) => {
							
							if(this.blog.tag==''||this.blog.title==''||this.blog.content=='')
							{

								this.$message({
                                        type: 'error',
                                        message: '发表失败！内容不能为空',
                                        duration:3000
                                    })
							}else{
                                    this.$message({
                                        type: 'success',
                                        message: '发表成功！',
                                        
                                    })
									this.$router.replace('/');
									

							}
							

						})

					
				
			},



			onEditorReady() { // 准备编辑器

			},
			onEditorBlur() { }, // 失去焦点事件
			onEditorFocus() { }, // 获得焦点事件
			onEditorChange() { }, // 内容改变事件

		},
		computed: {
			editor() {
				return this.$refs.myQuillEditor.quill;
			},
		}
	}
</script>
<style>
	.messagecommand {
		float: left;
		margin-top: 20px;
		margin-left: 15px;
	}

	.compile {
		float: right;
		margin-top: 20px;
		margin-right: 10%;
		width: 70%;
	}

	.inputstyle {
		display: inline-block;
		width: 500px;
		margin-bottom: 25px;
		height: 30px;
		border-radius: 10px;
		border: solid 1px gray;
	}

	textarea {
		width: 800px;
		height: 300px;
	}

	.buttons {
		margin-top: 20px;
	}

	button {
		padding: 13px 30px;
		background-color: orange;
		color: white;
		border: none;
		border-radius: 3px;
		cursor: pointer;
	}

	.commandtitle {
		padding: 10px 20px;
		background-color: orange;
		color: white;
		font-family: 幼圆;
		border-radius: 3px;
	}

	.commandstyle {
		border: 1px solid orange;
		width: 200px;
		height: 1000px;
		margin: 25px 0px;
	}

	.commandissue {
		list-style-type: none;
		
	}

	.commandissue li {
		margin-bottom: 5px;
	}
</style>