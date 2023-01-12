<template>
    <div class="main-body">
        <transition name="move" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "Main"
    }
</script>

<style scoped>
    .main-body{
        width: 100%!important;
    }
</style>
