<template>
  <!--begin::Stepper-->
  <div class="w-100">
    <!--begin::Wrapper-->
    <div
      ref="createAccountRef"
      class="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid h-100 flex-center"
      id="kt_create_account_stepper"
    >
      <div
        class="bg-lighten flex-column align-items-center shadow-sm py-10 h-100 d-none d-xl-flex w-100 w-xl-500px"
      >
        <!--begin::Logo-->
        <Logo class="mb-20 ps-lg-10"></Logo>
        <!--end::Logo-->
        <!--begin::Nav-->
        <div class="stepper-nav ps-lg-10">
          <!--begin::Step 1-->
          <div class="stepper-item current" data-kt-stepper-element="nav">
            <!--begin::Line-->
            <div class="stepper-line w-40px"></div>
            <!--end::Line-->

            <!--begin::Icon-->
            <div class="stepper-icon w-40px h-40px">
              <i class="stepper-check fas fa-check"></i>
              <span class="stepper-number">1</span>
            </div>
            <!--end::Icon-->

            <!--begin::Label-->
            <div class="stepper-label">
              <h3 class="stepper-title">{{ $t("accountType") }}</h3>
            </div>
            <!--end::Label-->
          </div>
          <!--end::Step 1-->

          <!--begin::Step 2-->
          <div class="stepper-item" data-kt-stepper-element="nav">
            <!--begin::Line-->
            <div class="stepper-line w-40px"></div>
            <!--end::Line-->

            <!--begin::Icon-->
            <div class="stepper-icon w-40px h-40px">
              <i class="stepper-check fas fa-check"></i>
              <span class="stepper-number">2</span>
            </div>
            <!--begin::Icon-->

            <!--begin::Label-->
            <div class="stepper-label">
              <h3 class="stepper-title">{{ $t("accountInfo") }}</h3>
            </div>
            <!--begin::Label-->
          </div>
          <!--end::Step 2-->
        </div>
        <!--end::Nav-->
      </div>

      <!--begin::Form-->
      <div class="w-100 h-100 d-flex flex-column pb-lg-0 px-lg-20 p-10">
        <div
          class="d-flex flex-column flex-column-fluid justify-content-center"
        >
          <!--begin::Step 1-->
          <div v-if="currentStepIndex == 1">
            <!--begin::Wrapper-->
            <div class="w-100">
              <!-- begin::Logo in mobile -->
              <Logo class="mb-10 ps-lg-10 d-xl-none"></Logo>
              <!--end::Logo-->
              <!--begin::Heading-->
              <div class="pb-10 pb-lg-15">
                <!--begin::Title-->
                <h2 class="fw-bolder d-flex align-items-center text-dark">
                  {{ $t("chooseAccountType") }}
                  <i
                    class="fas fa-exclamation-circle ms-2 fs-7"
                    data-bs-toggle="tooltip"
                    data-bs-trigger="hover"
                    title="Billing is issued based on your selected account type"
                  ></i>
                </h2>
                <!--end::Title-->

                <!--begin::Notice-->
                <div class="text-gray-400 fw-bold fs-6">
                  {{ $t("ifYouHaveAccount") }}
                  <router-link
                    :to="{
                      name: 'sign-in',
                    }"
                    class="link-primary fw-bolder"
                  >
                    {{ $t("signIn") }} </router-link
                  >.
                </div>
                <!--end::Notice-->
              </div>
              <!--end::Heading-->

              <!--begin::Input group-->
              <div class="fv-row">
                <!--begin::Row-->

                <div class="row row-gap">
                  <!--begin::Col-->
                  <div class="col-sm-6">
                    <!--begin::Option-->
                    <input
                      type="radio"
                      class="btn-check"
                      v-model="formData.account_type"
                      id="kt_create_account_form_account_type_cloud"
                      value="cloud"
                    />
                    <label
                      class="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center"
                      for="kt_create_account_form_account_type_cloud"
                    >
                      <span class="svg-icon svg-icon-3x me-5">
                        <inline-svg
                          src="/media/icons/duotune/communication/com005.svg"
                        />
                      </span>

                      <!--begin::Info-->
                      <span class="d-block fw-bold text-start">
                        <span class="text-dark fw-bolder d-block fs-4 mb-2">
                          {{ $t("cloudAccount") }}
                        </span>
                        <span class="text-gray-400 fw-bold fs-6">
                          {{ $t("checkItOut") }}
                        </span>
                      </span>
                      <!--end::Info-->
                    </label>
                    <!--end::Option-->
                  </div>
                  <!--end::Col-->

                  <!--begin::Col-->
                  <div class="col-sm-6">
                    <!--begin::Option-->
                    <input
                      type="radio"
                      class="btn-check"
                      v-model="formData.account_type"
                      value="custom"
                      id="kt_create_account_form_account_type_custom"
                    />
                    <label
                      class="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center"
                      for="kt_create_account_form_account_type_custom"
                    >
                      <span class="svg-icon svg-icon-3x me-5">
                        <inline-svg
                          src="/media/icons/duotune/finance/fin006.svg"
                        />
                      </span>

                      <!--begin::Info-->
                      <span class="d-block fw-bold text-start">
                        <span class="text-dark fw-bolder d-block fs-4 mb-2">{{
                          $t("customAccount")
                        }}</span>
                        <span class="text-gray-400 fw-bold fs-6">
                          {{ $t("createCorpAccount") }}
                        </span>
                      </span>
                      <!--end::Info-->
                    </label>
                    <!--end::Option-->
                  </div>
                  <!--end::Col-->
                </div>
                <!--end::Row-->
              </div>
              <!--end::Input group-->
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Step 1-->
          <!--begin::Step 1-->
          <div class="current" v-if="currentStepIndex == 2">
            <!--begin::Row-->
            <div class="row row-gap mb-10" data-kt-buttons="true">
              <!--begin::Col-->
              <div class="col">
                <!--begin::Option-->
                <input
                  type="radio"
                  class="btn-check"
                  v-model="formData.invoice_plan"
                  value="100"
                  id="kt_hundred_select"
                />
                <label
                  class="btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4"
                  for="kt_hundred_select"
                >
                  <span class="fw-bolder fs-3">100</span>
                </label>
                <!--end::Option-->
              </div>
              <!--end::Col-->
              <!--begin::Col-->
              <div class="col">
                <!--begin::Option-->
                <input
                  type="radio"
                  class="btn-check"
                  v-model="formData.invoice_plan"
                  value="1000"
                  disabled
                  id="kt_one_thousand_select"
                />
                <label
                  class="btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4"
                  for="kt_one_thousand_select"
                >
                  <span class="fw-bolder fs-3">1000</span>
                </label>
                <!--end::Option-->
              </div>
              <!--end::Col-->

              <!--begin::Col-->
              <div class="col">
                <!--begin::Option-->
                <input
                  type="radio"
                  class="btn-check"
                  v-model="formData.invoice_plan"
                  value="5000"
                  disabled
                  id="kt_five_thousand_select"
                />
                <label
                  class="btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4"
                  for="kt_five_thousand_select"
                >
                  <span class="fw-bolder fs-3">5000</span>
                </label>
                <!--end::Option-->
              </div>
              <!--end::Col-->

              <!--begin::Col-->
              <div class="col">
                <!--begin::Option-->
                <input
                  type="radio"
                  class="btn-check"
                  v-model="formData.invoice_plan"
                  value="10000"
                  disabled
                  id="kt_ten_thousand_select"
                />
                <label
                  class="btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4"
                  for="kt_ten_thousand_select"
                >
                  <span class="fw-bolder fs-3">10000</span>
                </label>
                <!--end::Option-->
              </div>
              <!--end::Col-->

              <!--begin::Col-->
              <div class="col">
                <!--begin::Option-->
                <Field
                  type="radio"
                  class="btn-check"
                  name="invoice_plan"
                  value="other"
                  disabled
                  id="kt_other_select"
                />
                <label
                  class="btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4"
                  for="kt_other_select"
                >
                  <span class="fw-bolder fs-3">{{ $t("other") }}</span>
                </label>
                <!--end::Option-->
              </div>
              <!--end::Col-->
            </div>
            <!--end::Row-->
            <!--begin::Wrapper-->
            <div class="w-100">
              <!--begin::Form-->
              <el-form
                ref="formSignUp"
                :model="formData"
                :rules="signUpValidator"
                label-position="top"
                @submit.prevent="signUp()"
              >
                <!--begin::Input group-->
                <div class="row row-gap">
                  <div class="col-lg-12">
                    <el-form-item prop="name" class="mb-1">
                      <el-input
                        v-model="formData.name"
                        name="name"
                        :placeholder="$t('name')"
                      />
                    </el-form-item>
                  </div>
                  <div class="col-lg-12">
                    <el-form-item prop="phone" class="mb-1">
                      <el-input
                        v-model="formData.phone"
                        name="tel"
                        :placeholder="$t('phone')"
                      />
                    </el-form-item>
                  </div>
                  <div class="col-lg-12">
                    <el-form-item prop="email" class="mb-1">
                      <el-input
                        v-model="formData.email"
                        :placeholder="$t('email')"
                      />
                    </el-form-item>
                  </div>
                  <div class="col-lg-12">
                    <el-form-item
                      v-if="formData.account_type === 'custom'"
                      prop="password"
                      class="mb-1"
                      :rules="[
                        {
                          required:
                            formData.account_type === 'custom' ? true : false,
                          message: $t('passwordRequired'),
                        },
                        { min: 6, message: $t('passwordMinLength') },
                      ]"
                    >
                      <el-input
                        autocomplete="off"
                        type="password"
                        v-model="formData.password"
                        :placeholder="$t('password')"
                      />
                    </el-form-item>
                  </div>
                </div>
                <!--end::Input group-->
              </el-form>
              <!--end::Form-->
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Step 1-->

          <!--begin::Actions-->
          <div class="d-flex flex-stack pt-15">
            <!--begin::Wrapper-->
            <div class="me-2">
              <button
                v-if="currentStepIndex === 2"
                type="button"
                class="btn btn-lg btn-light-primary me-3"
                @click.prevent="currentStepIndex = 1"
              >
                <span class="svg-icon svg-icon-3 me-1">
                  <inline-svg src="/media/icons/duotune/arrows/arr063.svg" />
                </span>
                {{ $t("back") }}
              </button>
            </div>
            <!--end::Wrapper-->

            <!--begin::Wrapper-->
            <div>
              <button
                type="submit"
                class="btn btn-lg btn-primary"
                v-if="currentStepIndex === 2"
                @click="signUp()"
              >
                <span class="indicator-label">
                  {{ $t("submit") }}
                  <span class="svg-icon svg-icon-3 ms-2 me-0">
                    <inline-svg src="icons/duotune/arrows/arr064.svg" />
                  </span>
                </span>
                <span class="indicator-progress">
                  {{ $t("pleaseWait") }}
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span>
                </span>
              </button>

              <button
                type="button"
                @click.prevent="currentStepIndex = 2"
                class="btn btn-lg btn-primary"
                v-else
              >
                {{ $t("continue") }}
                <span class="svg-icon svg-icon-3 ms-1 me-0">
                  <inline-svg src="/media/icons/duotune/arrows/arr064.svg" />
                </span>
              </button>
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Actions-->
        </div>
        <!--begin::Footer-->
        <div
          class="d-flex flex-center justify-content-center flex-column-auto p-10"
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
        </div>
        <!--end::Footer-->
      </div>
      <!--end::Form-->
    </div>
    <!--end::Stepper-->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, nextTick, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Actions } from "@/store/enums/StoreEnums";
