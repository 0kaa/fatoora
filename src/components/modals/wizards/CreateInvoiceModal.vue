<template>
  <!--begin::Modal - Create account-->
  <div
    class="modal fade"
    id="kt_modal_create_invoice"
    ref="createInvoiceModalRef"
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
          <h2>{{ $t("create_invoice") }}</h2>

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
            ref="createInvoiceRef"
            class="stepper stepper-links d-flex flex-column"
            id="kt_create_invoice_stepper"
          >
            <!--begin::Nav-->
            <div class="stepper-nav py-5">
              <!--begin::Step 1-->
              <div class="stepper-item current" data-kt-stepper-element="nav">
                <h3 class="stepper-title">{{ $t("invoiceType") }}</h3>
              </div>
              <!--end::Step 1-->

              <!--begin::Step 2-->
              <div class="stepper-item" data-kt-stepper-element="nav">
                <h3 class="stepper-title">{{ $t("invoiceInfo") }}</h3>
              </div>
              <!--end::Step 2-->
            </div>
            <!--end::Nav-->

            <!--begin::Form-->
            <form
              class="mx-auto w-100 py-10"
              novalidate="novalidate"
              id="kt_create_invoice_form"
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
                      {{ $t("chooseInvoiceType") }}
                      <i
                        class="fas fa-exclamation-circle ms-2 fs-7"
                        data-bs-toggle="tooltip"
                        title="Billing is issued based on your selected Invoice type"
                      ></i>
                    </h2>
                    <!--end::Title-->

                    <!--begin::Notice-->
                    <!-- <div class="text-gray-400 fw-bold fs-6">
                      If you need more info, please check out
                      <a href="#" class="link-primary fw-bolder">Help Page</a>.
                    </div>-->
                    <!--end::Notice-->
                  </div>
                  <!--end::Heading-->

                  <!--begin::Input group-->
                  <div class="fv-row">
                    <!--begin::Row-->
                    <div class="row">
                      <!--begin::Col-->
                      <div class="col-lg-4">
                        <!--begin::Option-->
                        <Field
                          type="radio"
                          class="btn-check"
                          name="type"
                          v-model="formData.type"
                          value="simple"
                          id="kt_create_account_form_account_type_fast"
                        />
                        <label
                          class="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10"
                          for="kt_create_account_form_account_type_fast"
                        >
                          <span class="svg-icon svg-icon-3x me-5">
                            <inline-svg
                              src="/media/icons/duotune/communication/com005.svg"
                            />
                          </span>

                          <!--begin::Info-->
                          <span class="d-block fw-bold text-start">
                            <span
                              class="text-dark fw-bolder d-block fs-4 mb-2"
                              >{{ $t("fastInvoice") }}</span
                            >
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
                      <div class="col-lg-4">
                        <!--begin::Option-->
                        <Field
                          type="radio"
                          class="btn-check"
                          name="type"
                          v-model="formData.type"
                          value="medium"
                          id="kt_create_account_form_account_type_medium"
                        />
                        <label
                          class="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10"
                          for="kt_create_account_form_account_type_medium"
                        >
                          <span class="svg-icon svg-icon-3x me-5">
                            <inline-svg
                              src="/media/icons/duotune/communication/com005.svg"
                            />
                          </span>

                          <!--begin::Info-->
                          <span class="d-block fw-bold text-start">
                            <span
                              class="text-dark fw-bolder d-block fs-4 mb-2"
                              >{{ $t("mediumInvoice") }}</span
                            >
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
                      <div class="col-lg-4">
                        <!--begin::Option-->
                        <Field
                          type="radio"
                          class="btn-check"
                          name="type"
                          v-model="formData.type"
                          value="full"
                          id="kt_create_account_form_account_type_full"
                        />
                        <label
                          class="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center"
                          for="kt_create_account_form_account_type_full"
                        >
                          <span class="svg-icon svg-icon-3x me-5">
                            <inline-svg
                              src="/media/icons/duotune/finance/fin006.svg"
                            />
                          </span>

                          <!--begin::Info-->
                          <span class="d-block fw-bold text-start">
                            <span
                              class="text-dark fw-bolder d-block fs-4 mb-2"
                              >{{ $t("fullInvoice") }}</span
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
                  <!--begin::Post-->
                  <div class="post d-flex flex-column-fluid" id="kt_post">
                    <!--begin::Layout-->
                    <div class="d-flex flex-column flex-lg-row">
                      <!--begin::Content-->
                      <div
                        class="flex-lg-row-fluid mb-10 mb-lg-0 me-lg-7 me-xl-10"
                      >
                        <!--begin::Card-->
                        <div class="card">
                          <!--begin::Card body-->
                          <div class="card-body p-12">
                            <!--begin::Wrapper-->
                            <div
                              class="d-flex flex-column align-items-start flex-xxl-row"
                            >
                              <!--begin::Input group-->
                              <div
                                class="d-flex align-items-center flex-equal fw-row me-4 order-2 gap-3"
                                data-bs-toggle="tooltip"
                                data-bs-trigger="hover"
                                :title="$t('specifyInvoiceDate')"
                              >
                                <!--begin::Date-->
                                <div
                                  class="fs-6 fw-bolder text-gray-700 text-nowrap"
                                >
                                  {{ $t("date") }}:
                                </div>
                                <!--end::Date-->
                                <!--begin::Input-->
                                <div
                                  class="position-relative d-flex align-items-center"
                                >
                                  <!--begin::Datepicker-->
                                  <!--begin::Input-->
                                  <el-date-picker
                                    class="form-control-transparent pe-5 w-150px"
                                    name="release_date"
                                    format="YYYY/MM/DD"
                                    value-format="YYYY-MM-DD"
                                    :placeholder="$t('selectDate')"
                                    v-model="formData.release_date"
                                  />
                                  <!--end::Input-->

                                  <!--end::Datepicker-->
                                </div>
                                <!--end::Input-->
                              </div>
                              <!--end::Input group-->
                              <!--begin::Input group-->
                              <div
                                class="d-flex flex-center flex-equal fw-row text-nowrap order-1 order-xxl-2 me-4"
                                data-bs-toggle="tooltip"
                                data-bs-trigger="hover"
                                :title="$t('enterInvoiceNumber')"
                              >
                                <span class="fs-2x fw-bolder text-gray-800"
                                  >{{ $t("invoice") }} #</span
                                >

                                <input
                                  type="text"
                                  class="form-control form-control-flush fw-bolder text-muted fs-3 w-125px"
                                  v-model="formData.rand_number"
                                  placehoder="..."
                                />
                              </div>
                              <!--end::Input group-->
                              <!--begin::Input group-->
                              <div
                                class="d-flex align-items-center justify-content-end flex-equal order-3 gap-3 fw-row"
                                data-bs-toggle="tooltip"
                                data-bs-trigger="hover"
                                :title="$t('specifyInvoiceDueDate')"
                              >
                                <!--begin::Date-->
                                <div
                                  class="fs-6 fw-bolder text-gray-700 text-nowrap"
                                >
                                  {{ $t("dueDate") }}:
                                </div>
                                <!--end::Date-->
                                <!--begin::Input-->
                                <div
                                  class="position-relative d-flex align-items-center w-150px"
                                >
                                  <!--begin::Datepicker-->
                                  <!--begin::Input-->
                                  <el-date-picker
                                    type="text"
                                    class="form-control-transparent pe-5 w-150px"
                                    name="due_date"
                                    :placeholder="$t('selectDate')"
                                    v-model="formData.due_date"
                                    format="YYYY/MM/DD"
                                    value-format="YYYY-MM-DD"
                                  />
                                  <!--end::Input-->

                                  <!--end::Datepicker-->
                                </div>
                                <!--end::Input-->
                              </div>
                              <!--end::Input group-->
                            </div>
                            <!--end::Top-->
                            <!--begin::Separator-->
                            <div class="separator separator-dashed my-10"></div>
                            <!--end::Separator-->
                            <!--begin::Wrapper-->
                            <div class="mb-0">
                              <!--begin::Row-->
                              <div
                                class="row gx-10 mb-5"
                                v-if="formData.type != 'simple'"
                              >
                                <!--begin::Col-->
                                <div class="col-lg-6">
                                  <label
                                    class="form-label fs-6 fw-bolder text-gray-700 mb-3"
                                    >{{ $t("billFrom") }}</label
                                  >
                                  <!--begin::Input group-->
                                  <div class="mb-5">
                                    <input
                                      type="text"
                                      class="form-control form-control-solid"
                                      :value="user.market_name"
                                      disabled
                                      :placeholder="$t('name')"
                                    />
                                  </div>
                                  <!--end::Input group-->
                                  <!--begin::Input group-->
                                  <div class="mb-5">
                                    <input
                                      type="text"
                                      class="form-control form-control-solid"
                                      :value="user.market_email"
                                      disabled
                                      :placeholder="$t('email')"
                                    />
                                  </div>
                                  <!--end::Input group-->
                                </div>
                                <!--end::Col-->
                                <!--begin::Col-->
                                <div class="col-lg-6">
                                  <label
                                    class="form-label fs-6 fw-bolder text-gray-700 mb-3"
                                    >{{ $t("billTo") }}</label
                                  >
                                  <!--begin::Input group-->
                                  <div class="mb-5">
                                    <el-select
                                      v-model="formData.customer_id"
                                      :placeholder="$t('select_customer')"
                                      class="w-100"
                                      size="large"
                                    >
                                      <el-option
                                        v-for="customer in $store.getters
                                          .Customers"
                                        :key="customer.id"
                                        :label="customer.name"
                                        :value="customer.id"
                                      >
                                      </el-option>
                                    </el-select>
                                  </div>
                                  <!--end::Input group-->
                                  <!--begin::Input group-->
                                  <div
                                    class="mb-5"
                                    v-if="formData.type == 'full'"
                                  >
                                    <button
                                      class="btn btn-link py-1"
                                      data-bs-toggle="modal"
                                      data-bs-target="#kt_modal_create_account"
                                    >
                                      {{ $t("addNewCustomer") }}
                                    </button>
                                  </div>
                                  <!--end::Input group-->
                                </div>
                                <!--end::Col-->
                              </div>
                              <!--end::Row-->
                              <!--begin::Table wrapper-->
                              <div class="table-responsive mb-10">
                                <!--begin::Table-->
                                <table
                                  class="table g-5 gs-0 mb-0 fw-bolder text-gray-700"
                                  data-kt-element="items"
                                >
                                  <!--begin::Table head-->
                                  <thead>
                                    <tr
                                      class="border-bottom fs-7 fw-bolder text-gray-700 text-uppercase"
                                    >
                                      <th class="min-w-300px w-475px">
                                        {{ $t("item") }}
                                      </th>
                                      <th class="min-w-100px w-100px">
                                        {{ $t("quantity") }}
                                      </th>
                                      <th class="min-w-150px w-150px">
                                        {{ $t("price") }}
                                      </th>
                                      <th class="min-w-100px w-150px text-end">
                                        {{ $t("total") }}
                                      </th>
                                      <th class="min-w-75px w-75px text-end">
                                        {{ $t("action") }}
                                      </th>
                                    </tr>
                                  </thead>
                                  <!--end::Table head-->
                                  <!--begin::Table body-->
                                  <tbody>
                                    <tr
                                      class="border-bottom border-bottom-dashed"
                                      data-kt-element="item"
                                      v-for="(item, index) in items"
                                      :key="index"
                                    >
                                      <td class="pe-7">
                                        <!-- <input
                                          type="text"
                                          class="form-control form-control-solid mb-2"
                                          v-model="item.name"
                                          :placeholder="$t('itemName')"
                                        /> -->
                                        <input
                                          class="form-control form-control-solid mb-2"
                                          v-model="item.product_name"
                                          :placeholder="$t('itemName')"
                                        />
                                        <input
                                          type="text"
                                          class="form-control form-control-solid"
                                          v-model="item.product_desc"
                                          :placeholder="$t('description')"
                                        />
                                      </td>
                                      <td class="ps-0">
                                        <input
                                          type="number"
                                          class="form-control form-control-solid"
                                          min="1"
                                          name="product_quantity"
                                          v-model.number="item.product_quantity"
                                          placeholder="1"
                                          data-kt-element="quantity"
                                        />
                                      </td>
                                      <td>
                                        <input
                                          type="number"
                                          class="form-control form-control-solid"
                                          v-model="item.product_price"
                                          min="1"
                                          placeholder="0.00"
                                          data-kt-element="price"
                                        />
                                      </td>
                                      <td class="pt-8 text-end text-nowrap">
                                        {{ $store.state.currency }}
                                        <span data-kt-element="total">
                                          {{
                                            item.product_quantity &&
                                            item.product_price
                                              ? (
                                                  item.product_quantity *
                                                  item.product_price
                                                ).toFixed(2)
                                              : "0.00"
                                          }}
                                        </span>
                                      </td>
                                      <td class="pt-5 text-end">
                                        <button
                                          type="button"
                                          class="btn btn-sm btn-icon btn-active-color-primary"
                                          data-kt-element="remove-item"
                                          @click.prevent="removeItem(index)"
                                        >
                                          <!--begin::Svg Icon | path: icons/duotune/general/gen027.svg-->
                                          <span class="svg-icon svg-icon-3">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="24"
                                              height="24"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                            >
                                              <path
                                                d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z"
                                                fill="black"
                                              />
                                              <path
                                                opacity="0.5"
                                                d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z"
                                                fill="black"
                                              />
                                              <path
                                                opacity="0.5"
                                                d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z"
                                                fill="black"
                                              />
                                            </svg>
                                          </span>
                                          <!--end::Svg Icon-->
                                        </button>
                                      </td>
                                    </tr>
                                  </tbody>
                                  <!--end::Table body-->
                                  <!--begin::Table foot-->
                                  <tfoot>
                                    <tr
                                      class="border-top border-top-dashed align-top fw-bolder text-gray-500"
                                    >
                                      <th class="text-primary">
                                        <button
                                          class="btn btn-link py-1"
                                          data-kt-element="add-item"
                                          @click.prevent="addItem"
                                        >
                                          {{ $t("addItem") }}
                                        </button>
                                      </th>
                                      <th
                                        colspan="4"
                                        class="border-bottom border-bottom-dashed ps-0"
                                      >
                                        <div class="d-flex align-items-start">
                                          <!--begin::Discount-->
                                          <div class="mb-0 me-5 w-100">
                                            <input
                                              type="number"
                                              class="form-control form-control-solid"
                                              :placeholder="
                                                $t('discount_amount')
                                              "
                                              v-model="formData.discount_amount"
                                            />
                                          </div>
                                          <!--end::Discount-->
                                          <!--begin::Discount-->
                                          <div class="mb-0 w-150px">
                                            <select
                                              class="form-control form-control-solid"
                                              v-model="formData.discount_type"
                                            >
                                              <option value="percentage">
                                                {{ $t("percentage") }}
                                              </option>
                                              <option value="fixed">
                                                {{ $t("fixed") }}
                                              </option>
                                            </select>
                                            <!-- <input
                                              type="number"
                                              class="form-control form-control-solid"
                                              :placeholder="
                                                $t('discount_amount')
                                              "
                                              v-model="formData.discount_amount"
                                            /> -->
                                          </div>
                                          <!--end::Discount-->
                                        </div>
                                      </th>
                                    </tr>
                                    <tr
                                      class="align-top fw-bolder text-gray-500"
                                    >
                                      <th></th>
                                      <th
                                        colspan="2"
                                        class="border-bottom border-bottom-dashed ps-0"
                                      >
                                        <div
                                          class="d-flex flex-column align-items-start"
                                        >
                                          <div>{{ $t("subTotal") }}</div>
                                        </div>
                                      </th>

                                      <th
                                        colspan="2"
                                        class="border-bottom border-bottom-dashed text-end"
                                      >
                                        {{ $store.state.currency }}
                                        <span>
                                          {{ totalInvoice.toFixed(2) }}
                                        </span>
                                      </th>
                                    </tr>

                                    <tr
                                      class="align-top fw-bolder text-gray-500"
                                    >
                                      <th></th>
                                      <th colspan="2" class="ps-0">
                                        {{ $t("discount") }}
                                      </th>
                                      <th
                                        colspan="2"
                                        class="border-bottom border-bottom-dashed text-end"
                                      >
                                        {{ $store.state.currency }}
                                        <span>
                                          {{
                                            formData.discount_amount
                                              ? parseFloat(
                                                  formData.discount_amount
                                                ).toFixed(2)
                                              : "0.00"
                                          }}
                                        </span>
                                      </th>
                                    </tr>
                                    <tr
                                      class="align-top fw-bolder text-gray-500"
                                    >
                                      <th></th>
                                      <th colspan="2" class="ps-0">
                                        {{ $t("tax") }}
                                      </th>
                                      <th
                                        colspan="2"
                                        class="border-bottom border-bottom-dashed text-end"
                                      >
                                        {{ $store.state.currency }}
                                        <span>
                                          {{
                                            (
                                              (formData.invoice_tax / 100) *
                                              totalInvoice
                                            ).toFixed(2)
                                          }}
                                        </span>
                                      </th>
                                    </tr>
                                    <tr
                                      class="align-top fw-bolder text-gray-700"
                                    >
                                      <th></th>
                                      <th colspan="2" class="fs-4 ps-0">
                                        {{ $t("total") }}
                                      </th>
                                      <th
                                        colspan="2"
                                        class="text-end fs-4 text-nowrap"
                                      >
                                        {{ $store.state.currency }}
                                        <span data-kt-element="grand-total">
                                          {{
                                            (
                                              totalInvoice +
                                              (formData.invoice_tax / 100) *
                                                totalInvoice -
                                              formData.discount_amount
                                            ).toFixed(2)
                                          }}
                                        </span>
                                      </th>
                                    </tr>
                                  </tfoot>
                                  <!--end::Table foot-->
                                </table>
                              </div>
                              <!--end::Table-->

                              <table
                                class="table d-none"
                                data-kt-element="empty-template"
                              >
                                <tr data-kt-element="empty">
                                  <th
                                    colspan="5"
                                    class="text-muted text-center py-10"
                                  >
                                    {{ $t("noItems") }}
                                  </th>
                                </tr>
                              </table>
                              <!--end::Item template-->
                            </div>
                            <!--end::Wrapper-->
                          </div>
                          <!--end::Card body-->
                        </div>
                        <!--end::Card-->
                      </div>
                      <!--end::Content-->
                      <!--begin::Sidebar-->
                      <div class="flex-lg-auto min-w-lg-300px">
                        <!--begin::Card-->
                        <div
                          class="card"
                          data-kt-sticky="true"
                          data-kt-sticky-name="invoice"
                          data-kt-sticky-offset="{default: false, lg: '200px'}"
                          data-kt-sticky-width="{lg: '250px', lg: '300px'}"
                          data-kt-sticky-left="auto"
                          data-kt-sticky-top="150px"
                          data-kt-sticky-animation="false"
                          data-kt-sticky-zindex="95"
                        >
                          <!--begin::Card body-->
                          <div class="card-body p-10">
                            <!--begin::Input group-->
                            <div class="mb-8">
                              <!--begin::Option-->
                              <label
                                class="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack mb-5"
                              >
                                <span
                                  class="form-check-label ms-0 fw-bolder fs-6 text-gray-700"
                                  >{{ $t("paidInvoice") }}</span
                                >
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  v-model="paidInvoice"
                                />
                              </label>
                              <!--end::Option-->
                              <!--begin::Option-->
                              <label
                                class="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack"
                              >
                                <span
                                  class="form-check-label ms-0 fw-bolder fs-6 text-gray-700"
                                  >{{ $t("notes") }}</span
                                >
                                <input
                                  class="form-check-input"
                                  type="checkbox"
                                  v-model="toggleNotes"
                                />
                              </label>
                              <!--end::Option-->
                            </div>
                            <!--end::Input group-->
                            <!--begin::Separator-->
                            <div
                              class="separator separator-dashed mt-8 mb-8"
                            ></div>
                            <!--end::Separator-->
                            <!--begin::Input group-->
                            <div class="mb-6 fv-row w-100">
                              <!--begin::Label-->
                              <label
                                class="d-flex align-items-center form-label mb-5"
                              >
                                {{ $t("selectShippingCompany") }}
                              </label>
                              <!--end::Label-->

                              <!--begin::Options-->
                              <div class="mb-0">
                                <!--begin:Option-->
                                <label
                                  class="d-flex flex-stack mb-5 cursor-pointer"
                                  v-for="(
                                    company, i
                                  ) in user.shipping_companies"
                                  :key="i"
                                >
                                  <!--begin:Label-->
                                  <span class="d-flex align-items-center me-2">
                                    <!--begin::Description-->
                                    <span class="d-flex flex-column">
                                      <span
                                        class="fw-bolder text-gray-800 text-hover-primary"
                                        >{{ company.name }}</span
                                      >
                                    </span>
                                    <!--end:Description-->
                                  </span>
                                  <!--end:Label-->

                                  <!--begin:Input-->
                                  <span
                                    class="form-check form-check-sm form-check-custom form-check-solid"
                                  >
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      name="shipping_company_id"
                                      :value="company.id"
                                      v-model="formData.shipping_company_id"
                                    />
                                  </span>
                                  <!--end:Input-->
                                </label>
                                <!--end::Option-->
                              </div>
                              <!--end::Options-->
                            </div>
                            <!--end::Input group-->
                            <!--begin::Separator-->
                            <div
                              class="separator separator-dashed mt-8 mb-8"
                            ></div>
                            <!--end::Separator-->
                            <!--begin::Input group-->
                            <div class="mb-6 fv-row w-100">
                              <!--begin::Label-->
                              <label
                                class="d-flex align-items-center form-label mb-5"
                              >
                                {{ $t("selectMethodType") }}
                              </label>
                              <!--end::Label-->

                              <!--begin::Options-->
                              <div class="mb-0">
                                <!--begin:Option-->
                                <label
                                  class="d-flex flex-stack mb-5 cursor-pointer"
                                  v-for="(payment, i) in user.payment_methods"
                                  :key="i"
                                >
                                  <!--begin:Label-->
                                  <span class="d-flex align-items-center me-2">
                                    <!--begin::Description-->
                                    <span class="d-flex flex-column">
                                      <span
                                        class="fw-bolder text-gray-800 text-hover-primary"
                                        >{{ payment.name }}</span
                                      >
                                    </span>
                                    <!--end:Description-->
                                  </span>
                                  <!--end:Label-->

                                  <!--begin:Input-->
                                  <span
                                    class="form-check form-check-sm form-check-custom form-check-solid"
                                  >
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      name="payment_id"
                                      :value="payment.id"
                                      v-model="formData.payment_id"
                                    />
                                  </span>
                                  <!--end:Input-->
                                </label>
                                <!--end::Option-->
                              </div>
                              <!--end::Options-->
                            </div>
                            <!--end::Input group-->
                            <!--begin::Separator-->
                            <div
                              v-if="formData.payment_id == 2"
                              class="separator separator-dashed mt-8 mb-8"
                            ></div>
                            <!--end::Separator-->
                            <!--begin::Input group-->
                            <div
                              class="mb-6 fv-row w-100"
                              v-if="formData.payment_id == 2"
                            >
                              <!--begin::Label-->
                              <label
                                class="d-flex align-items-center form-label mb-5"
                              >
                                {{ $t("selectBankType") }}
                              </label>
                              <!--end::Label-->

                              <!--begin::Options-->
                              <div class="mb-0">
                                <!--begin:Option-->
                                <label
                                  class="d-flex flex-stack mb-5 cursor-pointer"
                                  v-for="(bank, i) in user.accounts"
                                  :key="i"
                                >
                                  <!--begin:Label-->
                                  <span class="d-flex align-items-center me-2">
                                    <!--begin::Icon-->
                                    <span class="symbol symbol-50px me-6">
                                      <span class="symbol-label">
                                        <span
                                          class="svg-icon svg-icon-1 svg-icon-gray-600"
                                        >
                                          <img
                                            class="img-fluid"
                                            :src="bank.bank_image"
                                          />
                                        </span>
                                      </span>
                                    </span>
                                    <!--end::Icon-->

                                    <!--begin::Description-->
                                    <span class="d-flex flex-column">
                                      <span
                                        class="fw-bolder text-gray-800 text-hover-primary"
                                        >{{ bank.account_name }}</span
                                      >
                                    </span>
                                    <!--end:Description-->
                                  </span>
                                  <!--end:Label-->

                                  <!--begin:Input-->
                                  <span
                                    class="form-check form-check-sm form-check-custom form-check-solid"
                                  >
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      name="bank_id"
                                      :value="bank.id"
                                      v-model="formData.account_id"
                                    />
                                  </span>
                                  <!--end:Input-->
                                </label>
                                <!--end::Option-->
                              </div>
                              <!--end::Options-->
                            </div>
                            <!--end::Input group-->
                            <!--begin::Separator-->
                            <div class="separator separator-dashed mb-8"></div>
                            <!--end::Separator-->
                            <!--begin::Input group Payment method-->
                            <div v-if="paymentMethod">
                              <input
                                type="text"
                                class="form-control form-control-solid mb-2"
                                :placeholder="$t('paymentUrl')"
                                v-model="paymentUrl"
                              />
                              <!--begin::Separator-->
                              <div
                                class="separator separator-dashed mt-8 mb-8"
                              ></div>
                              <!--end::Separator-->
                            </div>
                            <!--end::Input group Payment method-->
                            <!--begin::Notes-->
                            <div class="mb-0" v-if="toggleNotes">
                              <label
                                class="form-label fs-6 fw-bolder text-gray-700"
                                >{{ $t("notes") }}</label
                              >
                              <textarea
                                name="notes"
                                class="form-control form-control-solid"
                                rows="3"
                                :placeholder="$t('yourNotesHere')"
                              ></textarea>
                              <!--begin::Separator-->
                              <div
                                class="separator separator-dashed mt-8 mb-8"
                              ></div>
                              <!--end::Separator-->
                            </div>
                            <!--end::Notes-->
                            <!--begin::Actions-->
                            <div class="mb-0">
                              <button
                                class="btn btn-primary w-100"
                                id="kt_invoice_submit_button"
                                @click="formSubmit()"
                              >
                                <!--begin::Svg Icon | path: icons/duotune/general/gen016.svg-->
                                <span class="svg-icon svg-icon-3">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      d="M15.43 8.56949L10.744 15.1395C10.6422 15.282 10.5804 15.4492 10.5651 15.6236C10.5498 15.7981 10.5815 15.9734 10.657 16.1315L13.194 21.4425C13.2737 21.6097 13.3991 21.751 13.5557 21.8499C13.7123 21.9488 13.8938 22.0014 14.079 22.0015H14.117C14.3087 21.9941 14.4941 21.9307 14.6502 21.8191C14.8062 21.7075 14.9261 21.5526 14.995 21.3735L21.933 3.33649C22.0011 3.15918 22.0164 2.96594 21.977 2.78013C21.9376 2.59432 21.8452 2.4239 21.711 2.28949L15.43 8.56949Z"
                                      fill="black"
                                    />
                                    <path
                                      opacity="0.3"
                                      d="M20.664 2.06648L2.62602 9.00148C2.44768 9.07085 2.29348 9.19082 2.1824 9.34663C2.07131 9.50244 2.00818 9.68731 2.00074 9.87853C1.99331 10.0697 2.04189 10.259 2.14054 10.4229C2.23919 10.5869 2.38359 10.7185 2.55601 10.8015L7.86601 13.3365C8.02383 13.4126 8.19925 13.4448 8.37382 13.4297C8.54839 13.4145 8.71565 13.3526 8.85801 13.2505L15.43 8.56548L21.711 2.28448C21.5762 2.15096 21.4055 2.05932 21.2198 2.02064C21.034 1.98196 20.8409 1.99788 20.664 2.06648Z"
                                      fill="black"
                                    />
                                  </svg>
                                </span>
                                <!--end::Svg Icon-->
                                <span class="indicator-label">
                                  {{ $t("sendInvoice") }}
                                  <span class="svg-icon svg-icon-3 ms-2 me-0">
                                    <inline-svg
                                      src="icons/duotune/arrows/arr064.svg"
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
                            </div>
                            <!--end::Actions-->
                          </div>
                          <!--end::Card body-->
                        </div>
                        <!--end::Card-->
                      </div>
                      <!--end::Sidebar-->
                    </div>
                    <!--end::Layout-->
                  </div>
                  <!--end::Post-->
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
                    v-if="currentStepIndex !== totalSteps - 1"
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
import { Field } from "vee-validate";
import * as Yup from "yup";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
// import moment from "moment";

