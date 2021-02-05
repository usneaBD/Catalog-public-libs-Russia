<template>
  <header id="header" class="">
    <div class="header-top">
      <div class="header-logo">
          <img src="@/assets/images/logo.webp" alt="описание" />
      </div>
      <div class="header-title">Каталог библиотек в регионах России</div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
