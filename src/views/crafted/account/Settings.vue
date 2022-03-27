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
      <el-form
        @submit.prevent="profileHandleSubmit()"
        :model="profileDetails"
        :rules="profileDetailsValidator"
        ref="formProfileDetails"
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
              <el-form-item prop="name">
                <el-input
                  :placeholder="$t('name')"
                  maxlength="30"
                  v-model="profileDetails.name"
                />
              </el-form-item>
              <!--end::Input-->
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
              <el-form-item prop="phone">
                <el-input
                  type="number"
                  maxlength="15"
                  :placeholder="$t('phone')"
                  v-model="profileDetails.phone"
                />
              </el-form-item>
              <!--end::Input-->
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
              <el-form-item prop="currencies" class="mb-0">
                <el-select
                  v-model="profileDetails.currency"
                  default-first-option
                  placeholder="Choose a currency"
                  class="w-100"
                >
                  <el-option
                    v-for="(currency, index) in $store.getters.allCurrencies"
                    :key="index"
                    :value="currency.id"
                    :label="currency.name"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-bold fs-6">
              {{ $t("language") }}
            </label>
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <el-form-item prop="languages" class="mb-0">
                <el-select
                  v-model="language"
                  default-first-option
                  placeholder="Choose tags for your target"
                  class="w-100"
                >
                  <el-option label="Arabic" value="ar"> </el-option>
                  <el-option label="English" value="en"> </el-option>
                </el-select>
              </el-form-item>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->
        </div>
        <!--end::Card body-->
        <!--begin::Actions-->
        <div class="card-footer d-flex justify-content-end py-6 px-9">
          <button type="submit" ref="profileButton" class="btn btn-primary">
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
      </el-form>
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
      <el-form
        @submit.prevent="enterpriseHandleSubmit()"
        :model="profileDetails"
        :rules="enterpriseDetailsValidator"
        ref="formEnterpriseDetails"
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
                  :style="`background-image: url(${
                    imgPreview ? imgPreview : profileDetails.market_image
                  })`"
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
                  <input
                    type="file"
                    name="avatar"
                    accept=".png, .jpg, .jpeg"
                    @change="onFileChange"
                  />
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
              <el-form-item prop="market_name">
                <el-input
                  :placeholder="$t('enterpriseName')"
                  v-model="profileDetails.market_name"
                />
              </el-form-item>
              <!--end::Input-->
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
              <el-form-item prop="market_email">
                <el-input
                  :placeholder="$t('enterpriseEmail')"
                  v-model="profileDetails.market_email"
                />
              </el-form-item>
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
              <el-form-item prop="market_site_url">
                <el-input
                  :placeholder="$t('enterpriseWebsite')"
                  v-model="profileDetails.market_site_url"
                />
              </el-form-item>
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
              <el-form-item prop="market_commercial_number">
                <el-input
                  :placeholder="$t('numberOfTheEnterprise')"
                  v-model="profileDetails.market_commercial_number"
                />
              </el-form-item>
            </div>
            <!--end::Col-->
          </div>
          <!--end::Input group-->

          <!--begin::Input group-->
          <div class="row mb-6">
            <!--begin::Label-->
            <label class="col-lg-4 col-form-label fw-bold fs-6">
              {{ $t("enterpriseRecordNumber") }}
            </label>
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <el-form-item prop="market_standard_number">
                <el-input
                  :placeholder="$t('enterpriseRecordNumber')"
                  v-model="profileDetails.market_standard_number"
                />
              </el-form-item>
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
              <el-form-item prop="market_tax_number">
                <el-input
                  :placeholder="$t('enterpriseTaxNumber')"
                  v-model="profileDetails.market_tax_number"
                />
              </el-form-item>
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
              <el-form-item prop="market_address">
                <el-input
                  :placeholder="$t('enterpriseAddress')"
                  v-model="profileDetails.market_address"
                />
              </el-form-item>
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
            </label>
            <!--end::Label-->

            <!--begin::Col-->
            <div class="col-lg-8 fv-row">
              <el-form-item prop="market_phone">
                <el-input
                  :placeholder="$t('enterprisePhone')"
                  v-model="profileDetails.market_phone"
                />
              </el-form-item>
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
            ref="enterpriseButton"
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
      </el-form>
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
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n/index";

interface ProfileDetails {
  name: string;
  phone: string;
  market_name: string;
  market_address: string;
  market_tax_number: string;
  market_commercial_number: string;
  market_standard_number: string;
  market_site_url: string;
  market_email: string;
  market_phone: string;
  market_image: string;
  currency: {
    id: number;
    code: string;
    value: string;
  };
}

export default defineComponent({
  name: "account-settings",
  components: {
    ErrorMessage,
    Field,
    Form,
  },
  setup() {
    const profileButton = ref<HTMLElement | null>(null);
    const enterpriseButton = ref<HTMLElement | null>(null);
    const submitButton3 = ref<HTMLElement | null>(null);
    const submitButton4 = ref<HTMLElement | null>(null);
    const submitButton5 = ref<HTMLElement | null>(null);
    const updateEmailButton = ref<HTMLElement | null>(null);
    const updatePasswordButton = ref<HTMLElement | null>(null);
    const formProfileDetails = ref<null | HTMLFormElement>(null);
    const formEnterpriseDetails = ref<null | HTMLFormElement>(null);

    const emailFormDisplay = ref(false);
    const passwordFormDisplay = ref(false);
    const imgPreview = ref<string>("");
    const market_image = ref<File | null>(null);

    // const user_avatar = ref<File | null>(null);
    const store = useStore();
    const lang = localStorage.getItem("lang") || "ar";
    const language = ref(lang);
    const user = computed(() => store.getters.currentUser);
    const { t, te } = useI18n();
    const translate = (text) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };
    const profileDetailsValidator = ref({
      name: [
        {
          required: true,
          message: translate("nameRequired"),
          trigger: "change",
        },
      ],
      phone: [
        {
          required: true,
          message: "Phone number is required",
          trigger: "change",
        },
        {
          min: 10,
          message: "Phone number must be at least 10 characters",
          trigger: "change",
        },
        {
          pattern: /^[0-9]+$/,
          message: "Phone number must be digits only",
          trigger: "change",
        },
      ],
    });
    const enterpriseDetailsValidator = ref({
      market_name: [
        {
          max: 20,
          message: translate("nameRequired"),
          trigger: "change",
        },
      ],
      // phone: [
      //   {
      //     required: true,
      //     message: "Phone number is required",
      //     trigger: "change",
      //   },
      //   {
      //     min: 10,
      //     message: "Phone number must be at least 10 characters",
      //     trigger: "change",
      //   },
      //   {
      //     pattern: /^[0-9]+$/,
      //     message: "Phone number must be digits only",
      //     trigger: "change",
      //   },
      // ],
    });

    // const enterpriseDetailsValidator = Yup.object().shape({
    //   market_name: Yup.string().required().label("Enterprise"),
    //   market_address: Yup.string().required().label("Market Address"),
    //   market_tax_number: Yup.string()
    //     .min(15)
    //     .required()
    //     .label("market_tax_number"),
    //   market_commercial_number: Yup.string().label("Market Commercial Number"),
    // });

    const profileDetails = ref<ProfileDetails>({
      name: "",
      phone: "",
      market_name: "",
      market_address: "",
      market_tax_number: "",
      market_commercial_number: "",
      market_standard_number: "",
      market_site_url: "",
      market_email: "",
      market_phone: "",
      market_image: "",
      currency: {
        id: 0,
        code: "",
        value: "",
      },
    });

    const profileHandleSubmit = () => {
      if (!formProfileDetails.value) {
        return;
      }

      formProfileDetails.value.validate((valid) => {
        if (valid) {
          const userDetails = {
            name: profileDetails.value.name,
            phone: profileDetails.value.phone,
            currency_id: profileDetails.value.currency.id,
          };
          profileButton.value?.setAttribute("data-kt-indicator", "on");
          store.dispatch(Actions.UPDATE_USER, userDetails).then((response) => {
            profileButton.value?.removeAttribute("data-kt-indicator");
            Swal.fire({
              text: response.message,
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok, got it!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            }).then(() => {
              store.commit(Mutations.SET_LANG, language.value);
              setTimeout(() => {
                window.location.reload();
              }, 0);
            });
          });
        } else {
          Swal.fire({
            text: "Sorry, looks like there are some errors detected, please try again.",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
          return false;
        }
      });
    };

    const enterpriseHandleSubmit = () => {
      if (!formEnterpriseDetails.value) {
        return;
      }
      formEnterpriseDetails.value.validate((valid) => {
        if (valid) {
          if (enterpriseButton.value) {
            const formData = new FormData();

            const enterpriseDetails = {
              market_name:
                profileDetails.value.market_name == null
                  ? ""
                  : profileDetails.value.market_name,
              market_address:
                profileDetails.value.market_address == null
                  ? ""
                  : profileDetails.value.market_address,
              market_tax_number:
                profileDetails.value.market_tax_number == null
                  ? ""
                  : profileDetails.value.market_tax_number,
              market_commercial_number:
                profileDetails.value.market_commercial_number == null
                  ? ""
                  : profileDetails.value.market_commercial_number,
              market_standard_number:
                profileDetails.value.market_standard_number == null
                  ? ""
                  : profileDetails.value.market_standard_number,
              market_site_url:
                profileDetails.value.market_site_url == null
                  ? ""
                  : profileDetails.value.market_site_url,
              market_phone:
                profileDetails.value.market_phone == null
                  ? ""
                  : profileDetails.value.market_phone,
            };

            if (market_image.value) {
              formData.append("market_image", market_image.value);
            }
            for (let key in enterpriseDetails) {
              formData.append(key, enterpriseDetails[key]);
            }

            // Activate indicator
            enterpriseButton.value.setAttribute("data-kt-indicator", "on");

            store.dispatch(Actions.UPDATE_USER, formData).then((response) => {
              enterpriseButton.value?.removeAttribute("data-kt-indicator");
              Swal.fire({
                text: response.message,
                icon: "success",
                buttonsStyling: false,
                confirmButtonText: "Ok, got it!",
                customClass: {
                  confirmButton: "btn fw-bold btn-light-primary",
                },
              });
            });
          }
        } else {
          Swal.fire({
            text: "Sorry, looks like there are some errors detected, please try again.",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok, got it!",
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
          return false;
        }
      });
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
      profileDetails.value.market_image = user.value.market_image;
      imgPreview.value = "";
    };

    const onFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        imgPreview.value = URL.createObjectURL(file);
        market_image.value = file;
      } else {
        imgPreview.value = "";
      }
    };

    onMounted(() => {
      setCurrentPageBreadcrumbs("settings", ["account", "settings"]);
      setTimeout(() => {
        profileDetails.value = user.value;
      }, 1000);
    });

    return {
      formProfileDetails,
      formEnterpriseDetails,
      profileButton,
      enterpriseButton,
      submitButton3,
      submitButton4,
      submitButton5,
      profileHandleSubmit,
      enterpriseHandleSubmit,
      profileDetails,
      emailFormDisplay,
      passwordFormDisplay,
      removeImage,
      onFileChange,
      imgPreview,
      profileDetailsValidator,
      enterpriseDetailsValidator,
      updateEmailButton,
      updatePasswordButton,
      updatePassword,
      lang,
      user,
      language,
    };
  },
});
</script>
