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
      class="btn btn-primary ps-7"
      data-kt-menu-trigger="click"
      data-kt-menu-attach="parent"
      data-kt-menu-placement="bottom-end"
    >
      <img
        class="w-15px h-15px rounded-1 ms-2"
        :src="currentLangugeLocale.flag"
        alt="metronic"
      />
      <span class="svg-icon svg-icon-2 me-0">
        <inline-svg src="media/icons/duotune/arrows/arr072.svg" />
      </span>
    </a>
    <Dropdown3></Dropdown3>
    <!--end::Menu-->

    <!--begin::Menu item-->
    <div
      class="menu-item px-5"
      data-kt-menu-trigger="hover"
      data-kt-menu-placement="left-start"
      data-kt-menu-flip="center, top"
    >
      <router-link to="/pages/profile/overview" class="menu-link px-5">
        <span class="menu-title position-relative">
          <span
            class="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0"
          >
            <img
              class="w-15px h-15px rounded-1 ms-2"
              :src="currentLangugeLocale.flag"
              alt="metronic"
            />
          </span>
        </span>
      </router-link>

      <!--begin::Menu sub-->
      <div class="menu-sub menu-sub-dropdown w-175px py-4">
        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <a
            @click.prevent="setLang('en')"
            href="#"
            class="menu-link d-flex px-5"
            :class="{ active: currentLanguage('en') }"
          >
            <span class="symbol symbol-20px me-4">
              <img
                class="rounded-1"
                src="media/flags/united-states.svg"
                alt="metronic"
              />
            </span>
          </a>
        </div>
        <!--end::Menu item-->

        <!--begin::Menu item-->
        <div class="menu-item px-3">
          <a
            @click.prevent="setLang('ar')"
            href="#"
            class="menu-link d-flex px-5"
            :class="{ active: currentLanguage('ar') }"
          >
            <span class="symbol symbol-20px me-4">
              <img
                class="rounded-1"
                src="media/flags/saudi-arabia.svg"
                alt="metronic"
              />
            </span>
          </a>
        </div>
        <!--end::Menu item-->
      </div>
      <!--end::Menu sub-->
    </div>
    <!--end::Menu item-->
  </div>
  <!--end::Toolbar wrapper-->
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useI18n } from "vue-i18n/index";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";

export default defineComponent({
  name: "topbar",
  components: { Dropdown3 },
  setup() {
    const router = useRouter();
    const i18n = useI18n();
    const store = useStore();

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
      router.push({ name: "home", params: { lang: i18n.locale.value } });
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
    };
  },
});
</script>
