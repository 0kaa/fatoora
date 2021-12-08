<template>
  <a
    href="#"
    data-bs-toggle="modal"
    :data-bs-target="`#${modalId}`"
    class="card border-0 shadow-none min-h-200px mb-7"
    :style="`background-color:${color}`"
  >
    <!--begin::Card body-->
    <div class="card-body d-flex flex-column flex-center text-center">
      <!--begin::Illustrations-->
      <img class="mw-100 h-100px mb-7 mx-auto" :src="image" />
      <!--end::Illustrations-->
      <!--begin::Heading-->
      <h4 class="text-white fw-bolder text-uppercase">{{ buttonText }}</h4>
      <!--end::Heading-->
    </div>
    <!--end::Card body-->
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "modal-card-create-account",
  props: {
    buttonText: String,
    color: String,
    image: String,
    modalId: String,
  },
  components: {},
});
</script>
