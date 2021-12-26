<template>
  <div
    class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed"
  >
    <!--begin::Content-->
    <div class="d-flex h-100">
      <router-view />
    </div>
    <!--end::Content-->
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";
import { useI18n } from "vue-i18n/index";

export default defineComponent({
  name: "auth",
  components: {},
  setup() {
    const store = useStore();
    const i18n = useI18n();
    onMounted(() => {
      console.log(i18n);
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "bg-body");
    });

    onUnmounted(() => {
      store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "bg-body");
    });
  },
});
</script>
