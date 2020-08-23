<template>
  <div id="app">
      <NavigationHeader></NavigationHeader>
      <div class="router-pad-top">
        <router-view/>
      </div>
      <div style="margin-top:50px">
        <NavigationFooter></NavigationFooter>
      </div>
    
    
  </div>
</template>
<script>
import NavigationHeader from './components/shared/NavigationHeader';
import NavigationFooter from './components/shared/NavigationFooter';
export default {
  name:'App',
  components:{
    NavigationHeader,
    NavigationFooter
  } 
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.router-pad-top{
  padding-top: 4.6rem;
  min-height: 93vh;
}


</style>
