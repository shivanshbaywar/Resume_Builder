

import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import store from './store';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router';
import routes from './routes'
const router = new VueRouter({
  routes: routes,
  mode: 'history'
})
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// vuetify


const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyD_WHiw5uq0-nbmYtUv2E6Roe4QLjtT4Z4",
  authDomain: "resume-390706.firebaseapp.com",
  projectId: "resume-390706",
  storageBucket: "resume-390706.appspot.com",
  messagingSenderId: "1069182656166",
  appId: "1:1069182656166:web:d6574fb290f4d8bc9a5e67",
  measurementId: "G-N6VWRED4ZB"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(Vuex);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

Vue.config.productionTip = false
new Vue({
  store,
  render: h => h(App),
  router:router
}).$mount('#app')
// new Vue({ el: '#app', render: h => h(App) })
