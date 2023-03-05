<script setup>
import Navbar from "../components/nav_bar.vue";
import Footer from "../components/footer.vue";
import login from "../components/login.vue";
</script>
<template>
  <div class="navbar"><Navbar /></div>
 
    <login />

  <Footer />
</template>
<style scoped>
.navbar {
  background-color: rgba(0, 0, 0, 0.808);
  width: 100vw;
  max-height: fix-content;
}
</style>
