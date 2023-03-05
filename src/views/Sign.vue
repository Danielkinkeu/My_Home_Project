<script setup>
import Navbar from "../components/nav_bar.vue";
import Footer from "../components/footer.vue";
import SignUp from "../components/SignUp.vue";
</script>
<template>
  <div class="navbar"><Navbar /></div>
  
    <SignUp />
    
  <Footer />
</template>
<style scoped>
.navbar {
  background-color: rgba(0, 0, 0, 0.808);
  width: 100vw;
  max-height: fix-content;
}

</style>