import Logo from "@/components/Logo.vue";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { useI18n } from "vue-i18n/index";
import { reinitializeComponents } from "@/core/plugins/keenthemes";

// Account type
interface Step1 {
  account_type: string;
}

// Account info
interface Step2 {
  invoice_plan: string;
  name: string;
  email: string;
  phone: string;
  password: string;
}

interface KTCreateApp extends Step1, Step2 {}

export default defineComponent({
  name: "sign-up",
  components: {
    // Field,
    // ErrorMessage,
    Logo,
  },
  setup() {
    const formSignUp = ref<HTMLFormElement>();
    const currentStepIndex = ref(1);
    const store = useStore();
    const router = useRouter();

    const { t, te } = useI18n();

    const formData = ref<KTCreateApp>({
      account_type: "custom",
      invoice_plan: "100",
      name: "",
      email: "",
      phone: "",
      password: "",
    });

    onMounted(() => {
      nextTick(() => {
        reinitializeComponents();
      });
    });

    const translate = (text) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };

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

    const signUpValidator = ref({
      name: [
        {
          required: true,
          message: translate("nameRequired"),
          trigger: "change",
        },
      ],
      email: [
        {
          required: true,
          message: translate("emailRequired"),
          trigger: "change",
        },
        {
          type: "email",
          message: translate("emailInvalid"),
          trigger: "change",
        },
      ],
      phone: [
        {
          required: true,
          message: translate("phoneRequired"),
          trigger: "change",
        },
        {
          pattern: /^(\+?\d{1,3}[- ]?)?\d{10}$/,
          message: translate("phoneNumberInvalid"),
          trigger: "change",
        },
      ],
    });

    const currentLanguage = computed(() => {
      return store.getters.getLanguage;
    });

    const currentLangugeLocale = computed(() => {
      return countries[currentLanguage.value];
    });

    //Form submit function
    const signUp = () => {
      if (!formSignUp.value) {
        return;
      }
      formSignUp.value.validate((valid) => {
        if (valid) {
          Swal.fire({
            title: translate("pleaseWait"),
            text: translate("creatingAccount"),
            showConfirmButton: false,
            allowOutsideClick: false,
            onBeforeOpen: () => {
              Swal.showLoading();
            },
          });
          // Clear existing errors
          store.dispatch(Actions.LOGOUT);
          store
            .dispatch(Actions.REGISTER, formData.value)
            .then(() => {
              Swal.fire({
                text: translate("register_success"),
                icon: "success",
                buttonsStyling: false,
                confirmButtonText: translate("ok"),
                customClass: {
                  confirmButton: "btn fw-bold btn-light-primary",
                },
              }).then(function () {
                router.push({ name: "home" });
              });
            })
            .catch(() => {
              Swal.fire({
                text: store.getters.getErrors.message,
                icon: "error",
                buttonsStyling: false,
                confirmButtonText: translate("tryAgain"),
                customClass: {
                  confirmButton: "btn fw-bold btn-light-danger",
                },
              });
            });
        }
      });
    };

    return {
      signUp,
      formSignUp,
      signUpValidator,
      currentLanguage,
      currentLangugeLocale,
      currentStepIndex,
      formData,
    };
  },
});
</script>

<style lang="scss" scoped>
.row-gap {
  row-gap: 20px;
}
</style>
