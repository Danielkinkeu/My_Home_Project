<script setup>
import Navbar from "../components/nav_bar.vue";
import Footer from "../components/footer.vue";
import Service from "../components/service.vue";
import Ville from "../components/ville.vue";
import Headeimg from "../components/header_img.vue";
</script>

<template>
  <header>
    <Navbar />
    <Headeimg />
  </header>
  <div class="home">
    <Ville />
  </div>
  <Service />
  <Footer />
  <RouterLink />
</template>
