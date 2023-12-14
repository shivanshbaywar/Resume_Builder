<template >

    <div id="print" class="printing" style="overflow-y: scroll; z-index:3; height: 100vh; padding: 2%;">
        <page  ref="pdfContent" style=" zoom: 80%;" size="A4">
<vue-html2pdf 

        :show-layout="false" 
        :float-layout="false" 
        :enable-download="true" 
        :preview-modal="true" 
        :paginate-elements-by-height="1400" 
        filename="MyResume.com" 
        :pdf-quality="2" 
        :manual-pagination="true" 
        :margin="4"
        pdf-format="a4" 
        pdf-orientation="portrait"  
        pdf-content-width="100%" 
        @progress="onProgress($event)" 
        @hasStartedGeneration="hasStartedGeneration()" 
        @hasGenerated="hasGenerated($event)" 
        ref="html2Pdf" 
    > 

        <section slot="pdf-content"> 
         <div class="main-container">
           <div class="profile" style="color: white">
              <input  id="fileUpload" @change="previewImage" type="file" hidden>
              <div class="pic">  <b-button  class=" btn b-avatar btn-transparent rounded-circle" @click="chooseFiles()"><img class="image" style="z-index: 0;" :src="imagePreview" v-if="imagePreview" alt="Preview"><div class="overlay"><div class="text">Profile Picture</div></div></b-button>
              </div>
              <div class="personal-details" style="color: black">
            <h3 class="input"><div> {{name}} </div> </h3>
            <!-- <h3 class="input"><div v-for="(message, index) in messages" :key="index">{{message.text}}</div> </h3> -->
            <h4 class="input">{{designation}}</h4>
            <hr>
              </div>
                <div class="second">
                       <p>
                        <b-icon-telephone-fill></b-icon-telephone-fill> {{phone}} <br>
                        <b-icon-at></b-icon-at> {{email}} <br>
                        <b-icon-globe></b-icon-globe> {{link}}
                       </p>
                </div>
            
              <div class="third">
              <hr>
              <h2 style="margin-left:20px; width: 5cm;"><b-icon-wrench></b-icon-wrench> Skills </h2>
              <ul style="display:flex; flex-flow:column;">
                  <li @mouseover="hover = true"
      @mouseleave="hover = false" v-for="item in skills " :key="item">
                      {{ item }} <span v-if="hover"><button class="delButton" v-on:click="del(item)">X</button></span> 
                    </li>
                  
              </ul>
              </div> 
              <div class="fourth" style=" width: 5cm; margin-left:20px;">
              <h3><b-icon-globe></b-icon-globe> Languages</h3>
              <ul style="display:flex; flex-flow:column;">
                  <li @mouseover="hover1 = true"
      @mouseleave="hover1 = false" v-for="item1 in languages " :key="item1">
                      {{item1}} <span v-if="hover1"><button class="delButton" v-on:click="delL(item1)">X</button></span> 
                    </li>
                  
              </ul>
              </div>
              
              <div class="fifth" style="text-align: left; width: 5cm; margin-left:20px;"><hr>
                <h3><b-icon-plus></b-icon-plus>Interests</h3>
                 <ul style="display:flex; flex-flow:column;">
                  <li @mouseover="hover3 = true"
      @mouseleave="hover3 = false" v-for="intrest in interests " :key="intrest">
                      {{intrest}} <span v-if="hover3"><button class="delButton" v-on:click="delI(intrest)">X</button></span> 
                    </li>
                  
              </ul>
              </div>
           </div> 
            
           <div class="right-container" style=" width: 567px">
         <div class="proSum" style="background-color: rgb(23,162,184); color: white;  text-align: center; font-size: 20px">Professional summary</div>
              <div style="background-color: rgb(250,250,250); margin:10px; width: 556px;">{{description}}</div>
                <div class="eduDetails" style="background-color: rgb(23,162,184); color: white;  text-align: center; font-size: 20px">Education Details</div>
                <div style="background-color: rgb(250,250,250); margin:10px;">
                     <span style="display: float;"><h3>Under Graduation</h3>  <p style="float: right;"><small>{{ugfrom}} to {{ugto}}</small></p></span>
                     <div style="display: flex; justify-content:flex-start; width: 400px "> <p> <p style="width:300px;"> <b> {{ugname}} </b>({{ugcity}} )</p> <p>{{ugpercent}}%</p> </div>
                    <span style="display: float;"><h3>Higher Secondary</h3>  <p style="float: right;"><small>{{hsfrom}} to {{hsto}}</small></p></span>
                    <div style="display: flex; "> <p> <p style="width:300px;"> <b> {{hsname}} </b>({{hscity}})</p> <p>{{hspercent}}%</p> </div>
                     <span style="display: float;"><h3>Senior Secondary</h3>  <p style="float: right;"><small>{{ssfrom}} to {{ssto}}</small></p></span>
                     <div style="display: flex; "> <p> <p style="width:300px;"> <b> {{ssname}} </b>({{sscity}})</p><p>{{sspercent}}%</p> </div>
                </div>
                <div class="projects" style="background-color: rgb(23,162,184); color: white;  text-align: center; font-size: 20px">Projects</div>
              <div v-for="(project, indx) in project " :key="indx"  @mouseover="hover5 = true"
      @mouseleave="hover5 = false" style="background-color: rgb(250,250,250); margin:10px;">
      <h3>{{project.ptitle}} <span v-if="hover5"><button class="eDelButton" v-on:click="delP(indx)" style="float:right;">X</button></span> </h3>
      <span style="float: right;"> ({{project.pfromdate}})  -  ({{project.ptodate}})</span>
             <p>{{project.pdescription}}</p>
              </div>
                <div class="Experience" style="background-color: rgb(23,162,184); color: white;  text-align: center; font-size: 20px" >Experience</div>
              <div v-for="(exp, index) in experience " :key="index"  @mouseover="hover4 = true"
      @mouseleave="hover4 = false"  style="background-color: rgb(250,250,250); margin:10px;" >
     
              <h3>{{exp.etitle}} <span v-if="hover4"><button class="eDelButton" v-on:click="delE(index)" style="float:right;">X</button></span> </h3>
               ({{exp.efromDate}})  -  ({{exp.etoDate}})
              <p>{{exp.eDescription}}</p>
              </div>
                
           </div>
            
         </div>

         </section> 
    </vue-html2pdf> 
        <button id="pdfIcon" class="btnn" @click="generateReport(),  makeToast('success');"><img  style="height:60px; width: 60px;" src="../assets/pdf-icon.png" alt=""></button>
        <span id="onhoverPdf"><i>Download Pdf</i></span>
         <img  id="googleIcon" class="btnnn" @click="signInWithGoogle()"  src="../assets/Google.png">
        <span id="onhoverGoogle"><i>Sign In With Google</i></span>

        </page>
        
    </div>
