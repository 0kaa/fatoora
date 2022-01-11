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
        class="bg-lighten flex-column flex-center shadow-sm py-10 justify-content-center h-100 d-none d-xl-flex w-100 w-xl-500px"
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
              <h3 class="stepper-title">{{ $t("enterpriseDetails") }}</h3>
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
              <h3 class="stepper-title">{{ $t("confirm") }}</h3>
            </div>
            <!--end::Label-->
          </div>
          <!--end::Step 5-->
        </div>
        <!--end::Nav-->
      </div>

      <!--begin::Form-->
      <form
        class="w-100 h-100 d-flex flex-column pb-lg-0 px-lg-20 p-10"
        novalidate="novalidate"
        id="kt_create_account_form"
        @submit="handleStep"
      >
        <div
          class="d-flex flex-column flex-column-fluid justify-content-center"
        >
          <!--begin::Step 1-->
          <div class="current" data-kt-stepper-element="content">
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
                      params: { lang: currentLanguage },
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

                <div class="row">
                  <!--begin::Col-->
                  <div class="col-lg-6">
                    <!--begin::Option-->
                    <Field
                      type="radio"
                      class="btn-check"
                      name="account_type"
                      value="cloud"
                      id="kt_create_account_form_account_type_cloud"
                    />
                    <label
                      class="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10"
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
                  <div class="col-lg-6">
                    <!--begin::Option-->
                    <Field
                      type="radio"
                      class="btn-check"
                      name="account_type"
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

          <!--begin::Step 3-->
          <div data-kt-stepper-element="content">
            <!--begin::Wrapper-->
            <div class="w-100">
              <!--end::Heading-->
              <label class="d-flex align-items-center form-label mb-3">
                {{ $t("specify_invoice_size") }}
                <i
                  class="fas fa-exclamation-circle ms-2 fs-7"
                  data-bs-toggle="tooltip"
                  title=""
                  data-bs-original-title="Provide your team size to help us setup your billing"
                  aria-label="Provide your team size to help us setup your billing"
                ></i
              ></label>
              <!--begin::Row-->
              <div
                class="row mb-10"
                style="row-gap: 20px"
                data-kt-buttons="true"
              >
                <!--begin::Col-->
                <div class="col">
                  <!--begin::Option-->
                  <Field
                    type="radio"
                    class="btn-check"
                    name="invoice_plan"
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
                    name="invoice_plan"
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
                    name="invoice_plan"
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
                    name="invoice_plan"
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
                    name="invoice_plan"
                    value="other"
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
              <!--begin::Input group-->
              <div class="row mb-5">
                <div class="col-lg-6 mb-5">
                  <!--begin::Label-->
                  <label class="form-label required">{{ $t("name") }}</label>
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
                    <span class="required">
                      {{ $t("email") }}
                    </span>
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
                  <ErrorMessage
                    class="fv-plugins-message-container invalid-feedback"
                    name="emailExists"
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
                    <span class="required">{{ $t("phone") }}</span>
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
                    <span class="required">{{ $t("password") }}</span>
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
                <h2 class="fw-bolder text-dark">
                  {{ $t("enterpriseDetails") }}
                </h2>
                <!--end::Title-->
              </div>
              <!--end::Heading-->

              <!--begin::Input group-->
              <div class="row mb-5">
                <div class="col-lg-6">
                  <!--begin::Label-->
                  <label class="form-label required">
                    {{ $t("enterpriseName") }}
                  </label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <Field
                    name="market_name_ar"
                    class="form-control form-control-lg form-control-solid"
                    value=""
                  />
                  <ErrorMessage
                    class="fv-plugins-message-container invalid-feedback"
                    name="market_name_ar"
                  />
                  <!--end::Input-->
                </div>
                <div class="col-lg-6">
                  <!--begin::Label-->
                  <label class="d-flex align-items-center form-label">
                    <span class="required">
                      {{ $t("enterpriseAddress") }}
                    </span>
                  </label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <Field
                    name="market_address_ar"
                    class="form-control form-control-lg form-control-solid"
                    value=""
                  />
                  <ErrorMessage
                    class="fv-plugins-message-container invalid-feedback"
                    name="market_address_ar"
                  />
                  <!--end::Input-->
                </div>
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="row mb-5">
                <div class="col-lg-6">
                  <!--begin::Label-->
                  <label class="form-label">
                    {{ $t("enterpriseTaxNumber") }}
                  </label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <Field
                    name="market_tax_number"
                    class="form-control form-control-lg form-control-solid"
                    value=""
                  />
                  <ErrorMessage
                    class="fv-plugins-message-container invalid-feedback"
                    name="market_tax_number"
                  />
                  <!--end::Input-->
                </div>

                <div class="col-lg-6">
                  <!--end::Label-->
                  <label class="form-label">
                    {{ $t("recordNumber") }}
                  </label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <Field
                    name="market_commercial_number"
                    class="form-control form-control-lg form-control-solid"
                    value=""
                  />
                  <ErrorMessage
                    class="fv-plugins-message-container invalid-feedback"
                    name="market_commercial_number"
                  />
                  <!--end::Input-->
                </div>
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="row mb-5">
                <div class="col-lg-6">
                  <!--begin::Label-->
                  <label class="fs-6 fw-bold form-label">
                    {{ $t("numberOfTheEnterprise") }}</label
                  >
                  <!--end::Label-->

                  <!--begin::Input-->
                  <Field
                    name="market_standard_number"
                    class="form-control form-control-lg form-control-solid"
                    value=""
                  />
                  <ErrorMessage
                    class="fv-plugins-message-container invalid-feedback"
                    name="market_standard_number"
                  />
                  <!--end::Input-->
                </div>
                <div class="col-lg-6">
                  <!--begin::Label-->
                  <label class="fs-6 fw-bold form-label">
                    {{ $t("enterpriseWebsite") }}</label
                  >
                  <!--end::Label-->

                  <!--begin::Input-->
                  <Field
                    name="market_site_url"
                    class="form-control form-control-lg form-control-solid"
                    value=""
                  />
                  <ErrorMessage
                    class="fv-plugins-message-container invalid-feedback"
                    name="market_site_url"
                  />
                  <!--end::Input-->
                </div>
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="row mb-10">
                <div class="col-lg-6">
                  <!--begin::Label-->
                  <label class="fs-6 fw-bold form-label">
                    {{ $t("enterpriseEmail") }}
                  </label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <Field
                    name="market_email"
                    class="form-control form-control-lg form-control-solid"
                    value=""
                  />
                  <ErrorMessage
                    class="fv-plugins-message-container invalid-feedback"
                    name="market_email"
                  />
                  <!--end::Input-->
                </div>
                <div class="col-lg-6">
                  <!--begin::Label-->
                  <label class="fs-6 fw-bold form-label">
                    {{ $t("enterprisePhone") }}
                  </label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <Field
                    name="market_phone"
                    class="form-control form-control-lg form-control-solid"
                  />
                  <ErrorMessage
                    class="fv-plugins-message-container invalid-feedback"
                    name="market_phone"
                  />
                  <!--end::Input-->
                </div>
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div
                class="fv-row mb-0"
                :class="
                  imgPreview ? 'align-items-start d-flex flex-column' : ''
                "
              >
                <!--begin::Label-->
                <label class="fs-6 fw-bold form-label">
                  {{ $t("enterpriseLogo") }}
                </label>
                <!--end::Label-->
                <!--begin::Input-->
                <Field
                  type="file"
                  accept="image/*"
                  class="btn-check"
                  name="market_icon"
                  id="kt_logo_select"
                  @change="onFileChange"
                />

                <label
                  class="btn btn-outline btn-outline-dashed btn-outline-default p-4"
                  :class="!imgPreview ? 'w-100' : ''"
                  for="kt_logo_select"
                >
                  <span v-if="!imgPreview" class="fw-bolder fs-3">
                    {{ $t("uploadLogo") }}
                  </span>
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
                  name="enterpriseLogo"
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
                    <inline-svg src="/media/icons/duotune/general/gen044.svg" />
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
                v-if="currentStepIndex === totalSteps - 1"
                @click="formSubmit()"
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

              <button type="submit" class="btn btn-lg btn-primary" v-else>
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
      </form>
      <!--end::Form-->
    </div>
    <!--end::Stepper-->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, nextTick, ref } from "vue";
