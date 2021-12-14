<template>
  <!--begin::Layout-->
  <div class="d-flex flex-column flex-xl-row my-10">
    <!--begin::Content-->
    <div class="flex-lg-row-fluid">
      <InvoiceDefault></InvoiceDefault>
    </div>
    <!--end::Content-->
  </div>
  <!--end::Layout-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import InvoiceDefault from "@/components/Invoices/invoice-default.vue";

export default defineComponent({
  name: "invoice-view",
  components: { InvoiceDefault },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Customer Details", ["Invoices", "1"]);
    });
  },
});
</script>
