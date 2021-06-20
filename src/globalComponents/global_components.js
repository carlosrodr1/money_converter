import Vue from 'vue'

Vue.component('hero', () => import('../components/Hero/Hero.vue'));
Vue.component('notification', () => import('../components/Notification/Notification.vue'));