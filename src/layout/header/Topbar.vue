<template>
  <!--begin::Toolbar wrapper-->
  <div class="d-flex flex-shrink-0">
    <!--begin::Invite user-->
    <div class="d-flex ms-3">
      <a
        href="#"
        class="btn btn-flex flex-center btn-bg-white btn-text-gray-500 btn-active-color-primary w-40px w-md-auto h-40px px-0 px-md-6"
        tooltip="New Customer"
        data-bs-toggle="modal"
        data-bs-target="#kt_modal_create_account"
      >
        <span class="svg-icon svg-icon-2 svg-icon-primary me-0 me-md-2">
          <inline-svg src="media/icons/duotune/arrows/arr075.svg" />
        </span>
        <span class="d-none d-md-inline">New Customer</span>
      </a>
    </div>
    <!--end::Invite user-->

    <!--begin::Create app-->
    <div class="d-flex ms-3">
      <a
        href="#"
        class="btn btn-flex flex-center btn-bg-white btn-text-gray-500 btn-active-color-primary w-40px w-md-auto h-40px px-0 px-md-6"
        tooltip="New Invoice"
        data-bs-toggle="modal"
        data-bs-target="#kt_modal_create_invoice"
        id="kt_toolbar_primary_button"
      >
        <span class="svg-icon svg-icon-2 svg-icon-primary me-0 me-md-2">
          <inline-svg src="media/icons/duotune/general/gen005.svg" />
        </span>
        <span class="d-none d-md-inline">New Invoice</span>
      </a>
    </div>
    <!--end::Create app-->
  </div>
  <!--end::Toolbar wrapper-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "topbar",
  components: {},
});
</script>
