<template>
  <!--begin::Navbar-->
  <div class="card mb-5 mb-xl-10">
    <div class="card-body pt-9 pb-0">
      <!--begin::Details-->
      <div class="d-flex flex-wrap flex-sm-nowrap mb-3">
        <!--begin: Pic-->
        <div class="me-7 mb-4">
          <div
            class="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative"
          >
            <img :src="user?.market_icon" alt="image" />
            <div
              class="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px"
            ></div>
          </div>
        </div>
        <!--end::Pic-->

        <!--begin::Info-->
        <div class="flex-grow-1">
          <!--begin::Title-->
          <div
            class="d-flex justify-content-between align-items-start flex-wrap mb-2"
          >
            <!--begin::User-->
            <div class="d-flex flex-column">
              <!--begin::Name-->
              <div class="d-flex align-items-center mb-2">
                <a
                  href="#"
                  class="text-gray-800 text-hover-primary fs-2 fw-bolder me-1"
                >
                  {{ user?.name }}
                </a>
                <a href="#">
                  <span class="svg-icon svg-icon-1 svg-icon-primary">
                    <inline-svg src="/media/icons/duotune/general/gen026.svg" />
                  </span>
                </a>

                <a
                  href="#"
                  class="btn btn-sm btn-light-success fw-bolder ms-2 fs-8 py-1 px-3"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_upgrade_plan"
                >
                  {{ $t("upgradePlanToPro") }}
                </a>
              </div>
              <!--end::Name-->

              <!--begin::Info-->
              <div class="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
                <a
                  href="#"
                  class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"
                >
                  <span class="svg-icon svg-icon-4 me-1">
                    <inline-svg
                      src="/media/icons/duotune/communication/com006.svg"
                    />
                  </span>
                  Developer
                </a>
                <a
                  href="#"
                  class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2"
                >
                  <span class="svg-icon svg-icon-4 me-1">
                    <inline-svg src="/media/icons/duotune/general/gen018.svg" />
                  </span>
                  {{ user?.market_address_ar }}
                </a>
                <a
                  href="#"
                  class="d-flex align-items-center text-gray-400 text-hover-primary mb-2"
                >
                  <span class="svg-icon svg-icon-4 me-1">
                    <inline-svg
                      src="/media/icons/duotune/communication/com011.svg"
                    />
                  </span>
                  {{ user?.email }}
                </a>
              </div>
              <!--end::Info-->
            </div>
            <!--end::User-->

            <!--begin::Actions-->
            <div class="d-flex my-4">
              <!--begin::Menu-->
              <div class="me-0">
                <button
                  class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                  data-kt-menu-flip="top-end"
                >
                  <i class="bi bi-three-dots fs-3"></i>
                </button>
                <Dropdown2></Dropdown2>
              </div>
              <!--end::Menu-->
            </div>
            <!--end::Actions-->
          </div>
          <!--end::Title-->

          <!--begin::Stats-->
          <div class="d-flex flex-wrap flex-stack">
            <!--begin::Wrapper-->
            <div class="d-flex flex-column flex-grow-1 pe-8">
              <!--begin::Stats-->
              <div class="d-flex flex-wrap">
                <!--begin::Stat-->
                <div
                  class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3"
                >
                  <!--begin::Number-->
                  <div class="d-flex align-items-center">
                    <span class="svg-icon svg-icon-success me-2">
                      <inline-svg
                        src="/media/icons/duotune/arrows/arr066.svg"
                      />
                    </span>
                    <div
                      class="fs-2 fw-bolder"
                      data-kt-countup="true"
                      data-kt-countup-value="4500"
                      data-kt-countup-prefix="$"
                    >
                      4500$
                    </div>
                  </div>
                  <!--end::Number-->

                  <!--begin::Label-->
                  <div class="fw-bold fs-6 text-gray-400">Earnings</div>
                  <!--end::Label-->
                </div>
                <!--end::Stat-->

                <!--begin::Stat-->
                <div
                  class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3"
                >
                  <!--begin::Number-->
                  <div class="d-flex align-items-center justify-content-center">
                    <span class="svg-icon svg-icon-3 svg-icon-danger me-2">
                      <inline-svg
                        src="/media/icons/duotune/arrows/arr065.svg"
                      />
                    </span>
                    <div
                      class="fs-2 fw-bolder"
                      data-kt-countup="true"
                      data-kt-countup-value="75"
                    >
                      75
                    </div>
                  </div>
                  <!--end::Number-->

                  <!--begin::Label-->
                  <div class="fw-bold fs-6 text-gray-400 text-center">
                    {{ $t("invoices") }}
                  </div>
                  <!--end::Label-->
                </div>
                <!--end::Stat-->

                <!--begin::Stat-->
                <div
                  class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3"
                >
                  <!--begin::Number-->
                  <div class="d-flex align-items-center">
                    <span class="svg-icon svg-icon-3 svg-icon-success me-2">
                      <inline-svg
                        src="/media/icons/duotune/arrows/arr066.svg"
                      />
                    </span>
                    <div
                      class="fs-2 fw-bolder"
                      data-kt-countup="true"
                      data-kt-countup-value="60"
                      data-kt-countup-prefix="%"
                    >
                      60%
                    </div>
                  </div>
                  <!--end::Number-->

                  <!--begin::Label-->
                  <div class="fw-bold fs-6 text-gray-400">Success Rate</div>
                  <!--end::Label-->
                </div>
                <!--end::Stat-->
              </div>
              <!--end::Stats-->
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Stats-->
        </div>
        <!--end::Info-->
      </div>
      <!--end::Details-->

      <!--begin::Navs-->
      <div class="d-flex overflow-auto h-55px">
        <ul
          class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap"
        >
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              :to="{
                name: 'account-overview',
                params: { lang },
              }"
              class="nav-link text-active-primary me-6"
              active-class="active"
            >
              {{ $t("overview") }}
            </router-link>
          </li>
          <!--end::Nav item-->
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              :to="{
                name: 'account-settings',
                params: { lang },
              }"
              class="nav-link text-active-primary me-6"
              active-class="active"
            >
              {{ $t("settings") }}
            </router-link>
          </li>
          <!--end::Nav item-->
        </ul>
      </div>
      <!--begin::Navs-->
    </div>
  </div>
  <!--end::Navbar-->
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import Dropdown2 from "@/components/dropdown/Dropdown2.vue";

export default defineComponent({
  name: "kt-account",
  components: {
    Dropdown2,
  },
  setup() {
    const store = useStore();
    const lang = computed(() => store.getters.getLanguage);
    const user = computed(() => store.getters.currentUser);
    return { lang, user };
  },
});
</script>
