<template>
    <div class="row">
        <navbar />
        <app-main />
    </div>
</template>
<script>
import AppMain from './layouts/AppMain.vue'
import Navbar from './layouts/Navbar.vue'
export default {
    name: 'Layout',
    components: {
        Navbar,
        AppMain,
    }
}
</script>