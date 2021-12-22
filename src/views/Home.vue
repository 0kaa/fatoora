<template>
  <div class="launcher">
    <div class="d-flex flex-column flex-column-fluid mb-5 mb-lg-10">
      <!--begin::Row-->
      <div class="row g-7 w-xxl-850px">
        <!--begin::Brand-->
        <div
          class="d-flex align-items-center justify-content-xxl-center justify-content-between pt-10 pt-xxl-0 mb-10 mb-xxl-0 h-xxl-225px"
        >
          <!--begin::Logo-->
          <Logo></Logo>
          <!--end::Logo-->
          <!--begin::Sidebar toggle-->
          <div
            class="btn btn-icon btn-active-color-primary w-30px h-30px d-xxl-none me-4 ms-n15"
            id="kt_sidebar_toggle"
          >
            <!--begin::Svg Icon | path: icons/duotune/abstract/abs015.svg-->
            <span class="svg-icon svg-icon-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                  fill="black"
                />
                <path
                  opacity="0.3"
                  d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                  fill="black"
                />
              </svg>
            </span>
            <!--end::Svg Icon-->
          </div>
          <!--end::Sidebar toggle-->
        </div>
        <!--end::Brand-->
        <!--begin::Col-->
        <div class="col-xxl-5">
          <UserMenu></UserMenu>
        </div>
        <!--end::Col-->
        <!--begin::Col-->
        <div class="col-xxl-7">
          <!--begin::Row-->
          <div class="row g-lg-7">
            <!--begin::Col-->
            <div class="col-sm-6">
              <!--begin::Card-->
              <CardCreateModal
                :buttonText="$t('create_account')"
                image="media/illustrations/sigma-1/4.png"
                modalId="kt_modal_create_account"
                color="#f9666e"
              ></CardCreateModal>
              <!--end::Card-->
            </div>
            <!--end::Col-->
            <!--begin::Col-->
            <div class="col-sm-6">
              <!--begin::Card-->

              <CardCreateModal
                :buttonText="$t('create_invoice')"
                image="media/illustrations/sigma-1/5.png"
                modalId="kt_modal_create_invoice"
                color="#35d29a"
              ></CardCreateModal>
              <!--end::Card-->
            </div>
            <!--end::Col-->
          </div>
          <!--end::Row-->
          <!--begin::Card-->
          <div
            class="card border-0 shadow-none min-h-200px"
            style="background-color: #d5d83d"
          >
            <!--begin::Card body-->
            <div class="card-body d-flex flex-center flex-wrap">
              <!--begin::Illustrations-->
              <img
                class="mw-100 h-200px me-4 mb-5 mb-lg-0"
                src="media/illustrations/sigma-1/11.png"
              />
              <!--end::Illustrations-->
              <!--begin::Wrapper-->
              <div
                class="d-flex flex-column align-items-center align-items-md-start flex-grow-1"
              >
                <!--begin::Heading-->
                <h3 class="text-gray-900 fw-boldest text-uppercase mb-5">
                  Quick Guide
                </h3>
                <!--end::Heading-->
                <!--begin::List-->
                <div class="text-gray-800 mb-5 text-center text-md-start">
                  Explore our powerful <br />documentation
                </div>
                <!--end::List-->
                <!--begin::Link-->
                <a
                  href="/metronic8/demo10/../demo10/documentation/getting-started.html"
                  class="btn btn-hover-rise text-gray-900 text-uppercase fs-7 fw-bolder"
                  style="background-color: #ebee51"
                  >Learn More</a
                >
                <!--end::Link-->
              </div>
              <!--end::Wrapper-->
            </div>
            <!--end::Card body-->
          </div>
          <!--end::Card-->
        </div>
        <!--end::Col-->
      </div>
      <!--end::Row-->
    </div>
    <SidebarDefault></SidebarDefault>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";
import CardCreateModal from "../components/cards/CardCreateModal.vue";
import UserMenu from "@/layout/header/partials/UserMenu.vue";
import Logo from "@/components/Logo.vue";
import SidebarDefault from "@/components/sidebar/Sidebar-default.vue";

export default defineComponent({
  name: "dashboard",
  components: {
    CardCreateModal,
    UserMenu,
    Logo,
    SidebarDefault,
  },
  setup() {
    onMounted(() => {
      setCurrentPageTitle("Home");
      document.body.classList.add("home");
    });

    onUnmounted(() => {
      document.body.classList.remove("home");
    });
  },
});
</script>
<style>
body.home {
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("/media/misc/page-bg.jpg");
}
.launcher .sidebar {
  position: fixed;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 425px;
  top: 50px;
  right: 50px;
  bottom: 50px;
  background-color: rgba(19, 0, 97, 0.3);
  border-radius: 1.75rem;
}
.launcher .sidebar .timeline .timeline-icon .symbol-label {
  background-color: #244cab;
}
@media (max-width: 1400px) {
  .launcher .sidebar {
    background-color: rgba(19, 0, 97, 0.75);
    top: 15px;
    right: 15px;
    bottom: 15px;
  }
}
</style>
