import ApiService from "@/core/services/ApiService";
import { Actions } from "@/store/enums/StoreEnums";
import { Module, Action, VuexModule } from "vuex-module-decorators";

@Module
export default class AuthModule extends VuexModule {
  @Action
  [Actions.GET_CUSTOMERS]() {
    ApiService.setHeader();

    return new Promise<void>((resolve, reject) => {
      ApiService.query("customers-list", {})
        .then(({ data }) => {
          resolve(data.data);
        })
        .catch(({ response }) => {
          reject(response.data.message.message);
        });
    });
  }

  @Action
  [Actions.GET_CUSTOMER](id: string) {
    ApiService.setHeader();

    return new Promise<void>((resolve, reject) => {
      ApiService.get("/customers/show/", id)
        .then(({ data }) => {
          resolve(data.data);
        })
        .catch(({ response }) => {
          reject(response.data.message.message);
        });
    });
  }
}