import ApiService from "@/core/services/ApiService";
// import JwtService from "@/core/services/JwtService";
import { Actions } from "@/store/enums/StoreEnums";
import { Module, Action, VuexModule } from "vuex-module-decorators";
// import { AxiosRequestConfig } from "axios";

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
}