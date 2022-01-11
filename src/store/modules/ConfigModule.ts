import objectPath from "object-path";
import merge from "deepmerge";
import layoutConfig from "@/core/config/DefaultLayoutConfig";
import { Mutations } from "@/store/enums/StoreEnums";
import { Mutation, Module, VuexModule } from "vuex-module-decorators";
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
}
