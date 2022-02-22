import ApiService from "@/core/services/ApiService";
// import JwtService from "@/core/services/JwtService";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";
import router from "@/router";
export interface Invoice {
  id: number;
  type: string;
  summmary: string;
  release_date: string;
  due_date: string;
  rand_number: string;
  has_discount: boolean;
  total_price: string;
  qr_code: string;
  customer_id: number;
}

@Module
export default class AuthModule extends VuexModule {
  error = {};

  /**
   * Get authentification errors
   * @returns array
   */
  get getInvoiceErrors() {
    return this.error;
  }

  @Mutation
  [Mutations.SET_ERROR](error) {
    this.error = error;
  }

  @Action
  [Actions.CREATE_INVOICE](context) {
    ApiService.setHeader();
    const params = {
      ...context,
    };
    return new Promise<void>((resolve, reject) => {
      ApiService.post("invoices", params)
        .then(({ data }) => {
          resolve(data);
        })
        .catch(({ response }) => {
          this.context.commit(Mutations.SET_ERROR, response);
          reject();
        });
    });
  }

  @Action
  [Actions.GET_INVOICES]() {
    ApiService.setHeader();

    return new Promise<void>((resolve, reject) => {
      ApiService.query("invoices", {})
        .then(({ data }) => {
          resolve(data.data);
        })
        .catch(({ response }) => {
          reject(response.data.message.message);
        });
    });
  }

  @Action
  [Actions.GET_INVOICE](id: string) {
    ApiService.setHeader();

    return new Promise<void>((resolve, reject) => {
      ApiService.get("invoices/show", id)
        .then(({ data }) => {
          resolve(data.data);
        })
        .catch(({ response }) => {
          reject(response.data.message.message);
          router.push("/404");
        });
    });
  }
}
