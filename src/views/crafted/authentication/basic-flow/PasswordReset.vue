<template>
  <div class="container-xxl">
    <div class="d-flex flex-column h-100 justify-content-between">
      <!--begin::Wrapper-->
      <div class="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
        <!--begin::Form-->
        <Form
          class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
          @submit="onSubmitForgotPassword"
          id="kt_login_password_reset_form"
          :validation-schema="forgotPassword"
        >
          <!--begin::Heading-->
          <div class="text-center mb-10">
            <!--begin::Title-->
            <h1 class="text-dark mb-3">
              {{ $t("forgetPassword") }}
            </h1>
            <!--end::Title-->

            <!--begin::Link-->
            <div class="text-gray-400 fw-bold fs-4">
              {{ $t("enterEmailToResetPassword") }}
            </div>
            <!--end::Link-->
          </div>
          <!--begin::Heading-->

          <!--begin::Input group-->
          <div class="fv-row mb-10">
            <label class="form-label fw-bolder text-gray-900 fs-6">
              {{ $t("email") }}
            </label>
            <Field
              class="form-control form-control-solid"
              type="email"
              name="email"
              autocomplete="off"
            />
            <div class="fv-plugins-message-container">
              <div class="fv-help-block">
                <ErrorMessage name="email" />
              </div>
            </div>
          </div>
          <!--end::Input group-->

          <!--begin::Actions-->
          <div class="d-flex flex-wrap justify-content-center pb-lg-0">
            <button
              type="submit"
              ref="submitButton"
              id="kt_password_reset_submit"
              class="btn btn-lg btn-primary fw-bolder me-4"
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
              :to="{ name: 'sign-up', params: { lang: currentLanguage } }"
              class="btn btn-lg btn-light-primary fw-bolder"
            >
              {{ $t("cancel") }}</router-link
            >
          </div>
          <!--end::Actions-->
        </Form>
        <!--end::Form-->
      </div>
      <!--end::Wrapper-->
      <div>
        <!--begin::Footer-->
        <div
          class="d-flex flex-center justify-content-between flex-column-auto p-10"
        >
          <!--begin::Links-->
          <div class="d-flex align-items-center fw-bold fs-6">
            <a href="#" class="text-muted text-hover-primary px-2">About</a>

            <a href="#" class="text-muted text-hover-primary px-2">Contact</a>

            <a href="#" class="text-muted text-hover-primary px-2"
              >Contact Us</a
            >
          </div>
          <!--end::Links-->
          <div>
            <a
              href="#"
              class="btn btn-flex flex-center btn-bg-white btn-text-gray-500 btn-active-color-primary w-40px w-md-auto h-40px px-0 px-md-6"
              data-kt-menu-trigger="hover"
              data-kt-menu-attach="parent"
              :data-kt-menu-placement="
                currentLanguage == 'en' ? 'top-end' : 'top-start'
              "
            >
              <img
                class="w-20px h-20px rounded-1 ms-2"
                :src="currentLangugeLocale.flag"
                alt="metronic"
              />
              <span class="svg-icon svg-icon-2 me-0">
                <inline-svg src="/media/icons/duotune/arrows/arr072.svg" />
              </span>
            </a>
            <Dropdown3></Dropdown3>
          </div>
        </div>
        <!--end::Footer-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, nextTick, ref } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import { useStore } from "vuex";
import * as Yup from "yup";
import { Actions } from "@/store/enums/StoreEnums";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";
import { reinitializeComponents } from "@/core/plugins/keenthemes";

export default defineComponent({
  name: "password-reset",
  components: {
    Field,
    Form,
    ErrorMessage,
    Dropdown3,
  },
  setup() {
    const store = useStore();

    const submitButton = ref<HTMLButtonElement | null>(null);

    //Create form validation object
    const forgotPassword = Yup.object().shape({
      email: Yup.string().email().required().label("Email"),
    });

    const countries = {
      en: {
        flag: "/media/flags/united-states.svg",
        name: "English",
      },
      ar: {
        flag: "/media/flags/saudi-arabia.svg",
        name: "Arabic",
      },
    };

    const currentLanguage = computed(() => {
      return store.getters.getLanguage;
    });

    const currentLangugeLocale = computed(() => {
      return countries[currentLanguage.value];
    });

    onMounted(() => {
      nextTick(() => {
        reinitializeComponents();
      });
    });
    //Form submit function
    const onSubmitForgotPassword = (values) => {
      // eslint-disable-next-line
      submitButton.value!.disabled = true;
      // Activate loading indicator
      submitButton.value?.setAttribute("data-kt-indicator", "on");

      // dummy delay
      setTimeout(() => {
        // Send login request
        store
          .dispatch(Actions.FORGOT_PASSWORD, values)
          .then(() => {
            Swal.fire({
              text: "Password reset email have been successfully sent!",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok, got it!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            });
          })
          .catch(() => {
            const [error] = Object.keys(store.getters.getErrors);
            // Alert then login failed
            Swal.fire({
              text: store.getters.getErrors[error],
              icon: "error",
              buttonsStyling: false,
              confirmButtonText: "Try again!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-danger",
              },
            });
          });

        submitButton.value?.removeAttribute("data-kt-indicator");
        // eslint-disable-next-line
        submitButton.value!.disabled = false;
      }, 2000);
    };

    return {
      onSubmitForgotPassword,
      forgotPassword,
      currentLangugeLocale,
      currentLanguage,
      submitButton,
    };
  },
});
</script>
