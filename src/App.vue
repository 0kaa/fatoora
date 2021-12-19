<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, nextTick, computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n/index";
import { Mutations } from "@/store/enums/StoreEnums";
import { initializeComponents } from "@/core/plugins/keenthemes";

export default defineComponent({
  name: "app",
  setup() {
    const store = useStore();
    const i18n = useI18n();
    const currentLanguage = computed(() => {
      return store.getters.getLanguage;
    });

    onMounted(() => {
      /**
       * this is to override the layout config using saved data from localStorage
       * remove this to use config only from static config (@/core/config/DefaultLayoutConfig.ts)
       */
      // store.commit(Mutations.OVERRIDE_LAYOUT_CONFIG);
      store.commit(Mutations.SET_LANG, localStorage.getItem("lang") || "en");

      nextTick(() => {
        initializeComponents();
      });
      if (i18n.locale.value == "ar") {
        document.body.classList.add("rtl");
      } else {
        document.body.classList.remove("rtl");
      }
    });

    watch(currentLanguage, (newLanguage) => {
      console.log(newLanguage);
      if (newLanguage == "ar") {
        document.body.classList.add("rtl");
      } else {
        document.body.classList.remove("rtl");
      }
    });
  },
});
</script>

<style lang="scss">
@import "~bootstrap-icons/font/bootstrap-icons.css";
@import "~apexcharts/dist/apexcharts.css";
@import "~quill/dist/quill.snow.css";
@import "~animate.css";
@import "~sweetalert2/dist/sweetalert2.css";
@import "~nouislider/distribute/nouislider.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";
@import "~socicon/css/socicon.css";
@import "~line-awesome/dist/line-awesome/css/line-awesome.css";
@import "~@yaireo/tagify/src/tagify.scss";
@import "~dropzone/dist/dropzone.css";
@import "~@vueform/multiselect/themes/default.css";
@import "~prism-themes/themes/prism-shades-of-purple.css";
@import "~element-plus/lib/theme-chalk/index.css";

// Main demo style scss
@import "assets/sass/plugins";
@import "assets/sass/style";

//RTL version styles
@import "assets/css/style.rtl.css";
</style>
