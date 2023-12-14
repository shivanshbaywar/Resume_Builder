<template>
  <div style="overflow-y: scroll; height: 90vh; padding: 2%">
    <b-form >
    <b-form-group id="input-group1">
    
     <label for="input1"> Enter the Project Title </label>
       <b-form-input
          id="inpu1"
          type="text"
          placeholder="Enter the project title"
          v-model="project.ptitle"
        ></b-form-input>
        <label for="input2"> Enter the date from</label>
       <b-form-input
          id="input2"
          type="month"
          placeholder="Enter the date"
          v-model="project.pfromdate"
        ></b-form-input>
      <label for="input3"> Enter the date To</label>
       <b-form-input
          id="input3"
          type="month"
          placeholder="Enter the date"
          v-model="project.ptodate"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="textarea">
       <b-icon-pencil-fill></b-icon-pencil-fill> <label for="textarea"> Enter Description...</label>
 <b-form-textarea 
      id="textarea"
      v-model="project.pdescription"
      placeholder="Enter Description..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    </b-form-group>
<br>
      <b-button  v-on:click="changeProject()" variant="primary">Submit</b-button>
    </b-form>
   
  </div>
</template>

<script>
  export default {
      name: 'projectPage',
      data() {
        return{
          project :{
            pdescription:"", pfromdate:"",ptodate:"", ptitle:""
          }
        }
  },
        methods: {
        changeProject(){         
          this.$store.commit('PROJECT_UPDATE',this.project );     
          this.project = {
            pdescription:"", pfromdate:"",ptodate:"", ptitle:""
          }
        },
        
    }
  }

</script> 