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
          :rows-per-page="10"
          :enable-items-per-page-dropdown="true"
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
              class="badge text-capitalize"
              :class="{
                'badge-success': invoice.status.slug === 'paid',
                'badge-danger': invoice.status.slug === 'canceled',
                'badge-warning': invoice.status.slug === 'pending',
              }"
            >
              {{ invoice.status.name }}
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
import { defineComponent, ref } from "vue";
import Datatable from "@/components/kt-datatable/KTDatatable.vue";
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

    return { tableHeader };
  },
});
</script>
