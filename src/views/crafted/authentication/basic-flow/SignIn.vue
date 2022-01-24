<template>
  <div class="container-xxl">
    <div class="d-flex flex-column h-100 justify-content-between">
      <!--begin::Wrapper-->
      <div
        class="w-lg-500px w-100 bg-white rounded shadow-sm p-10 m-10 p-lg-15 mx-auto"
      >
        <!--begin::Form-->
        <Form
          class="form w-100"
          id="kt_login_signin_form"
          @submit="onSubmitLogin"
          :validation-schema="login"
        >
          <!--begin::Heading-->
          <div class="text-center mb-10">
            <!--begin::Title-->
            <h1 class="text-dark mb-3">
              {{ $t("signInToFatora") }}
            </h1>
            <!--end::Title-->

            <!--begin::Link-->
            <div class="text-gray-400 fw-bold fs-4">
              {{ $t("newHere") }}

              <router-link
                :to="{ name: 'sign-up' }"
                class="link-primary fw-bolder"
              >
                {{ $t("create_account") }}
              </router-link>
            </div>
            <!--end::Link-->
          </div>
          <!--begin::Heading-->

          <!--begin::Input group-->
          <div class="fv-row mb-10">
            <!--begin::Label-->
            <label class="form-label fs-6 fw-bolder text-dark">
              {{ $t("email") }}
            </label>
            <!--end::Label-->

            <!--begin::Input-->
            <Field
              class="form-control form-control-lg form-control-solid"
              type="text"
              name="email"
              autocomplete="off"
            />
            <!--end::Input-->
            <div class="fv-plugins-message-container">
              <div class="fv-help-block">
                <ErrorMessage name="email" />
              </div>
            </div>
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="fv-row mb-10">
            <!--begin::Wrapper-->
            <div class="d-flex flex-stack mb-2">
              <!--begin::Label-->
              <label class="form-label fw-bolder text-dark fs-6 mb-0">
                {{ $t("password") }}
              </label>
              <!--end::Label-->

              <!--begin::Link-->
              <router-link
                :to="{
                  name: 'password-reset',
                }"
                class="link-primary fs-6 fw-bolder"
              >
                {{ $t("forgetPassword") }}
              </router-link>
              <!--end::Link-->
            </div>
            <!--end::Wrapper-->

            <!--begin::Input-->
            <Field
              class="form-control form-control-lg form-control-solid"
              type="password"
              name="password"
              autocomplete="off"
            />
            <!--end::Input-->
            <div class="fv-plugins-message-container">
              <div class="fv-help-block">
                <ErrorMessage name="password" />
              </div>
            </div>
          </div>
          <!--end::Input group-->

          <!--begin::Actions-->
          <div class="text-center">
            <!--begin::Submit button-->
            <button
              type="submit"
              ref="submitButton"
              id="kt_sign_in_submit"
              class="btn btn-lg btn-primary w-100 mb-5"
            >
              <span class="indicator-label">
                {{ $t("continue") }}
              </span>

              <span class="indicator-progress">
                {{ $t("pleaseWait") }}
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>
            <!--end::Submit button-->
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
import { defineComponent, computed, nextTick, onMounted, ref } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import { Actions } from "@/store/enums/StoreEnums";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import * as Yup from "yup";
import { reinitializeComponents } from "@/core/plugins/keenthemes";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";

export default defineComponent({
  name: "sign-in",
  components: {
    Field,
    Form,
    ErrorMessage,
    Dropdown3,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const submitButton = ref<HTMLButtonElement | null>(null);
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

    //Create form validation object
    const login = Yup.object().shape({
      email: Yup.string().email().required().label("Email"),
      password: Yup.string().min(4).required().label("Password"),
    });

    //Form submit function
    const onSubmitLogin = (values) => {
      // Clear existing errors
      store.dispatch(Actions.LOGOUT);

      if (submitButton.value) {
        // eslint-disable-next-line
        submitButton.value!.disabled = true;
        // Activate indicator
        submitButton.value.setAttribute("data-kt-indicator", "on");
      }

      // Dummy delay
      setTimeout(() => {
        // Send login request
        store
          .dispatch(Actions.LOGIN, values)
          .then(() => {
            Swal.fire({
              text: "You have successfully logged in!",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok, got it!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            }).then(function () {
              // Go to page after successfully login
              router.push({
                name: "home",
              });
            });
          })
          .catch(() => {
            Swal.fire({
              text: store.getters.getErrors,
              icon: "error",
              buttonsStyling: false,
              confirmButtonText: "Try again!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-danger",
              },
            });
          });

        //Deactivate indicator
        submitButton.value?.removeAttribute("data-kt-indicator");
        // eslint-disable-next-line
        submitButton.value!.disabled = false;
      }, 500);
    };

    return {
      onSubmitLogin,
      login,
      currentLanguage,
      currentLangugeLocale,
      submitButton,
    };
  },
});
</script>
