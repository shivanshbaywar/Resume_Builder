<template>
  <div style="overflow-y: scroll; height: 90vh; padding: 2%">
    <b-form>
    <b-form-group id="input-group-1">
    
    <b-icon-at></b-icon-at> <label for="input-1"> Enter your email</label>

       <b-form-input
          id="input-1"
          type="email"
          placeholder="Enter your Eamil"
           @keyup="changeEmail()"
          v-model="email"
        ></b-form-input>
      
      </b-form-group>

      <b-form-group id="input-group-2">
      <b-icon-person-fill></b-icon-person-fill> <label for="name"> Enter your name</label>
        <b-form-input 
        type="text"
          id="name" 
          placeholder="Enter your name"
           v-model="name"
            @keyup="changeName()"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3">
       <b-icon-briefcase-fill></b-icon-briefcase-fill> <label for="input-3"> Enter your designation</label>
         <b-form-input
          id="input-3"
          placeholder="Enter designation"
          v-model="designation"
          @keyup="changeDesignation()"
        > </b-form-input>
      </b-form-group>
   
      <b-form-group id="input-group-4">
       <b-icon-telephone-fill></b-icon-telephone-fill> <label for="input-4"> Enter your Phone Number</label>
        <b-form-input
          id="input-4"
          placeholder="Enter Your Phone Number"
          v-model="phone"
          @keyup="changePhone()"
        ></b-form-input>
      </b-form-group>
      

       <b-icon-link45deg></b-icon-link45deg> <label for="tags-remove-on-delete"> Enter links</label>
           <b-form-input
          id="input-4"
          placeholder="Enter your Linked in profile"
          v-model="link"
      @keyup="changeLink()"
        ></b-form-input>
 <!-- <b-form-tags 
      input-id="tags-remove-on-delete"
      :input-attrs="{ 'aria-describedby': 'tags-remove-on-delete-help' }"
      v-model="link"
      @keyup="changeLink()"
      separator=" "
      placeholder="Enter new links separated by space"
      remove-on-delete
      no-add-on-enter 
    ></b-form-tags> -->
    <!-- <p class="mt-2">Links: {{ value }}</p> -->
  <b-form-group id="textarea">
       <b-icon-pencil-fill></b-icon-pencil-fill> <label for="textarea"> Enter Description...</label>
 <b-form-textarea 
      id="textarea"
      v-model="description"
      @keyup="changeDescription()"
      placeholder="Enter Description..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    </b-form-group>
<br>
 
      <!-- <b-button type="submit" variant="primary">Submit</b-button> -->
    </b-form>
   
  </div>
</template>

<script>
  export default {
      name: 'personalDetails',
      data() {
        return{
          fName:"", email:""
        }
  },
        methods: {
        changeName(){
            this.$store.commit('NAME_UPDATE', this.name);
        },
       changeEmail(){ 
          this.$store.commit('EMAIL_UPDATE', this.email);
        },
        changeDesignation(){
          this.$store.commit('DESIGNATION_UPDATE', this.designation);
        },
        changePhone(){
          console.log(this.phone);
          this.$store.commit('PHONE_UPDATE', this.phone);
        },
        changeLink(){
          console.log(this.link);
          this.$store.commit('LINK_UPDATE', this.link);
        },
        changeDescription(){
          console.log(this.description);
          this.$store.commit('DESCRIPTION_UPDATE', this.description);
        }
    },
    
  }

</script>