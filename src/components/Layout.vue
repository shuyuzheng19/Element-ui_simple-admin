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
        }
    }
</script>

<style scoped>
</style>
