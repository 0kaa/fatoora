<template>
  <!--begin::Timeline-->
  <div class="card">
    <!--begin::Card head-->
    <div class="card-header card-header-stretch">
      <!--begin::Title-->
      <div class="card-title d-flex align-items-center">
        <span class="svg-icon svg-icon-1 svg-icon-primary me-3 lh-0">
          <inline-svg src="/media/icons/duotune/general/gen014.svg" />
        </span>

        <h3 class="fw-bolder m-0 text-gray-800">{{ $t("allLogs") }}</h3>
      </div>
      <!--end::Title-->
    </div>
    <!--end::Card head-->

    <!--begin::Card body-->
    <div class="card-body">
      <div class="card-body p-0">
        <!--begin::Timeline-->
        <div class="timeline">
          <!--begin::Timeline item-->
          <div class="timeline-item" v-for="(log, i) in logs" :key="i">
            <!--begin::Timeline line-->
            <div class="timeline-line w-40px"></div>
            <!--end::Timeline line-->

            <!--begin::Timeline icon-->
            <div class="timeline-icon symbol symbol-circle symbol-40px">
              <div class="symbol-label bg-light">
                <span class="svg-icon svg-icon-2 svg-icon-gray-500">
                  <inline-svg
                    src="/media/icons/duotune/communication/com009.svg"
                  />
                </span>
              </div>
            </div>
            <!--end::Timeline icon-->

            <!--begin::Timeline content-->
            <div class="timeline-content mb-10 mt-n2">
              <!--begin::Timeline heading-->
              <div class="overflow-auto pe-3">
                <!--begin::Title-->
                <div class="fs-5 fw-bold mb-2">
                  {{ log.message }}  <span class="text-primary">{{ log.modal_name }}</span>
                </div>
                <!--end::Title-->

                <!--begin::Description-->
                <div class="d-flex align-items-center mt-1 fs-6">
                  <!--begin::Info-->
                  <div class="text-muted me-2 fs-7">
                    {{ log.created_at }} {{ $t("by") }}
                  </div>
                  <!--end::Info-->
                  <div class="fs-7 fw-bolder">
                    {{ log.created_by }}
                  </div>
                </div>
                <!--end::Description-->
              </div>
              <!--end::Timeline heading-->
            </div>
            <!--end::Timeline content-->
          </div>
          <!--end::Timeline item-->
        </div>
        <!--end::Timeline-->
      </div>
      <!--end::Tab panel-->
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Timeline-->
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { useStore } from "vuex";
import { Actions } from "@/store/enums/StoreEnums";

interface Log {
  message: string;
  created_by: string;
  created_at: string;
  modal_type: string;
  modal_name: string;
}
export default defineComponent({
  name: "Logs",

  setup() {
    const store = useStore();
    const logs = ref<Log[]>([]);

    onMounted(() => {
      store.dispatch(Actions.GET_ALL_LOGS, 100).then((res) => {
        logs.value = res;
      });
      setCurrentPageBreadcrumbs("Logs", ["Logs"]);
    });
    return {
      logs,
    };
  },
});
</script>
