import Vue from 'vue';
import VueRouter from 'vue-router';
import Carer from '../views/carerpage/CarerPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'CarerPage',
    component: Carer,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
