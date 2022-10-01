<template>
  <div id="app">

    <!-- Navbar -->
    <Navbar></Navbar>
    
    <router-view></router-view>

    <!-- Footer -->
    <Footer></Footer>

  </div>
</template>

<script>

import Navbar from './views/Navbar.vue';
//import Home from './views/Home.vue';
import Footer from './views/Footer.vue';

/*
REMEMBER TO REMOVE OVERFLOW:HIDDEN FROM #TEAM
*/
export default {
  name: 'App',
  components: {
    Navbar,
    //Home,
    Footer,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html {
  scroll-behavior: smooth;
}
body {
    overflow-x: hidden;
}


::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background: #ddd; 
  }
   
  ::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 5px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }

</style>
