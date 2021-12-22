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
              <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
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

              <!--begin::Step 3-->
              <div class="stepper-item" data-kt-stepper-element="nav">
                <h3 class="stepper-title">
                  {{ $t("complete") }}
                </h3>
              </div>
              <!--end::Step 3-->
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
                          name="accountType"
                          value="personal"
                          id="kt_create_account_form_account_type_personal"
                        />
                        <label
                          class="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10"
                          for="kt_create_account_form_account_type_personal"
                        >
                          <span class="svg-icon svg-icon-3x me-5">
                            <inline-svg
                              src="media/icons/duotune/communication/com005.svg"
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
                          name="accountType"
                          value="corporate"
                          id="kt_create_account_form_account_type_corporate"
                        />
                        <label
                          class="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center"
                          for="kt_create_account_form_account_type_corporate"
                        >
                          <span class="svg-icon svg-icon-3x me-5">
                            <inline-svg
                              src="media/icons/duotune/finance/fin006.svg"
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
                  <!--begin::Heading-->
                  <div class="pb-10 pb-lg-12">
                    <!--begin::Title-->
                    <h2 class="fw-bolder text-dark">
                      {{ $t("enterpriseDetails") }}
                    </h2>
                    <!--end::Title-->

                    <!--begin::Notice-->
                    <div class="text-gray-400 fw-bold fs-6">
                      If you need more info, please check out
                      <a href="#" class="link-primary fw-bolder">Help Page</a>.
                    </div>
                    <!--end::Notice-->
                  </div>
                  <!--end::Heading-->

                  <!--begin::Input group-->
                  <div class="fv-row mb-10">
                    <!--begin::Label-->
                    <label class="form-label required">
                      {{ $t("enterpriseName") }}
                    </label>
                    <!--end::Label-->

                    <!--begin::Input-->
                    <Field
                      name="enterpriseName"
                      class="form-control form-control-lg form-control-solid"
                      value=""
                    />
                    <ErrorMessage
                      class="fv-plugins-message-container invalid-feedback"
                      name="enterpriseName"
                    />
                    <!--end::Input-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="fv-row mb-10">
                    <!--begin::Label-->
                    <label class="d-flex align-items-center form-label">
                      <span class="required">
                        {{ $t("enterpriseAddress") }}
                      </span>
                    </label>
                    <!--end::Label-->

                    <!--begin::Input-->
                    <Field
                      name="enterpriseAddress"
                      class="form-control form-control-lg form-control-solid"
                      value=""
                    />
                    <ErrorMessage
                      class="fv-plugins-message-container invalid-feedback"
                      name="enterpriseAddress"
                    />
                    <!--end::Input-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="fv-row mb-10">
                    <!--begin::Label-->
                    <label class="form-label">
                      {{ $t("enterpriseTaxNumber") }}
                    </label>
                    <!--end::Label-->

                    <!--begin::Input-->
                    <Field
                      name="enterpriseTaxNumber"
                      class="form-control form-control-lg form-control-solid"
                      value=""
                    />
                    <ErrorMessage
                      class="fv-plugins-message-container invalid-feedback"
                      name="enterpriseTaxNumber"
                    />
                    <!--end::Input-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="fv-row mb-10">
                    <!--end::Label-->
                    <label class="form-label">
                      {{ $t("recordNumber") }}
                    </label>
                    <!--end::Label-->

                    <!--begin::Input-->
                    <Field
                      name="recordNumber"
                      class="form-control form-control-lg form-control-solid"
                      value=""
                    />
                    <ErrorMessage
                      class="fv-plugins-message-container invalid-feedback"
                      name="recordNumber"
                    />
                    <!--end::Input-->
                  </div>
                  <!--end::Input group-->

                  <!--begin::Input group-->
                  <div class="fv-row mb-0">
                    <!--begin::Label-->
                    <label class="fs-6 fw-bold form-label">
                      {{ $t("numberOfTheEnterprise") }}
                    </label>
                    <!--end::Label-->

                    <!--begin::Input-->
                    <Field
                      name="numberOfTheEnterprise"
                      class="form-control form-control-lg form-control-solid"
                      value=""
                    />
                    <ErrorMessage
                      class="fv-plugins-message-container invalid-feedback"
                      name="numberOfTheEnterprise"
                    />
                    <!--end::Input-->
                  </div>
                  <!--end::Input group-->
                </div>
                <!--end::Wrapper-->
              </div>
              <!--end::Step 3-->

              <!--begin::Step 5-->
              <div data-kt-stepper-element="content">
                <!--begin::Wrapper-->
                <div class="w-100">
                  <!--begin::Heading-->
                  <div class="pb-8 pb-lg-10">
                    <!--begin::Title-->
                    <h2 class="fw-bolder text-dark">Your Are Done!</h2>
                    <!--end::Title-->

                    <!--begin::Notice-->
                    <div class="text-gray-400 fw-bold fs-6">
                      If you need more info, please
                      <router-link to="/sign-in" class="link-primary fw-bolder"
                        >Sign In</router-link
                      >.
                    </div>
                    <!--end::Notice-->
                  </div>
                  <!--end::Heading-->

                  <!--begin::Body-->
                  <div class="mb-0">
                    <!--begin::Text-->
                    <div class="fs-6 text-gray-600 mb-5">
                      Writing headlines for blog posts is as much an art as it
                      is a science and probably warrants its own post, but for
                      all advise is with what works for your great & amazing
                      audience.
                    </div>
                    <!--end::Text-->

                    <!--begin::Alert-->
                    <div
                      class="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6"
                    >
                      <!--begin::Icon-->
                      <span class="svg-icon svg-icon-2tx svg-icon-warning me-4">
                        <inline-svg
                          src="media/icons/duotune/general/gen044.svg"
                        />
                      </span>
                      <!--end::Icon-->
                      <!--begin::Wrapper-->
                      <div class="d-flex flex-stack flex-grow-1">
                        <!--begin::Content-->
                        <div class="fw-bold">
                          <h4 class="text-gray-800 fw-bolder">
                            We need your attention!
                          </h4>
                          <div class="fs-6 text-gray-600">
                            To start using great tools, please, please
                            <a href="#" class="fw-bolder"
                              >Create Team Platform</a
                            >
                          </div>
                        </div>
                        <!--end::Content-->
                      </div>
                      <!--end::Wrapper-->
                    </div>
                    <!--end::Alert-->
                  </div>
                  <!--end::Body-->
                </div>
                <!--end::Wrapper-->
              </div>
              <!--end::Step 5-->

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
                        :src="`media/icons/duotune/arrows/arr06${
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
                          :src="`media/icons/duotune/arrows/arr06${
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
                        :src="`media/icons/duotune/arrows/arr06${
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
import { useForm } from "vee-validate";
import { Field, ErrorMessage } from "vee-validate";
import * as Yup from "yup";

