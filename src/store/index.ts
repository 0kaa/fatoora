import { createStore } from "vuex";
import { config } from "vuex-module-decorators";

import AuthModule from "@/store/modules/AuthModule";
import BodyModule from "@/store/modules/BodyModule";
import BreadcrumbsModule from "@/store/modules/BreadcrumbsModule";
import ConfigModule from "@/store/modules/ConfigModule";

config.rawError = true;

const store = createStore({
  state: {
    currency: {
      symbol: "Riyal saudi",
      code: "SAR",
    },
    lang: "ar",
  },
  modules: {
    AuthModule,
    BodyModule,
    BreadcrumbsModule,
    ConfigModule,
  },
});

export default store;
