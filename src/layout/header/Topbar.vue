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

    <!--begin::Action menu-->
    <a
      href="#"
      class="btn btn-flex flex-center btn-bg-white btn-text-gray-500 btn-active-color-primary w-40px w-md-auto h-40px px-0 px-md-6"
      data-kt-menu-trigger="hover"
      data-kt-menu-attach="parent"
      :data-kt-menu-placement="
        currentLang == 'en' ? 'bottom-end' : 'bottom-start'
      "
    >
      <img
        class="w-20px h-20px rounded-1 ms-2"
        :src="currentLangugeLocale.flag"
        alt="metronic"
      />
      <span class="svg-icon svg-icon-2 me-0">
        <inline-svg src="media/icons/duotune/arrows/arr072.svg" />
      </span>
    </a>
    <Dropdown3></Dropdown3>

    <!--end::Menu-->
  </div>
  <!--end::Toolbar wrapper-->
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useI18n } from "vue-i18n/index";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";

export default defineComponent({
  name: "topbar",
  components: { Dropdown3 },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const i18n = useI18n();
    const store = useStore();

    const currentLang = computed(() => {
      return store.getters.getLanguage;
    });

    const countries = {
      en: {
        flag: "media/flags/united-states.svg",
        name: "English",
      },
      ar: {
        flag: "media/flags/saudi-arabia.svg",
        name: "Arabic",
      },
    };
    const setLang = (lang) => {
      i18n.locale.value = lang;
      if (i18n.locale.value == "ar") {
        document.body.classList.add("rtl");
      } else {
        document.body.classList.remove("rtl");
      }
      store.commit("setLang", lang);
      router.push({
        name: route.name?.toString(),
        params: { lang: i18n.locale.value },
      });
    };

    const currentLanguage = (lang) => {
      return i18n.locale.value === lang;
    };

    const currentLangugeLocale = computed(() => {
      return countries[i18n.locale.value];
    });

    return {
      setLang,
      currentLanguage,
      currentLangugeLocale,
      countries,
      currentLang,
    };
  },
});
</script>