import { hideModal } from "@/core/helpers/dom";
import { useStore } from "vuex";
import { StepperComponent } from "@/assets/ts/components/_StepperComponent";
import Logo from "@/components/Logo.vue";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { useForm, Field, ErrorMessage } from "vee-validate";
import { useI18n } from "vue-i18n/index";
import * as Yup from "yup";
import { reinitializeComponents } from "@/core/plugins/keenthemes";
import ApiService from "@/core/services/ApiService";
import { AxiosRequestConfig } from "axios";

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

// Enterprise Info
interface Step3 {
  market_name_ar: string;
  market_address_ar: string;
  market_tax_number: string;
  market_commercial_number: string;
  market_standard_number: string;
  market_site_url: string;
  market_email: string;
  market_phone: string;
  market_icon: string;
}

interface KTCreateApp extends Step1, Step2, Step3 {}

export default defineComponent({
  name: "sign-up",
  components: {
    Field,
    ErrorMessage,
    Logo,
    Dropdown3,
  },
  setup() {
    const _stepperObj = ref<StepperComponent | null>(null);
    const createAccountRef = ref<HTMLElement | null>(null);
    const createAccountModalRef = ref<HTMLElement | null>(null);
    const currentStepIndex = ref(0);
    const imgPreview = ref<string>("");
    const store = useStore();
    const { t, te } = useI18n();

    const formData = ref<KTCreateApp>({
      account_type: "cloud",
      invoice_plan: "100",
      name: "",
      email: "",
      phone: "",
      password: "",
      market_name_ar: "",
      market_address_ar: "",
      market_tax_number: "",
      market_commercial_number: "",
      market_standard_number: "",
      market_site_url: "",
      market_email: "",
      market_phone: "",
      market_icon: "",
    });

    onMounted(() => {
      nextTick(() => {
        reinitializeComponents();
      });

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

    const createAppSchema = [
      Yup.object({
        account_type: Yup.string().required("Account Type is required"),
      }),

      Yup.object({
        invoice_plan: Yup.string().required("Invoice Plan is required"),
        name: Yup.string().required("Name is required"),
        password: Yup.string()
          .min(8, "Password must be at least 8 characters")
          .required("Password is required"),
        phone: Yup.string()
          .matches(/^[0-9]/, "Phone number must be 10 digits long")
          .required("Phone number is required"),
        email: Yup.string()
          .email("Invalid email")
          .required("Email is required"),
      }),

      Yup.object({
        market_name_ar: Yup.string().required().label("Enterprise Name"),
        market_address_ar: Yup.string().required().label("Enterprise Address"),
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
      if (currentStepIndex.value == 1) {
        const body = {
          phone: formData.value.phone,
          email: formData.value.email,
        };
        ApiService.post("check_mail_or_phone", body as AxiosRequestConfig).then(
          ({ data }) => {
            if (data.email_found) {
              return Swal.fire({
                text: translate("email_exist"),
                icon: "error",
                buttonsStyling: false,
                confirmButtonText: "OK",
                customClass: {
                  confirmButton: "btn fw-bold btn-light-primary",
                },
              });
            } else if (data.phone_found) {
              return Swal.fire({
                text: translate("phone_exist"),
                icon: "error",
                buttonsStyling: false,
                confirmButtonText: "OK",
                customClass: {
                  confirmButton: "btn fw-bold btn-light-primary",
                },
              });
            } else {
              currentStepIndex.value++;

              if (!_stepperObj.value) {
                return;
              }
              _stepperObj.value.goNext();
            }
          }
        );
      } else if (currentStepIndex.value == 2) {
        const body = {
          market_phone: formData.value.market_phone,
          market_email: formData.value.market_email,
        };
        ApiService.post("check_mail_or_phone", body as AxiosRequestConfig).then(
          ({ data }) => {
            if (data.market_email_found) {
              return Swal.fire({
                text: translate("email_exist"),
                icon: "error",
                buttonsStyling: false,
                confirmButtonText: "OK",
                customClass: {
                  confirmButton: "btn fw-bold btn-light-primary",
                },
              });
            } else if (data.market_phone_found) {
              return Swal.fire({
                text: translate("phone_exist"),
                icon: "error",
                buttonsStyling: false,
                confirmButtonText: "OK",
                customClass: {
                  confirmButton: "btn fw-bold btn-light-primary",
                },
              });
            } else {
              currentStepIndex.value++;

              if (!_stepperObj.value) {
                return;
              }
              _stepperObj.value.goNext();
            }
          }
        );
      } else {
        currentStepIndex.value++;

        if (!_stepperObj.value) {
          return;
        }

        _stepperObj.value.goNext();
      }
    });

    const formSubmit = () => {
      const body = formData.value;
      ApiService.post("register", body as AxiosRequestConfig).then(() => {
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
      });
    };

    const onFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        imgPreview.value = URL.createObjectURL(e.target.files[0]);
        formData.value.market_icon = file;
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
      currentLanguage,
      currentLangugeLocale,
      currentStepIndex,
      formData,
      createAccountModalRef,
    };
  },
});
</script>