interface Step1 {
  accountType: string;
}

interface Step2 {
  enterpriseName: string;
  enterpriseAddress: string;
  enterpriseTaxNumber: string;
  recordNumber: string;
  numberOfTheEnterprise: string;
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
    const formData = ref<KTCreateApp>({
      accountType: "personal",
      enterpriseName: "",
      enterpriseAddress: "",
      enterpriseTaxNumber: "",
      recordNumber: "",
      numberOfTheEnterprise: "",
    });

    onMounted(() => {
      _stepperObj.value = StepperComponent.createInsance(
        createAccountRef.value as HTMLElement
      );
    });

    const createAppSchema = [
      Yup.object({}),

      Yup.object({
        enterpriseName: Yup.string().required(
          il8n.t("enterprise_name_required")
        ),
        enterpriseAddress: Yup.string().required("Enterprise Address"),
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

      currentStepIndex.value++;

      if (!_stepperObj.value) {
        return;
      }

      _stepperObj.value.goNext();
    });

    const formSubmit = () => {
      Swal.fire({
        text: "All is cool! Now you submit this form",
        icon: "success",
        buttonsStyling: false,
        confirmButtonText: "Ok, got it!",
        customClass: {
          confirmButton: "btn fw-bold btn-light-primary",
        },
      }).then(() => {
        hideModal(createAccountModalRef.value);
        console.log(formData.value);
        resetForm();
        if (!_stepperObj.value) {
          return;
        }
        currentStepIndex.value = 0;
        _stepperObj.value.goFirst();
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
</style>
