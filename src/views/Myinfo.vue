<template>
    <div>
        <Navbar></Navbar>
        <div class="info">
            <div class="info-img">
                <!-- <img src="@/assets/imgs/a2.png" alt="用户头像"> -->
                <el-upload class="avatar-uploader"
                with-credentials
                name="avatar"
                action="https://jsonplaceholder.typicode.com/posts/" 
                :show-file-list="false" 
                :on-success="handleAvatarSuccess" 
                :before-upload="beforeAvatarUpload"
                >
                    <img v-if="imageUrl" :src="imageUrl || defaultUrl " class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>

            </div>
            <span>{{ user }}</span>
            <div class="info-follows">
                <span>关注<a href="">66</a></span>  
                <span>|</span>
                <span>粉丝<a href="">88</a></span><br/>
                <span class="info-notes">个性签名:不要在最该奋斗的年纪选择安逸</span>
            </div>
        </div>
        <div class="info-tabs">
            <el-tabs v-model="activeName" type="border-card">
                <el-tab-pane label="我的分享" name="share">我的分享</el-tab-pane>
                <el-tab-pane label="收藏" name="collection">收藏</el-tab-pane>
                <el-tab-pane label="转发" name="transmit">转发</el-tab-pane>
                <el-tab-pane label="草稿箱" name="draft">草稿箱</el-tab-pane>
            </el-tabs>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Navbar from './Navbar.vue';
    import Footer from '@/components/Footer.vue';
    export default {
        components: {
            Navbar,
            Footer,
        },
        data() {
            return {
                // 默认显示share
                activeName: 'share',
                user: '',
                // 上传图片
                imageUrl: '',
                defaultUrl : 'blob:http://localhost:8080/24249695-3479-4dd7-9921-56050ff2f806',
            };
        },
        methods: {
            checkCookie() {
                this.axios.get('/users/checkCookie', { 
                    withCredentials: true
                }).then((res) => {
                    this.user = res.data.userName;
                    console.log(res.data.userName);
                }).catch((err) => {
                    console.log(err);
                });
            },
              handleAvatarSuccess(res, file) {
                 this.imageUrl = URL.createObjectURL(file.raw);
                  this.axios.post('/users/Myinfo',{ imageUrl : this.imageUrl, user: this.$store.state.user },{ 
                    withCredentials: true
                }).then((res) => {
                        console.log('axios '+ res.data);
                }).catch((err) => {
                    console.log(err);
                });
                 console.log(this.imageUrl);
                 console.log(this.defaultUrl);
              },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;
                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
        },
        created() {
            this.checkCookie();
        }
    }
</script>

<style>
    .info-tabs {
        width: 50% !important;
        margin: 20px auto;
    }
    .el-tabs__item {
        margin-left: 50px !important;
    }
    .info-img>img {
        width: 96px;
        height: 96px;
        border-radius: 48px;
    }
    .info-follows>span {
        margin-left: 15px;
    }
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 48px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 96px;
        height: 96px;
        line-height: 100px;
        text-align: center;
    }
    .avatar {
        width: 96px;
        height: 96px;
        display: block;
    }
</style>