<template>
  <div class="container-xxl">
    <div class="d-flex flex-column h-100 justify-content-center">
      <!--begin::Wrapper-->
      <div class="w-lg-500px w-100 rounded p-10 m-10 p-lg-15 mx-auto">
        <!--begin::Form-->
        <el-form
          class="form w-100"
          @submit.prevent="onSubmitLogin"
          :model="loginForm"
          ref="loginFormRef"
        >
          <!--begin::Heading-->
          <div class="text-center mb-10">
            <!--begin::Title-->
            <h1 class="text-main mb-3">
              {{ $t("signInToFatora") }}
            </h1>
            <!--end::Title-->
          </div>
          <!--begin::Heading-->

          <!--begin::Input group-->
          <el-form-item
            class="mb-10"
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
              v-model="loginForm.email"
              type="email"
              :placeholder="$t('email')"
              autocomplete="off"
            />
          </el-form-item>
          <!--end::Input group-->

          <!--begin::Input group-->
          <el-form-item
            prop="password"
            class="mb-10"
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
              v-model="loginForm.password"
              type="password"
              :placeholder="$t('password')"
              autocomplete="off"
            />
          </el-form-item>
          <!--end::Input group-->
          <!--begin::Link-->
          <div class="d-flex align-items-center justify-content-end mb-18">
            <router-link
              :to="{
                name: 'password-reset',
              }"
              class="link-success fs-3 mt-2 d-block text-decoration-underline"
            >
              {{ $t("forgetPassword") }}
            </router-link>
          </div>
          <!--end::Link-->

          <!--begin::Actions-->
          <div class="text-center">
            <!--begin::Submit button-->
            <button
              type="submit"
              ref="submitButton"
              id="kt_sign_in_submit"
              class="btn btn-lg px-16 fs-1 btn-primary mb-5"
            >
              <span class="indicator-label">
                {{ $t("signIn") }}
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
          <!--begin::Link-->
          <div class="text-gray-400 text-center fw-bold fs-4">
            {{ $t("newHere") }}

            <router-link
              :to="{ name: 'sign-up' }"
              class="fw-bolder text-decoration-underline"
            >
              {{ $t("signUp") }}
            </router-link>
          </div>
          <!--end::Link-->
        </el-form>
        <!--end::Form-->
      </div>
      <!--end::Wrapper-->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, ref } from "vue";
import { Actions } from "@/store/enums/StoreEnums";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { reinitializeComponents } from "@/core/plugins/keenthemes";

export default defineComponent({
  name: "sign-in",

  setup() {
    const store = useStore();
    const router = useRouter();
    const submitButton = ref<HTMLButtonElement | null>(null);
    const loginFormRef = ref<HTMLFormElement | null>(null);

    const loginForm = ref({
      email: "",
      password: "",
    });

    onMounted(() => {
      nextTick(() => {
        reinitializeComponents();
      });
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
      loginFormRef,
      submitButton,
      loginForm,
    };
  },
});
</script>
