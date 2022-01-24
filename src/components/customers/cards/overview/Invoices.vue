<template>
  <!--begin::Card-->
  <div :class="`card pt-2 ${cardClasses}`">
    <!--begin::Card header-->
    <div class="card-header border-0">
      <!--begin::Card title-->
      <div class="card-title">
        <h2>
          {{ $t("invoices") }}
        </h2>
      </div>
      <!--end::Card title-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body pt-0">
      <div class="py-0" v-if="invoices && invoices.length">
        <Datatable
          :table-header="tableHeader"
          :table-data="invoices"
          :rows-per-page="5"
          :enable-items-per-page-dropdown="false"
        >
          <template v-slot:cell-rand_number="{ row: invoice }">
            #{{ invoice.rand_number }}
          </template>
          <template v-slot:cell-total_price="{ row: invoice }">
            <span class="text-success">
              {{ invoice.total_price }}
            </span>

            <span class="currency mx-1 text-success fs-8">
              {{ $store.state.currency }}
            </span>
          </template>
          <template v-slot:cell-status="{ row: invoice }">
            <span
              class="badge"
              :class="{
                'badge-success': invoice.status === 'paid',
                'badge-danger': invoice.status === 'canceled',
                'badge-warning': invoice.status === 'pending',
              }"
            >
              {{ invoice.status }}
            </span>
          </template>
          <template v-slot:cell-customer="{ row: invoice }">
            <span>
              {{ invoice.customer_name ? invoice.customer_name : "-" }}
            </span>
          </template>
          <template v-slot:cell-release_date="{ row: invoice }">
            {{ invoice.release_date }}
          </template>
          <template v-slot:cell-invoice="{ row: invoice }">
            <router-link
              :to="{
                name: 'invoice-view',
                params: {
                  id: invoice.id,
                  lang: currentLang,
                },
              }"
              class="btn btn-sm btn-light btn-active-light-primary"
              >View
            </router-link>
          </template>
        </Datatable>
      </div>
      <div v-else>
        <div class="text-center">
          <h4 class="text-dark-50">
            {{ $t("no_invoices_found") }}
          </h4>
        </div>
      </div>
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import Datatable from "@/components/kt-datatable/KTDatatable.vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "invoices",
  props: {
    cardClasses: String,
    invoices: Array,
  },
  components: {
    Datatable,
  },
  setup() {
    const store = useStore();

    const currentLang = computed(() => {
      return store.getters.getLanguage;
    });
    const tableHeader = ref([
      {
        name: "Order id",
        key: "rand_number",
        sortable: true,
      },
      {
        name: "Amount",
        key: "total_price",
        sortable: true,
      },
      {
        name: "Status",
        key: "status",
        sortable: true,
      },
      {
        name: "Customer",
        key: "customer",
        sortable: true,
      },
      {
        name: "Date",
        key: "release_date",
        sortable: true,
      },
      {
        name: "Invoice",
        key: "invoice",
        sortable: false,
      },
    ]);
    const tableData1 = ref([
      {
        date: "Nov 01, 2020",
        rand_number: "102445788",
        details: "Darknight transparency  36 Icons Pack",
        color: "success",
        amount: "$38.00",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Oct 24, 2020",
        rand_number: "423445721",
        details: "Seller Fee",
        color: "danger",
        amount: "$-2.60",
        status: {
          label: "Pending",
          state: "success",
        },
      },
      {
        date: "Oct 08, 2020",
        rand_number: "312445984",
        details: "Cartoon Mobile Emoji Phone Pack",
        color: "success",
        amount: "$76.00",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Sep 15, 2020",
        rand_number: "312445984",
        details: "Iphone 12 Pro Mockup  Mega Bundle",
        color: "success",
        amount: "$5.00",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "May 30, 2020",
        rand_number: "523445943",
        details: "Seller Fee",
        color: "danger",
        amount: "$-1.30",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Apr 22, 2020",
        rand_number: "231445943",
        details: "Parcel Shipping / Delivery Service App",
        color: "success",
        amount: "$204.00",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Feb 09, 2020",
        rand_number: "426445943",
        details: "Visual Design Illustration",
        color: "success",
        amount: "$31.00",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Nov 01, 2020",
        rand_number: "984445943",
        details: "Abstract Vusial Pack",
        color: "success",
        amount: "$52.00",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
      {
        date: "Jan 04, 2020",
        rand_number: "324442313",
        details: "Seller Fee",
        color: "danger",
        amount: "$-0.80",
        status: {
          label: "Pending",
          state: "warning",
        },
      },
    ]);

    return { tableHeader, tableData1, currentLang };
  },
});
</script>
