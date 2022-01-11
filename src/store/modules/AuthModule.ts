import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";
import { AxiosRequestConfig } from "axios";

export interface User {
  account_type: string;
  invoice_plan: string;
  name: string;
  email: string;
  phone: string;
  market_name_ar: string;
  market_address_ar: string;
  market_tax_number: string;
  market_commercial_number: string;
  market_standard_number: string;
  market_site_url: string;
  market_email: string;
  market_phone: string;
  market_icon: string;
}

export interface UserAuthInfo {
  errors: unknown;
  user: User;
  isAuthenticated: boolean;
  token: string;
}

@Module
export default class AuthModule extends VuexModule implements UserAuthInfo {
  errors = {};
  user = {} as User;
  isAuthenticated = !!JwtService.getToken();
  token = "";

  /**
   * Get current user object
   * @returns User
   */
  get currentUser(): User {
    return this.user;
  }

  /**
   * Verify user authentication
   * @returns boolean
   */
  get isUserAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  /**
   * Get authentification errors
   * @returns array
   */
  get getErrors() {
    return this.errors;
  }

  @Mutation
  [Mutations.SET_ERROR](error) {
    this.errors = error;
  }

  @Mutation
  [Mutations.SET_AUTH](user) {
    this.isAuthenticated = true;
    this.user = user;
    this.errors = [];
  }

  @Mutation
  [Mutations.SET_TOKEN](token) {
    this.token = token;
    JwtService.saveToken(token);
  }

  @Mutation
  [Mutations.SET_USER](user) {
    this.user = user;
  }

  @Mutation
  [Mutations.PURGE_AUTH]() {
    this.isAuthenticated = false;
    this.user = {} as User;
    this.errors = [];
    this.token = "";
    JwtService.destroyToken();
  }

  @Action
  [Actions.LOGIN](credentials) {
    const body = {
      ...credentials,
    };
    return new Promise<void>((resolve, reject) => {
      ApiService.post("login", body)
        .then(({ data }) => {
          this.context.commit(Mutations.SET_AUTH, data.data.user);
          this.context.commit(Mutations.SET_TOKEN, data.data.token);
          resolve();
        })
        .catch(({ response }) => {
          this.context.commit(
            Mutations.SET_ERROR,
            response.data.message.message
          );
          reject();
        });
    });
  }

  @Action
  [Actions.LOGOUT]() {
    this.context.commit(Mutations.PURGE_AUTH);
  }

  @Action
  [Actions.REGISTER](credentials) {
    return new Promise<void>((resolve, reject) => {
      ApiService.post("register", credentials)
        .then(({ data }) => {
          this.context.commit(Mutations.SET_AUTH, data);
          this.context.commit(Mutations.SET_AUTH, data.data.user);
          this.context.commit(Mutations.SET_TOKEN, data.data.token);
          resolve();
        })
        .catch(({ response }) => {
          this.context.commit(Mutations.SET_ERROR, response.data.errors);
          reject();
        });
    });
  }

  @Action
  [Actions.FORGOT_PASSWORD](payload) {
    const params = {
      params: {
        ...payload,
      },
    };
    return new Promise<void>((resolve, reject) => {
      ApiService.query("forgot_password", params)
        .then(({ data }) => {
          this.context.commit(Mutations.SET_AUTH, data);
          resolve();
        })
        .catch(({ response }) => {
          this.context.commit(Mutations.SET_ERROR, response.data.errors);
          reject();
        });
    });
  }

  @Action
  [Actions.VERIFY_AUTH]() {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      const params = {};
      ApiService.post("verify_token", params as AxiosRequestConfig)
        .then(({ data }) => {
          this.context.commit(Mutations.SET_AUTH, data.data.user);
        })
        .catch(({ response }) => {
          this.context.commit(Mutations.SET_ERROR, response.data.errors);
          this.context.commit(Mutations.PURGE_AUTH);
        });
    } else {
      this.context.commit(Mutations.PURGE_AUTH);
    }
  }

  // @Action
  // [Actions.UPDATE_USER](payload) {
  //   ApiService.setHeader();
  //   return new Promise<void>((resolve, reject) => {
  //     ApiService.post("update_user", payload)
  //       .then(({ data }) => {
  //         this.context.commit(Mutations.SET_USER, data);
  //         resolve();
  //       })
  //       .catch(({ response }) => {
  //         this.context.commit(Mutations.SET_ERROR, response.data.errors);
  //         reject();
  //       });
  //   });
  // }
}
