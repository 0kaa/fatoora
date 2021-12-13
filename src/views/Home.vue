<template>
  <div class="d-flex flex-column flex-column-fluid mb-5 mb-lg-10">
    <!--begin::Brand-->
    <div class="d-flex flex-center pt-10 pt-lg-0 mb-10 mb-lg-0 h-lg-225px">
      <!--begin::Logo-->
      <a href="/metronic8/demo10/../demo10/index.html">
        <img alt="Logo" src="media/logos/logo-3.svg" class="h-75px h-lg-80px" />
      </a>
      <!--end::Logo-->
    </div>
    <!--end::Brand-->
    <!--begin::Row-->
    <div class="row g-7 w-xxl-850px">
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
              buttonText="Create Account"
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
              buttonText="Create Invoice"
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
    <KTCreateAccountModal></KTCreateAccountModal>
    <KTCreateInvoiceModal></KTCreateInvoiceModal>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";

import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";
import CardCreateModal from "../components/cards/CardCreateModal.vue";
import UserMenu from "@/layout/header/partials/UserMenu.vue";

export default defineComponent({
  name: "dashboard",
  components: {
    CardCreateModal,
    UserMenu,
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
</style>
