<template>
  <!--begin::Basic info-->
  <div class="card mb-5 mb-xl-10">
    <!--begin::Card header-->
    <div
      class="card-header border-0 cursor-pointer"
      role="button"
      data-bs-toggle="collapse"
      data-bs-target="#kt_account_profile_details"
      aria-expanded="true"
      aria-controls="kt_account_profile_details"
    >
      <!--begin::Card title-->
      <div class="card-title m-0">
        <h3 class="fw-bolder m-0">
          {{ $t("profileDetails") }}
        </h3>
      </div>
      <!--end::Card title-->
    </div>
    <!--begin::Card header-->

    <!--begin::Content-->
    <div id="kt_account_profile_details" class="collapse show">
      <!--begin::Form-->
      <Form
        id="kt_account_profile_details_form"
        class="form"
        novalidate="novalidate"
        @submit="saveChanges1()"
        :validation-schema="profileDetailsValidator"
      >
        <!--begin::Card body-->
        <div class="card-body border-top p-9">
          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-bold fs-6">
              {{ $t("name") }}
            </label>
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <Field
                type="text"
                name="name"
                class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                :placeholder="$t('name')"
                v-model="profileDetails.name"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="name" />
                </div>
              </div>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-bold fs-6">
              <span class="">
                {{ $t("phone") }}
              </span>

              <i
                class="fas fa-exclamation-circle ms-1 fs-7"
                data-bs-toggle="tooltip"
                title="Phone number must be active"
              ></i>
            </label>
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <Field
                type="number"
                name="phone"
                class="form-control form-control-lg form-control-solid"
                :placeholder="$t('phone')"
                style="direction: inherit"
                v-model="profileDetails.phone"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="phone" />
                </div>
              </div>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-bold fs-6">
              {{ $t("currency") }}
            </label>
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <Field
                as="select"
                name="currency"
                class="form-select form-select-solid form-select-lg"
                v-model="profileDetails.currency"
              >
                <option
                  v-for="(currency, index) in $store.state.currencies"
                  :key="index"
                  :value="currency.code"
                >
                  <b>{{ currency.code }}</b
                  >&#160;-&#160;{{ currency.name }}
                </option>
              </Field>
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="currency" />
                </div>
              </div>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->
        </div>
        <!--end::Card body-->

        <!--begin::Actions-->
        <div class="card-footer d-flex justify-content-end py-6 px-9">
          <button
            type="submit"
            id="kt_account_profile_details_submit"
            ref="submitButton1"
            class="btn btn-primary"
          >
            <span class="indicator-label">
              {{ $t("saveChanges") }}
            </span>
            <span class="indicator-progress">
              {{ $t("pleaseWait") }}
              <span
                class="spinner-border spinner-border-sm align-middle ms-2"
              ></span>
            </span>
          </button>
        </div>
        <!--end::Actions-->
      </Form>
      <!--end::Form-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Basic info-->

  <!--begin::Enterprise info-->
  <div class="card mb-5 mb-xl-10">
    <!--begin::Card header-->
    <div
      class="card-header border-0 cursor-pointer"
      role="button"
      data-bs-toggle="collapse"
      data-bs-target="#kt_account_enterprise_details"
      aria-expanded="true"
      aria-controls="kt_account_enterprise_details"
    >
      <!--begin::Card title-->
      <div class="card-title m-0">
        <h3 class="fw-bolder m-0">
          {{ $t("enterpriseDetails") }}
        </h3>
      </div>
      <!--end::Card title-->
    </div>
    <!--begin::Card header-->

    <!--begin::Content-->
    <div id="kt_account_enterprise_details" class="collapse show">
      <!--begin::Form-->
      <Form
        id="kt_account_enterprise_details_form"
        class="form"
        novalidate="novalidate"
        @submit="saveChanges1()"
        :validation-schema="enterpriseDetailsValidator"
      >
        <!--begin::Card body-->
        <div class="card-body border-top p-9">
          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-bold fs-6">
              {{ $t("enterpriseLogo") }}
            </label>
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8">
              <!--begin::Image input-->
              <div
                class="image-input image-input-outline"
                data-kt-image-input="true"
                style="background-image: url(media/avatars/blank.png)"
              >
                <!--begin::Preview existing avatar-->
                <div
                  class="image-input-wrapper w-125px h-125px"
                  :style="`background-image: url(${profileDetails.avatar})`"
                ></div>
                <!--end::Preview existing avatar-->

                <!--begin::Label-->
                <label
                  class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow"
                  data-kt-image-input-action="change"
                  data-bs-toggle="tooltip"
                  title="Change avatar"
                >
                  <i class="bi bi-pencil-fill fs-7"></i>

                  <!--begin::Inputs-->
                  <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
                  <input type="hidden" name="avatar_remove" />
                  <!--end::Inputs-->
                </label>
                <!--end::Label-->

                <!--begin::Remove-->
                <span
                  class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow"
                  data-kt-image-input-action="remove"
                  data-bs-toggle="tooltip"
                  @click="removeImage()"
                  title="Remove avatar"
                >
                  <i class="bi bi-x fs-2"></i>
                </span>
                <!--end::Remove-->
              </div>
              <!--end::Image input-->

              <!--begin::Hint-->
              <div class="form-text">Allowed file types: png, jpg, jpeg.</div>
              <!--end::Hint-->
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-bold fs-6">
              {{ $t("enterpriseName") }}
            </label>
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <Field
                type="text"
                name="enterpriseName"
                class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                :placeholder="$t('enterpriseName')"
                v-model="profileDetails.enterpriseName"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="enterpriseName" />
                </div>
              </div>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-bold fs-6">
              {{ $t("enterpriseEmail") }}
            </label>
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <Field
                type="email"
                name="enterpriseEmail"
                class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                :placeholder="$t('enterpriseEmail')"
                v-model="profileDetails.enterpriseEmail"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="enterpriseEmail" />
                </div>
              </div>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-bold fs-6">
              {{ $t("enterpriseWebsite") }}
            </label>
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <Field
                type="url"
                name="enterpriseWebsite"
                class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                :placeholder="$t('enterpriseWebsite')"
                v-model="profileDetails.enterpriseWebsite"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="enterpriseWebsite" />
                </div>
              </div>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-bold fs-6">
              {{ $t("numberOfTheEnterprise") }}
            </label>
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <Field
                type="text"
                name="numberOfTheEnterprise"
                class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                :placeholder="$t('numberOfTheEnterprise')"
                v-model="profileDetails.numberOfTheEnterprise"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="numberOfTheEnterprise" />
                </div>
              </div>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-bold fs-6">
              {{ $t("recordNumber") }}
            </label>
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <Field
                type="text"
                name="recordNumber"
                class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                :placeholder="$t('recordNumber')"
                v-model="profileDetails.recordNumber"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="recordNumber" />
                </div>
              </div>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-bold fs-6">
              {{ $t("enterpriseTaxNumber") }}
            </label>
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <Field
                type="text"
                name="enterpriseTaxNumber"
                class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                :placeholder="$t('enterpriseTaxNumber')"
                v-model="profileDetails.enterpriseTaxNumber"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="enterpriseTaxNumber" />
                </div>
              </div>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-bold fs-6">
              {{ $t("enterpriseAddress") }}
            </label>
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <Field
                type="text"
                name="enterpriseAddress"
                class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                :placeholder="$t('enterpriseAddress')"
                v-model="profileDetails.enterpriseAddress"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="enterpriseAddress" />
                </div>
              </div>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-bold fs-6">
              <span class="">
                {{ $t("enterprisePhone") }}
              </span>

              <i
                class="fas fa-exclamation-circle ms-1 fs-7"
                data-bs-toggle="tooltip"
                title="Phone number must be active"
              ></i>
            </label>
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <Field
                type="number"
                name="enterprisePhone"
                class="form-control form-control-lg form-control-solid"
                :placeholder="$t('enterprisePhone')"
                style="direction: inherit"
                v-model="profileDetails.enterprisePhone"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="enterprisePhone" />
                </div>
              </div>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->
        </div>
        <!--end::Card body-->

        <!--begin::Actions-->
        <div class="card-footer d-flex justify-content-end py-6 px-9">
          <button
            type="reset"
            class="btn btn-white btn-active-light-primary me-2"
          >
            {{ $t("discard") }}
          </button>

          <button
            type="submit"
            id="kt_account_profile_details_submit"
            ref="submitButton1"
            class="btn btn-primary"
          >
            <span class="indicator-label">
              {{ $t("saveChanges") }}
            </span>
            <span class="indicator-progress">
              {{ $t("pleaseWait") }}
              <span
                class="spinner-border spinner-border-sm align-middle ms-2"
              ></span>
            </span>
          </button>
        </div>
        <!--end::Actions-->
      </Form>
      <!--end::Form-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Enterprise info-->

  <!--begin::Sign-in Method-->
  <div class="card mb-5 mb-xl-10">
    <!--begin::Card header-->
    <div
      class="card-header border-0 cursor-pointer"
      role="button"
      data-bs-toggle="collapse"
      data-bs-target="#kt_account_signin_method"
    >
      <div class="card-title m-0">
        <h3 class="fw-boldest m-0">
          {{ $t("resetPassword") }}
        </h3>
      </div>
    </div>
    <!--end::Card header-->

    <!--begin::Content-->
    <div id="kt_account_signin_method" class="collapse show">
      <!--begin::Card body-->
      <div class="card-body border-top p-9">
        <!--begin::Password-->
        <div
          class="d-flex flex-wrap align-items-center justify-content-between mb-8"
        >
          <div
            id="kt_signin_password"
            :class="{ 'd-none': passwordFormDisplay }"
          >
            <div class="fs-4 fw-boldest mb-1">
              {{ $t("password") }}
            </div>
            <div class="fs-6 fw-bold text-gray-600">************</div>
          </div>
          <div
            id="kt_signin_password_edit"
            class="flex-row-fluid"
            :class="{ 'd-none': !passwordFormDisplay }"
          >
            <div class="fs-6 fw-bold text-gray-600 mb-4">
              Password must be at least 8 character and contain symbols
            </div>

            <!--begin::Form-->
            <Form
              id="kt_signin_change_password"
              class="form"
              novalidate="novalidate"
              @submit="updatePassword()"
              :validation-schema="changePassword"
            >
              <div class="row mb-6">
                <div class="col-lg-4">
                  <div class="fv-row mb-0">
                    <label
                      for="currentpassword"
                      class="form-label fs-6 fw-bolder mb-3"
                      >{{ $t("currentPassword") }}</label
                    >
                    <Field
                      type="password"
                      class="form-control form-control-lg form-control-solid fw-bold fs-6"
                      name="currentpassword"
                      id="currentpassword"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="currentpassword" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="fv-row mb-0">
                    <label
                      for="newpassword"
                      class="form-label fs-6 fw-bolder mb-3"
                      >{{ $t("newPassword") }}</label
                    >
                    <Field
                      type="password"
                      class="form-control form-control-lg form-control-solid fw-bold fs-6"
                      name="newpassword"
                      id="newpassword"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="newpassword" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="fv-row mb-0">
                    <label
                      for="confirmpassword"
                      class="form-label fs-6 fw-bolder mb-3"
                      >{{ $t("confirmNewPassword") }}</label
                    >
                    <Field
                      type="password"
                      class="form-control form-control-lg form-control-solid fw-bold fs-6"
                      name="confirmpassword"
                      id="confirmpassword"
                    />
                    <div class="fv-plugins-message-container">
                      <div class="fv-help-block">
                        <ErrorMessage name="confirmpassword" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex">
                <button
                  id="kt_password_submit"
                  type="submit"
                  ref="updatePasswordButton"
                  class="btn btn-primary me-2 px-6"
                >
                  <span class="indicator-label">
                    {{ $t("updatePassword") }}
                  </span>
                  <span class="indicator-progress">
                    {{ $t("pleaseWait") }}
                    <span
                      class="spinner-border spinner-border-sm align-middle ms-2"
                    ></span>
                  </span>
                </button>
                <button
                  id="kt_password_cancel"
                  type="button"
                  @click="passwordFormDisplay = !passwordFormDisplay"
                  class="btn btn-color-gray-400 btn-active-light-primary px-6"
                >
                  {{ $t("cancel") }}
                </button>
              </div>
            </Form>
            <!--end::Form-->
          </div>
          <div
            id="kt_signin_password_button"
            :class="{ 'd-none': passwordFormDisplay }"
          >
            <button
              @click="passwordFormDisplay = !passwordFormDisplay"
              class="btn btn-light fw-boldest"
            >
              {{ $t("resetPassword") }}
            </button>
          </div>
        </div>
        <!--end::Password-->
      </div>
      <!--end::Card body-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Sign-in Method-->
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, ref } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import Swal from "sweetalert2/dist/sweetalert2.js";
import * as Yup from "yup";
import { useStore } from "vuex";

