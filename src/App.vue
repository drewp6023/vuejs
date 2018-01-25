<template>
  <div id="app">
    <!--<img src="./assets/images/logo.png">-->
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<script>
    import Nav from './components/Nav.vue';

    export default {
        name: 'App',
        components: {
            Nav
        }
    }
</script>

<style lang="scss">
    @import './assets/scss/style.scss';
</style>
