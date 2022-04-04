<template>
  <div class="container-xxl">
    <div class="d-flex flex-column h-100 justify-content-lg-center">
      <!--begin::Wrapper-->
      <div class="w-lg-500px bg-white w-100 rounded p-10 m-10 p-lg-15 mx-auto">
        <!--begin::Form-->
        <el-form
          v-if="currentStepIndex === 1"
          class="form w-100"
          @submit.prevent="onSubmitForgotPassword()"
          :model="resetForm"
          ref="resetFormRef"
        >
          <!--begin::Heading-->
          <div class="text-center mb-10">
            <!--begin::Title-->
            <h1 class="text-main mb-3">
              {{ $t("forgetPassword") }}
            </h1>
            <!--end::Title-->

            <!--begin::Link-->
            <div class="text-main-light fw-bold fs-4">
              {{ $t("enterEmailToResetPassword") }}
            </div>
            <!--end::Link-->
          </div>
          <!--begin::Heading-->

          <!--begin::Input group-->
          <div class="fv-row mb-10">
            <el-form-item
              prop="email"
              :rules="[
                {
                  required: true,
                  message: $t('emailRequired'),
                  trigger: 'change',
                },
              ]"
            >
              <el-input
                class="fs-3"
                v-model="resetForm.email"
                type="email"
                :placeholder="$t('email')"
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
              <span class="indicator-label"> {{ $t("submit") }} </span>
              <span class="indicator-progress">
                {{ $t("pleaseWait") }}
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>

            <router-link
              :to="{ name: 'sign-up' }"
              class="btn btn-lg btn-dark-light border border-dark fw-bolder flex-grow-1 bg-hover-dark text-hover-white"
            >
              {{ $t("cancel") }}</router-link
            >
          </div>
          <!--end::Actions-->
        </el-form>
        <!--end::Form-->
        <div
          v-if="currentStepIndex === 2"
          class="d-flex justify-content-center flex-column align-items-center"
        >
          <!--begin::Heading-->
          <div class="text-center mb-10">
            <!--begin::Title-->
            <h1 class="text-main mb-3">
              {{ $t("verificationCode") }}
            </h1>
            <!--end::Title-->

            <!--begin::Link-->
            <div class="text-main-light fw-bold fs-4">
              {{ $t("pleaseEnterCode") }}
            </div>
            <!--end::Link-->
          </div>
          <!--begin::Heading-->
          <div>
            <v-otp-input
              ref="otpInput"
              :input-classes="[
                'otp-input',
                {
                  error: otpError,
                },
              ]"
              separator=""
              :num-inputs="4"
              :should-auto-focus="true"
              :is-input-num="true"
              @on-change="handleOnChange"
              @on-complete="handleOnComplete"
            />
          </div>
          <!--begin::Actions-->
          <div class="d-flex flex-wrap justify-content-center mt-10">
            <button
              @click.prevent="verifiyOtp"
              ref="submitButton"
              id="kt_password_reset_submit"
              class="btn btn-lg btn-primary px-14 fw-bolder flex-grow-1"
            >
              <span class="indicator-label"> {{ $t("confirm") }} </span>
              <span class="indicator-progress">
                {{ $t("pleaseWait") }}
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>
          </div>
          <!--end::Actions-->
          <!--begin::Link-->
          <div class="text-gray-400 text-center fw-bold fs-4 mt-5">
            {{ $t("code_not_send") }}

            <a
              href="/send-again"
              class="fw-bolder text-decoration-underline"
              @click.prevent="sendCodeAgain()"
            >
              {{ $t("send_again") }}
            </a>
          </div>
          <!--end::Link-->
        </div>
        <!--begin::Form-->
        <el-form
          v-if="currentStepIndex === 3"
          class="form w-100"
          @submit.prevent="setNewPassword()"
          :model="newPasswordForm"
          ref="newPasswordRef"
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
                v-model="newPasswordForm.password"
                type="password"
                :placeholder="$t('newPassword')"
                autocomplete="off"
              />
            </el-form-item>
          </div>
          <!--end::Input group-->
          <!--begin::Input group-->
          <div class="fv-row mb-10">
            <el-form-item
              prop="confirmPassword"
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
                v-model="newPasswordForm.confirmPassword"
                type="password"
                :placeholder="$t('confirmNewPassword')"
                autocomplete="off"
              />
            </el-form-item>
          </div>
          <!--end::Input group-->

          <!--begin::Actions-->
          <div class="d-flex flex-wrap justify-content-center pb-lg-0">
            <button
              type="submit"
              ref="submitButton"
              id="kt_password_reset_submit"
              class="btn btn-lg btn-primary px-14 fw-bolder"
            >
              <span class="indicator-label"> {{ $t("save") }} </span>
              <span class="indicator-progress">
                {{ $t("pleaseWait") }}
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
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
import VOtpInput from "vue3-otp-input";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "password-reset",
  components: {
    VOtpInput,
  },
  setup() {
    const otp = ref("");
    const otpInput = ref(null);
    const otpError = ref(false);
    const store = useStore();
    const resetFormRef = ref<HTMLFormElement | null>(null);
    const newPasswordRef = ref<HTMLFormElement | null>(null);
    const submitButton = ref<HTMLButtonElement | null>(null);
    const currentStepIndex = ref(1);
    const { t, te } = useI18n();
    const token = ref("");
    const newPasswordForm = ref({
      password: "",
      confirmPassword: "",
    });

    const router = useRouter();

    const handleOnComplete = (value: string) => {
      otp.value = value;
    };
    const handleOnChange = (value: string) => {
      otp.value = value;
    };

    const sendCodeAgain = () => {
      // conosle.log()
    };

    const resetForm = ref({
      email: "",
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

    //Form submit function
    const onSubmitForgotPassword = () => {
      if (!resetFormRef.value) return;

      resetFormRef.value.validate((valid) => {
        if (valid) {
          // eslint-disable-next-line
          submitButton.value!.disabled = true;
          // Activate loading indicator
          submitButton.value?.setAttribute("data-kt-indicator", "on");

          // Send login request
          store
            .dispatch(Actions.FORGOT_PASSWORD, resetForm.value)
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
                currentStepIndex.value = 2;
              });
            })
            .catch(() => {
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

    const verifiyOtp = () => {
      if (!otpInput.value) return;

      // eslint-disable-next-line
          submitButton.value!.disabled = true;
      // Activate loading indicator
      submitButton.value?.setAttribute("data-kt-indicator", "on");

      // Send login request
      store
        .dispatch(Actions.VERIFY_OTP, {
          code: otp.value,
          email: resetForm.value.email,
        })
        .then((response) => {
          otpError.value = false;
          token.value = response.data.token;
          // store.commit(Mutations.SET_TOKEN, token.value);
          Swal.fire({
            text: response.message,
            icon: "success",
            buttonsStyling: false,
            confirmButtonText: translate("ok"),
            customClass: {
              confirmButton: "btn fw-bold btn-primary px-14",
            },
          }).then(() => {
            currentStepIndex.value = 3;
          });
        })
        .catch(() => {
          otpError.value = true;
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
    };

    const setNewPassword = () => {
      if (!newPasswordRef.value) return;

      newPasswordRef.value.validate((valid) => {
        if (valid) {
          store.commit(Mutations.SET_TOKEN, token.value);
          // eslint-disable-next-line
          submitButton.value!.disabled = true;
          // Activate loading indicator
          submitButton.value?.setAttribute("data-kt-indicator", "on");
          store
            .dispatch(Actions.SET_NEW_PASSWORD, {
              password: newPasswordForm.value.password,
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
                // currentStepIndex.value = 3;
                router.push({ name: "sign-in" });
              });
            })
            .catch(() => {
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
      newPasswordRef,
      newPasswordForm,
      setNewPassword,
      onSubmitForgotPassword,
      resetFormRef,
      resetForm,
      submitButton,
      currentStepIndex,
      handleOnComplete,
      handleOnChange,
      otpInput,
      sendCodeAgain,
      otpError,
      verifiyOtp,
      token,
    };
  },
});
</script>
<style lang="scss">
.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
  &:focus {
    outline: none;
    border-color: #f26c4f;
  }
  &.error {
    border-color: red;
  }
}
</style>
