<template>
  <!--begin::Layout-->
  <div class="d-flex flex-column flex-xl-row">
    <!--begin::Content-->
    <div class="flex-lg-row-fluid">
      <Invoices
        card-classes="mb-6"
        :invoices="$store.getters.allInvoices"
      ></Invoices>
    </div>
    <!--end::Content-->
  </div>
  <!--end::Layout-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import Invoices from "@/components/customers/cards/overview/Invoices.vue";

export default defineComponent({
  name: "invoices",
  components: {
    Invoices,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Invoices", ["Invoices"]);
    });
  },
});
</script>
