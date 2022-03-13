<template>
  <!--begin::Layout-->
  <div
    class="d-flex flex-column flex-xl-row my-10"
    v-if="invoice && Object.keys(invoice).length"
  >
    <!--begin::Content-->
    <div class="flex-lg-row-fluid">
      <InvoiceDefault
        :invoice="invoice"
        v-if="invoice"
      ></InvoiceDefault>
    </div>
    <!--end::Content-->
  </div>
  <!--end::Layout-->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import InvoiceDefault from "@/components/Invoices/invoice-default.vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";

import { useRoute } from "vue-router";
export default defineComponent({
  name: "invoice-view",
  components: { InvoiceDefault },
  setup() {
    const store = useStore();
    const invoice = ref({});
    const router = useRoute();

    onMounted(() => {
      store.dispatch(Actions.GET_INVOICE, router.params.id).then((res) => {
        invoice.value = res;
      });
      setCurrentPageBreadcrumbs("Customer Details", [
        "Invoices",
        router.params.id.toString(),
      ]);
    });
    return {
      invoice,
    };
  },
});
</script>
