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
                    <Field
                      type="radio"
                      class="btn-check"
                      name="account_type"
                      value="cloud"
                      id="kt_create_account_form_account_type_cloud"
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
              <label class="d-flex align-items-center form-label mb-3">
                {{ $t("specify_invoice_size") }}
              </label>
              <!--begin::Row-->
              <div class="row row-gap mb-10" data-kt-buttons="true">
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
              <div class="row row-gap mb-5">
                <div class="col-lg-6">
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
              <div class="row row-gap mb-5">
                <div class="col-lg-6">
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
              <!--begin::Input group-->
              <div class="row row-gap mb-5">
                <div class="col-lg-6">
                  <!--begin::Label-->
                  <label class="form-label required">
                    {{ $t("enterpriseName") }}
                  </label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <Field
                    name="market_name"
                    class="form-control form-control-lg form-control-solid"
                    value=""
                  />
                  <ErrorMessage
                    class="fv-plugins-message-container invalid-feedback"
                    name="market_name"
                  />
                  <!--end::Input-->
                </div>
                <div class="col-lg-6">
                  <!--begin::Label-->
                  <label class="fs-6 fw-bold form-label required">
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
              </div>
              <!--end::Input group-->
              <!--begin::Input group-->
              <div class="row row-gap mb-5">
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
                    name="market_address"
                    class="form-control form-control-lg form-control-solid"
                    value=""
                  />
                  <ErrorMessage
                    class="fv-plugins-message-container invalid-feedback"
                    name="market_address"
                  />
                  <!--end::Input-->
                </div>
                <div class="col-lg-6">
                  <!--begin::Label-->
                  <label class="fs-6 fw-bold form-label required">
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
              <div class="row row-gap mb-5">
                <div class="col-lg-6">
                  <!--begin::Label-->
                  <label class="form-label required">
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
                  <label class="form-label required">
                    {{ $t("enterpriseRecordNumber") }}
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
              <div class="row row-gap mb-5">
                <div class="col-lg-6">
                  <!--begin::Label-->
                  <label class="fs-6 fw-bold form-label required">
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
              <div class="row row-gap mb-5">
                <!--begin::Input group-->
                <div class="col-lg-6">
                  <!--begin::Label-->
                  <label class="fs-6 fw-bold form-label">
                    {{ $t("currency") }}
                  </label>
                  <!--end::Label-->

                  <!--begin::Col-->
                  <div>
                    <Field
                      type="select"
                      as="select"
                      class="btn-check d-none"
                      name="currency_id"
                      v-model="formData.currency_id"
                    >
                      <option
                        v-for="(currency, index) in $store.getters
                          .allCurrencies"
                        :key="index"
                        :value="currency.id"
                      >
                        Coffee
                      </option>
                    </Field>
                    <el-form-item prop="currencies" class="mb-0">
                      <el-select
                        v-model="formData.currency_id"
                        default-first-option
                        placeholder="Choose a currency"
                        class="w-100"
                      >
                        <el-option
                          v-for="(currency, index) in $store.getters
                            .allCurrencies"
                          :key="index"
                          :value="currency.id"
                          :label="currency.name"
                        >
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <ErrorMessage
                      class="fv-plugins-message-container invalid-feedback"
                      name="currency_id"
                    />
                  </div>
                  <!--end::Col-->
                </div>
                <!--end::Input group-->
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
                <!-- <Field
                  type="file"
                  accept="image/*"
                  class="btn-check d-none"
                  name="market_image"
                 
                  @change="onFileChange"
                /> -->

                <input
                  type="file"
                  name="avatar"
                  class="btn-check d-none"
                  accept=".png, .jpg, .jpeg"
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
          <!--end::Step 3-->
          <!--begin::Step 4-->
          <div data-kt-stepper-element="content">
            <!--begin::Wrapper-->
            <div class="w-100">
              <!--begin::Heading-->
              <div class="pb-10 pb-lg-12">
                <!--begin::Title-->
                <h2 class="fw-bolder text-dark">
                  {{ $t("shippingMethods") }}
                </h2>
                <!--end::Title-->
              </div>
              <!--end::Heading-->
              <!--begin::Input group-->
              <div class="mb-6 fv-row">
                <label
                  class="form-check form-switch form-check-custom form-check-solid mb-6 user-select-none"
                  v-for="shipping in $store.getters.getAllShippingCompanies"
                  :key="shipping.id"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :value="shipping.id"
                    v-model.number="shipping_id"
                  />
                  <span class="form-check-label fw-bold">{{
                    shipping.name
                  }}</span>
                </label>
              </div>
              <!--end::Input group-->
              <!--begin::Heading-->
              <div class="pb-10 pb-lg-12">
                <!--begin::Title-->
                <h2 class="fw-bolder text-dark">
                  {{ $t("paymentMethods") }}
                </h2>
                <!--end::Title-->
              </div>
              <!--end::Heading-->
              <!--begin::Input group-->
              <div class="mb-6 fv-row">
                <label
                  class="form-check form-switch form-check-custom form-check-solid mb-6 user-select-none"
                  v-for="payment in $store.getters.getAllPaymentMethods"
                  :key="payment.id"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :value="payment.id"
                    v-model.number="payment_id"
                  />
                  <span class="form-check-label fw-bold">{{
                    payment.name
                  }}</span>
                </label>
                <div v-if="payment_id.includes(2)">
                  <!--begin::Label-->
                  <label class="d-flex align-items-center form-label mb-5">
                    {{ $t("selectBankType") }}
                  </label>
                  <!--end::Label-->

                  <!--begin::Options-->
                  <!--begin::Repeater-->
                  <div id="kt_docs_repeater_basic">
                    <!--begin::Form group-->
                    <div class="form-group">
                      <div
                        v-for="(account, i) in bank_accounts"
                        :key="i"
                        class="mb-5"
                      >
                        <div class="form-group row">
                          <div class="col-md-3">
                            <label class="form-label">
                              {{ $t("bank") }}
                            </label>
                            <el-form-item class="mb-0">
                              <el-select
                                v-model="account.bank_id"
                                default-first-option
                                :placeholder="$t('choose_a_bank')"
                                class="w-100"
                              >
                                <el-option
                                  v-for="(bank, index) in $store.getters
                                    .getAllBanks"
                                  :key="index"
                                  :value="bank.id"
                                  :label="bank.name"
                                >
                                </el-option>
                              </el-select>
                            </el-form-item>
                          </div>
                          <div class="col-md-2">
                            <label class="form-label">{{
                              $t("account_name")
                            }}</label>
                            <el-input
                              v-model="account.account_name"
                              :placeholder="$t('enter_account_name')"
                            />
                          </div>
                          <div class="col-md-3">
                            <label class="form-label">
                              {{ $t("account_number") }}
                            </label>

                            <el-input
                              v-model="account.account_number"
                              :placeholder="$t('enter_account_number')"
                            />
                          </div>
                          <div class="col-md-3">
                            <label class="form-label">
                              {{ $t("iban") }}
                            </label>
                            <el-input
                              v-model="account.iban"
                              :placeholder="$t('enter_iban')"
                            />
                          </div>

                          <div class="col-md-1">
                            <a
                              @click.prevent="removeBankAccount(i)"
                              class="btn btn-light-danger mt-3 mt-md-8"
                            >
                              <i class="la la-trash-o fs-2"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--end::Form group-->

                    <!--begin::Form group-->
                    <div class="form-group mt-5">
                      <a
                        @click.prevent="addBankAccount"
                        class="btn btn-light-primary"
                      >
                        <i class="la la-plus"></i>Add
                      </a>
                    </div>
                    <!--end::Form group-->
                  </div>
                  <!--end::Repeater-->
                  <!--end::Options-->
                </div>
                <div class="mt-5" v-if="payment_id.includes(3)">
                  <!--begin::Label-->
                  <label class="fs-6 fw-bold form-label required">
                    {{ $t("api_key") }}</label
                  >
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-input
                    v-model="formData.api_key"
                    :placeholder="$t('api_key')"
                  />
                  <!--end::Input-->
                </div>
              </div>
              <!--end::Input group-->
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Step 4-->

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
import { useRouter } from "vue-router";
import { Actions } from "@/store/enums/StoreEnums";
import { StepperComponent } from "@/assets/ts/components/_StepperComponent";
import Logo from "@/components/Logo.vue";
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
  market_name: string;
  market_address: string;
  market_tax_number: string;
  market_commercial_number: string;
  market_standard_number: string;
  market_site_url: string;
  market_email: string;
  market_phone: string;
  currency_id: string;
  api_key: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bank_accounts: any[];
}

