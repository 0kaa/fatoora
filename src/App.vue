<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, nextTick, computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Mutations, Actions } from "@/store/enums/StoreEnums";
import { initializeComponents } from "@/core/plugins/keenthemes";

export default defineComponent({
  name: "app",
  setup() {
    const store = useStore();
    const router = useRouter();

    const currentLanguage = computed(() => {
      return store.getters.getLanguage;
    });

    onMounted(() => {
      store.dispatch(Actions.VERIFY_AUTH);
      store.commit(
        Mutations.SET_LANG,
        localStorage.getItem("lang") || currentLanguage.value
      );

      nextTick(() => {
        initializeComponents();
        //check if current user is authenticated
        if (!store.getters.isUserAuthenticated) {
          router.push({
            name: "sign-in",
          });
        }
      });
      if (currentLanguage.value == "ar") {
        document.body.classList.add("rtl");
      } else {
        document.body.classList.remove("rtl");
      }
    });

    watch(currentLanguage, (newLanguage) => {
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
// @import "assets/css/style.rtl.css";
</style>
