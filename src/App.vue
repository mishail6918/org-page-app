<template>
    <OrgCard/>
</template>

<script>
import OrgCard from "@/components/OrgCard";
export default {
  name: 'App',
  components: {
      OrgCard
  }
}
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-weight: normal;
    }
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    button, input, optgroup, select, textarea {
        font-family: inherit;
        font-size: 100%;
    }
    html {
        height: 100%;
    }
    body {
        height: 100%;
        background-color: #EDEDED;
        line-height: 24px;
    }
    #app {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #111;
        font-size: 14px;
    }
    .hidden {
        display: none;
    }
</style>
