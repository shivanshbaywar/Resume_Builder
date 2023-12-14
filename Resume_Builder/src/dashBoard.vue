<template>
  <div id="dashBoard" style="overflow-y: no-scroll;">
  
<splitpanes class="default-theme" style="height: 100vh">
  <pane max-size="70" min-size="30">
    <span><navBar/></span>
  </pane>
  <pane>
    <span><preView/></span>
  </pane>
</splitpanes>
  </div>
</template>

<script>

import preView from './components/preView.vue'
import navBar from './components/navBar.vue'
  import { Splitpanes, Pane } from 'splitpanes'
  import 'splitpanes/dist/splitpanes.css'


export default {
  name: 'dashBoard',
  components: {
     navBar,Splitpanes, Pane, preView
  },
  // beforeMount() {
  //   window.addEventListener("beforeunload", this.preventNav);
  //   this.$once("hook:beforeDestroy", () => {
  //     window.removeEventListener("beforeunload", this.preventNav);
  //   });
  // },
  // beforeRouteLeave(to, from, next, reload) {
  //     window.confirm("Leave the page will loose all data");
  // },
  //   methods: {
  //   preventNav(event) {
  //     event.preventDefault();
  //     // Chrome requires returnValue to be set.
  //     event.returnValue = "hello";
    // }
  // }
}
</script>

<style scoped>

</style>