</template>

<script>        
import VueHtml2pdf from "vue-html2pdf";
import {mapGetters} from "vuex";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default {
  name : "preView",
  components: {
    VueHtml2pdf},
   data() {
     return {
      hover: false,
      hover1: false,
      hover3: false,
      hover4: false,
      hover5: false,
      imagePreview: null,
      messages: [],
    };
  },
   methods: {
    //  to delete skill
     del (item) {
      //  console.log("i am called delete")
       this.skills.splice(item, 1)
      // this.$delete(this.skills, item)
    },
     delL(item1) {
      //  console.log("i am called delete")
       this.languages.splice(item1, 1)
      // this.$delete(this.skills, item)
    },
     delI(intrest) {
      //  console.log("i am called delete")
       this.interests.splice(intrest, 1)
      // this.$delete(this.skills, item)
    },
     delE(index) {
       console.log(index);
      //  let indx= indexOf(index);
       this.experience.splice(index,1 )
      // this.$delete(this.experiece, experience)
    },
     delP(indx) {
       console.log(indx);
      //  let indx= indexOf(index);
       this.project.splice(indx,1 )
      // this.$delete(this.experiece, experience)
    },
     chooseFiles() {
        document.getElementById("fileUpload").click()
     },
   generateReport () { 
     this.$refs.html2Pdf.generatePdf();
                 
            
        } ,
     makeToast(variant) {
        this.$bvToast.toast('Pdf generated successful', {
          title: `MyResume.com`,
          variant: variant,
          solid: true
        })
      },
   previewImage(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
         
      reader.onload = (e) => {
        this.imagePreview = e.target.result;
      };

      reader.readAsDataURL(file);
    },
    signInWithGoogle() {
      console.log("hello")
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then((result) => {
          // Handle successful sign-in
          const user = result.user;
          console.log('User name:', user.displayName);
          console.log('User email:', user.email);
          console.log('User picture:', user.photoURL);
          console.log('User pass:', user.password);
           this.$store.commit('EMAIL_UPDATE', user.email);
           this.$store.commit('NAME_UPDATE', user.displayName);
           this.$store.commit('PROFILE_UPDATE', user.photoURL);
           this.imagePreview=user.photoURL;
        })
        .catch((error) => {
          // Handle sign-in error
          console.error(error);
        });
    },
},
computed: mapGetters(["languages","project","experience","skills","interests","skilllevel","ssfrom","ssto","name","email","designation", "phone", "link", "description", "profilep", "ugname", "ugcity","ugpercent", "ugfrom", "ugto", "hsname", "hscity", "hspercent","hsfrom", "hsto", "ssname","sscity","sspercent"]),
}
</script>
<style scoped>
/* delete button for description*/
.eDelButton{
   background-color: transparent;
  border:none;
}
.btnnn{
 width: 40px;
  height: 40px;
  border-radius: 50%;
  opacity: 1;
  border: none;
  position: fixed;
  bottom: 110px;
  right: 45px;
  cursor: pointer;
  background: transparent;
  
}
.btnnn :hover{
  box-shadow: 0px 0px 38px rgb(0, 0, 0);
  opacity: 0.9;
}
 #onhoverPdf{
                visibility: hidden;
            }
            #pdfIcon:hover ~ #onhoverPdf{
                visibility: visible;
            }
