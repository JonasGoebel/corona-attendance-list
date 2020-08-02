import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Form from "./views/Form.vue";
import Background from "./views/Background.vue";
import Instructions from "./views/Instructions.vue";
import Datenschutz from "./views/Datenschutz.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Form,
        footer: AppFooter
      }
    },
    {
      path: "/background",
      name: "background",
      components: {
        header: AppHeader,
        default: Background,
        footer: AppFooter
      }
    },
    {
      path: "/instructions",
      name: "instructions",
      components: {
        header: AppHeader,
        default: Instructions,
        footer: AppFooter
      }
    },
    {
      path: "/datenschutz",
      name: "datenschutz",
      components: {
        default: Datenschutz,
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