interface Step1 {
  type: string;
}

interface Step2 {
  rand_number: string;
  release_date: string;
  due_date: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  products: any[];
  public_note: string;
  private_note: string;
  has_discount: number;
  discount_amount: string;
  discount_type: string;
  invoice_tax: number;
  customer_id: string;
  payment_id: string;
  shipping_company_id: string;
  account_id: string;
  status: string;
}

interface KTCreateApp extends Step1, Step2 {}

interface Customer {
  id: number;
  name: string;
}

export default defineComponent({
  name: "create-invoice-modal",
  components: {
    Field,
  },
  setup() {
    const _stepperObj = ref<StepperComponent | null>(null);
    const createInvoiceRef = ref<HTMLElement | null>(null);
    const createInvoiceModalRef = ref<HTMLElement | null>(null);
    const currentStepIndex = ref(0);
    const paymentMethod = ref(false);
    const toggleNotes = ref(false);
    const paymentUrl = ref("");
    const paidInvoice = ref(false);
    const customers = ref([] as Customer[]);
    const il8n = useI18n();
    const store = useStore();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const items = ref<any[]>([
      {
        product_name: "",
        product_desc: "",
        product_quantity: "1",
        product_price: "",
      },
    ]);

    const formData = ref<KTCreateApp>({
      type: "simple",
      rand_number: "",
      release_date: "",
      due_date: "",
      products: items.value,
      public_note: "",
      private_note: "",
      has_discount: 0,
      discount_amount: "",
      discount_type: "percentage",
      invoice_tax: 14,
      customer_id: "",
      payment_id: "",
      shipping_company_id: "",
      account_id: "",
      status: "",
    });

    onMounted(() => {
      _stepperObj.value = StepperComponent.createInsance(
        createInvoiceRef.value as HTMLElement
      );
    });

    const addItem = () => {
      items.value.push({
        product_name: "",
        product_desc: "",
        product_quantity: "1",
        product_price: "",
      });
    };

    const removeItem = (index: number) => {
      items.value.splice(index, 1);
    };

    const totalInvoice = computed(() => {
      let total = 0;
      items.value.forEach((item) => {
        total +=
          item.product_price && item.product_quantity
            ? parseFloat(item.product_quantity) * parseFloat(item.product_price)
            : 0;
      });

      return total;
    });

    const user = computed(() => {
      return store.getters.currentUser;
    });

    const createAppSchema = [
      Yup.object({}),
      Yup.object({
        itemName: Yup.string().required().label("Item Name"),
        itemQty: Yup.string().required().label("Item Quantity"),
        itemPrice: Yup.string().required().label("Item Price"),
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

      formData.value.products = items.value;
      if (formData.value.discount_amount) {
        formData.value.has_discount = 1;
      } else {
        formData.value.has_discount = 0;
      }

      if (paidInvoice.value) {
        formData.value.status = "paid";
      } else {
        formData.value.status = "pending";
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
        .dispatch(Actions.CREATE_INVOICE, formData.value)
        .then((response) => {
          Swal.close();
          Swal.fire({
            title: il8n.t("success"),
            text: response.message,
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            hideModal(createInvoiceModalRef.value);
            resetForm();
            if (!_stepperObj.value) {
              return;
            }
            currentStepIndex.value = 0;
            _stepperObj.value.goFirst();
          });
        })
        .catch(() => {
          const message = store.getters.getInvoiceErrors;
          Swal.close();
          Swal.fire({
            title: il8n.t("error"),
            text: message.data.message,
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
      createInvoiceRef,
      totalSteps,
      previousStep,
      handleStep,
      formSubmit,
      paymentMethod,
      paymentUrl,
      toggleNotes,
      paidInvoice,
      addItem,
      removeItem,
      currentStepIndex,
      totalInvoice,
      il8n,
      items,
      formData,
      user,
      customers,
      createInvoiceModalRef,
    };
  },
});
</script>
<style lang="scss" scoped>
.mw-1200px {
  max-width: 1200px;
}
</style>
