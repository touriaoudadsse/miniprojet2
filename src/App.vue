  
<template>
    <div id="app">
        <Header></Header>
        <router-view/>
    </div>
</template>
<script>
    import Header from './components/Header'
    export default {
        name: 'app',
        components: {
            Header
        }
    }
</script>

<style>
    @import "//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.css";
    @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>