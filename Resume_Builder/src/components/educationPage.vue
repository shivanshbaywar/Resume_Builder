<template>
  <div style="overflow-y: scroll; height: 90vh; padding: 2%">
    <b-form>
    <h5>Enter your UG details</h5>
    <b-form-group id="input-group-1">
    <b-icon-building></b-icon-building> <label for="input-1"> Enter University name</label>

       <b-form-input
          id="input-1"
          type="text"
          placeholder="Enter your University name"
           @keyup="changeUn()"
          v-model="ugname"
        ></b-form-input>
      
      </b-form-group>

      <b-form-group id="input-group-2">
     <span class="material-symbols-outlined">
location_city
</span> <label for="name"> Enter city name</label>
        <b-form-input 
        type="text"
          id="name" 
          placeholder="Enter city of your University"
           v-model="ugcity"
            @keyup="changeUgCity()"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3">
       <span class="material-symbols-outlined">
percent
</span> <label for="input-3"> Enter your percentage</label>
         <b-form-input
          id="input-3"
          placeholder="Enter percentage"
          v-model="ugpercent"
          @keyup="changeUgPercent()"
        > </b-form-input>
      </b-form-group>
   
      <b-form-group id="input-group-4" style=" width:180px;">
       <span class="material-symbols-outlined">
calendar_month
</span> <label for="input-4"> From</label>
       <span>
        <b-form-input
        type="month"
          id="input-4"
          v-model="ugfrom"
          v-on:change="changeUgFrom()" 
        ></b-form-input></span>
        <span>
         <span class="material-symbols-outlined">calendar_month</span> <label for="input-5"> To</label>
        <b-form-input
        type="month"
          id="input-5"
          v-model="ugto"
          v-on:change="changeUgTo()" 
        ></b-form-input></span>
      </b-form-group>
      <b-form-group>
      <br>
      <h5>Enter your Higher Secondary details</h5>
       <label for="input-6"><span class="material-symbols-outlined">
school
</span> Enter High School name</label>
        <b-form-input
        type="text"
          id="input-6"
          placeholder="Enter Your High School Name"
          v-model="hsname"
          @keyup="changeHsName()" 
        ></b-form-input>
     <span class="material-symbols-outlined">
location_city
</span>  <label for="input-7"> Enter city name</label>
        <b-form-input
        type="text"
          id="input-7"
          placeholder="Enter Your Phone Number"
          v-model="hscity"
          @keyup="changeHsCity()" 
        ></b-form-input>
     <span class="material-symbols-outlined">
percent
</span>  <label for="input-8"> Enter High School Percentage</label>
        <b-form-input
        type="text"
          id="input-8"
          placeholder="Enter High School Percentage"
          v-model="hspercent"
          @keyup="changeHsPercent()" 
        ></b-form-input>
     <span class="material-symbols-outlined">
calendar_month
</span>  <label for="input-9"> From</label>
        <b-form-input style=" display:flex; flex-flow:row; width:180px;"
        type="month"
          id="input-9"
          v-model="hsfrom"
          v-on:change="changeHsFrom()" 
        ></b-form-input>
     <span class="material-symbols-outlined">
calendar_month
</span>  <label for="input-10"> To</label>
        <b-form-input style=" display:flex; flex-flow:row; width:180px;"
        type="month"
          id="input-10"
          v-model="hsto"
          v-on:change="changeHsTo()" 
        ></b-form-input>
<br>
        <h5>Enter your Senior Secondary details</h5>
       <label for="input-11"><span class="material-symbols-outlined">
school
</span> Enter Senior Secondary School name</label>
        <b-form-input
        type="text"
          id="input-11"
          placeholder="Enter Your Senior Secondary School Name"
          v-model="ssname"
          @keyup="changeSsName()" 
        ></b-form-input>
     <span class="material-symbols-outlined">
location_city
</span>  <label for="input-12"> Enter city name</label>
        <b-form-input
        type="text"
          id="input-12"
          placeholder="Enter Your city Number"
          v-model="sscity"
          @keyup="changeSsCity()" 
        ></b-form-input>
     <span class="material-symbols-outlined">
percent
</span>  <label for="input-13"> Enter Senior Secondary School Percentage</label>
        <b-form-input
        type="text"
          id="input-13"
          placeholder="Enter Senior Secondary School Percentage"
          v-model="sspercent"
          @keyup="changeSsPercent()" 
        ></b-form-input>
     <span class="material-symbols-outlined">
calendar_month
</span>  <label for="input-14"> From</label>
        <b-form-input style=" display:flex; flex-flow:row; width:180px;"
        type="month"
          id="input-14"
          v-model="ssfrom"
          v-on:change="changeSsFrom()" 
        ></b-form-input>
     <span class="material-symbols-outlined">
calendar_month
</span>  <label for="input-15"> To</label>
        <b-form-input style=" display:flex; flex-flow:row; width:180px;"
        type="month"
          id="input-15"
          v-model="ssto"
          v-on:change="changeSsTo()" 
        ></b-form-input>
      </b-form-group>
<br>
      <!-- <b-button type="submit" variant="primary">Submit</b-button> -->
    </b-form>
   
  </div>
</template>

<script>

  export default {
      name: 'personalDetails',
        methods: {
          changeUn(){
          this.$store.commit('UN_UPDATE', this.ugname);
        },
          changeUgCity(){
          this.$store.commit('UGCITY_UPDATE', this.ugcity);
        },
          changeUgPercent(){
          this.$store.commit('UGPERCENT_UPDATE', this.ugpercent);
        },
          changeUgFrom(){
          this.$store.commit('UGFROM_UPDATE', this.ugfrom);
        },
          changeUgTo(){
          this.$store.commit('UGTO_UPDATE', this.ugto);
        },
          changeHsName(){
          this.$store.commit('HSNAME_UPDATE', this.hsname);
        },
          changeHsCity(){
          this.$store.commit('HSCITY_UPDATE', this.hscity);
        },
          changeHsPercent(){
          this.$store.commit('HSPERCENT_UPDATE', this.hspercent);
        },
          changeHsFrom(){
          this.$store.commit('HSFROM_UPDATE', this.hsfrom);
        },
          changeHsTo(){
          this.$store.commit('HSTO_UPDATE', this.hsto);
        },
          changeSsName(){
          this.$store.commit('SSNAME_UPDATE', this.ssname);
        },
          changeSsCity(){
          this.$store.commit('SSCITY_UPDATE', this.sscity);
        },
          changeSsPercent(){
          this.$store.commit('SSPERCENT_UPDATE', this.sspercent);
        },
          changeSsFrom(){
          this.$store.commit('SSFROM_UPDATE', this.ssfrom);
        },
          changeSsTo(){
          this.$store.commit('SSTO_UPDATE', this.ssto);
        },
    },
    
  }

</script>
<style scoped>
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}

</style>