interface KTCreateApp extends Step1, Step2 {}

export default defineComponent({
  name: "sign-up",
  components: {
    Field,
    ErrorMessage,
    Logo,
  },
  setup() {
    const _stepperObj = ref<StepperComponent | null>(null);
    const createAccountRef = ref<HTMLElement | null>(null);
    const createAccountModalRef = ref<HTMLElement | null>(null);
    const currentStepIndex = ref(0);
    const payment_id = ref<number[]>([]);
    const shipping_id = ref<number[]>([]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const bank_accounts = ref<any[]>([
      {
        account_name: "",
        account_number: "",
        iban: "",
        bank_id: "",
      },
    ]);
    const imgPreview = ref<string>("");
    const store = useStore();
    const router = useRouter();

    const { t, te } = useI18n();
    // market_image file
    const market_image = ref<File | null>(null);

    const formData = ref<KTCreateApp>({
      account_type: "cloud",
      invoice_plan: "100",
      name: "",
      email: "",
      phone: "",
      password: "",
      market_name: "",
      market_address: "",
      market_tax_number: "",
      market_commercial_number: "",
      market_standard_number: "",
      market_site_url: "",
      market_email: "",
      market_phone: "",
      currency_id: "",
      api_key: "",
      bank_accounts: bank_accounts.value,
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

    const addBankAccount = () => {
      bank_accounts.value.push({
        account_name: "",
        account_number: "",
        iban: "",
        bank_id: "",
      });
    };

    const removeBankAccount = (index: number) => {
      if (bank_accounts.value.length > 1) {
        bank_accounts.value.splice(index, 1);
      }
    };

    const currentLanguage = computed(() => {
      return store.getters.getLanguage;
    });

    const currentLangugeLocale = computed(() => {
      return countries[currentLanguage.value];
    });

    const createAppSchema = [
      Yup.object({
        account_type: Yup.string().required(translate("account_type_required")),
      }),

      Yup.object({
        invoice_plan: Yup.string().required("Invoice Plan is required"),
        name: Yup.string()
          .required(translate("nameRequired"))
          .min(3, translate("nameMin"))
          .max(50, translate("nameMax")),
        password: Yup.string()
          .min(8, translate("passwordMinLength"))
          .max(32, translate("passwordMaxLength"))
          .required(translate("passwordRequired")),
        phone: Yup.string()
          .matches(/^[0-9]/, translate("phoneNumberInvalid"))
          .min(10, translate("phoneNumberMinLength"))
          .required(translate("phoneNumberRequired")),
        email: Yup.string()
          .email(translate("emailInvalid"))
          .required(translate("emailRequired")),
        market_name: Yup.string()
          .required(translate("market_name_required"))
          .min(3, translate("market_name_min"))
          .max(50, translate("market_name_max")),
        market_address: Yup.string().required(
          translate("market_address_required")
        ),
        market_phone: Yup.string()
          .matches(/^[0-9]/, translate("market_phone_invalid"))
          .min(10, translate("market_phone_min_length"))
          .required(translate("market_phone_required")),
        market_email: Yup.string()
          .email(translate("market_email_invalid"))
          .required(translate("market_email_required")),
        market_tax_number: Yup.string()
          .required(translate("market_tax_number_required"))
          .min(15, translate("market_tax_number_min_length")),
        market_commercial_number: Yup.string().required(
          translate("market_commercial_number_required")
        ),
        market_standard_number: Yup.string().required(
          translate("market_standard_number_required")
        ),
        market_site_url: Yup.string().url(translate("market_site_url_invalid")),
        currency_id: Yup.string().required(translate("currency_required")),
        // api_key: Yup.string().required(translate("api_key_required")),
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
        const body = {
          phone: formData.value.phone,
          email: formData.value.email,
          market_phone: formData.value.market_phone,
          market_email: formData.value.market_email,
        };
        ApiService.post("check_mail_or_phone", body as AxiosRequestConfig)
          .then(({ data }) => {
            if (data.email_found) {
              return Swal.fire({
                text: translate("email_exist"),
                icon: "error",
                buttonsStyling: false,
                confirmButtonText: translate("ok"),
                customClass: {
                  confirmButton: "btn fw-bold btn-light-primary",
                },
              });
            } else if (data.phone_found) {
              return Swal.fire({
                text: translate("phone_exist"),
                icon: "error",
                buttonsStyling: false,
                confirmButtonText: translate("ok"),
                customClass: {
                  confirmButton: "btn fw-bold btn-light-primary",
                },
              });
            } else if (data.market_email_found) {
              return Swal.fire({
                text: translate("market_email_exist"),
                icon: "error",
                buttonsStyling: false,
                confirmButtonText: translate("ok"),
                customClass: {
                  confirmButton: "btn fw-bold btn-light-primary",
                },
              });
            } else if (data.market_phone_found) {
              return Swal.fire({
                text: translate("market_phone_exist"),
                icon: "error",
                buttonsStyling: false,
                confirmButtonText: translate("ok"),
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
          })
          .catch(() => {
            return Swal.fire({
              text: translate("error_occured"),
              icon: "error",
              buttonsStyling: false,
              confirmButtonText: translate("ok"),
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            });
          });
      } else {
        currentStepIndex.value++;

        if (!_stepperObj.value) {
          return;
        }

        _stepperObj.value.goNext();
      }
    });

    //Form submit function
    const formSubmit = () => {
      const body = formData.value;
      // upload image to server
      const form = new FormData();
      // loop to append all form values
      for (const key in body) {
        // eslint-disable-next-line no-prototype-builtins
        if (body.hasOwnProperty(key)) {
          form.append(key, body[key]);
        }
      }
      if (market_image.value) {
        form.append("market_image", market_image.value);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      payment_id.value.forEach((item: any) => {
        form.append("payment_id[]", item);
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      shipping_id.value.forEach((item: any) => {
        form.append("shipping_id[]", item);
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      bank_accounts.value.forEach((item: any, i) => {
        for (const key in item) {
          // eslint-disable-next-line no-prototype-builtins
          if (item.hasOwnProperty(key)) {
            form.append(`bank_accounts[${i}][${key}]`, item[key]);
          }
        }
      });

      if (!payment_id.value.includes(2)) {
        form.delete("bank_accounts");
      }

      if (!payment_id.value.includes(3)) {
        form.delete("api_key");
      }

      // Clear existing errors
      store.dispatch(Actions.LOGOUT);
      store
        .dispatch(Actions.REGISTER, form as AxiosRequestConfig)
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
            hideModal(createAccountModalRef.value);
            resetForm();
            if (!_stepperObj.value) return;

            currentStepIndex.value = 0;
            imgPreview.value = "";
            _stepperObj.value.goFirst();

            router.push({ name: "home" });
          });
        })
        .catch(() => {
          Swal.fire({
            text: store.getters.getErrors,
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: translate("tryAgain"),
            customClass: {
              confirmButton: "btn fw-bold btn-light-danger",
            },
          });
        });
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
      shipping_id,
      payment_id,
      imgPreview,
      currentLanguage,
      currentLangugeLocale,
      currentStepIndex,
      formData,
      bank_accounts,
      addBankAccount,
      removeBankAccount,
      createAccountModalRef,
    };
  },
});
</script>

<style lang="scss" scoped>
.row-gap {
  row-gap: 20px;
}
</style>
