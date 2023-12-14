<template>
    <div class="main-cont">
    <div class="helllo">
      <div class="vld-parent" style="z-index:6;">
        <loading class="vld-parent" 
                 :active.sync="isLoading"
                 :can-cancel="false"
                 :on-cancel="onCancel"
                 :is-full-page="fullPage"
                 :height="90"
                 ></loading>
        </div>
    <div class="graph__wrapper">
  <svg width="315px" height="107px" viewBox="0 0 315 107" version="1.1" style="overflow:visible">
    <g  id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
      <path id="Path-1" class="path" fill="none" stroke="black" stroke-width="5" stroke-linejoin="round" stroke-miterlimit="10" d="M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81"/>

<path class="dashed" fill="none" stroke="white" stroke-width="8" stroke-linejoin="round" stroke-miterlimit="10" d="M1.4,2.1c0,0,86,57,211.5,41.5s172.5- 24.5,289,81"/>   
       
      <polyline id="arrow" points="0,-9 18,0 0,9 5,0" fill="red">
        <animateMotion rotate="auto" begin="1s" dur="1.6s" repeatCount="1" fill="freeze">
          <mpath xlink:href="#Path-1" />
        </animateMotion>
      </polyline>

    </g>
  </svg>
</div>
    <p class="heading">
      Welcome to MyResume.com 
    </p>
    <router-link style="margin-left:730px;" to="/dashBoard"><button class="mainbtn" v-b-tooltip.hover="'Start building your Resume!'">
        Let's Start 
      </button> </router-link>
 </div>
      <div class="container11">
<p>A well-crafted resume has a significant impact on the application process for big companies. It creates a positive first impression, highlights your relevant skills and experience, demonstrates professionalism, showcases achievements, tailors to company requirements, and helps you stand out in a competitive market. Invest time and effort into creating a compelling resume.</p>
</div>

  </div>
</template>

<script>
 import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: 'landing',
data() {
  
  return {
                isLoading: false,
                fullPage: true
            }
        },
        components: {
          Loading
        },
          beforeMount: function() {
            console.log("is mounting")
              this.isLoading = true;
                // simulate AJAX
               
            },
        mounted: function(){
          console.log("mounted");
           setTimeout(() => {
                    this.isLoading = false
                }, 2000)
        },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.helllo p{
position: relative;
  animation-name: anime;
  animation-duration: 4s;
}
.mainbtn{
position: relative;
  animation-name: example;
  animation-duration: 4s;
}
.helllo{
    background-image: url("./assets/wallpaper.jpg");
        
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  overflow-x: hidden;
  font-size: 30px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
height: 100%;
    color: white;
  text-shadow: 2px 2px 5px black;
  position: fixed;
  text-align: center;
  top: 0;
  left: 0;
  z-index: 2;
  text-overflow: none;
}
@keyframes example {
  0% {opacity:0}
  25% {opacity:0.4}
  50% {opacity:0.6}
  75%  {opacity:0.8;}
  100% {opacity:1}
}
@keyframes anime {
  0% {opacity:0}
  25% {opacity:0.3}
  50% {opacity:0.5}
  75%  {opacity:0.7;}
  100% {opacity:1}
}
.mainbtn{
  color: white;
  background: transparent;
  border: 2px solid white;
  border-radius: 8px;
  height: 3rem;
  width: 8rem;
  font-size: 20px;

}
.mainbtn:hover{
  cursor: pointer;
}

.path { stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: dash 4s linear forwards; animation-iteration-count: 1;animation-delay: 1s;}
@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
.dashed{
  stroke-dasharray: 5,12;
  
}
#arrow{animation: arrow 4s linear forwards; opacity:0;}
@keyframes arrow {
  to {
    opacity: 1;
  }
} 
.graph__wrapper{
    margin-left: 0px;
}
@import url('https://fonts.googleapis.com/css2?family=Victor+Mono:wght@600&display=swap');
.container11 {
  height: 450px;
  width: 320px;
  background-color: aliceblue;
  font-size: 16px;
  float: left;
background: rgba(0, 0, 0, 0.22);
border-radius: 14px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(8.6px);
-webkit-backdrop-filter: blur(8.6px);
border: 1px solid rgba(0, 0, 0, 0.6);
z-index: 5;
color: aliceblue;
margin-left: 5%;
margin-top: 8%;
padding: 2%;
font-family: 'Victor Mono', monospace;
} 
.container11{
   animation: pcard 4s;
}
@keyframes pcard {
 from {
    transform: translatey(-100%);
  }

  to {
    transform: translateY(0%);
  }
}
.main-cont{
  display: flex;
}
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=Victor+Mono:wght@600&display=swap');
.heading{
  font-family: 'Playfair Display', serif;
font-family: 'Victor Mono', monospace;
}

/* preloader css*/
.vld-parent{
  opacity: 1;
  color:rgb(54, 42, 165)
}
</style>
