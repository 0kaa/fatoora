import ApiService from "@/core/services/ApiService";
// import JwtService from "@/core/services/JwtService";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { Module, Action, Mutation, VuexModule } from "vuex-module-decorators";

@Module
export default class LogModule extends VuexModule {
  logs = [];

  get allLogs() {
    return this.logs;
  }

  @Mutation
  [Mutations.SET_LOGS](logs) {
    this.logs = logs;
  }

  @Action
  [Actions.GET_LOGS](count) {
    ApiService.setHeader();

    return new Promise<void>((resolve, reject) => {
      ApiService.query(`logs/user?count=${count}`, {})
        .then(({ data }) => {
          this.context.commit(Mutations.SET_LOGS, data.data);
        })
        .catch(({ response }) => {
          reject(response.data.message.message);
        });
    });
  }
  @Action
  [Actions.GET_ALL_LOGS](count) {
    ApiService.setHeader();

    return new Promise<void>((resolve, reject) => {
      ApiService.query(`logs/user?count=${count}`, {})
        .then(({ data }) => {
          resolve(data.data);
        })
        .catch(({ response }) => {
          reject(response.data.message.message);
        });
    });
  }
}
