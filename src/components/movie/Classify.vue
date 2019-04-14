<template>
        <div>
                <el-row>
                        <el-col>
                                <div class="tag-classify">分类</div>
                        </el-col>
                </el-row>
                <el-row>
                        <el-col>
                                <div class="classify-box">
                                        <el-row>
                                                <el-col :span="20" class="place">
                                                        <el-button type="warning" style="float:left;">地区</el-button>
                                                        <div style="float:left;" v-for="(place,index) in places"
                                                                class="button-place" @click="change(index)"
                                                                :class="{background:changebackground==index}">

                                                                {{place.name}}



                                                        </div>
                                                </el-col>
                                        </el-row>
                                        <el-row>
                                                <el-col :span="20" class="place">
                                                        <el-button type="warning" style="float:left;">年份</el-button>
                                                        <div style="float:left;" v-for="(year,index2) in years"
                                                                class="button-place" @click="change2(index2)"
                                                                :class="{background:changebackground2==index2}">
                                                        
                                                                {{year.name}}



                                                        </div>
                                                </el-col>
                                        </el-row>
                                        <el-row>
                                                <el-col :span="20" class="place">
                                                        <el-button type="warning" style="float:left;">类型</el-button>
                                                        <div style="float:left;" 
                                                                v-for="(cla,index3) in classes" 
                                                                class="button-place" @click="change3(index3)"
                                                                :class="{background:changebackground3==index3}">

                                                                {{cla.name}}



                                                        </div>
                                                </el-col>
                                        </el-row>
                                        <el-row>
                                                <el-col :span="20" class="place">
                                                        <el-button type="warning" style="float:left;">主要演员</el-button>
                                                        <div style="float:left;" v-for="(actor,index4) in actors"
                                                                class="button-place" @click="change4(index4)"
                                                                :class="{background:changebackground4==index4}">

                                                                {{actor.name}}



                                                        </div>
                                                </el-col>
                                        </el-row>
                                </div>
                        </el-col>
                </el-row>



        </div>
</template>
<script>
        export default {
                data() {
                        return {
                                places: [
                                        { name: '美国' },
                                        { name: '国产' },
                                        { name: '日韩' },
                                        { name: '欧洲' },
                                        { name: '泰国' },
                                        { name: '其他' },
                                ],
                                years: [
                                        { name: '2019' },
                                        { name: '2010-2018' },
                                        { name: '00年代' },
                                        { name: '90年代' },
                                        { name: '80年代' },
                                        { name: '其他' },
                                ],
                                classes: [
                                        { name: '喜剧' },
                                        { name: '科幻' },
                                        { name: '动作' },
                                        { name: '文艺' },
                                        { name: '爱情' },
                                        { name: '恐怖' },
                                        { name: '其他' },
                                ],
                                actors: [
                                        { name: '成龙' },
                                        { name: '李连杰' },
                                        { name: '蔡徐坤' },
                                        { name: '周杰伦' },
                                        { name: '沈腾' },
                                        { name: '史泰龙' },
                                        { name: '其他' },
                                ],
                                changebackground: 0,
                                changebackground2: 0,
                                changebackground3: 0,
                                changebackground4: 0,
                        }
                },
                methods: {
                        change(index) {
                                this.changebackground = index;
                        },
                        // 地区栏的方法
                        change2(index2) {
                                this.changebackground2 = index2;
                        },
                        // 年份栏的方法
                        change3(index3) {
                                this.changebackground3 = index3
                        },
                        // 类型栏的方法
                        change4(index4) {
                                this.changebackground4 = index4
                        },
                        // 演员栏的方法
                }

        }

</script>
<style>
        .tag-classify {
                margin-left: 10%;
                border: 1px solid yellow;
                background-color: gold;
                color: white;
                width: 80px;
                height: 40px;
                font-size: 30px;
                margin-top: 5%;
        }

        .classify-box {
                margin-left: 10%;
                border: 3px solid gold;
                color: white;
                width: 80%;
                height: 400px;

        }

        .place {
                margin-top: 3%;
                margin-left: 5%;
        }

        .button-place {
                float: left;
                color: black;
                border: 1px solid gold;
                width: 10%;
                height: 40px;
                cursor: pointer;
        }

       
        .font {
                margin-left: 10%;
                margin-top: 10%;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                font-size: 20px;
        }

        .background {
                color: white;
                background-color: orange;
        }
</style>