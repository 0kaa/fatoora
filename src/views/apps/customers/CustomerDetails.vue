<template>
  <!--begin::Layout-->
  <div
    class="d-flex flex-column flex-xl-row"
    v-if="customer && Object.keys(customer).length"
  >
    <!--begin::Sidebar-->
    <div class="flex-column flex-lg-row-auto w-100 w-xl-350px mb-10">
      <!--begin::Card-->
      <div class="card mb-5 mb-xl-8">
        <!--begin::Card body-->
        <div class="card-body pt-15">
          <!--begin::Summary-->
          <div class="d-flex flex-center flex-column mb-5">
            <!--begin::Avatar-->
            <div class="symbol symbol-100px symbol-circle mb-7">
              <img src="/media/avatars/150-26.jpg" alt="image" />
            </div>
            <!--end::Avatar-->

            <!--begin::Name-->
            <a
              href="#"
              class="fs-3 text-gray-800 text-hover-primary fw-bolder mb-6"
            >
              {{ customer.name }}
            </a>
            <!--end::Name-->


            <!--begin::Info-->
            <div class="d-flex flex-wrap flex-center">
              <!--begin::Stats-->
              <div
                class="border border-gray-300 border-dashed rounded py-3 px-3 mb-3"
              >
                <div class="fs-4 fw-bolder text-gray-700">
                  <span class="w-75px">6,900</span>
                  <span class="svg-icon svg-icon-3 svg-icon-success">
                    <inline-svg src="/media/icons/duotune/arrows/arr066.svg" />
                  </span>
                </div>
                <div class="fw-bold text-muted">Earnings</div>
              </div>
              <!--end::Stats-->

              <!--begin::Stats-->
              <div
                class="border border-gray-300 border-dashed rounded py-3 px-3 mx-4 mb-3"
              >
                <div class="fs-4 fw-bolder text-gray-700">
                  <span class="w-50px">130</span>
                  <span class="svg-icon svg-icon-3 svg-icon-danger">
                    <inline-svg src="/media/icons/duotune/arrows/arr065.svg" />
                  </span>
                </div>
                <div class="fw-bold text-muted">Tasks</div>
              </div>
              <!--end::Stats-->

              <!--begin::Stats-->
              <div
                class="border border-gray-300 border-dashed rounded py-3 px-3 mb-3"
              >
                <div class="fs-4 fw-bolder text-gray-700">
                  <span class="w-50px">500</span>
                  <span class="svg-icon svg-icon-3 svg-icon-success">
                    <inline-svg src="/media/icons/duotune/arrows/arr066.svg" />
                  </span>
                </div>
                <div class="fw-bold text-muted">Hours</div>
              </div>
              <!--end::Stats-->
            </div>
            <!--end::Info-->
          </div>
          <!--end::Summary-->

          <!--begin::Details toggle-->
          <div class="d-flex flex-stack fs-4 py-3">
            <div
              class="fw-bolder rotate collapsible"
              data-bs-toggle="collapse"
              href="#kt_customer_view_details"
              role="button"
              aria-expanded="false"
              aria-controls="kt_customer_view_details"
            >
              Details
              <span class="ms-2 rotate-180">
                <span class="svg-icon svg-icon-3">
                  <inline-svg src="/media/icons/duotune/arrows/arr072.svg" />
                </span>
              </span>
            </div>

            <span
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              title="Edit customer details"
            >
              <a
                href="#"
                class="btn btn-sm btn-light-primary"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_update_customer"
              >
                Edit
              </a>
            </span>
          </div>
          <!--end::Details toggle-->

          <div class="separator separator-dashed my-3"></div>

          <!--begin::Details content-->
          <div id="kt_customer_view_details" class="collapse show">
            <div class="py-5 fs-6">
              <!--begin::Details item-->
              <div class="fw-bolder mt-5">
                {{ $t("customerID") }}
              </div>
              <div class="text-gray-600">
                {{ customer.id }}
              </div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bolder mt-5">{{ $t("customerEmail") }}</div>
              <div class="text-gray-600">
                <a href="#" class="text-gray-600 text-hover-primary">{{
                  customer.email
                }}</a>
              </div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bolder mt-5">{{ $t("customerAddress") }}</div>
              <div class="text-gray-600">
                {{ customer.address }}
              </div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bolder mt-5">{{ $t("taxID") }}</div>
              <div class="text-gray-600">{{ customer.tax_number }}</div>
              <!--begin::Details item-->
            </div>
          </div>
          <!--end::Details content-->
        </div>
        <!--end::Card body-->
      </div>
      <!--end::Card-->
    </div>
    <!--end::Sidebar-->

    <!--begin::Content-->
    <div class="flex-lg-row-fluid ms-lg-15">
      <!--begin:::Tabs-->
      <ul
        class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-8"
      >
        <!--begin:::Tab item-->
        <li class="nav-item">
          <a
            class="nav-link text-active-primary pb-4 active"
            data-bs-toggle="tab"
            href="#kt_customer_view_overview_tab"
            >Overview</a
          >
        </li>
        <!--end:::Tab item-->

        <!--begin:::Tab item-->
        <li class="nav-item">
          <a
            class="nav-link text-active-primary pb-4"
            data-bs-toggle="tab"
            href="#kt_customer_view_overview_events_and_logs_tab"
            >Events & Logs</a
          >
        </li>
        <!--end:::Tab item-->

        <!--begin:::Tab item-->
        <li class="nav-item">
          <a
            class="nav-link text-active-primary pb-4"
            data-kt-countup-tabs="true"
            data-bs-toggle="tab"
            href="#kt_customer_view_overview_statements"
            >Statements</a
          >
        </li>
        <!--end:::Tab item-->
        <!--begin:::Tab item-->
        <li class="nav-item ms-auto">
          <!--begin::Action menu-->
          <a
            href="#"
            @click.prevent="deleteCustomer(customer.id)"
            class="btn btn-danger"
          >
            {{ $t("delete") }}
          </a>
          <!--end::Menu-->
        </li>
        <!--end:::Tab item-->
      </ul>
      <!--end:::Tabs-->

      <!--begin:::Tab content-->
      <div class="tab-content" id="myTabContent">
        <!--begin:::Tab pane-->
        <div
          class="tab-pane fade show active"
          id="kt_customer_view_overview_tab"
          role="tabpanel"
        >
          <Invoices :invoices="invoices" card-classes="mb-6 mb-xl-9"></Invoices>
        </div>
        <!--end:::Tab pane-->

        <!--begin:::Tab pane-->
        <div
          class="tab-pane fade"
          id="kt_customer_view_overview_events_and_logs_tab"
          role="tabpanel"
        >
          <Logs card-classes="mb-6 mb-xl-9"></Logs>
          <Events card-classes="mb-6 mb-xl-9"></Events>
        </div>
        <!--end:::Tab pane-->

        <!--begin:::Tab pane-->
        <div
          class="tab-pane fade"
          id="kt_customer_view_overview_statements"
          role="tabpanel"
        >
          <Earnings card-classes="mb-6 mb-xl-9"></Earnings>
          <Statement card-classes="mb-6 mb-xl-9"></Statement>
        </div>
        <!--end:::Tab pane-->
      </div>
      <!--end:::Tab content-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Layout-->

  <NewCardModal></NewCardModal>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import NewCardModal from "@/components/modals/forms/NewCardModal.vue";

import Invoices from "@/components/customers/cards/overview/Invoices.vue";

import Events from "@/components/customers/cards/events-and-logs/Events.vue";
import Logs from "@/components/customers/cards/events-and-logs/Logs.vue";

import Earnings from "@/components/customers/cards/statments/Earnings.vue";
import Statement from "@/components/customers/cards/statments/Statement.vue";

import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
import { useRoute } from "vue-router";
interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  account_type: string;
}
export default defineComponent({
  name: "customer-details",
  components: {
    Invoices,
    Events,
    Logs,
    Earnings,
    Statement,
    NewCardModal,
  },
  setup() {
    const store = useStore();
    const customer = ref<Customer>({} as Customer);
    const invoices = ref([]);

    const router = useRoute();
    onMounted(() => {
      store.dispatch(Actions.GET_CUSTOMER, router.params.id).then((res) => {
        customer.value = res;
        setCurrentPageBreadcrumbs("Customers", [
          "Customers",
          customer.value.name,
        ]);
      });
      store
        .dispatch(Actions.GET_CUSTOMER_INVOICES, router.params.id)
        .then((res) => {
          invoices.value = res;
        });
    });

    return {
      customer,
      invoices,
    };
  },
});
</script>
