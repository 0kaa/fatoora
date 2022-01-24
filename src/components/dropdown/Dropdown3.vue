<template>
  <!--begin::Menu-->
  <div
    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold py-4 w-250px fs-6"
    data-kt-menu="true"
  >
    <!--begin::Menu item-->
    <div class="menu-item px-5 mb-2">
      <a
        @click.prevent="setLang('en')"
        href="#"
        class="menu-link d-flex px-5"
        :class="{ active: currentLanguage('en') }"
      >
        <span class="symbol symbol-20px me-4">
          <img
            class="rounded-1"
            src="/media/flags/united-states.svg"
            alt="metronic"
          />
        </span>
        English
      </a>
    </div>
    <!--end::Menu item-->
    <!--begin::Menu item-->
    <div class="menu-item px-5">
      <a
        @click.prevent="setLang('ar')"
        href="#"
        class="menu-link d-flex px-5"
        :class="{ active: currentLanguage('ar') }"
      >
        <span class="symbol symbol-20px me-4">
          <img
            class="rounded-1"
            src="/media/flags/saudi-arabia.svg"
            alt="metronic"
          />
        </span>
        Arabic
      </a>
    </div>
    <!--end::Menu item-->
  </div>
  <!--end::Menu-->
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useI18n } from "vue-i18n/index";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  name: "dropdown-3",
  components: {},
  setup() {
    const router = useRouter();
    const route = useRoute();
    const i18n = useI18n();
    const store = useStore();
    const lang = localStorage.getItem("lang") || store.getters.getLanguage;
    i18n.locale.value = lang;
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
    const setLang = (lang) => {
      i18n.locale.value = lang;
      if (i18n.locale.value == "ar") {
        document.body.classList.add("rtl");
      } else {
        document.body.classList.remove("rtl");
      }
      store.commit("setLang", lang);
      router.push({ name: route.name?.toString() });
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
