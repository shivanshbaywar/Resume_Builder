<template>
    <div>
  <b-tabs content-class="mt-3">
    <b-tab title="Personal Details" active><personalDetails/></b-tab>
    <b-tab title="Experience" ><experiencePage/></b-tab>
    <b-tab title="Projects" > <projectPage/></b-tab>
    <b-tab title="Education" ><educationPage/></b-tab>
    <b-tab title="More" > <morepage/></b-tab>
  </b-tabs>
</div>
</template>
<script>
import experiencePage from "./experiencePage.vue"
import personalDetails from "./personalDetails.vue"
import educationPage from "./educationPage.vue"
import projectPage from "./projectPage.vue"
import morepage from "./morePage.vue"
// import viewPage from "./viewPage.vue"
export default {
   name : "navBar",
   components:{
         personalDetails, experiencePage,educationPage,projectPage,morepage
   }
}

</script>
