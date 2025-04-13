<template>
    <LeftMenuLayout></LeftMenuLayout>
    <router-view></router-view>
</template>

<script>
import LeftMenuLayout from './LeftMenuLayout.vue'
export default {

    components:{
        LeftMenuLayout
    }
}
</script>
