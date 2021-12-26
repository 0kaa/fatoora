<template>
  <KTLoader v-if="loaderEnabled" :logo="loaderLogo"></KTLoader>

  <!-- begin:: Body -->
  <div class="page d-flex flex-row flex-column-fluid">
    <div id="kt_wrapper" class="wrapper d-flex flex-column flex-row-fluid">
      <!-- begin:: Header -->

      <!-- ktheader -->

      <KTHeader
        v-if="route.name !== 'home'"
        :breadcrumbs="breadcrumbs"
      ></KTHeader>
      <!-- begin:: Content -->
      <div id="kt_content" class="content d-flex flex-column flex-column-fluid">
        <!-- begin:: Content Body -->
        <div
          id="kt_content_container"
          :class="{
            'container-fluid': contentWidthFluid,
            'container-xxl': !contentWidthFluid,
          }"
        >
          <router-view />
        </div>
        <!-- end:: Content Body -->
      </div>
      <!-- end:: Content -->
      <KTFooter></KTFooter>
    </div>
  </div>
  <!-- end:: Body -->
  <KTScrollTop></KTScrollTop>
  <KTCreateAccountModal></KTCreateAccountModal>
  <KTCreateInvoiceModal></KTCreateInvoiceModal>
  <KTUpgradePlanModal></KTUpgradePlanModal>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, watch, nextTick } from "vue";
import { useStore } from "vuex";
import { useI18n } from "vue-i18n/index";
import { useRoute, useRouter } from "vue-router";
import KTHeader from "@/layout/header/Header.vue";
import KTFooter from "@/layout/footer/Footer.vue";
import HtmlClass from "@/core/services/LayoutService";
import KTScrollTop from "@/layout/extras/ScrollTop.vue";
import KTLoader from "@/components/Loader.vue";
import KTCreateAccountModal from "@/components/modals/wizards/CreateAccountModal.vue";
import KTCreateInvoiceModal from "@/components/modals/wizards/CreateInvoiceModal.vue";
import KTUpgradePlanModal from "@/components/modals/general/UpgradePlanModal.vue";

import { Actions } from "@/store/enums/StoreEnums";
import { MenuComponent } from "@/assets/ts/components/index";
import { reinitializeComponents } from "@/core/plugins/keenthemes";
import { removeModalBackdrop } from "@/core/helpers/dom";
import {
  toolbarDisplay,
  loaderEnabled,
  contentWidthFluid,
  loaderLogo,
  asideEnabled,
  subheaderDisplay,
  themeLightLogo,
  themeDarkLogo,
} from "@/core/helpers/config";

export default defineComponent({
  name: "Layout",
  components: {
    // KTAside,
    KTHeader,
    KTFooter,
    KTScrollTop,
    KTCreateInvoiceModal,
    KTCreateAccountModal,
    KTUpgradePlanModal,
    KTLoader,
  },
  setup() {
    const store = useStore();
    const route = useRoute();
    const i18n = useI18n();
    const router = useRouter();

    // show page loading
    store.dispatch(Actions.ADD_BODY_CLASSNAME, "page-loading");

    // initialize html element classes
    HtmlClass.init();

    const pageTitle = computed(() => {
      return store.getters.pageTitle;
    });

    const breadcrumbs = computed(() => {
      return store.getters.pageBreadcrumbPath;
    });

    const currentLanguage = computed(() => {
      return store.getters.getLanguage;
    });

    onMounted(() => {
      //check if current user is authenticated
      if (!store.getters.isUserAuthenticated) {
        router.push({
          name: "sign-in",
          params: { lang: currentLanguage.value },
        });
      }
      nextTick(() => {
        reinitializeComponents();
      });

      // Simulate the delay page loading
      setTimeout(() => {
        // Remove page loader after some time
        store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "page-loading");
      }, 500);
    });

    watch(
      () => route.path,
      () => {
        MenuComponent.hideDropdowns(undefined);
        if (i18n.locale.value == "ar") {
          document.body.classList.add("rtl");
        } else {
          document.body.classList.remove("rtl");
        }
        // check if current user is authenticated
        if (!store.getters.isUserAuthenticated) {
          router.push({
            name: "sign-in",
            params: { lang: currentLanguage.value },
          });
        }

        nextTick(() => {
          reinitializeComponents();
        });
        removeModalBackdrop();
      }
    );

    return {
      toolbarDisplay,
      loaderEnabled,
      contentWidthFluid,
      loaderLogo,
      asideEnabled,
      subheaderDisplay,
      pageTitle,
      breadcrumbs,
      route,
      themeLightLogo,
      themeDarkLogo,
    };
  },
});
</script>
