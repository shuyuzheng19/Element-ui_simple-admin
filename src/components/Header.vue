<template>
    <div class="header">
        <div class="left">
            <router-link to="/">
                <img class="logo" src="https://element-plus.gitee.io/images/element-plus-logo.svg" size="small"/>
            </router-link>
        </div>
        <div class="right">
            <div class="container">
                <el-space>
                    <el-input
                            v-model="keyword"
                            placeholder="Please Input"
                    >
                        <template #suffix>
                            <el-icon>
                                <i class="fa fa-search"></i>
                            </el-icon>
                        </template>
                    </el-input>
                    <el-button>哈哈</el-button>
                    <el-button>哈哈</el-button>
                    <el-button>哈哈</el-button>
                    <el-button>哈哈</el-button>
                    <el-dropdown trigger="click">
                        <el-link  :underline="false" class="el-dropdown-link">
                            <el-avatar size="small" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                            admin
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </el-link>
                        <template #dropdown>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>占位符</el-dropdown-item>
                                <el-dropdown-item>占位符</el-dropdown-item>
                                <el-dropdown-item>占位符</el-dropdown-item>
                                <el-dropdown-item>占位符</el-dropdown-item>
                                <el-dropdown-item>占位符</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </el-space>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"Header",
        data(){
            return{
                keyword:""
            }
        }
    }
</script>

<style scoped>
    .header{
        height: 50px;
        width: auto;
    }

    .header .logo{
        width: 113px;
        height: 27px;
        margin-top: 11px;
        margin-left: 15px;
    }

    .header .container{
        margin-top: 10px;
        margin-right: 15px;
    }
</style>
