export const state = () => ({
  blogPosts: [],
  pages:[],
  searchResult:[]
});

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list;
  },
  setPages(state, list) {
    state.pages = list;
  },
  setSearchResult(state, list) {
    state.searchResult = list;
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


    let pageFiles = await require.context(
        "~/site/content/",
        false,
        /\.json$/
      );
      let pages = pageFiles.keys().map(key => {
        let res = pageFiles(key);
        res.slug = key.slice(2, -5);
        return res;
      });
      await commit("setPages", pages);

    let searchBlob = await require.context(
        "./",
        false,
        /\.json$/
      );
    // let searchBlob = await fetch(`https://infallible-carson-dc2377.netlify.app/.netlify/functions/search?s=sounds`)
      let searchResult = searchBlob.keys().map(key => {
        let res = searchBlob(key);
        console.log(res, "res called");
        // res.slug = key.slice(2, -5);
        return res;
      });
      await commit("setSearchResult", searchResult);
      
  }
};
