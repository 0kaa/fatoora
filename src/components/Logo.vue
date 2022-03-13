<template>
  <div class="fatoora-logo">
    <router-link
      :to="{
        name: 'home',
      }"
    >
      <img
        alt="Logo"
        src="/media/logos/vertical.png"
        class="h-150px h-lg-150px"
      />
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "fatoora-logo",
});
</script>

<style lang="scss" scoped>
.fatoora-logo {
  display: flex;
  //   justify-content: center;
  align-items: center;
}
</style>
