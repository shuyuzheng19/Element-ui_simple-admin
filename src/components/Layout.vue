<template>
    <el-container style="height: 100%!important;">
        <el-aside width="230px">
            <LeftNav></LeftNav>
        </el-aside>
        <el-main  style="margin: 0;padding: 0">
            <TopHeader></TopHeader>
            <el-divider  style="margin: 0;padding: 0"/>
            <Main></Main>
        </el-main>
    </el-container>
</template>

<script>
    import LeftNav from '@/components/LeftNavigation'
    import TopHeader from '@/components/Header'
    import Main from '@/components/Main'
    export default {
        name: "Index",
        components:{
            LeftNav,
            TopHeader,
            Main
        },
        data(){
            return{
                isCollapse: true,
                clientHeight: 0,
                iframeUrl: 'http://www.taobao.com',
            }
        },
        methods:{
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            reloadUrl(){
                document.getElementById("iframe").src=this.iframeUrl;
            }
        },
        mounted() {
            let h = document.documentElement.clientHeight || document.body.clientHeight;
            this.clientHeight=h;
        }
    }
</script>

<style scoped>


    #content {
        margin: 0!important;
        padding: 0!important;
        overflow: hidden;
    }

    .top {
        margin-top: 15px!important;
    }
</style>
