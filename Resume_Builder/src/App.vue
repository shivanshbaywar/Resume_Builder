<template>
<div id="app">
 
   <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script >
// Import component
    // Import stylesheet
    export default{
  name: 'app',
}
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .8s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>