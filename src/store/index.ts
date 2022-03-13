import { createStore } from "vuex";
import { config } from "vuex-module-decorators";

import AuthModule from "@/store/modules/AuthModule";
import BodyModule from "@/store/modules/BodyModule";
import BreadcrumbsModule from "@/store/modules/BreadcrumbsModule";
import ConfigModule from "@/store/modules/ConfigModule";
import InvoiceModule from "@/store/modules/InvoiceModule";
import CustomerModule from "@/store/modules/CustomerModule";
import LogModule from "@/store/modules/LogModule";
config.rawError = true;

const store = createStore({
  state: {
    currency: window.localStorage.getItem("currency") || "SAR",
    currencies: [
      {
        name: "Riyal saudi",
        code: "SAR",
        symbol_ar: "ر.س",
        symbol_en: "SAR",
      },
      {
        name: "USA dollar",
        code: "USD",
        symbol_ar: "$",
        symbol_en: "$",
      },
    ],
    lang: "en",
  },
  modules: {
    AuthModule,
    BodyModule,
    BreadcrumbsModule,
    ConfigModule,
    InvoiceModule,
    CustomerModule,
    LogModule,
  },
});

export default store;
