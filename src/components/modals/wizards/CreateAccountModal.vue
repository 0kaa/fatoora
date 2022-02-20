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
    <div class="modal-dialog mw-1200px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header">
          <!--begin::Title-->
          <h2>
            {{ $t("create_account") }}
          </h2>
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
          <!--begin::Stepper-->
          <div
            ref="createAccountRef"
            class="stepper stepper-links d-flex flex-column"
            id="kt_create_account_stepper"
          >
            <!--begin::Nav-->
            <div class="stepper-nav py-5">
              <!--begin::Step 1-->
              <div class="stepper-item current" data-kt-stepper-element="nav">
                <h3 class="stepper-title">
                  {{ $t("accountType") }}
                </h3>
              </div>
              <!--end::Step 1-->

              <!--begin::Step 2-->
              <div class="stepper-item" data-kt-stepper-element="nav">
                <h3 class="stepper-title">
                  {{ $t("accountInfo") }}
                </h3>
              </div>
              <!--end::Step 2-->
            </div>
            <!--end::Nav-->

            <!--begin::Form-->
            <form
              class="mx-auto w-100 py-10"
              novalidate="novalidate"
              id="kt_create_account_form"
              @submit="handleStep"
            >
              <!--begin::Step 1-->
              <div class="current" data-kt-stepper-element="content">
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
                        <Field
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
                            <span class="text-dark fw-bolder d-block fs-4 mb-2">
                              {{ $t("personalAccount") }}
                            </span>
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
                        <Field
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
                            <span class="text-dark fw-bolder d-block fs-4 mb-2">
                              {{ $t("corporateAccount") }}
                            </span>
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
              <div data-kt-stepper-element="content">
                <!--begin::Wrapper-->
                <div class="w-100">
                  <!--begin::Input group-->
                  <div class="fv-row row-gap row mb-10">
                    <div class="col-md-6">
                      <!--begin::Label-->
                      <label class="form-label required">
                        {{ $t("customerName") }}
                      </label>
                      <!--end::Label-->

                      <!--begin::Input-->
                      <Field
                        name="name"
                        class="form-control form-control-lg form-control-solid"
                        v-model="formData.name"
                      />
                      <ErrorMessage
                        class="fv-plugins-message-container invalid-feedback"
                        name="name"
                      />
                      <!--end::Input-->
                    </div>
                    <!--begin::Input group-->
                    <div class="col-md-6">
                      <!--begin::Label-->
                      <label class="d-flex align-items-center form-label">
                        <span class="required">
                          {{ $t("customerAddress") }}
                        </span>
                      </label>
                      <!--end::Label-->

                      <!--begin::Input-->
                      <Field
                        name="address"
                        class="form-control form-control-lg form-control-solid"
                        v-model="formData.address"
                      />
                      <ErrorMessage
                        class="fv-plugins-message-container invalid-feedback"
                        name="address"
                      />
                      <!--end::Input-->
                    </div>
                    <!--end::Input group-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="fv-row row-gap row mb-10">
                    <div class="col-md-6">
                      <!--begin::Label-->
                      <label class="form-label required">
                        {{ $t("customerEmail") }}
                      </label>
                      <!--end::Label-->

                      <!--begin::Input-->
                      <Field
                        name="email"
                        class="form-control form-control-lg form-control-solid"
                        v-model="formData.email"
                      />
                      <ErrorMessage
                        class="fv-plugins-message-container invalid-feedback"
                        name="email"
                      />
                      <!--end::Input-->
                    </div>
                    <!--begin::Input group-->
                    <div class="col-md-6">
                      <!--begin::Label-->
                      <label class="d-flex align-items-center form-label">
                        <span class="required">
                          {{ $t("customerPhone") }}
                        </span>
                      </label>
                      <!--end::Label-->

                      <!--begin::Input-->
                      <Field
                        name="phone"
                        class="form-control form-control-lg form-control-solid"
                        v-model="formData.phone"
                      />
                      <ErrorMessage
                        class="fv-plugins-message-container invalid-feedback"
                        name="phone"
                      />
                      <!--end::Input-->
                    </div>
                    <!--end::Input group-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="fv-row row-gap row mb-10">
                    <div class="col-md-6">
                      <!--begin::Label-->
                      <label class="form-label required">
                        {{ $t("taxID") }}
                      </label>
                      <!--end::Label-->

                      <!--begin::Input-->
                      <Field
                        name="tax_number"
                        class="form-control form-control-lg form-control-solid"
                        v-model="formData.tax_number"
                      />
                      <ErrorMessage
                        class="fv-plugins-message-container invalid-feedback"
                        name="tax_number"
                      />
                      <!--end::Input-->
                    </div>
                    <!--begin::Input group-->
                    <div class="col-md-6">
                      <!--begin::Label-->
                      <label class="fs-6 fw-bold form-label required">
                        {{ $t("commercial_number") }}
                      </label>
                      <!--end::Label-->

                      <!--begin::Input-->
                      <Field
                        name="commercial_number"
                        class="form-control form-control-lg form-control-solid"
                        v-model="formData.commercial_number"
                      />
                      <ErrorMessage
                        class="fv-plugins-message-container invalid-feedback"
                        name="commercial_number"
                      />
                      <!--end::Input-->
                    </div>

                    <!--end::Input group-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="fv-row row-gap row mb-0">
                    <div class="col-md-6">
                      <!--end::Label-->
                      <label class="form-label required">
                        {{ $t("enterpriseRecordNumber") }}
                      </label>
                      <!--end::Label-->

                      <!--begin::Input-->
                      <Field
                        name="standard_number"
                        class="form-control form-control-lg form-control-solid"
                        v-model="formData.standard_number"
                      />
                      <ErrorMessage
                        class="fv-plugins-message-container invalid-feedback"
                        name="standard_number"
                      />
                      <!--end::Input-->
                    </div>
                    <div class="col-md-6">
                      <!--end::Label-->
                      <label class="form-label required">
                        {{ $t("enterpriseWebsite") }}
                      </label>
                      <!--end::Label-->

                      <!--begin::Input-->
                      <Field
                        name="site_url"
                        class="form-control form-control-lg form-control-solid"
                        v-model="formData.site_url"
                      />
                      <ErrorMessage
                        class="fv-plugins-message-container invalid-feedback"
                        name="site_url"
                      />
                      <!--end::Input-->
                    </div>
                  </div>
                  <!--end::Input group-->
                </div>
                <!--end::Wrapper-->
              </div>
              <!--end::Step 3-->

              <!--begin::Actions-->
              <div class="d-flex flex-stack pt-15">
                <!--begin::Wrapper-->
                <div class="me-2">
                  <button
                    type="button"
                    class="btn btn-lg btn-light-primary me-3"
                    data-kt-stepper-action="previous"
                    @click="previousStep()"
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
                    v-if="currentStepIndex === totalSteps - 1"
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

                  <button type="submit" class="btn btn-lg btn-primary" v-else>
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
            </form>
            <!--end::Form-->
          </div>
          <!--end::Stepper-->
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
import { computed, defineComponent, onMounted, ref } from "vue";
import { hideModal } from "@/core/helpers/dom";
import { useI18n } from "vue-i18n/index";
import { StepperComponent } from "@/assets/ts/components/_StepperComponent";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
import { useForm } from "vee-validate";
import { Field, ErrorMessage } from "vee-validate";
import * as Yup from "yup";

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
  components: {
    Field,
    ErrorMessage,
  },
  setup() {
    const _stepperObj = ref<StepperComponent | null>(null);
    const createAccountRef = ref<HTMLElement | null>(null);
    const createAccountModalRef = ref<HTMLElement | null>(null);
    const currentStepIndex = ref(0);
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

    onMounted(() => {
      _stepperObj.value = StepperComponent.createInsance(
        createAccountRef.value as HTMLElement
      );
    });

    const translate = (text) => {
      if (te(text)) {
        return t(text);
      } else {
        return text;
      }
    };

    const createAppSchema = [
      Yup.object({
        account_type: Yup.string().required(),
      }),

      Yup.object({
        name: Yup.string()
          .required(translate("nameRequired"))
          .min(3, translate("nameMin"))
          .max(50, translate("nameMax")),
        email: Yup.string().email().required(),
        phone: Yup.string()
          .matches(/^[0-9]/, translate("phoneNumberInvalid"))
          .min(10, translate("phoneNumberMinLength"))
          .required(translate("phoneNumberRequired")),
        address: Yup.string().required(translate("address_required")),
        tax_number: Yup.string()
          .required(translate("tax_number_required"))
          .min(15, translate("tax_number_min_length"))
          .max(15, translate("tax_number_max_length")),
        commercial_number: Yup.string()
          .min(10, translate("commercial_number_min_length"))
          .max(10, translate("commercial_number_max_length"))
          .required(translate("commercial_number_required")),
        standard_number: Yup.string().required(
          translate("standard_number_required")
        ),
        site_url: Yup.string().url(translate("site_url_invalid")),
      }),
    ];

    // extracts the individual step schema
    const currentSchema = computed(() => {
      return createAppSchema[currentStepIndex.value];
    });

    const totalSteps = computed(() => {
      if (!_stepperObj.value) {
        return;
      }

      return _stepperObj.value.totatStepsNumber;
    });

    const { resetForm, handleSubmit } = useForm<Step1 | Step2>({
      validationSchema: currentSchema,
    });

    const previousStep = () => {
      if (!_stepperObj.value) {
        return;
      }

      currentStepIndex.value--;

      _stepperObj.value.goPrev();
    };

    const handleStep = handleSubmit((values) => {
      for (const item in values) {
        // eslint-disable-next-line no-prototype-builtins
        if (values.hasOwnProperty(item)) {
          if (values[item]) {
            formData.value[item] = values[item];
          }
        }
      }

      if (currentStepIndex.value == 1) {
        return;
      } else {
        currentStepIndex.value++;

        if (!_stepperObj.value) {
          return;
        }

        _stepperObj.value.goNext();
      }
    });

    const formSubmit = () => {
      if (!_stepperObj.value) {
        return;
      }
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
    };

    resetForm({
      values: {
        ...formData.value,
      },
    });

    return {
      createAccountRef,
      totalSteps,
      previousStep,
      handleStep,
      formSubmit,
      il8n,
      currentStepIndex,
      formData,
      createAccountModalRef,
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
