<template>
  <div id="app">
    <router-view></router-view> <!-- This is where the routed components will be rendered -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Global styles for the app */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
}
</style>
