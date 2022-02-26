<template>
  <div>
    <MainHeader />
    <MainSearchOne />
    <MainSearchTwo />
    <MainSidebar />
    <Nuxt />
    <MainSidenavOverlay />
    <MainDragTarget />
    <!-- <MainFooter /> -->
    <MainArrowUp />
  </div>
</template>

<script>
export default {
  middleware: "auth",
  mounted() {
    let isDark = localStorage.getItem("bordered-layout-current-skin");
    if (isDark == "dark-layout") {
      document.documentElement.classList.remove("bordered-layout");
      document.documentElement.classList.add("dark-layout");
    } else {
      document.documentElement.classList.remove("dark-layout");
      document.documentElement.classList.add("bordered-layout");
    }
  },
  data() {
    return {};
  },
  computed: {},
  beforeMount() {},
  created() {},
};
</script>

<style lang="scss">
.feather {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
