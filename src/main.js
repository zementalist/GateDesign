import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import "bootstrap";
import 'animate.css';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import * as VueGoogleMaps from 'vue2-google-maps';
import VueLazyload from 'vue-lazyload';


Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCxac8ijPrDP6noHj1bmTLWa4x7bfReCwk',
    v: '3.26',
    libraries: 'places'
  }
});

 
// or with options
Vue.use(VueLazyload, {
  preLoad: 1,
  error: './assets/images/error.png',
  loading: require('./assets/images/loading.gif'),
  attempt: 5
});

let routes = [
  { component: () => import("./views/Home.vue"),
    path: '/',
    name: 'home'
  },
  { component: () => import("./views/Research.vue"),
    path: '/research',
    name: 'research'
  },
  { component: () => import("./views/Courses.vue"), 
    path: '/courses', 
    name: 'courses'},
    { component: () => import("./views/Internships.vue"), 
    path: '/internships', 
    name: 'internships'}
];
Vue.use(VueRouter);
const router = new VueRouter({routes, mode:'history'});


Vue.config.productionTip = false
Vue.config.productionSourceMap = false;


const WOW = require('wowjs');
window.wow = new WOW.WOW({
    live: true
});
window.wow.init();



new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
