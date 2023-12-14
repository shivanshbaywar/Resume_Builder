const state ={
    name: "Shivansh ",
    email: "example@example.com",
    designation: "Software Engineer",
    phone: "555-555-5555",
    link: "www.myportfoilo.com",
    description:"Looking for an entry-level position in  Software Developer where I can utilize my extensive knowledge about the area gained  during my B.Tech degree..",
    experience: [{ eDescription:"I developed many softwares there for the betterment of the company", efromDate:"09/21",etodate:"09/23", etitle:"Software Engineer"}],
    project:[{pdescription:" user can build their own resume with live preview", pfromdate:"09/22",ptodate:"02/23", ptitle:"Resume Builder"}],
    // fromDate: "2022-07",
    // toDate: "2023-07",
    // eDescription: "worked there to secure the Google Pay application and mange the tractions",
    profilep: "https://sipl.ind.in/wp-content/uploads/2022/07/dummy-user.png",
    ugname: "Medi-Caps University",
    ugcity: "Indore",
    ugpercent: "90",
    ugfrom: "08/19",
    ugto: "08/22",
    hsname: "K.M.S",
    hscity: "Indore",
    hspercent: "90",
    hsfrom: "05-23",
    hsto: "05-23",
    ssname: "K.M.S",
    sscity: "Ujjain",
    sspercent: "90",
    ssfrom: "08-19",
    ssto: "08-23",
    skills:["sample", "sample2"],
    languages:["himdi"],
    interests:["Coding"],
    skilllevel:"Intermediate",

};
const getters={
    name: state=>state.name,
    email: state=>state.email,
    designation: state=>state.designation,
    phone: state=>state.phone,
    link: state=>state.link,
    description: state=>state.description,
    experience: state=>state.experience,
    // fromDate: state=>state.fromDate,
    // toDate: state=>state.toDate,
    // eDescription: state=>state.eDescription,
    profilep: state=> state.profile,
    ugname: state=> state.ugname,
    ugcity: state=> state.ugcity,
    ugpercent: state=> state.ugpercent,
    ugfrom: state=> state.ugfrom,
    ugto: state=> state.ugto,
    hsname: state=> state.hsname,
    hscity: state=> state.hscity,
    hspercent: state=> state.hspercent,
    hsfrom: state=> state.hsfrom,
    hsto: state=> state.hsto,
    ssname: state=> state.ssname,
    sscity: state=> state.sscity,
    sspercent: state=> state.sspercent,
    ssfrom: state=> state.ssfrom,
    ssto: state=> state.ssto,
    skills: state=> state.skills,
    languages: state=> state.languages,
    skilllevel: state=> state.skilllevel,
    interests: state=> state.interests,
    project: state=> state.project,
    
};
const actions={};
const mutations = {
        EMAIL_UPDATE(state,email){
            state.email= email;
        },
        NAME_UPDATE(state,name){
            state.name= name;
        },
        DESIGNATION_UPDATE(state,designation){
            state.designation=designation;
        },
        PHONE_UPDATE(state,phone){
            state.phone=phone;
        },
        LINK_UPDATE(state,link){
            state.link=link;
        },
        DESCRIPTION_UPDATE(state,description){ 
            state.description=description; 
        },
        EXPERIENCE_UPDATE(state,experience){
            state.experience.push(experience);
        },
        PROFILE_UPDATE(state, profilep){
            state.profilep=profilep;
        },
        UN_UPDATE(state, ugname ){
            state.ugname=ugname;
        },
        UGCITY_UPDATE(state, ugcity){
            state.ugcity=ugcity;
        },
        UGPERCENT_UPDATE(state, ugpercent){
            state.ugpercent=ugpercent;
        },
        UGFROM_UPDATE(state, ugfrom){
            state.ugfrom=ugfrom;
        },
        UGTO_UPDATE(state, ugto){
            state.ugto=ugto;
        },
        HSNAME_UPDATE(state,hsname){
            state.hsname=hsname;
        },
        HSCITY_UPDATE(state,hscity){
            state.hscity=hscity;
        },
        HSPERCENT_UPDATE(state,hspercent){
            state.hspercent=hspercent;
        },
        HSFROM_UPDATE(state,hsfrom){
            state.hsfrom=hsfrom;
        },
        HSTO_UPDATE(state,hsto){
            state.hsto=hsto;
        },
        SSNAME_UPDATE(state,ssname){
            state.hsto=ssname;
        },
        SSCITY_UPDATE(state,sscity){
            state.sscity=sscity;
        },
        SSPERCENT_UPDATE(state,sspercent){
            state.sspercent=sspercent;
        },
        SSFROM_UPDATE(state,ssfrom){
            state.ssfrom=ssfrom;
        },
        SSTO_UPDATE(state,ssto){
            state.ssto=ssto;
        },
        SKILLS_UPDATE(state,skills){
            state.skills.push(skills);
        },
        SKILL_LEVEL_UPDATE(state,skilllevel){
            state.skilllevel.push(skilllevel);
        },
        
        LANGUAGES_UPDATE(state,languages){
            state.languages.push(languages);
        },
        INTERESTS_UPDATE(state,interests){
            state.interests.push(interests);
        },
        PROJECT_UPDATE(state, project){
            state.project.push(project);
        },


};
export default {
    state, getters, actions, mutations
};