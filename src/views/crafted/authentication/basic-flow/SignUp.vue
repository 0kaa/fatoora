<template>
  <!--begin::Stepper-->
  <div class="w-100 bg-white">
    <!--begin::Wrapper-->
    <div
      ref="createAccountRef"
      class="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid"
      id="kt_create_account_stepper"
    >
      <div
        class="d-flex py-10 justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px"
      >
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
              <h3 class="stepper-title">Account Type</h3>
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
              <h3 class="stepper-title">Account Info</h3>
            </div>
            <!--begin::Label-->
          </div>
          <!--end::Step 2-->

          <!--begin::Step 3-->
          <div class="stepper-item" data-kt-stepper-element="nav">
            <!--begin::Line-->
            <div class="stepper-line w-40px"></div>
            <!--end::Line-->

            <!--begin::Icon-->
            <div class="stepper-icon w-40px h-40px">
              <i class="stepper-check fas fa-check"></i>
              <span class="stepper-number">3</span>
            </div>
            <!--end::Icon-->

            <!--begin::Label-->
            <div class="stepper-label">
              <h3 class="stepper-title">Establishment</h3>
            </div>
            <!--end::Label-->
          </div>
          <!--end::Step 3-->

          <!--begin::Step 5-->
          <div class="stepper-item" data-kt-stepper-element="nav">
            <!--begin::Line-->
            <div class="stepper-line w-40px"></div>
            <!--end::Line-->

            <!--begin::Icon-->
            <div class="stepper-icon w-40px h-40px">
              <i class="stepper-check fas fa-check"></i>
              <span class="stepper-number">4</span>
            </div>
            <!--end::Icon-->

            <!--begin::Label-->
            <div class="stepper-label">
              <h3 class="stepper-title">Confirm</h3>
            </div>
            <!--end::Label-->
          </div>
          <!--end::Step 5-->
        </div>
        <!--end::Nav-->
      </div>

      <!--begin::Form-->
      <form
        class="mx-auto mw-900px w-100 py-10"
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
                Choose Account Type
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
                If you have account, please
                <router-link to="/sign-in" class="link-primary fw-bolder"
                  >Sign in</router-link
                >.
              </div>
              <!--end::Notice-->
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
                    value="cloud"
                    id="kt_create_account_form_account_type_cloud"
                  />
                  <label
                    class="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10"
                    for="kt_create_account_form_account_type_cloud"
                  >
                    <span class="svg-icon svg-icon-3x me-5">
                      <inline-svg
                        src="media/icons/duotune/communication/com005.svg"
                      />
                    </span>

                    <!--begin::Info-->
                    <span class="d-block fw-bold text-start">
                      <span class="text-dark fw-bolder d-block fs-4 mb-2">
                        Cloud Account
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
                    value="custom"
                    id="kt_create_account_form_account_type_custom"
                  />
                  <label
                    class="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center"
                    for="kt_create_account_form_account_type_custom"
                  >
                    <span class="svg-icon svg-icon-3x me-5">
                      <inline-svg
                        src="media/icons/duotune/finance/fin006.svg"
                      />
                    </span>

                    <!--begin::Info-->
                    <span class="d-block fw-bold text-start">
                      <span class="text-dark fw-bolder d-block fs-4 mb-2"
                        >Custom Account</span
                      >
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
            <!--end::Heading-->
            <label class="d-flex align-items-center form-label mb-3"
              >Specify Team Size
              <i
                class="fas fa-exclamation-circle ms-2 fs-7"
                data-bs-toggle="tooltip"
                title=""
                data-bs-original-title="Provide your team size to help us setup your billing"
                aria-label="Provide your team size to help us setup your billing"
              ></i
            ></label>
            <!--begin::Row-->
            <div class="row mb-10" style="row-gap: 20px" data-kt-buttons="true">
              <!--begin::Col-->
              <div class="col">
                <!--begin::Option-->
                <Field
                  type="radio"
                  class="btn-check"
                  name="invoicePlan"
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
                <Field
                  type="radio"
                  class="btn-check"
                  name="invoicePlan"
                  value="1000"
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
                <Field
                  type="radio"
                  class="btn-check"
                  name="invoicePlan"
                  value="5000"
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
                <Field
                  type="radio"
                  class="btn-check"
                  name="invoicePlan"
                  value="10000"
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
                  name="invoicePlan"
                  value="other"
                  id="kt_other_select"
                />
                <label
                  class="btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4"
                  for="kt_other_select"
                >
                  <span class="fw-bolder fs-3">Other</span>
                </label>
                <!--end::Option-->
              </div>
              <!--end::Col-->
            </div>
            <!--end::Row-->
            <!--begin::Input group-->
            <div class="row mb-5">
              <div class="col-lg-6 mb-5">
                <!--begin::Label-->
                <label class="form-label required">Name</label>
                <!--end::Label-->

                <!--begin::Input-->
                <Field
                  name="name"
                  class="form-control form-control-lg form-control-solid"
                />
                <ErrorMessage
                  class="fv-plugins-message-container invalid-feedback"
                  name="name"
                />
                <!--end::Input-->
              </div>
              <div class="col-lg-6">
                <!--begin::Label-->
                <label class="d-flex align-items-center form-label">
                  <span class="required">Email Address</span>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <Field
                  name="email"
                  value=""
                  class="form-control form-control-lg form-control-solid"
                />
                <ErrorMessage
                  class="fv-plugins-message-container invalid-feedback"
                  name="email"
                />
                <!--end::Input-->
              </div>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="row mb-5">
              <div class="col-lg-6 mb-5">
                <!--begin::Label-->

                <label class="d-flex align-items-center form-label">
                  <span class="required">Phone</span>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <Field
                  name="phone"
                  class="form-control form-control-lg form-control-solid"
                />
                <ErrorMessage
                  class="fv-plugins-message-container invalid-feedback"
                  name="phone"
                />
                <!--end::Input-->
              </div>
              <div class="col-lg-6">
                <!--end::Label-->
                <label class="d-flex align-items-center form-label">
                  <span class="required">Password</span>
                </label>

                <!--end::Label-->

                <!--begin::Input-->
                <Field
                  name="password"
                  type="password"
                  class="form-control form-control-lg form-control-solid"
                  value=""
                />
                <ErrorMessage
                  class="fv-plugins-message-container invalid-feedback"
                  name="password"
                />
                <!--end::Input-->
              </div>
            </div>
            <!--end::Input group-->
          </div>
          <!--end::Wrapper-->
        </div>
        <!--end::Step 3-->
        <!--begin::Step 4-->
        <div data-kt-stepper-element="content">
          <!--begin::Wrapper-->
          <div class="w-100">
            <!--begin::Heading-->
            <div class="pb-10 pb-lg-12">
              <!--begin::Title-->
              <h2 class="fw-bolder text-dark">Business Details</h2>
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
            <div class="row mb-5">
              <div class="col-lg-6">
                <!--begin::Label-->
                <label class="form-label required">Facility Name</label>
                <!--end::Label-->

                <!--begin::Input-->
                <Field
                  name="facilityName"
                  class="form-control form-control-lg form-control-solid"
                  value=""
                />
                <ErrorMessage
                  class="fv-plugins-message-container invalid-feedback"
                  name="facilityName"
                />
                <!--end::Input-->
              </div>
              <div class="col-lg-6">
                <!--begin::Label-->
                <label class="d-flex align-items-center form-label">
                  <span class="required">Facility Address</span>
                </label>
                <!--end::Label-->

                <!--begin::Input-->
                <Field
                  name="facilityAddress"
                  class="form-control form-control-lg form-control-solid"
                  value=""
                />
                <ErrorMessage
                  class="fv-plugins-message-container invalid-feedback"
                  name="facilityAddress"
                />
                <!--end::Input-->
              </div>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="row mb-5">
              <div class="col-lg-6">
                <!--begin::Label-->
                <label class="form-label">Establishment Tax Number</label>
                <!--end::Label-->

                <!--begin::Input-->
                <Field
                  name="establishmentTaxNumber"
                  class="form-control form-control-lg form-control-solid"
                  value=""
                />
                <ErrorMessage
                  class="fv-plugins-message-container invalid-feedback"
                  name="establishmentTaxNumber"
                />
                <!--end::Input-->
              </div>

              <div class="col-lg-6">
                <!--end::Label-->
                <label class="form-label">Record Number</label>
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
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="row mb-5">
              <div class="col-lg-6">
                <!--begin::Label-->
                <label class="fs-6 fw-bold form-label"
                  >Number of the facility</label
                >
                <!--end::Label-->

                <!--begin::Input-->
                <Field
                  name="numberOfTheFacility"
                  class="form-control form-control-lg form-control-solid"
                  value=""
                />
                <ErrorMessage
                  class="fv-plugins-message-container invalid-feedback"
                  name="numberOfTheFacility"
                />
                <!--end::Input-->
              </div>
              <div class="col-lg-6">
                <!--begin::Label-->
                <label class="fs-6 fw-bold form-label"
                  >Establishment website</label
                >
                <!--end::Label-->

                <!--begin::Input-->
                <Field
                  name="establishmentWebsite"
                  class="form-control form-control-lg form-control-solid"
                  value=""
                />
                <ErrorMessage
                  class="fv-plugins-message-container invalid-feedback"
                  name="establishmentWebsite"
                />
                <!--end::Input-->
              </div>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="row mb-10">
              <div class="col-lg-6">
                <!--begin::Label-->
                <label class="fs-6 fw-bold form-label"
                  >Establishment Email</label
                >
                <!--end::Label-->

                <!--begin::Input-->
                <Field
                  name="establishmentEmail"
                  class="form-control form-control-lg form-control-solid"
                  value=""
                />
                <ErrorMessage
                  class="fv-plugins-message-container invalid-feedback"
                  name="establishmentEmail"
                />
                <!--end::Input-->
              </div>
              <div class="col-lg-6">
                <!--begin::Label-->
                <label class="fs-6 fw-bold form-label"
                  >Establishment Phone</label
                >
                <!--end::Label-->

                <!--begin::Input-->
                <Field
                  name="establishmentPhone"
                  class="form-control form-control-lg form-control-solid"
                />
                <ErrorMessage
                  class="fv-plugins-message-container invalid-feedback"
                  name="establishmentPhone"
                />
                <!--end::Input-->
              </div>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div
              class="fv-row mb-0"
              :class="imgPreview ? 'align-items-start d-flex flex-column' : ''"
            >
              <!--begin::Label-->
              <label class="fs-6 fw-bold form-label">Establishment Logo</label>
              <!--end::Label-->
              <!--begin::Input-->
              <Field
                type="file"
                class="btn-check"
                name="establishmentLogo"
                id="kt_logo_select"
                @change="onFileChange"
              />

              <label
                class="btn btn-outline btn-outline-dashed btn-outline-default p-4"
                :class="!imgPreview ? 'w-100' : ''"
                for="kt_logo_select"
              >
                <span v-if="!imgPreview" class="fw-bolder fs-3"
                  >Upload Logo</span
                >
                <img
                  v-else
                  width="150"
                  height="150"
                  :src="imgPreview"
                  class="img-fluid"
                />
              </label>
              <ErrorMessage
                class="fv-plugins-message-container invalid-feedback"
                name="establishmentLogo"
              />
              <!--end::Input-->
            </div>
            <!--end::Input group-->
          </div>
          <!--end::Wrapper-->
        </div>
        <!--end::Step 4-->

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
                Writing headlines for blog posts is as much an art as it is a
                science and probably warrants its own post, but for all advise
                is with what works for your great & amazing audience.
              </div>
              <!--end::Text-->

              <!--begin::Alert-->
              <div
                class="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6"
              >
                <!--begin::Icon-->
                <span class="svg-icon svg-icon-2tx svg-icon-warning me-4">
                  <inline-svg src="media/icons/duotune/general/gen044.svg" />
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
                      <a href="#" class="fw-bolder">Create Team Platform</a>
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
                <inline-svg src="media/icons/duotune/arrows/arr063.svg" />
              </span>
              Back
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
                Submit
                <span class="svg-icon svg-icon-3 ms-2 me-0">
                  <inline-svg src="icons/duotune/arrows/arr064.svg" />
                </span>
              </span>
              <span class="indicator-progress">
                Please wait...
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>

            <button type="submit" class="btn btn-lg btn-primary" v-else>
              Continue
              <span class="svg-icon svg-icon-3 ms-1 me-0">
                <inline-svg src="media/icons/duotune/arrows/arr064.svg" />
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
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { hideModal } from "@/core/helpers/dom";
import { StepperComponent } from "@/assets/ts/components/_StepperComponent";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { useForm } from "vee-validate";
import { Field, ErrorMessage } from "vee-validate";
import * as Yup from "yup";

