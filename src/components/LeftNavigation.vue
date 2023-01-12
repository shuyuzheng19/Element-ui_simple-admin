<template>
    <div style="height: 100%!important;">
        <el-menu
                style="height: 100%!important;"
                :default-active="config.activeMenu"
                router
                class="el-menu-vertical-demo"
                :background-color="config.menuConfig.backgroundColor"
                :text-color="config.menuConfig.textColor"
                :active-text-color="config.menuConfig.activeColor"
        >
            <span v-for="item of config.menuData">
                <el-menu-item v-if="item.groups==undefined" :index="item.index" :route="item.path">
                    <el-icon><i :class="'fa '+item.icon"></i></el-icon>
                    <span>{{item.title}}</span>
                </el-menu-item>
                <el-sub-menu  v-else>
                    <template #title>
                        <el-icon><i :class="'fa '+item.icon"></i></el-icon>
                        <span slot="title">{{item.title}}</span>
                    </template>
                    <el-menu-item-group >
                        <el-menu-item :index="item2.index" :route="item2.path" v-for="item2 of item.groups">
                            <el-icon><i :class="'fa '+item2.icon"></i></el-icon>
                            <span slot="title">{{item2.title}}</span>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
            </span>
        </el-menu>
    </div>
</template>

<script lang="ts">
    import {defaultSideBarConfig} from "../config/config"
    export default {
        name: "LeftNavigation",
        data(){
            return{
                config:defaultSideBarConfig,
            }
        },
        created(){
            // alert(JSON.stringify(defaultSideBarConfig.menuData[0].icon))
            console.log(defaultSideBarConfig.menuData[0])
        }
    }
</script>

<style scoped>

</style>
