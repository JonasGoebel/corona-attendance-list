/*!

=========================================================
* Vue Argon Design System - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from "vue";
import VueI18n from 'vue-i18n'
import * as Sentry from '@sentry/browser';
import { Vue as VueIntegration } from '@sentry/integrations';
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker';
import i18n from './i18n'

// load sentry error reporting service
Sentry.init({
  dsn: process.env.VUE_APP_SENTRY_URL,
  integrations: [new VueIntegration({Vue, attachProps: true})],
});

Vue.config.productionTip = false;
Vue.use(Argon);
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
