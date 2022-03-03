import objectPath from "object-path";
import merge from "deepmerge";
import ApiService from "@/core/services/ApiService";
import layoutConfig from "@/core/config/DefaultLayoutConfig";
import { Mutations, Actions } from "@/store/enums/StoreEnums";
import { Mutation, Action, Module, VuexModule } from "vuex-module-decorators";
import LayoutConfigTypes from "@/core/config/LayoutConfigTypes";

interface StoreInfo {
  config: LayoutConfigTypes;
  lang: string;
  initial: LayoutConfigTypes;
}

@Module
export default class ConfigModule extends VuexModule implements StoreInfo {
  config = layoutConfig;
  initial = layoutConfig;
  lang = "ar";
  backendURL = "https://fatora.jadara.work/public/storage/";
  banks = [];
  payment_methods = [];
  shipping_companies = [];
  currencies = [];
  /**
   * Get config from layout config
   * @returns {function(path, defaultValue): *}
   */
  get layoutConfig() {
    return (path, defaultValue) => {
      return objectPath.get(this.config, path, defaultValue);
    };
  }

  get getLanguage() {
    return this.lang;
  }

  get getBackendURL() {
    return this.backendURL;
  }

  get getAllBanks() {
    return this.banks;
  }
  get getAllPaymentMethods() {
    return this.payment_methods;
  }
  get getAllShippingCompanies() {
    return this.shipping_companies;
  }

  get allCurrencies() {
    return this.currencies;
  }

  @Mutation
  [Mutations.SET_LAYOUT_CONFIG](payload): void {
    this.config = payload;
  }

  @Mutation
  [Mutations.SET_LANG](payload): void {
    localStorage.setItem("lang", payload);
    this.lang = payload;
  }

  @Mutation
  [Mutations.RESET_LAYOUT_CONFIG]() {
    this.config = Object.assign({}, this.initial);
  }

  @Mutation
  [Mutations.OVERRIDE_LAYOUT_CONFIG](): void {
    this.config = this.initial = Object.assign(
      {},
      this.initial,
      JSON.parse(window.localStorage.getItem("config") || "{}")
    );
  }

  @Mutation
  [Mutations.OVERRIDE_PAGE_LAYOUT_CONFIG](payload): void {
    this.config = merge(this.config, payload);
  }

  @Mutation
  [Mutations.SET_BANKS](payload): void {
    this.banks = payload;
  }
  @Mutation
  [Mutations.SET_PAYMENT_METHODS](payload): void {
    this.payment_methods = payload;
  }
  @Mutation
  [Mutations.SET_SHIPPING_COMPANIES](payload): void {
    this.shipping_companies = payload;
  }
  @Mutation
  [Mutations.SET_CURRENCY](payload): void {
    this.currencies = payload;
  }

  @Action
  [Actions.GET_BANKS]() {
    ApiService.setHeader();

    return new Promise<void>((resolve, reject) => {
      ApiService.query("/banks", {})
        .then(({ data }) => {
          this.context.commit(Mutations.SET_BANKS, data.data);
        })
        .catch(({ response }) => {
          reject(response.data.message.message);
        });
    });
  }

  @Action
  [Actions.GET_PAYMENT_METHODS]() {
    ApiService.setHeader();

    return new Promise<void>((resolve, reject) => {
      ApiService.query("/payment_methods", {})
        .then(({ data }) => {
          this.context.commit(Mutations.SET_PAYMENT_METHODS, data.data);
        })
        .catch(({ response }) => {
          reject(response.data.message.message);
        });
    });
  }

  @Action
  [Actions.GET_SHIPPING_COMPANIES]() {
    ApiService.setHeader();

    return new Promise<void>((resolve, reject) => {
      ApiService.query("/shipping_companies", {})
        .then(({ data }) => {
          this.context.commit(Mutations.SET_SHIPPING_COMPANIES, data.data);
        })
        .catch(({ response }) => {
          reject(response.data.message.message);
        });
    });
  }

  @Action
  [Actions.GET_CURRENCIES]() {
    ApiService.setHeader();

    return new Promise<void>((resolve, reject) => {
      ApiService.query("/currencies", {})
        .then(({ data }) => {
          console.log(data);
          // resolve(data);
          // this.context.commit(Mutations.SET_PAYMENT_METHODS, data.data);
        })
        .catch(({ response }) => {
          reject(response.data.message.message);
        });
    });
  }
}
