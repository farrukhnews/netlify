<template>
  <section>
    <div class="topbar">
      <div class="container">
        <div class="nav">
          <ul>
            <li>
              <n-link to="/" prefetch>Home</n-link>
            </li>
            <li>
              <n-link to="/learn" prefetch>Learn</n-link>
            </li>
            <li>
              <n-link to="/comingsoon" prefetch>Explore</n-link>
            </li>
            <li>
              <n-link to="/comingsoon" prefetch>Sell</n-link>
            </li>
            <li>
              <n-link to="/comingsoon" prefetch>Faqs</n-link>
            </li>
          </ul>
        </div>
        <div class="search">
          <input
            type="text"
            placeholder="Search here"
            v-model="authorNameSearchString"
          />
          <n-link to="/search" prefetch>
            <img
              class="search-icon"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIzMnB4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48dGl0bGUvPjxkZXNjLz48ZGVmcy8+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSI+PGcgZmlsbD0iIzkyOTI5MiIgaWQ9Imljb24tMTExLXNlYXJjaCI+PHBhdGggZD0iTTE5LjQyNzExNjQsMjEuNDI3MTE2NCBDMTguMDM3MjQ5NSwyMi40MTc0ODAzIDE2LjMzNjY1MjIsMjMgMTQuNSwyMyBDOS44MDU1NzkzOSwyMyA2LDE5LjE5NDQyMDYgNiwxNC41IEM2LDkuODA1NTc5MzkgOS44MDU1NzkzOSw2IDE0LjUsNiBDMTkuMTk0NDIwNiw2IDIzLDkuODA1NTc5MzkgMjMsMTQuNSBDMjMsMTYuMzM2NjUyMiAyMi40MTc0ODAzLDE4LjAzNzI0OTUgMjEuNDI3MTE2NCwxOS40MjcxMTY0IEwyNy4wMTE5MTc2LDI1LjAxMTkxNzYgQzI3LjU2MjExODYsMjUuNTYyMTE4NiAyNy41NTc1MzEzLDI2LjQ0MjQ2ODcgMjcuMDExNzE4NSwyNi45ODgyODE1IEwyNi45ODgyODE1LDI3LjAxMTcxODUgQzI2LjQ0Mzg2NDgsMjcuNTU2MTM1MiAyNS41NTc2MjA0LDI3LjU1NzYyMDQgMjUuMDExOTE3NiwyNy4wMTE5MTc2IEwxOS40MjcxMTY0LDIxLjQyNzExNjQgTDE5LjQyNzExNjQsMjEuNDI3MTE2NCBaIE0xNC41LDIxIEMxOC4wODk4NTExLDIxIDIxLDE4LjA4OTg1MTEgMjEsMTQuNSBDMjEsMTAuOTEwMTQ4OSAxOC4wODk4NTExLDggMTQuNSw4IEMxMC45MTAxNDg5LDggOCwxMC45MTAxNDg5IDgsMTQuNSBDOCwxOC4wODk4NTExIDEwLjkxMDE0ODksMjEgMTQuNSwyMSBMMTQuNSwyMSBaIiBpZD0ic2VhcmNoIi8+PC9nPjwvZz48L3N2Zz4="
              alt="Search"
            />
          </n-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {

  data: function() {
    let authorNameSearchString = "Search";
    let result = [];
    return {
      authorNameSearchString,
      result
    };
  },

  async fetch () {
    this.result = await this.$axios.$get(`https://infallible-carson-dc2377.netlify.app/.netlify/functions/search?s=${this.authorNameSearchString}`)
  },
  fetchOnServer: false
};
</script>
<style scoped>
.topbar {
  background: black;
  color: white;
}
.topbar .container {
  min-height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 70rem;
  margin: 0 auto;
}
.nav ul {
  display: flex;
}
li {
  list-style: none;
  text-transform: uppercase;
  margin-right: 1rem;
}
.nav a {
  color: white;
}
.search-icon {
  max-width: 1rem;
}
</style>
