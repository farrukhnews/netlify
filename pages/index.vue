<template>
  <section>
    <div class="container">
     
      <h1 v-text="pageData.title">Welcome</h1>
      <section class="content">
        <ul>
            <li v-for="area in pageData.areas">
                <div class="img"><img :src="area.photo" alt=""></div>
                <h5 v-text="area.title">Brand Title</h5>
                <p v-text="area.description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et commodo velit. Etiam vitae venenatis lorem, eget blandit purus.</p>
            </li>
        </ul>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
  computed: {
    pageData() {
      let pages = this.$store.state.pages;
      for (let i = 0; i < pages.length; ++i) {
          if (pages[i].slug === "home"){
            console.log(pages[i]);
            return pages[i];
          }
      }
    }
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
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
