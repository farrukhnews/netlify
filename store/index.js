export const state = () => ({
  blogPosts: [],
  pages:[]
});

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list;
  },
  setPages(state, list) {
    state.pages = list;
  }
};

export const actions = {
  async nuxtServerInit({ commit }) {
    let files = await require.context(
      "~/assets/content/blog/",
      false,
      /\.json$/
    );
    let blogPosts = files.keys().map(key => {
      let res = files(key);
      res.slug = key.slice(2, -5);
      return res;
    });
    await commit("setBlogPosts", blogPosts);
  },
  async nuxtServerInit({ commit }) {
    let files = await require.context(
      "~/site/content/",
      false,
      /\.json$/
    );
    let pages = files.keys().map(key => {
      let res = files(key);
    //   console.log(res);
      console.log(key.slice(2, -5));
      res.slug = key.slice(2, -5);
      return res;
    });
    await commit("setPages", pages);
  }
};