interface ProfileDetails {
  name: string;
  phone: string;
  market_name_ar: string;
  market_address_ar: string;
  market_tax_number: string;
  market_commercial_number: string;
  market_standard_number: string;
  market_site_url: string;
  market_email: string;
  market_phone: string;
  market_icon: string;
  currency: string;
}

export default defineComponent({
  name: "account-settings",
  components: {
    ErrorMessage,
    Field,
    Form,
  },
  setup() {
    const submitButton1 = ref<HTMLElement | null>(null);
    const submitButton2 = ref<HTMLElement | null>(null);
    const submitButton3 = ref<HTMLElement | null>(null);
    const submitButton4 = ref<HTMLElement | null>(null);
    const submitButton5 = ref<HTMLElement | null>(null);
    const updateEmailButton = ref<HTMLElement | null>(null);
    const updatePasswordButton = ref<HTMLElement | null>(null);

    const emailFormDisplay = ref(false);
    const passwordFormDisplay = ref(false);

    // const user_avatar = ref<File | null>(null);
    const store = useStore();
    const lang = computed(() => store.getters.getLanguage);
    const user = computed(() => store.getters.currentUser);

    const profileDetailsValidator = Yup.object().shape({
      name: Yup.string().required().label("name"),
      phone: Yup.string().required().label("phone"),
    });

    const changeEmail = Yup.object().shape({
      emailaddress: Yup.string().required().email().label("Email"),
      confirmemailpassword: Yup.string().required().label("Password"),
    });

    const changePassword = Yup.object().shape({
      currentpassword: Yup.string().required().label("Current password"),
      newpassword: Yup.string().min(4).required().label("Password"),
      confirmpassword: Yup.string()
        .min(4)
        .required()
        .oneOf([Yup.ref("newpassword"), null], "Passwords must match")
        .label("Password Confirmation"),
    });

    const profileDetails = ref<ProfileDetails>({
      name: "",
      phone: "",
      market_name_ar: "",
      market_address_ar: "",
      market_tax_number: "",
      market_commercial_number: "",
      market_standard_number: "",
      market_site_url: "",
      market_email: "",
      market_phone: "",
      market_icon: "",
      currency: "",
    });

    const saveChanges1 = () => {
      if (submitButton1.value) {
        // Activate indicator
        submitButton1.value.setAttribute("data-kt-indicator", "on");

        setTimeout(() => {
          submitButton1.value?.removeAttribute("data-kt-indicator");
        }, 2000);
      }
    };

    const saveChanges2 = () => {
      if (submitButton2.value) {
        // Activate indicator
        submitButton2.value.setAttribute("data-kt-indicator", "on");

        setTimeout(() => {
          submitButton2.value?.removeAttribute("data-kt-indicator");
        }, 2000);
      }
    };

    const saveChanges3 = () => {
      if (submitButton3.value) {
        // Activate indicator
        submitButton3.value.setAttribute("data-kt-indicator", "on");

        setTimeout(() => {
          submitButton3.value?.removeAttribute("data-kt-indicator");
        }, 2000);
      }
    };

    const saveChanges4 = () => {
      if (submitButton4.value) {
        // Activate indicator
        submitButton4.value.setAttribute("data-kt-indicator", "on");

        setTimeout(() => {
          submitButton4.value?.removeAttribute("data-kt-indicator");
        }, 2000);
      }
    };

    const deactivateAccount = () => {
      if (submitButton5.value) {
        // Activate indicator
        submitButton5.value.setAttribute("data-kt-indicator", "on");

        setTimeout(() => {
          submitButton5.value?.removeAttribute("data-kt-indicator");

          Swal.fire({
            text: "Email is successfully changed!",
            icon: "success",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-light-primary",
            },
          }).then(() => {
            emailFormDisplay.value = false;
          });
        }, 2000);
      }
    };

    const updateEmail = () => {
      console.log(updateEmailButton.value);

      if (updateEmailButton.value) {
        // Activate indicator
        updateEmailButton.value.setAttribute("data-kt-indicator", "on");

        setTimeout(() => {
          updateEmailButton.value?.removeAttribute("data-kt-indicator");

          emailFormDisplay.value = false;
        }, 2000);
      }
    };

    const updatePassword = () => {
      if (updatePasswordButton.value) {
        // Activate indicator
        updatePasswordButton.value.setAttribute("data-kt-indicator", "on");

        setTimeout(() => {
          updatePasswordButton.value?.removeAttribute("data-kt-indicator");

          Swal.fire({
            text: "Password is successfully changed!",
            icon: "success",
            confirmButtonText: "Ok",
            buttonsStyling: false,
            customClass: {
              confirmButton: "btn btn-light-primary",
            },
          }).then(() => {
            passwordFormDisplay.value = false;
          });
        }, 2000);
      }
    };

    const removeImage = () => {
      profileDetails.value.market_icon = "/media/avatars/blank.png";
    };

    onMounted(() => {
      setCurrentPageBreadcrumbs("settings", ["account", "settings"]);
      setTimeout(() => {
        profileDetails.value = user.value;
        profileDetails.value.currency = store.state.currency;
      }, 1000);
    });

    return {
      submitButton1,
      submitButton2,
      submitButton3,
      submitButton4,
      submitButton5,
      saveChanges1,
      saveChanges2,
      saveChanges3,
      saveChanges4,
      deactivateAccount,
      profileDetails,
      emailFormDisplay,
      passwordFormDisplay,
      removeImage,
      profileDetailsValidator,
      changeEmail,
      changePassword,
      updateEmailButton,
      updatePasswordButton,
      updateEmail,
      updatePassword,
      lang,
      user,
    };
  },
});
</script>
