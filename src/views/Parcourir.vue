<script setup>
import Navbar from "../components/nav_bar.vue";
import Footer from "../components/footer.vue";
import Element from "../components/house.vue";
</script>
<template>
  <div class="navbar"><Navbar /></div>
  <section class="section_house">
    <Element />
  </section>
  <Footer />
</template>
<style scoped>
.navbar {
  background-color: rgba(0, 0, 0, 0.808);
  width: 100vw;
  max-height: fix-content;
}
.section_house {
  margin: 20px;
  padding: 0;
  justify-content: flex-start;
}
</style>
