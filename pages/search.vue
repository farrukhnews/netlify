<template>
  <section>
    <div class="container">
      <h1>Search Results for XXX</h1>
      <div class="loop" v-for="page in pageData">
        <h2 class="data" v-text="page"></h2>

      </div>
    </div>
  </section>
</template>
<script>
export default {
  computed: {
    pageData() {
      let pages = this.$store.state.searchResult;
      for (let i = 0; i < pages.length; ++i) {
          console.log(pages[i]);
      }
    },
  }
};
</script>
<style>
.container {
  max-width: 1024px;
  margin: 4rem auto;
}
a {
  text-decoration: none;
  text-align: center;
  color: #333;
  text-transform: uppercase;
}
h1 {
  text-align: center;
  font-size: 2rem;
}
h3 {
  text-align: center;
  text-transform: uppercase;
}
nav {display: flex; justify-content: center; margin: 1rem auto 3rem; font-weight: 700;}
nav a {display: block;}
nav img {margin: 0 auto;}
nav span {display: block; margin: 0 auto;}
.content ul{display: flex;}
.content .img{display: block; width: 100%; height: 11rem; background: #ccc; margin-bottom: 1rem;}
.content ul li{ list-style: none; padding: 1rem 0.5rem; text-align: center;}
</style>