#onhoverPdf{
  position: fixed;
  bottom: 50px;
  right: 100px;
  background-color: black;
  color:white;
  border-radius: 20px;
  width: 120px;
  height: 30px;
  text-align: center;
  align-content: center;
}
 #onhoverGoogle{
                visibility: hidden;
            }
#googleIcon:hover ~ #onhoverGoogle{
                visibility: visible;
            }
#onhoverGoogle{
  position: fixed;
  bottom: 110px;
  right: 100px;
  background-color: black;
  color:white;
  border-radius: 20px;
  width: 180px;
  height: 30px;
  text-align: center;
  align-content: center;
}
.btnn{
    width: 70px;
  height: 70px;
  border-radius: 50%;
  background: transparent;
  opacity: 1;
  border: none;
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
}
.btnn :hover{
  box-shadow: 0px 0px 38px rgb(0, 0, 0);
  opacity: 0.9;
}
.input{
  width: 100%;
  text-align: center;
  border: 0px;
  background-color: transparent;
  word-wrap: wrap;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: #008CBA;
}

.pic:hover .overlay {
  opacity: 1;
    border-radius: 50%;

}
.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
.profile{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}
.pic{
  
  margin-top: 20px;
}
.btn{
  height: 150px;
  width: 150px;
  border-radius: 50%;
}
img{
  margin: 0px;
  position: relative;
    height: 150px;
  width: 150px;
  border-radius: 50%;
}
.main-container{
display: flex;
flex-flow: column;
flex-wrap: nowrap;
flex-direction: row;
}
.profile{
  height: 29.7cm;
  width: 7cm;
  background-color: rgb(23,162,184);
  
}
body {
  background: rgb(204,204,204); 
}
page {
   
  background: white;
  display: block;
  margin: 5% auto;
  margin-bottom: 0.5cm;
  box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);
}
page[size="A4"] {  
  width: 21cm;
  height: 29.7cm; 
}
.dark {
  background: #16171d;
  color: #fff;
  
}
:root {
  --background-color-primary: #ebebeb;
  --background-color-secondary: #fafafa;
  --accent-color: #cacaca;
  --text-primary-color: #222;
  --element-size: 4rem;
}

/* Define styles for the root window with dark - mode preference */
:root.dark-theme {
  --background-color-primary: #1e1e1e;
  --background-color-secondary: #2d2d30;
  --accent-color: #3f3f3f;
  --text-primary-color: #ddd;
}
.delButton{
  background-color: transparent;
  border:none;
}
</style>
