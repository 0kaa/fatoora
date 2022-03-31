<template>
  <!--begin::Modal - Create account-->
  <div
    class="modal fade"
    id="kt_modal_create_account"
    ref="createAccountModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-600px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header">
          <!--begin::Title-->
          <h2>{{ $t("create_account") }}</h2>
          <!--end::Title-->

          <!--begin::Close-->
          <div
            class="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="/media/icons/duotune/arrows/arr061.svg" />
            </span>
          </div>
          <!--end::Close-->
        </div>
        <!--end::Modal header-->

        <!--begin::Modal body-->
        <div class="modal-body scroll-y m-5">
          <!--begin::Form-->
          <el-form
            ref="createAccountRef"
            :model="formData"
            :rules="createAccountValidationRules"
            class="mx-auto w-100 py-10"
            novalidate="novalidate"
            @submit.prevent="createAccount()"
          >
            <!--begin::Step 1-->
            <div v-if="currentStepIndex == 1">
              <!--begin::Wrapper-->
              <div class="w-100">
                <!--begin::Heading-->
                <div class="pb-10 pb-lg-15">
                  <!--begin::Title-->
                  <h2 class="fw-bolder d-flex align-items-center text-dark">
                    {{ $t("choose_account_type") }}
                    <i
                      class="fas fa-exclamation-circle ms-2 fs-7"
                      data-bs-toggle="tooltip"
                      title="Billing is issued based on your selected account type"
                    ></i>
                  </h2>
                  <!--end::Title-->
                </div>
                <!--end::Heading-->

                <!--begin::Input group-->
                <div class="fv-row">
                  <!--begin::Row-->
                  <div class="row">
                    <!--begin::Col-->
                    <div class="col-lg-6">
                      <!--begin::Option-->
                      <input
                        type="radio"
                        class="btn-check"
                        name="account_type"
                        value="personal"
                        v-model="formData.account_type"
                        id="kt_create_account_form_account_type_personal"
                      />
                      <label
                        class="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10"
                        for="kt_create_account_form_account_type_personal"
                      >
                        <span class="svg-icon svg-icon-3x me-5">
                          <inline-svg
                            src="/media/icons/duotune/communication/com005.svg"
                          />
                        </span>

                        <!--begin::Info-->
                        <span class="d-block fw-bold text-start">
                          <span class="text-dark fw-bolder d-block fs-4 mb-2">{{
                            $t("personalAccount")
                          }}</span>
                          <span class="text-gray-400 fw-bold fs-6"
                            >If you need more info, please check it out</span
                          >
                        </span>
                        <!--end::Info-->
                      </label>
                      <!--end::Option-->
                    </div>
                    <!--end::Col-->

                    <!--begin::Col-->
                    <div class="col-lg-6">
                      <!--begin::Option-->
                      <input
                        type="radio"
                        class="btn-check"
                        name="account_type"
                        value="corporate"
                        v-model="formData.account_type"
                        id="kt_create_account_form_account_type_corporate"
                      />
                      <label
                        class="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center"
                        for="kt_create_account_form_account_type_corporate"
                      >
                        <span class="svg-icon svg-icon-3x me-5">
                          <inline-svg
                            src="/media/icons/duotune/finance/fin006.svg"
                          />
                        </span>

                        <!--begin::Info-->
                        <span class="d-block fw-bold text-start">
                          <span class="text-dark fw-bolder d-block fs-4 mb-2">{{
                            $t("corporateAccount")
                          }}</span>
                          <span class="text-gray-400 fw-bold fs-6"
                            >Create corporate account to mane users</span
                          >
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

            <!--begin::Step 3-->
            <div v-if="currentStepIndex == 2">
              <!--begin::Scroll-->
              <div
                class="scroll-y me-n7 pe-7"
                id="kt_modal_edit_customer_scroll"
                data-kt-scroll="true"
                data-kt-scroll-activate="{default: false, lg: true}"
                data-kt-scroll-max-height="auto"
                data-kt-scroll-dependencies="#kt_modal_edit_customer_header"
                data-kt-scroll-wrappers="#kt_modal_edit_customer_scroll"
                data-kt-scroll-offset="300px"
              >
                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="required fs-6 fw-bold mb-2">
                    {{ $t("customerName") }}
                  </label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-form-item prop="name">
                    <el-input v-model="formData.name" type="text" />
                  </el-form-item>
                  <!--end::Input-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="fs-6 fw-bold mb-2">
                    <span class="required">{{ $t("customerEmail") }}</span>

                    <i
                      class="fas fa-exclamation-circle ms-1 fs-7"
                      data-bs-toggle="tooltip"
                      title="Email address must be active"
                    ></i>
                  </label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-form-item prop="email">
                    <el-input v-model="formData.email" />
                  </el-form-item>
                  <!--end::Input-->
                </div>
                <!--end::Input group-->

                <!--begin::Input group-->
                <div class="fv-row mb-7">
                  <!--begin::Label-->
                  <label class="fs-6 fw-bold mb-2 required">{{
                    $t("customerPhone")
                  }}</label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-form-item prop="phone">
                    <el-input v-model="formData.phone" type="text" />
                  </el-form-item>
                  <!--end::Input-->
                </div>
                <!--end::Input group-->
                <!--begin::Input group-->
                <div class="fv-row mb-15">
                  <!--begin::Label-->
                  <label class="fs-6 fw-bold mb-2 required">{{
                    $t("customerAddress")
                  }}</label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-form-item prop="address">
                    <el-input v-model="formData.address" type="text" />
                  </el-form-item>
                  <!--end::Input-->
                </div>
                <!--end::Input group-->

                <!--begin::Billing toggle-->
                <div
                  class="fw-bolder fs-3 rotate collapsed collapsible mb-7"
                  data-bs-toggle="collapse"
                  href="#kt_modal_edit_customer_billing_info"
                  role="button"
                  aria-expanded="true"
                  aria-controls="kt_customer_view_details"
                >
                  {{ $t("otherInfo") }}
                  <span class="ms-2 rotate-180">
                    <span class="svg-icon svg-icon-3">
                      <inline-svg
                        src="/media/icons/duotune/arrows/arr072.svg"
                      />
                    </span>
                  </span>
                </div>
                <!--end::Billing toggle-->

                <!--begin::Billing form-->
                <div id="kt_modal_edit_customer_billing_info" class="collapse">
                  <!--begin::Input group-->
                  <div class="d-flex flex-column mb-7 fv-row">
                    <!--begin::Label-->
                    <label class="fs-6 fw-bold mb-2">
                      {{ $t("taxID") }}
                    </label>
                    <!--end::Label-->

                    <!--begin::Input-->
                    <el-form-item
                      prop="tax_number"
                      :rules="[
                        {
                          pattern: /^[0-9]+$/,
                          message: $t('market_tax_number_digits_only'),
                          trigger: 'change',
                        },
                        {
                          min: formData.tax_number ? 8 : 0,
                          message: $t('market_tax_number_min_length'),
                          trigger: 'change',
                        },
                        {
                          max: 14,
                          message: $t('market_tax_number_max_length'),
                          trigger: 'change',
                        },
                      ]"
                    >
                      <el-input v-model="formData.tax_number" />
                    </el-form-item>
                    <!--end::Input-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="d-flex flex-column mb-7 fv-row">
                    <!--begin::Label-->
                    <label class="fs-6 fw-bold mb-2">
                      {{ $t("commercial_number") }}
                    </label>
                    <!--end::Label-->

                    <!--begin::Input-->
                    <el-form-item
                      prop="commercial_number"
                      :rules="[
                        {
                          pattern: /^[0-9]+$/,
                          message: $t('market_commercial_number_digits_only'),
                          trigger: 'change',
                        },
                        {
                          min: formData.commercial_number ? 8 : 0,
                          message: $t('market_commercial_number_min_length'),
                          trigger: 'change',
                        },
                        {
                          max: formData.commercial_number ? 14 : 0,
                          message: $t('market_commercial_number_max_length'),
                          trigger: 'change',
                        },
                      ]"
                    >
                      <el-input v-model="formData.commercial_number" />
                    </el-form-item>
                    <!--end::Input-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="d-flex flex-column mb-7 fv-row">
                    <!--begin::Label-->
                    <label class="fs-6 fw-bold mb-2">
                      {{ $t("standard_number") }}
                    </label>
                    <!--end::Label-->

                    <!--begin::Input-->
                    <el-form-item
                      prop="standard_number"
                      :rules="[
                        {
                          pattern: /^[0-9]+$/,
                          message: $t('market_standard_number_digits_only'),
                          trigger: 'change',
                        },
                        {
                          min: formData.standard_number ? 8 : 0,
                          message: $t('market_standard_number_min_length'),
                          trigger: 'change',
                        },
                        {
                          max: formData.standard_number ? 14 : 0,
                          message: $t('market_standard_number_max_length'),
                          trigger: 'change',
                        },
                      ]"
                    >
                      <el-input v-model="formData.standard_number" />
                    </el-form-item>
                    <!--end::Input-->
                  </div>
                  <!--end::Input group-->
                </div>
                <!--end::Billing form-->
              </div>
              <!--end::Scroll-->
            </div>
            <!--end::Step 3-->

            <!--begin::Actions-->
            <div class="d-flex flex-stack pt-15">
              <!--begin::Wrapper-->
              <div class="me-2">
                <button
                  v-if="currentStepIndex == 2"
                  type="button"
                  class="btn btn-lg btn-light-primary me-3"
                  @click.prevent="currentStepIndex = 1"
                >
                  <span class="svg-icon svg-icon-3 me-1">
                    <inline-svg
                      :src="`/media/icons/duotune/arrows/arr06${
                        il8n.locale.value == 'ar' ? '4' : '3'
                      }.svg`"
                    />
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
                  @click="formSubmit()"
                >
                  <span class="indicator-label">
                    {{ $t("submit") }}
                    <span class="svg-icon svg-icon-3 ms-2 me-0">
                      <inline-svg
                        :src="`/media/icons/duotune/arrows/arr06${
                          il8n.locale.value == 'ar' ? '3' : '4'
                        }.svg`"
                      />
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
                  @click.prevent="currentStepIndex = 2"
                  class="btn btn-lg btn-primary"
                  v-else
                >
                  {{ $t("continue") }}
                  <span class="svg-icon svg-icon-3 ms-1 me-0">
                    <inline-svg
                      :src="`/media/icons/duotune/arrows/arr06${
                        il8n.locale.value == 'ar' ? '3' : '4'
                      }.svg`"
                    />
                  </span>
                </button>
              </div>
              <!--end::Wrapper-->
            </div>
            <!--end::Actions-->
          </el-form>
          <!--end::Form-->
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - Create project-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { hideModal } from "@/core/helpers/dom";
import { useI18n } from "vue-i18n/index";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";

interface Step1 {
  account_type: string;
}

interface Step2 {
  name: string;
  email: string;
  phone: string;
  address: string;
  tax_number: string;
  standard_number: string;
  commercial_number: string;
  site_url: string;
}

interface KTCreateApp extends Step1, Step2 {}

export default defineComponent({
  name: "create-account-modal",

  setup() {
    const createAccountRef = ref<HTMLFormElement>();
    const createAccountModalRef = ref<HTMLElement | null>(null);
    const currentStepIndex = ref(2);
    const il8n = useI18n();
    const { t, te } = useI18n();
    const store = useStore();

    const formData = ref<KTCreateApp>({
      account_type: "personal",
      name: "",
      email: "",
      phone: "",
      address: "",
      tax_number: "",
      standard_number: "",
      commercial_number: "",
      site_url: "",
    });

    const translate = (text) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };

    const createAccountValidationRules = ref({
      name: [
        {
          required: true,
          message: translate("nameRequired"),
          trigger: "change",
        },
      ],
      address: [
        {
          required: true,
          message: translate("addressRequired"),
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

    const createAccount = () => {
      if (!createAccountRef.value) {
        return;
      }
      createAccountRef.value.validate((valid) => {
        if (valid) {
          Swal.fire({
            title: il8n.t("pleaseWait"),
            text: il8n.t("creatingAccount"),
            showConfirmButton: false,
            allowOutsideClick: false,
            onBeforeOpen: () => {
              Swal.showLoading();
            },
          });

          store
            .dispatch(Actions.CREATE_CUSTOMER, formData.value)
            .then((response) => {
              Swal.close();
              Swal.fire({
                title: il8n.t("success"),
                text: response.message,
                icon: "success",
                showConfirmButton: false,
                timer: 1500,
              });
              createAccountRef.value?.resetFields();
              hideModal(createAccountModalRef.value);
            })
            .catch(() => {
              Swal.close();

              Swal.fire({
                title: il8n.t("error"),
                text: il8n.t("errorCreatingAccount"),
                icon: "error",
                showConfirmButton: false,
                timer: 1500,
              });
            });
        }
      });
    };

    return {
      createAccountRef,
      createAccount,
      il8n,
      currentStepIndex,
      formData,
      createAccountModalRef,
      createAccountValidationRules,
    };
  },
});
</script>
<style lang="scss" scoped>
.mw-1200px {
  max-width: 1200px;
}
.row-gap {
  row-gap: 2.5rem;
}
</style>
