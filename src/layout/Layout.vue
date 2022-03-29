<template>
  <KTLoader v-if="loaderEnabled" :logo="loaderLogo"></KTLoader>

  <!-- begin:: Body -->
  <div class="page d-flex flex-row flex-column-fluid">
    <div id="kt_wrapper" class="wrapper d-flex flex-column flex-row-fluid">
      <!-- begin:: Header -->

      <!-- ktheader -->
      <div class="container-xxl">
        <div
          v-if="$route.path !== '/account/settings' && user.active == false"
          class="alert alert-danger w-full mt-2 d-flex align-items-center justify-content-between p-4 mx-auto flex-wrap z-index-3"
        >
          <div class="d-flex align-items-center flex-wrap" style="gap: 20px">
            <span class="svg-icon svg-icon-2hx svg-icon-danger me-4">
              <inline-svg src="/media/icons/duotune/general/gen044.svg" />
            </span>

            <div class="d-flex flex-column">
              <h4 class="mb-1 text-dark">This is an alert</h4>
              <span class="text-dark"
                >The alert component can be used to highlight certain parts of
                your page for higher content visibility.</span
              >
            </div>
          </div>
          <router-link
            :to="{ name: 'account-settings' }"
            class="btn btn-bg-danger text-white d-block"
          >
            Go settings
          </router-link>
        </div>
      </div>

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
  <KTCreateInvoiceModal></KTCreateInvoiceModal>
  <KTCreateAccountModal></KTCreateAccountModal>
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
    const user = computed(() => store.getters.currentUser);

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

    onMounted(() => {
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
      user,
    };
  },
});
</script>
