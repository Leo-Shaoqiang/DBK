<template>
    <div>
        <Navbar></Navbar>
        <div class="info">
            <div class="info-img">
                <img src="@/assets/imgs/a2.png" alt="用户头像">
            </div>
            <span>{{ userName }}</span>
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
                activeName: 'share'
            };
        },
        methods: {},
        computed: {
            userName() {
                return sessionStorage.getItem('userName');
            }
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
        width: 32px;
        height: 32px;
        border-radius: 16px;
    }
    .info-follows>span {
        margin-left: 15px;
    }
</style>