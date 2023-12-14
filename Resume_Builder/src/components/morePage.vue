<template>
  <div style="overflow-y: scroll; height: 90vh; padding: 2%;">
  <b-form-group id="skills">
      <b-icon-person-fill></b-icon-person-fill> <label for="skills"> Enter your skills  </label>
        <b-form-input 
        type="text"
          id="skills" 
          placeholder="Enter your skills"
           v-model="skills"
            @keyup.enter="changeSkills()"
        ></b-form-input>
      </b-form-group>
  <b-form-group id="languages">
      <b-icon-person-fill></b-icon-person-fill> <label for="languages"> Enter your languages  </label>
        <b-form-input 
        type="text"
          id="languages" 
          placeholder="Enter your languages"
           v-model="languages"
            @keyup.enter="changeLanguages()"
        ></b-form-input>
      </b-form-group>
  <b-form-group id="interests">
      <b-icon-person-fill></b-icon-person-fill> <label for="interests"> Enter your interests  </label>
        <b-form-input 
        type="text"
          id="interests" 
          placeholder="Enter your interests"
           v-model="interests"
            @keyup.enter="changeInterests()"
        ></b-form-input>
      </b-form-group>
        <!-- <b-form-select v-on:click="changeSLevel()" v-model="skilllevel" :options="options" size="sm" class="mt-3"></b-form-select> -->
  </div>
</template>

<script>
  export default {
      name: 'morePage',
      data() {
        return{
           skills: "",
           languages:"",
           selected: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'Beginner' },
          { value: 'b', text: ' Intermediate' },
          { value: 'c', text: 'Advanced'}
        ]
        }
  },
        methods: {
        changeSkills(){
          console.log("i am called")
            this.$store.commit('SKILLS_UPDATE', this.skills);
        },
        changeLanguages(){
          console.log("i am called")
            this.$store.commit('LANGUAGES_UPDATE', this.languages);
        },
        changeSLevel(){
          this.$store.commit('SKILL_LEVEL_UPDATE', this.skilllevel);
        },
        changeInterests(){
          this.$store.commit('INTERESTS_UPDATE', this.interests);
        },
        changeEDescription(){
          this.$store.commit('EXP_DESCRIPTION',this.eDescription)
        },
         addField(value, fieldType) {
      fieldType.push({ value: "" });
    },
    removeField(index, fieldType) {
      fieldType.splice(index, 1);
    },
    }
    
  }

  

</script>