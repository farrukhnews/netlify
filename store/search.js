// export const state = () => ({
//   searchResult: [
//     {
//       "/index.html": {
//         text:
//           "HomeLearnExploreSellFaqs Fusce at leo sed arcu elementum ultrices eu hendrerit lorem. Suspendisse pulvinar urna vel dui bibendum sodales.Vestibulum finibus erat ac ligula tincidunt dapibus. Proin non sagittis leo, ac elementum enim. Aliquam sit amet auctor mi. Cras rhoncus, felis vel laoreet venenatis, sapien odio blandit neque, sed suscipit leo odio eu ipsum.Integer dolor elit, lacinia ac nunc nec, cursus posuere lectus. Donec eget urna a ipsum rhoncus mollis in vel lorem.\n\n      Copyright News.com.au\n      \n  \n\n",
//         from: [],
//         headings: ["Welcome to NNN", "Learn", "Explore", "Sell", "FAQs"],
//         description: ""
//       }
//     }
//   ]
// });

// export const mutations = {
//   setSearchResult(state, list) {
//     state.search.searchResult = list;
//   }
// };

// export const actions = {
//   async nuxtServerInit({ commit }) {
//     let searchBlob = await require.context("./", false, /\.Index\.json$/);
//     let searchResult = searchBlob.keys().map(key => {
//       let res = searchBlob(key);
//       console.log(res, "res called");
//       res.slug = key.slice(2, -5);
//       return res;
//     });
//     await commit("setSearchResult", searchResult);
//   }
// };
