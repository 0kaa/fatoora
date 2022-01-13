<template>
  <!--begin::details View-->
  <div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
    <!--begin::Card header-->
    <div class="card-header cursor-pointer">
      <!--begin::Card title-->
      <div class="card-title m-0">
        <h3 class="fw-bolder m-0">
          {{ $t("profileDetails") }}
        </h3>
      </div>
      <!--end::Card title-->

      <!--begin::Action-->
      <router-link
        :to="{ name: 'account-settings', params: { lang } }"
        class="btn btn-primary align-self-center"
      >
        {{ $t("editProfile") }}
      </router-link>
      <!--end::Action-->
    </div>
    <!--begin::Card header-->

    <!--begin::Card body-->
    <div class="card-body p-9">
      <!--begin::Row-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-bold text-muted">
          {{ $t("name") }}
        </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bolder fs-6 text-dark">
            {{ user?.name }}
          </span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Row-->

      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-bold text-muted">
          {{ $t("email") }}
        </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8 fv-row">
          <span class="fw-bold fs-6">
            {{ user?.email }}
          </span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-bold text-muted">
          {{ $t("phone") }}
        </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8 fv-row">
          <span class="fw-bold fs-6">
            {{ user?.phone }}
          </span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-bold text-muted">
          {{ $t("enterpriseName") }}
        </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8 fv-row">
          <span class="fw-bold fs-6">
            {{ user?.market_name }}
          </span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-bold text-muted">
          {{ $t("enterpriseEmail") }}
        </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8 fv-row">
          <span class="fw-bold fs-6">
            {{ user?.market_email }}
          </span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-bold text-muted">
          {{ $t("enterprisePhone") }}
        </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6">
            {{ user?.market_phone }}
          </span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-bold text-muted">
          {{ $t("enterpriseAddress") }}
        </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8 fv-row">
          <span class="fw-bold fs-6">
            {{ user?.market_address }}
          </span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-bold text-muted">
          {{ $t("enterpriseTaxNumber") }}
        </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8 fv-row">
          <span class="fw-bold fs-6">
            {{ user?.market_tax_number }}
          </span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-bold text-muted">
          {{ $t("enterpriseRecordNumber") }}
          <i
            class="fas fa-exclamation-circle ms-1 fs-7"
            data-bs-toggle="tooltip"
            title="Country of origination"
          ></i>
        </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6">
            {{ user?.market_standard_number }}
          </span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-bold text-muted">
          {{ $t("numberOfTheEnterprise") }}
        </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6">
            {{ user?.market_commercial_number }}
          </span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->
      <div class="row mb-7">
        <!--begin::Label-->
        <label class="col-lg-4 fw-bold text-muted">
          {{ $t("enterpriseWebsite") }}
        </label>
        <!--end::Label-->

        <!--begin::Col-->
        <div class="col-lg-8">
          <span class="fw-bold fs-6">
            {{ user?.market_site_url }}
          </span>
        </div>
        <!--end::Col-->
      </div>
      <!--end::Input group-->
    </div>
    <!--end::Card body-->
  </div>
  <!--end::details View-->

  <!--begin::Row-->
  <div class="row gy-10 gx-xl-10">
    <div class="col-xl-3">
      <StatisticsWidget5
        widget-classes="card-xl-stretch mb-xl-8"
        svg-icon="/media/icons/duotune/general/gen032.svg"
        color="white"
        icon-color="primary"
        title="500M$"
        description="SAP UI Progress"
      ></StatisticsWidget5>
    </div>

    <div class="col-xl-3">
      <StatisticsWidget5
        widget-classes="card-xl-stretch mb-xl-8"
        svg-icon="/media/icons/duotune/ecommerce/ecm008.svg"
        color="dark"
        icon-color="white"
        title="+3000"
        description="New Customers"
      ></StatisticsWidget5>
    </div>

    <div class="col-xl-3">
      <StatisticsWidget5
        widget-classes="card-xl-stretch mb-xl-8"
        svg-icon="/media/icons/duotune/finance/fin006.svg"
        color="warning"
        icon-color="white"
        title="$50,000"
        description="Milestone Reached"
      ></StatisticsWidget5>
    </div>

    <div class="col-xl-3">
      <StatisticsWidget5
        widget-classes="card-xl-stretch mb-xl-8"
        svg-icon="/media/icons/duotune/graphs/gra007.svg"
        color="info"
        icon-color="white"
        title="$50,000"
        description="Milestone Reached"
      ></StatisticsWidget5>
    </div>
  </div>
  <!--end::Row-->
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import StatisticsWidget5 from "@/components/widgets/statsistics/Widget5.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { useStore } from "vuex";

export default defineComponent({
  name: "account-overview",
  components: {
    StatisticsWidget5,
  },
  setup() {
    const store = useStore();
    const lang = computed(() => store.getters.getLanguage);
    const user = computed(() => store.getters.currentUser);
    onMounted(() => {
      setCurrentPageBreadcrumbs("overview", ["account"]);
    });

    return { lang, user };
  },
});
</script>
