<template>
  <header>
    <top-bar />
    <navigation-bar />
    <section-header />
  </header>
</template>

<script>
import TopBar from "@/components/navbar/TopBar";
import NavigationBar from "@/components/navbar/NavigationBar";
import SectionHeader from "@/components/navbar/SectionHeader";
export default {
  name: "NavBar",
  components: { SectionHeader, TopBar, NavigationBar },
};
</script>

<style scoped></style>