// Account type
interface Step1 {
  accountType: string;
}

// Account info
interface Step2 {
  invoicePlan: string;
  name: string;
  email: string;
  phone: string;
  password: string;
}

// Establishment Info
interface Step3 {
  facilityName: string;
  facilityAddress: string;
  establishmentTaxNumber: string;
  recordNumber: string;
  numberOfTheFacility: string;
  establishmentWebsite: string;
  establishmentEmail: string;
  establishmentPhone: string;
  establishmentLogo: string;
}

interface KTCreateApp extends Step1, Step2, Step3 {}

export default defineComponent({
  name: "sign-up",
  components: {
    Field,
    ErrorMessage,
  },
  setup() {
    const _stepperObj = ref<StepperComponent | null>(null);
    const createAccountRef = ref<HTMLElement | null>(null);
    const createAccountModalRef = ref<HTMLElement | null>(null);
    const currentStepIndex = ref(0);
    const imgPreview = ref<string>("");
    const formData = ref<KTCreateApp>({
      accountType: "cloud",
      invoicePlan: "100",
      name: "",
      email: "",
      phone: "",
      password: "",
      facilityName: "",
      facilityAddress: "",
      establishmentTaxNumber: "",
      recordNumber: "",
      numberOfTheFacility: "",
      establishmentWebsite: "",
      establishmentEmail: "",
      establishmentPhone: "",
      establishmentLogo: "",
    });

    onMounted(() => {
      _stepperObj.value = StepperComponent.createInsance(
        createAccountRef.value as HTMLElement
      );
    });

    const createAppSchema = [
      // Yup.object({}),
      Yup.object({
        accountType: Yup.string().required("Account Type is required"),
      }),

      Yup.object({
        invoicePlan: Yup.string().required("Invoice Plan is required"),
        name: Yup.string().required("Name is required"),
        password: Yup.string()
          .min(8, "Password must be at least 8 characters")
          .required("Password is required"),
        // phone validation
        phone: Yup.string()
          // .matches(/^[0-9]/, "Phone number must be 10 digits long")
          .required("Phone number is required"),
        email: Yup.string()
          .email("Invalid email")
          .required("Email is required"),
      }),

      Yup.object({
        facilityName: Yup.string().required().label("Facility Name"),
        facilityAddress: Yup.string().required().label("Facility Address"),
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

    const { resetForm, handleSubmit } = useForm<Step1 | Step2 | Step3>({
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
        resetForm();
        if (!_stepperObj.value) {
          return;
        }
        currentStepIndex.value = 0;
        imgPreview.value = "";
        _stepperObj.value.goFirst();
      });
    };

    const onFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        imgPreview.value = URL.createObjectURL(e.target.files[0]);
        formData.value.establishmentLogo = file;
      } else {
        imgPreview.value = "";
      }
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
      onFileChange,
      imgPreview,
      currentStepIndex,
      formData,
      createAccountModalRef,
    };
  },
});
</script>
