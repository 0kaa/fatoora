import ApiService from "@/core/services/ApiService";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";
import router from "@/router";
@Module
export default class CustomerModule extends VuexModule {
  customers = [];

  get Customers() {
    return this.customers;
  }

  @Mutation
  [Mutations.SET_CUSTOMERS](customers) {
    this.customers = customers;
  }

  @Action
  [Actions.CREATE_CUSTOMER](context) {
    ApiService.setHeader();
    const params = {
      ...context,
    };
    return new Promise<void>((resolve, reject) => {
      ApiService.post("customers", params)
        .then(({ data }) => {
          this.context.dispatch(Actions.GET_CUSTOMERS);
          resolve(data);
        })
        .catch(({ response }) => {
          reject(response);
        });
    });
  }

  @Action
  [Actions.UPDATE_CUSTOMER]({ id, context }) {
    ApiService.setHeader();
    const params = {
      ...context,
    };
    return new Promise<void>((resolve, reject) => {
      ApiService.post(`customers/edit/${id}`, params)
        .then(({ data }) => {
          this.context.dispatch(Actions.GET_CUSTOMERS);
          resolve(data.data);
        })
        .catch(({ response }) => {
          reject(response.data.message.message);
        });
    });
  }

  @Action
  [Actions.GET_CUSTOMERS]() {
    ApiService.setHeader();

    return new Promise<void>((resolve, reject) => {
      ApiService.query("customers-list", {})
        .then(({ data }) => {
          this.context.commit(Mutations.SET_CUSTOMERS, data.data);
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
      ApiService.get("/customers/show", id)
        .then(({ data }) => {
          resolve(data.data);
        })
        .catch(({ response }) => {
          reject(response.data.message.message);
          router.push("/404");
        });
    });
  }

  @Action
  [Actions.DELETE_CUSTOMER](id: string) {
    ApiService.setHeader();

    return new Promise<void>((resolve, reject) => {
      ApiService.get("/customers/delete", id)
        .then(({ data }) => {
          this.context.dispatch(Actions.GET_CUSTOMERS);
          resolve(data.data);
        })
        .catch(({ response }) => {
          reject(response.data.message.message);
          router.push("/404");
        });
    });
  }
}
