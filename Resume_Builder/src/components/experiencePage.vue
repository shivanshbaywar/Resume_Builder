<template>
  <div style="overflow-y: scroll; height: 90vh; padding: 2%">
    <b-form >
    <b-form-group id="input-group-1">
    
     <label for="input-1"> Enter Title</label>
       <b-form-input
          id="input-1"
          type="text"
          placeholder="Enter the title"
          v-model="experience.etitle"
        ></b-form-input>
        <label for="input-2"> Enter the date from</label>
       <b-form-input
          id="input-2"
          type="month"
          placeholder="Enter the date"
          v-model="experience.efromDate"
        ></b-form-input>
      <label for="input-3"> Enter the date To</label>
       <b-form-input
          id="input-3"
          type="month"
          placeholder="Enter the date"
          v-model="experience.etoDate"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="textarea">
       <b-icon-pencil-fill></b-icon-pencil-fill> <label for="textarea"> Enter Description...</label>
 <b-form-textarea 
      id="textarea"
      v-model="experience.eDescription"
      placeholder="Enter Description..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    </b-form-group>
<br>
 
      <b-button  v-on:click="changeExperience()" variant="primary">Submit</b-button>
    </b-form>
   
  </div>
</template>

<script>
  export default {
      name: 'personalDetails',
      data() {
        return{
          experience :{
            eDescription:"", efromDate:"",etodate:"", etitle:""
          }
        }
  },
        methods: {
        changeExperience(){         
          console.log(this.experience)
          this.$store.commit('EXPERIENCE_UPDATE',this.experience );     
          this.experience ={
            eDescription:"", efromDate:"",etodate:"", etitle:""
          }
        },
        
    }
  }

</script> 