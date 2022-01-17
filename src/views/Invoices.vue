<template>
  <!--begin::Layout-->
  <div class="d-flex flex-column flex-xl-row">
    <!--begin::Content-->
    <div class="flex-lg-row-fluid">
      <Invoices card-classes="mb-6" :invoices="invoices"></Invoices>
    </div>
    <!--end::Content-->
  </div>
  <!--end::Layout-->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import Invoices from "@/components/customers/cards/overview/Invoices.vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";

export default defineComponent({
  name: "invoices",
  components: {
    Invoices,
  },
  setup() {
    const store = useStore();
    const invoices = ref([]);
    onMounted(() => {
      setCurrentPageBreadcrumbs("Invoices", ["Invoices"]);
    });
    store.dispatch(Actions.GET_INVOICES).then((res) => {
      invoices.value = res;
    });
    return {
      invoices,
    };
  },
});
</script>
