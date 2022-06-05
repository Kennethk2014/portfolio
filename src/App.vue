<template>
<the-navbar></the-navbar>
  <div class="app">
      <router-view />
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar/TheNavbar.vue'


export default {
  name: 'App',
  components: {
    TheNavbar

  },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,700&display=swap');
#app {
  margin: 0;
  padding: 0;
  font-family: 'Inconsolata', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #FDFDFD;
}
p{
  font-family: 'Montserrat', sans-serif;

}

</style>
