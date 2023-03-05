<script setup></script>

<template>
  <RouterView />
</template>
<script>
import SignUp from './components/SignUp.vue'
import login from './components/login.vue'
export default {
  name: 'App',
  components: {
    SignUp,
    login
  }
}
</script>


<style scoped></style>
