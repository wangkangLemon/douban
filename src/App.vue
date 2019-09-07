<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
    *{
      margin:0;
      padding: 0;
    }
    html{
      font-size: 26.67vw;
    }
    body{
      background: white;
    }
    li{
      list-style: none;
    }
    a{
      text-decoration: none;
    }
</style>
