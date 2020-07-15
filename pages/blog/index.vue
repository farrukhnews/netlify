<template>
  <section>
    <section v-for="post in blogPosts" :key="post.date">
      <h1 v-text="post.title"></h1>
      <h3 v-text="post.description"></h3>
      <p v-text="post.body"></p>
    </section>
  </section>
</template>

<script>
export default {
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    }
  }
};
</script>
