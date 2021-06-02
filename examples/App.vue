<template>
  <div id="nav">
    <router-link v-for="item in routes" :to="item.path">{{item.name}}</router-link>
  </div>
  <router-view/>
</template>
<script>
import {routes} from './router';
export default {
  data(){
    return{
      routes 
    }
  }
}
</script>
<style scoped>

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
