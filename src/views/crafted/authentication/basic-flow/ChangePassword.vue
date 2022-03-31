<template>
  <div class="container-xxl">
    <div class="d-flex flex-column h-100 justify-content-lg-center">
      <!--begin::Wrapper-->
      <div class="w-lg-500px bg-white w-100 rounded p-10 m-10 p-lg-15 mx-auto">
        <!--begin::Form-->
        <el-form
          class="form w-100"
          @submit.prevent="changePassword()"
          :model="changePasswordForm"
          ref="changePasswordFormRef"
        >
          <!--begin::Heading-->
          <div class="text-center mb-10">
            <!--begin::Title-->
            <h1 class="text-main mb-3">
              {{ $t("resetPassword") }}
            </h1>
            <!--end::Title-->
          </div>
          <!--begin::Heading-->

          <!--begin::Input group-->
          <div class="fv-row mb-10">
            <el-form-item
              prop="password"
              :rules="[
                {
                  required: true,
                  message: $t('passwordRequired'),
                  trigger: 'change',
                },
              ]"
            >
              <el-input
                class="fs-3"
                v-model="changePasswordForm.password"
                type="password"
                :placeholder="$t('password')"
                autocomplete="off"
              />
            </el-form-item>
            <el-form-item
              prop="confirm_password"
              class="mb-2"
              :rules="[
                {
                  required: true,
                  message: $t('passwordConfirmRequired'),
                  trigger: 'change',
                },
              ]"
            >
              <el-input
                class="fs-3"
                v-model="changePasswordForm.confirm_password"
                type="password"
                :placeholder="$t('confirmNewPassword')"
                autocomplete="off"
              />
            </el-form-item>
          </div>
          <!--end::Input group-->

          <!--begin::Actions-->
          <div
            class="d-flex flex-wrap justify-content-center pb-lg-0"
            style="gap: 10px"
          >
            <button
              type="submit"
              ref="submitButton"
              id="kt_password_reset_submit"
              class="btn btn-lg btn-primary fw-bolder flex-grow-1"
            >
              <span class="indicator-label"> {{ $t("confirm") }} </span>
              <span class="indicator-progress">
                {{ $t("pleaseWait") }}
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>

            <button
              type="button"
              @click.prevent="goToLogin"
              class="btn btn-lg btn-dark-light border border-dark fw-bolder flex-grow-1 bg-hover-dark text-hover-white"
            >
              {{ $t("cancel") }}
            </button>
          </div>
          <!--end::Actions-->
        </el-form>
        <!--end::Form-->
      </div>
      <!--end::Wrapper-->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, nextTick, ref } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n/index";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { reinitializeComponents } from "@/core/plugins/keenthemes";
// use route
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  name: "change-password",

  setup() {
    const store = useStore();
    const changePasswordFormRef = ref<HTMLFormElement | null>(null);
    const submitButton = ref<HTMLButtonElement | null>(null);
    const route = useRoute();
    const router = useRouter();
    const { t, te } = useI18n();

    const changePasswordForm = ref({
      password: "",
      confirm_password: "",
    });
    const translate = (text) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };
    onMounted(() => {
      nextTick(() => {
        reinitializeComponents();
      });
    });

    const goToLogin = () => {
      store.dispatch(Actions.LOGOUT);
      router.push({ name: "sign-in" });
    };

    //Form submit function
    const changePassword = () => {
      if (!changePasswordFormRef.value) return;

      changePasswordFormRef.value.validate((valid) => {
        if (valid) {
          // eslint-disable-next-line
          submitButton.value!.disabled = true;
          // Activate loading indicator
          submitButton.value?.setAttribute("data-kt-indicator", "on");
          // Send login request
          store.commit(Mutations.SET_TOKEN, route.query.token);
          store
            .dispatch(Actions.SET_NEW_PASSWORD, {
              password: changePasswordForm.value.password,
            })
            .then((response) => {
              Swal.fire({
                text: response.message,
                icon: "success",
                buttonsStyling: false,
                confirmButtonText: translate("ok"),
                customClass: {
                  confirmButton: "btn fw-bold btn-primary px-14",
                },
              }).then(() => {
                window.location.href = "/";
              });
            })
            .catch(() => {
              // Alert then login failed
              Swal.fire({
                text: store.getters.getErrors,
                icon: "error",
                buttonsStyling: false,
                confirmButtonText: translate("tryAgain"),
                customClass: {
                  confirmButton: "btn fw-bold btn-light-danger",
                },
              });
            });

          submitButton.value?.removeAttribute("data-kt-indicator");
          // eslint-disable-next-line
          submitButton.value!.disabled = false;
        }
      });
    };

    return {
      changePassword,
      changePasswordFormRef,
      changePasswordForm,
      submitButton,
      goToLogin,
    };
  },
});
</script>
