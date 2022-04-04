<template>
  <div class="container-xxl">
    <div class="d-flex flex-column h-100 justify-content-lg-center">
      <!--begin::Wrapper-->
      <div class="w-lg-500px bg-white w-100 rounded p-10 m-10 p-lg-15 mx-auto">
        <!--begin::Form-->
        <el-form
          class="form w-100"
          @submit.prevent="signUp"
          :model="formData"
          :rules="signUpValidator"
          ref="formSignUp"
        >
          <div v-if="currentStepIndex === 1">
            <!--begin::Heading-->
            <div class="text-center mb-10">
              <!--begin::Title-->
              <h1 class="text-main mb-3">
                {{ $t("chooseAccountType") }}
              </h1>
              <!--end::Title-->
            </div>
            <!--begin::Heading-->
            <!--begin::Row-->

            <div class="row row-gap">
              <!--begin::Col-->
              <div class="col-sm-12">
                <!--begin::Option-->
                <input
                  type="radio"
                  class="btn-check"
                  v-model="formData.account_type"
                  id="kt_create_account_form_account_type_cloud"
                  value="cloud"
                />
                <label
                  class="btn btn-outline btn-outline-dashed p-7 d-flex align-items-center"
                  for="kt_create_account_form_account_type_cloud"
                >
                  <span class="svg-icon svg-icon-3x me-5">
                    <inline-svg
                      src="/media/icons/duotune/communication/com005.svg"
                    />
                  </span>

                  <!--begin::Info-->
                  <span class="d-block fw-bold text-start">
                    <span class="text-main fw-bolder d-block fs-4 mb-2">
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
              <div class="col-sm-12">
                <!--begin::Option-->
                <input
                  type="radio"
                  class="btn-check"
                  v-model="formData.account_type"
                  value="custom"
                  id="kt_create_account_form_account_type_custom"
                />
                <label
                  class="btn btn-outline btn-outline-dashed p-7 d-flex align-items-center"
                  for="kt_create_account_form_account_type_custom"
                >
                  <span class="svg-icon svg-icon-3x me-5">
                    <inline-svg src="/media/icons/duotune/finance/fin006.svg" />
                  </span>

                  <!--begin::Info-->
                  <span class="d-block fw-bold text-start">
                    <span class="text-main fw-bolder d-block fs-4 mb-2">{{
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
          <div v-if="currentStepIndex === 2">
            <!--begin::Heading-->
            <div class="text-center mb-10">
              <!--begin::Title-->
              <h1 class="text-main mb-3">
                {{ $t("accountInfo") }}
              </h1>
              <!--end::Title-->
            </div>
            <!--begin::Heading-->
            <!--begin::Input group-->
            <el-form-item class="mb-8" prop="name">
              <el-input
                class="fs-3"
                v-model="formData.name"
                type="text"
                :placeholder="$t('name')"
              />
            </el-form-item>
            <!--end::Input group-->
            <!--begin::Input group-->
            <el-form-item class="mb-8" prop="phone">
              <el-input
                class="fs-3"
                v-model="formData.phone"
                type="number"
                :placeholder="$t('phone')"
              />
            </el-form-item>
            <!--end::Input group-->
            <!--begin::Input group-->
            <el-form-item class="mb-8" prop="email">
              <el-input
                class="fs-3"
                v-model="formData.email"
                type="email"
                :placeholder="$t('email')"
                autocomplete="off"
              />
            </el-form-item>
            <!--end::Input group-->

            <!--begin::Input group-->
            <el-form-item prop="password" class="mb-12">
              <el-input
                class="fs-3"
                v-model="formData.password"
                type="password"
                :placeholder="$t('password')"
                autocomplete="off"
              />
            </el-form-item>
            <!--end::Input group-->
            <!--begin::Heading-->
            <div class="text-center mb-10">
              <!--begin::Title-->
              <h1 class="text-main mb-3">
                {{ $t("specify_invoice_size") }}
              </h1>
              <!--end::Title-->
            </div>
            <!--begin::Heading-->
            <!--begin::Row-->
            <div class="row-gap flex-wrap justify-content-center d-flex mb-10">
              <!--begin::Col-->
              <div class="">
                <!--begin::Option-->
                <input
                  type="radio"
                  class="btn-check"
                  v-model="formData.invoice_plan"
                  value="100"
                  id="kt_hundred_select"
                />
                <label for="kt_hundred_select">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 122 122"
                  >
                    <g
                      id="Group_23449"
                      data-name="Group 23449"
                      transform="translate(-1382 -794)"
                    >
                      <g
                        id="Ellipse_8"
                        data-name="Ellipse 8"
                        transform="translate(1382 794)"
                        fill="#fff"
                        stroke="#1b325f"
                        stroke-width="1"
                      >
                        <circle cx="61" cy="61" r="61" stroke="none" />
                        <circle cx="61" cy="61" r="60.5" fill="none" />
                      </g>
                      <g
                        id="Ellipse_13"
                        data-name="Ellipse 13"
                        transform="translate(1387 799)"
                        fill="#fff"
                        stroke="#f26c4f"
                        stroke-linecap="round"
                        stroke-width="1"
                        stroke-dasharray="7"
                      >
                        <circle cx="56" cy="56" r="56" stroke="none" />
                        <circle cx="56" cy="56" r="55.5" fill="none" />
                      </g>
                      <text
                        id="_100"
                        data-name="100"
                        transform="translate(1419 868)"
                        fill="#1b325f"
                        font-size="32"
                        font-family="TatweerAlRiyadh-Regular, Tatweer Al Riyadh"
                      >
                        <tspan x="0" y="0">100</tspan>
                      </text>
                    </g>
                  </svg>
                </label>
                <!--end::Option-->
              </div>
              <!--end::Col-->
              <!--begin::Col-->
              <div class="">
                <!--begin::Option-->
                <input
                  type="radio"
                  class="btn-check"
                  v-model="formData.invoice_plan"
                  value="1000"
                  disabled
                  id="kt_one_thousand_select"
                />
                <label for="kt_one_thousand_select">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="60"
                    height="60"
                    viewBox="0 0 122 122"
                  >
                    <defs>
                      <linearGradient
                        id="linear-gradient"
                        x1="0.5"
                        y1="0.123"
                        x2="0.5"
                        y2="1"
                        gradientUnits="objectBoundingBox"
                      >
                        <stop
                          offset="0"
                          stop-color="#fff"
                          stop-opacity="0.451"
                        />
                        <stop
                          offset="1"
                          stop-color="gray"
                          stop-opacity="0.878"
                        />
                      </linearGradient>
                    </defs>
                    <g
                      id="Group_23450"
                      data-name="Group 23450"
                      transform="translate(-1244 -794)"
                    >
                      <g
                        id="Ellipse_9"
                        data-name="Ellipse 9"
                        transform="translate(1244 794)"
                        fill="#fff"
                        stroke="#1b325f"
                        stroke-width="1"
                      >
                        <circle cx="61" cy="61" r="61" stroke="none" />
                        <circle cx="61" cy="61" r="60.5" fill="none" />
                      </g>
                      <g
                        id="Ellipse_14"
                        data-name="Ellipse 14"
                        transform="translate(1249 799)"
                        fill="#fff"
                        stroke="#cccaca"
                        stroke-linecap="round"
                        stroke-width="1"
                        stroke-dasharray="7"
                      >
                        <circle cx="56" cy="56" r="56" stroke="none" />
                        <circle cx="56" cy="56" r="55.5" fill="none" />
                      </g>
                      <text
                        id="_1000"
                        data-name="1000"
                        transform="translate(1268 869)"
                        fill="#d4d4d4"
                        font-size="32"
                        font-family="TatweerAlRiyadh-Regular, Tatweer Al Riyadh"
                      >
                        <tspan x="0" y="0">1000</tspan>
                      </text>
                      <circle
                        id="Ellipse_22"
                        data-name="Ellipse 22"
                        cx="61"
                        cy="61"
                        r="61"
                        transform="translate(1244 794)"
                        fill="url(#linear-gradient)"
                      />
                      <g id="Lock" transform="translate(1282.763 835.926)">
                        <path
                          id="Path_18658"
                          data-name="Path 18658"
                          d="M31.136,15.124H30.023V11.787a7.787,7.787,0,0,0-15.574,0v3.337H13.337A3.341,3.341,0,0,0,10,18.461V31.81a3.341,3.341,0,0,0,3.337,3.337h17.8a3.341,3.341,0,0,0,3.337-3.337V18.461A3.341,3.341,0,0,0,31.136,15.124ZM16.674,11.787a5.562,5.562,0,0,1,11.124,0v3.337H16.674ZM32.248,31.81a1.114,1.114,0,0,1-1.112,1.112h-17.8a1.114,1.114,0,0,1-1.112-1.112V18.461a1.114,1.114,0,0,1,1.112-1.112h17.8a1.114,1.114,0,0,1,1.112,1.112Z"
                          fill="#1b325f"
                        />
                        <path
                          id="Path_18659"
                          data-name="Path 18659"
                          d="M30.225,35a2.218,2.218,0,0,0-1.112,4.14v2.534a1.112,1.112,0,1,0,2.225,0V39.14A2.218,2.218,0,0,0,30.225,35Z"
                          transform="translate(-7.988 -13.758)"
                          fill="#1b325f"
                        />
                      </g>
                    </g>
                  </svg>
                </label>
                <!--end::Option-->
              </div>
              <!--end::Col-->

              <!--begin::Col-->
              <div class="">
                <!--begin::Option-->
                <input
                  type="radio"
                  class="btn-check"
                  v-model="formData.invoice_plan"
                  value="5000"
                  disabled
                  id="kt_five_thousand_select"
                />
                <label for="kt_five_thousand_select">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="60"
                    height="60"
                    viewBox="0 0 122 122"
                  >
                    <defs>
                      <linearGradient
                        id="linear-gradient"
                        x1="0.5"
                        y1="0.123"
                        x2="0.5"
                        y2="1"
                        gradientUnits="objectBoundingBox"
                      >
                        <stop
                          offset="0"
                          stop-color="#fff"
                          stop-opacity="0.451"
                        />
                        <stop
                          offset="1"
                          stop-color="gray"
                          stop-opacity="0.878"
                        />
                      </linearGradient>
                    </defs>
                    <g
                      id="Group_23451"
                      data-name="Group 23451"
                      transform="translate(-1106 -794)"
                    >
                      <g
                        id="Ellipse_10"
                        data-name="Ellipse 10"
                        transform="translate(1106 794)"
                        fill="#fff"
                        stroke="#1b325f"
                        stroke-width="1"
                      >
                        <circle cx="61" cy="61" r="61" stroke="none" />
                        <circle cx="61" cy="61" r="60.5" fill="none" />
                      </g>
                      <g
                        id="Ellipse_15"
                        data-name="Ellipse 15"
                        transform="translate(1111 799)"
                        fill="#fff"
                        stroke="#cccaca"
                        stroke-linecap="round"
                        stroke-width="1"
                        stroke-dasharray="7"
                      >
                        <circle cx="56" cy="56" r="56" stroke="none" />
                        <circle cx="56" cy="56" r="55.5" fill="none" />
                      </g>
                      <text
                        id="_5000"
                        data-name="5000"
                        transform="translate(1130 869)"
                        fill="#d4d4d4"
                        font-size="32"
                        font-family="TatweerAlRiyadh-Regular, Tatweer Al Riyadh"
                      >
                        <tspan x="0" y="0">5000</tspan>
                      </text>
                      <circle
                        id="Ellipse_23"
                        data-name="Ellipse 23"
                        cx="61"
                        cy="61"
                        r="61"
                        transform="translate(1106 794)"
                        fill="url(#linear-gradient)"
                      />
                      <g id="Lock" transform="translate(1144.763 835.926)">
                        <path
                          id="Path_18658"
                          data-name="Path 18658"
                          d="M31.136,15.124H30.023V11.787a7.787,7.787,0,0,0-15.574,0v3.337H13.337A3.341,3.341,0,0,0,10,18.461V31.81a3.341,3.341,0,0,0,3.337,3.337h17.8a3.341,3.341,0,0,0,3.337-3.337V18.461A3.341,3.341,0,0,0,31.136,15.124ZM16.674,11.787a5.562,5.562,0,0,1,11.124,0v3.337H16.674ZM32.248,31.81a1.114,1.114,0,0,1-1.112,1.112h-17.8a1.114,1.114,0,0,1-1.112-1.112V18.461a1.114,1.114,0,0,1,1.112-1.112h17.8a1.114,1.114,0,0,1,1.112,1.112Z"
                          fill="#1b325f"
                        />
                        <path
                          id="Path_18659"
                          data-name="Path 18659"
                          d="M30.225,35a2.218,2.218,0,0,0-1.112,4.14v2.534a1.112,1.112,0,1,0,2.225,0V39.14A2.218,2.218,0,0,0,30.225,35Z"
                          transform="translate(-7.988 -13.758)"
                          fill="#1b325f"
                        />
                      </g>
                    </g>
                  </svg>
                </label>
                <!--end::Option-->
              </div>
              <!--end::Col-->

              <!--begin::Col-->
              <div class="">
                <!--begin::Option-->
                <input
                  type="radio"
                  class="btn-check"
                  v-model="formData.invoice_plan"
                  value="10000"
                  disabled
                  id="kt_ten_thousand_select"
                />
                <label for="kt_ten_thousand_select">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="60"
                    height="60"
                    viewBox="0 0 122 122"
                  >
                    <defs>
                      <linearGradient
                        id="linear-gradient"
                        x1="0.5"
                        y1="0.123"
                        x2="0.5"
                        y2="1"
                        gradientUnits="objectBoundingBox"
                      >
                        <stop
                          offset="0"
                          stop-color="#fff"
                          stop-opacity="0.451"
                        />
                        <stop
                          offset="1"
                          stop-color="gray"
                          stop-opacity="0.878"
                        />
                      </linearGradient>
                    </defs>
                    <g
                      id="Group_23452"
                      data-name="Group 23452"
                      transform="translate(-968 -794)"
                    >
                      <g
                        id="Ellipse_11"
                        data-name="Ellipse 11"
                        transform="translate(968 794)"
                        fill="#fff"
                        stroke="#707070"
                        stroke-width="1"
                      >
                        <circle cx="61" cy="61" r="61" stroke="none" />
                        <circle cx="61" cy="61" r="60.5" fill="none" />
                      </g>
                      <g
                        id="Ellipse_16"
                        data-name="Ellipse 16"
                        transform="translate(973 799)"
                        fill="#fff"
                        stroke="#cccaca"
                        stroke-linecap="round"
                        stroke-width="1"
                        stroke-dasharray="7"
                      >
                        <circle cx="56" cy="56" r="56" stroke="none" />
                        <circle cx="56" cy="56" r="55.5" fill="none" />
                      </g>
                      <text
                        id="_10000"
                        data-name="10000"
                        transform="translate(983 869)"
                        fill="#d4d4d4"
                        font-size="32"
                        font-family="TatweerAlRiyadh-Regular, Tatweer Al Riyadh"
                      >
                        <tspan x="0" y="0">10000</tspan>
                      </text>
                      <circle
                        id="Ellipse_24"
                        data-name="Ellipse 24"
                        cx="61"
                        cy="61"
                        r="61"
                        transform="translate(968 794)"
                        fill="url(#linear-gradient)"
                      />
                      <g id="Lock" transform="translate(1006.763 835.926)">
                        <path
                          id="Path_18658"
                          data-name="Path 18658"
                          d="M31.136,15.124H30.023V11.787a7.787,7.787,0,0,0-15.574,0v3.337H13.337A3.341,3.341,0,0,0,10,18.461V31.81a3.341,3.341,0,0,0,3.337,3.337h17.8a3.341,3.341,0,0,0,3.337-3.337V18.461A3.341,3.341,0,0,0,31.136,15.124ZM16.674,11.787a5.562,5.562,0,0,1,11.124,0v3.337H16.674ZM32.248,31.81a1.114,1.114,0,0,1-1.112,1.112h-17.8a1.114,1.114,0,0,1-1.112-1.112V18.461a1.114,1.114,0,0,1,1.112-1.112h17.8a1.114,1.114,0,0,1,1.112,1.112Z"
                          fill="#1b325f"
                        />
                        <path
                          id="Path_18659"
                          data-name="Path 18659"
                          d="M30.225,35a2.218,2.218,0,0,0-1.112,4.14v2.534a1.112,1.112,0,1,0,2.225,0V39.14A2.218,2.218,0,0,0,30.225,35Z"
                          transform="translate(-7.988 -13.758)"
                          fill="#1b325f"
                        />
                      </g>
                    </g>
                  </svg>
                </label>
                <!--end::Option-->
              </div>
              <!--end::Col-->

              <!--begin::Col-->
              <div class="">
                <!--begin::Option-->
                <input
                  type="radio"
                  class="btn-check"
                  name="invoice_plan"
                  value="other"
                  disabled
                  id="kt_other_select"
                />
                <label for="kt_other_select">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="60"
                    height="60"
                    viewBox="0 0 122 122"
                  >
                    <defs>
                      <linearGradient
                        id="linear-gradient"
                        x1="0.5"
                        y1="0.123"
                        x2="0.5"
                        y2="1"
                        gradientUnits="objectBoundingBox"
                      >
                        <stop
                          offset="0"
                          stop-color="#fff"
                          stop-opacity="0.451"
                        />
                        <stop
                          offset="1"
                          stop-color="gray"
                          stop-opacity="0.878"
                        />
                      </linearGradient>
                    </defs>
                    <g
                      id="Group_23453"
                      data-name="Group 23453"
                      transform="translate(-830 -794)"
                    >
                      <g
                        id="Ellipse_12"
                        data-name="Ellipse 12"
                        transform="translate(830 794)"
                        fill="#fff"
                        stroke="#707070"
                        stroke-width="1"
                      >
                        <circle cx="61" cy="61" r="61" stroke="none" />
                        <circle cx="61" cy="61" r="60.5" fill="none" />
                      </g>
                      <g
                        id="Ellipse_17"
                        data-name="Ellipse 17"
                        transform="translate(835 799)"
                        fill="#fff"
                        stroke="#cccaca"
                        stroke-linecap="round"
                        stroke-width="1"
                        stroke-dasharray="7"
                      >
                        <circle cx="56" cy="56" r="56" stroke="none" />
                        <circle cx="56" cy="56" r="55.5" fill="none" />
                      </g>
                      <text
                        id="أخرى"
                        transform="translate(866 864)"
                        fill="#d4d4d4"
                        font-size="32"
                        font-family="TatweerAlRiyadh-Regular, Tatweer Al Riyadh"
                      >
                        <tspan x="0" y="0">أخرى</tspan>
                      </text>
                      <circle
                        id="Ellipse_25"
                        data-name="Ellipse 25"
                        cx="61"
                        cy="61"
                        r="61"
                        transform="translate(830 794)"
                        fill="url(#linear-gradient)"
                      />
                      <g id="Lock" transform="translate(868.763 835.926)">
                        <path
                          id="Path_18658"
                          data-name="Path 18658"
                          d="M31.136,15.124H30.023V11.787a7.787,7.787,0,0,0-15.574,0v3.337H13.337A3.341,3.341,0,0,0,10,18.461V31.81a3.341,3.341,0,0,0,3.337,3.337h17.8a3.341,3.341,0,0,0,3.337-3.337V18.461A3.341,3.341,0,0,0,31.136,15.124ZM16.674,11.787a5.562,5.562,0,0,1,11.124,0v3.337H16.674ZM32.248,31.81a1.114,1.114,0,0,1-1.112,1.112h-17.8a1.114,1.114,0,0,1-1.112-1.112V18.461a1.114,1.114,0,0,1,1.112-1.112h17.8a1.114,1.114,0,0,1,1.112,1.112Z"
                          fill="#1b325f"
                        />
                        <path
                          id="Path_18659"
                          data-name="Path 18659"
                          d="M30.225,35a2.218,2.218,0,0,0-1.112,4.14v2.534a1.112,1.112,0,1,0,2.225,0V39.14A2.218,2.218,0,0,0,30.225,35Z"
                          transform="translate(-7.988 -13.758)"
                          fill="#1b325f"
                        />
                      </g>
                    </g>
                  </svg>
                </label>
                <!--end::Option-->
              </div>
              <!--end::Col-->
            </div>
            <!--end::Row-->
          </div>
          <div class="text-center mt-14">
            <button
              type="submit"
              class="btn btn-lg px-18 fs-1 btn-primary"
              v-if="currentStepIndex === 2"
              @click="signUp()"
            >
              <span class="indicator-label">
                {{ $t("signUp") }}
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

            <!--begin::Link-->
            <div
              class="text-gray-400 text-center fw-bold fs-4 mt-3"
              v-if="currentStepIndex === 2"
            >
              {{ $t("already_registered") }}

              <router-link
                :to="{ name: 'sign-in' }"
                class="fw-bolder text-decoration-underline"
              >
                {{ $t("signIn") }}
              </router-link>
            </div>
            <!--end::Link-->

            <button
              type="button"
              @click.prevent="currentStepIndex = 2"
              class="btn btn-lg px-18 fs-1 btn-primary"
              v-else
            >
              {{ $t("continue") }}
            </button>
          </div>
        </el-form>
        <!--end::Form-->
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Form-->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, nextTick, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Actions } from "@/store/enums/StoreEnums";
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
  gap: 5px;
}
.btn-check {
  &:checked + .btn {
    border-color: #f26c4f;
  }
}
</style>
