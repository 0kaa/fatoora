<template>
  <div class="d-flex flex-column flex-column-fluid">
    <!-- <div class=""></div> -->
    <img src="/media/global/auth-tl.png" class="bg-auth-tl" />
    <img src="/media/global/auth-bl.png" class="bg-auth-bl" />
    <img src="/media/global/auth-br.png" class="bg-auth-br" />
    <img src="/media/global/auth-tr.png" class="bg-auth-tr" />
    <Logo class="auth-logo" />
    <!-- <div class="bg-auth-bl"></div> -->
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
import Logo from "@/components/Logo.vue";

export default defineComponent({
  name: "auth",
  components: { Logo },
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch(Actions.ADD_BODY_CLASSNAME, "bg-body");
    });

    onUnmounted(() => {
      store.dispatch(Actions.REMOVE_BODY_CLASSNAME, "bg-body");
    });
  },
});
</script>

<style lang="scss" scoped>
.bg-auth-tl {
  position: absolute;
  top: -150px;
  left: 0px;
  z-index: -10;
  @media (max-width: 992px) {
    top: 0;
    width: 40%;
  }
}
.bg-auth-bl {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -10;
  @media (max-width: 992px) {
    // display: none;
    width: 40%;
  }
}
.bg-auth-br {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -10;
  @media (max-width: 992px) {
    width: 40%;
  }
}
.bg-auth-tr {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -10;
  @media (max-width: 992px) {
    width: 40%;
  }
}
.auth-logo {
  position: absolute;
  top: 40px;
  right: 100px;
  @media (max-width: 992px) {
    position: relative;
    top: inherit;
    right: inherit;
    width: 100%;
    display: block;
    margin: auto;
    margin-top: 40px;
    text-align: center;
  }
}
</style>
