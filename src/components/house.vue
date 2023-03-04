<template>
  <div class="container">
    <div class="img"></div>
    <div class="infos">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequatur
        dolor aliquam voluptates quaerat ipsum.
      </p>
    </div>
  </div>
</template>
<style scoped>
.container {
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  min-height: 45vh;
  border: solid 0.5px rgb(58, 58, 58);
  max-width: 20vw;
  max-height: 40vh;
  margin: 1vw;
}
.img {
  height: 75%;
  width: 100%;
  background-image: url("../assets/images/img4.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  flex: 2;
}
.infos {
  background: white;
  flex: 1;
  flex-wrap: wrap;
}
</style>
