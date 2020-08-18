<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <b>{{ appName }}</b>
            </router-link>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";

export default {
    components: {
        BaseNav
    },

    data: () => ({
        appName: process.env.VUE_APP_NAME,
    })
};
</script>
<style>
</style>
