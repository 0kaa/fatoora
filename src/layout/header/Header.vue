<template>
  <!--begin::Header-->
  <div id="kt_header" class="header">
    <!--begin::Container-->
    <div
      class="d-flex align-items-center justify-content-between"
      :class="{
        'container-fluid': !headerWidthFluid,
        'container-xxl': headerWidthFluid,
      }"
      id="kt_header_container"
    >
      <div
        id="kt_page_title"
        data-kt-swapper="true"
        data-kt-swapper-mode="prepend"
        data-kt-swapper-parent="{default: '#kt_content_container', lg: '#kt_header_container'}"
        class="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-lg-2 pb-5 pb-lg-0"
      >
        <!--begin::Heading-->
        <h1 class="text-white fw-bolder my-0 fs-2">{{ title }}</h1>
        <!--end::Heading-->
        <!--begin::Breadcrumb-->
        <ul v-if="breadcrumbs" class="breadcrumb fw-bold fs-base my-1">
          <li class="breadcrumb-item text-muted">
            <router-link :to="{ name: 'home' }" class="text-muted">
              {{ $t("home") }}
            </router-link>
          </li>
          <template v-for="(item, index) in breadcrumbs" :key="index">
            <li class="breadcrumb-item text-dark">
              {{ $t(item.toLowerCase()) }}
            </li>
          </template>
        </ul>
        <!--end::Breadcrumb-->
      </div>

      <!--begin::Wrapper-->
      <div class="d-flex d-lg-none align-items-center ms-n2 me-2"></div>
      <!--end::Wrapper-->

      <KTTopbar></KTTopbar>
    </div>
    <!--end::Container-->
  </div>
  <!--end::Header-->
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import KTTopbar from "@/layout/header/Topbar.vue";
import { headerWidthFluid } from "@/core/helpers/config";
import { headerFixed, headerFixedOnMobile } from "@/core/helpers/config";

export default defineComponent({
  name: "KTHeader",
  props: {
    title: String,
    breadcrumbs: Array,
  },
  components: {
    KTTopbar,
  },

  setup() {
    const isHeaderSticky = computed(() => {
      if (window.innerWidth > 768) {
        return headerFixed.value;
      } else {
        return headerFixedOnMobile.value;
      }
    });
    return {
      headerWidthFluid,
      isHeaderSticky,
    };
  },
});
</script>
