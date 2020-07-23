<template>
  <section>
    <div class="container">
      <h1 v-text="pageData.title">Explore</h1>
      <p v-html="pageData.intro"></p>
      <!-- <nav>
        <a href="#">
          <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMTI4cHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjggMTI4OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgd2lkdGg9IjEyOHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Zz48cGF0aCBkPSJNODkuNjQsMTA1LjA5Nkg0MC4zMDljLTMuNTg0LDAtNi41LTIuOTE2LTYuNS02LjVWMjguMzYxYzAtMy41ODQsMi45MTYtNi41LDYuNS02LjVoMjguNzI0ICAgYzMuMTUxLDAsNy4zNjYsMS43NDYsOS41OTYsMy45NzVsMTMuNTM3LDEzLjUzN2MyLjIyOSwyLjIyOSwzLjk3NSw2LjQ0NCwzLjk3NSw5LjU5NnY0OS42MjcgICBDOTYuMTQsMTAyLjE4LDkzLjIyNCwxMDUuMDk2LDg5LjY0LDEwNS4wOTZ6IE00MC4zMDksMjQuODYxYy0xLjkzLDAtMy41LDEuNTctMy41LDMuNXY3MC4yMzVjMCwxLjkzLDEuNTcsMy41LDMuNSwzLjVIODkuNjQgICBjMS45MywwLDMuNS0xLjU3LDMuNS0zLjVWNDguOTY5YzAtMi4zMzMtMS40NDYtNS44MjYtMy4wOTYtNy40NzVMNzYuNTA3LDI3Ljk1N2MtMS42NDktMS42NDktNS4xNDMtMy4wOTYtNy40NzUtMy4wOTZINDAuMzA5eiIgc3R5bGU9ImZpbGw6IzMxMzMzNTsiLz48L2c+PGc+PHBhdGggZD0iTTg5LjY0LDQ1LjQ2OUg3OS4wMzJjLTMuNTg0LDAtNi41LTIuOTE2LTYuNS02LjVWMjguMzYxYzAtMy4wMTMsMS42MTctNC4wODIsMy4wMDItNC4wODIgICBjMS4wMiwwLDIuMDYxLDAuNTI0LDMuMDk0LDEuNTU3bDEzLjUzNywxMy41MzdjMS44ODYsMS44ODYsMS42NTcsMy4zOTgsMS4zNTQsNC4xMzJDOTMuMjE0LDQ0LjIzOCw5Mi4zMDcsNDUuNDY5LDg5LjY0LDQ1LjQ2OXogICAgTTc1LjY3NSwyNy4zMjdjLTAuMDYyLDAuMTYtMC4xNDMsMC40NzYtMC4xNDMsMS4wMzR2MTAuNjA4YzAsMS45MywxLjU3LDMuNSwzLjUsMy41SDg5LjY0YzAuNTU4LDAsMC44NzQtMC4wODEsMS4wMzQtMC4xNDMgICBjLTAuMDY5LTAuMTU3LTAuMjM1LTAuNDM4LTAuNjMtMC44MzJMNzYuNTA3LDI3Ljk1N0M3Ni4xMTIsMjcuNTYzLDc1LjgzMiwyNy4zOTcsNzUuNjc1LDI3LjMyN3oiIHN0eWxlPSJmaWxsOiMzMTMzMzU7Ii8+PC9nPjxnPjxwYXRoIGQ9Ik04NC4zMzYsNzIuNTUzaC0zOC45NWMtMC44MjgsMC0xLjUtMC42NzEtMS41LTEuNXMwLjY3Mi0xLjUsMS41LTEuNWgzOC45NSAgIGMwLjgyOCwwLDEuNSwwLjY3MSwxLjUsMS41Uzg1LjE2NCw3Mi41NTMsODQuMzM2LDcyLjU1M3oiIHN0eWxlPSJmaWxsOiNFRTNFMzY7Ii8+PC9nPjxnPjxwYXRoIGQ9Ik04NC4zMzYsNTguMzUzaC0zOC45NWMtMC44MjgsMC0xLjUtMC42NzEtMS41LTEuNXMwLjY3Mi0xLjUsMS41LTEuNWgzOC45NSAgIGMwLjgyOCwwLDEuNSwwLjY3MSwxLjUsMS41Uzg1LjE2NCw1OC4zNTMsODQuMzM2LDU4LjM1M3oiIHN0eWxlPSJmaWxsOiNFRTNFMzY7Ii8+PC9nPjxnPjxwYXRoIGQ9Ik02Ni4yMTksNDUuNDY5SDQ1LjM4NmMtMC44MjgsMC0xLjUtMC42NzEtMS41LTEuNXMwLjY3Mi0xLjUsMS41LTEuNWgyMC44MzMgICBjMC44MjgsMCwxLjUsMC42NzEsMS41LDEuNVM2Ny4wNDcsNDUuNDY5LDY2LjIxOSw0NS40Njl6IiBzdHlsZT0iZmlsbDojRUUzRTM2OyIvPjwvZz48Zz48cGF0aCBkPSJNODQuMzM2LDg2LjA5NWgtMzguOTVjLTAuODI4LDAtMS41LTAuNjcxLTEuNS0xLjVzMC42NzItMS41LDEuNS0xLjVoMzguOTUgICBjMC44MjgsMCwxLjUsMC42NzEsMS41LDEuNVM4NS4xNjQsODYuMDk1LDg0LjMzNiw4Ni4wOTV6IiBzdHlsZT0iZmlsbDojRUUzRTM2OyIvPjwvZz48cmVjdCBoZWlnaHQ9IjEyOCIgaWQ9Il94M0NfU2xpY2VfeDNFX18xMF8iIHN0eWxlPSJmaWxsOm5vbmU7IiB3aWR0aD0iMTI4IiB4PSIxIiB5PSItMSIvPjwvc3ZnPg=="
          />
          <span>Brands</span>
        </a>
        <a href="#">
          <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMTI4cHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjggMTI4OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgd2lkdGg9IjEyOHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Zz48cGF0aCBkPSJNODkuNjQsMTA1LjA5Nkg0MC4zMDljLTMuNTg0LDAtNi41LTIuOTE2LTYuNS02LjVWMjguMzYxYzAtMy41ODQsMi45MTYtNi41LDYuNS02LjVoMjguNzI0ICAgYzMuMTUxLDAsNy4zNjYsMS43NDYsOS41OTYsMy45NzVsMTMuNTM3LDEzLjUzN2MyLjIyOSwyLjIyOSwzLjk3NSw2LjQ0NCwzLjk3NSw5LjU5NnY0OS42MjcgICBDOTYuMTQsMTAyLjE4LDkzLjIyNCwxMDUuMDk2LDg5LjY0LDEwNS4wOTZ6IE00MC4zMDksMjQuODYxYy0xLjkzLDAtMy41LDEuNTctMy41LDMuNXY3MC4yMzVjMCwxLjkzLDEuNTcsMy41LDMuNSwzLjVIODkuNjQgICBjMS45MywwLDMuNS0xLjU3LDMuNS0zLjVWNDguOTY5YzAtMi4zMzMtMS40NDYtNS44MjYtMy4wOTYtNy40NzVMNzYuNTA3LDI3Ljk1N2MtMS42NDktMS42NDktNS4xNDMtMy4wOTYtNy40NzUtMy4wOTZINDAuMzA5eiIgc3R5bGU9ImZpbGw6IzMxMzMzNTsiLz48L2c+PGc+PHBhdGggZD0iTTg5LjY0LDQ1LjQ2OUg3OS4wMzJjLTMuNTg0LDAtNi41LTIuOTE2LTYuNS02LjVWMjguMzYxYzAtMy4wMTMsMS42MTctNC4wODIsMy4wMDItNC4wODIgICBjMS4wMiwwLDIuMDYxLDAuNTI0LDMuMDk0LDEuNTU3bDEzLjUzNywxMy41MzdjMS44ODYsMS44ODYsMS42NTcsMy4zOTgsMS4zNTQsNC4xMzJDOTMuMjE0LDQ0LjIzOCw5Mi4zMDcsNDUuNDY5LDg5LjY0LDQ1LjQ2OXogICAgTTc1LjY3NSwyNy4zMjdjLTAuMDYyLDAuMTYtMC4xNDMsMC40NzYtMC4xNDMsMS4wMzR2MTAuNjA4YzAsMS45MywxLjU3LDMuNSwzLjUsMy41SDg5LjY0YzAuNTU4LDAsMC44NzQtMC4wODEsMS4wMzQtMC4xNDMgICBjLTAuMDY5LTAuMTU3LTAuMjM1LTAuNDM4LTAuNjMtMC44MzJMNzYuNTA3LDI3Ljk1N0M3Ni4xMTIsMjcuNTYzLDc1LjgzMiwyNy4zOTcsNzUuNjc1LDI3LjMyN3oiIHN0eWxlPSJmaWxsOiMzMTMzMzU7Ii8+PC9nPjxnPjxwYXRoIGQ9Ik04NC4zMzYsNzIuNTUzaC0zOC45NWMtMC44MjgsMC0xLjUtMC42NzEtMS41LTEuNXMwLjY3Mi0xLjUsMS41LTEuNWgzOC45NSAgIGMwLjgyOCwwLDEuNSwwLjY3MSwxLjUsMS41Uzg1LjE2NCw3Mi41NTMsODQuMzM2LDcyLjU1M3oiIHN0eWxlPSJmaWxsOiNFRTNFMzY7Ii8+PC9nPjxnPjxwYXRoIGQ9Ik04NC4zMzYsNTguMzUzaC0zOC45NWMtMC44MjgsMC0xLjUtMC42NzEtMS41LTEuNXMwLjY3Mi0xLjUsMS41LTEuNWgzOC45NSAgIGMwLjgyOCwwLDEuNSwwLjY3MSwxLjUsMS41Uzg1LjE2NCw1OC4zNTMsODQuMzM2LDU4LjM1M3oiIHN0eWxlPSJmaWxsOiNFRTNFMzY7Ii8+PC9nPjxnPjxwYXRoIGQ9Ik02Ni4yMTksNDUuNDY5SDQ1LjM4NmMtMC44MjgsMC0xLjUtMC42NzEtMS41LTEuNXMwLjY3Mi0xLjUsMS41LTEuNWgyMC44MzMgICBjMC44MjgsMCwxLjUsMC42NzEsMS41LDEuNVM2Ny4wNDcsNDUuNDY5LDY2LjIxOSw0NS40Njl6IiBzdHlsZT0iZmlsbDojRUUzRTM2OyIvPjwvZz48Zz48cGF0aCBkPSJNODQuMzM2LDg2LjA5NWgtMzguOTVjLTAuODI4LDAtMS41LTAuNjcxLTEuNS0xLjVzMC42NzItMS41LDEuNS0xLjVoMzguOTUgICBjMC44MjgsMCwxLjUsMC42NzEsMS41LDEuNVM4NS4xNjQsODYuMDk1LDg0LjMzNiw4Ni4wOTV6IiBzdHlsZT0iZmlsbDojRUUzRTM2OyIvPjwvZz48cmVjdCBoZWlnaHQ9IjEyOCIgaWQ9Il94M0NfU2xpY2VfeDNFX18xMF8iIHN0eWxlPSJmaWxsOm5vbmU7IiB3aWR0aD0iMTI4IiB4PSIxIiB5PSItMSIvPjwvc3ZnPg=="
          />
          <span>Team Roles</span>
        </a>
        <a href="#">
          <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iMTI4cHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjggMTI4OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgd2lkdGg9IjEyOHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Zz48cGF0aCBkPSJNODkuNjQsMTA1LjA5Nkg0MC4zMDljLTMuNTg0LDAtNi41LTIuOTE2LTYuNS02LjVWMjguMzYxYzAtMy41ODQsMi45MTYtNi41LDYuNS02LjVoMjguNzI0ICAgYzMuMTUxLDAsNy4zNjYsMS43NDYsOS41OTYsMy45NzVsMTMuNTM3LDEzLjUzN2MyLjIyOSwyLjIyOSwzLjk3NSw2LjQ0NCwzLjk3NSw5LjU5NnY0OS42MjcgICBDOTYuMTQsMTAyLjE4LDkzLjIyNCwxMDUuMDk2LDg5LjY0LDEwNS4wOTZ6IE00MC4zMDksMjQuODYxYy0xLjkzLDAtMy41LDEuNTctMy41LDMuNXY3MC4yMzVjMCwxLjkzLDEuNTcsMy41LDMuNSwzLjVIODkuNjQgICBjMS45MywwLDMuNS0xLjU3LDMuNS0zLjVWNDguOTY5YzAtMi4zMzMtMS40NDYtNS44MjYtMy4wOTYtNy40NzVMNzYuNTA3LDI3Ljk1N2MtMS42NDktMS42NDktNS4xNDMtMy4wOTYtNy40NzUtMy4wOTZINDAuMzA5eiIgc3R5bGU9ImZpbGw6IzMxMzMzNTsiLz48L2c+PGc+PHBhdGggZD0iTTg5LjY0LDQ1LjQ2OUg3OS4wMzJjLTMuNTg0LDAtNi41LTIuOTE2LTYuNS02LjVWMjguMzYxYzAtMy4wMTMsMS42MTctNC4wODIsMy4wMDItNC4wODIgICBjMS4wMiwwLDIuMDYxLDAuNTI0LDMuMDk0LDEuNTU3bDEzLjUzNywxMy41MzdjMS44ODYsMS44ODYsMS42NTcsMy4zOTgsMS4zNTQsNC4xMzJDOTMuMjE0LDQ0LjIzOCw5Mi4zMDcsNDUuNDY5LDg5LjY0LDQ1LjQ2OXogICAgTTc1LjY3NSwyNy4zMjdjLTAuMDYyLDAuMTYtMC4xNDMsMC40NzYtMC4xNDMsMS4wMzR2MTAuNjA4YzAsMS45MywxLjU3LDMuNSwzLjUsMy41SDg5LjY0YzAuNTU4LDAsMC44NzQtMC4wODEsMS4wMzQtMC4xNDMgICBjLTAuMDY5LTAuMTU3LTAuMjM1LTAuNDM4LTAuNjMtMC44MzJMNzYuNTA3LDI3Ljk1N0M3Ni4xMTIsMjcuNTYzLDc1LjgzMiwyNy4zOTcsNzUuNjc1LDI3LjMyN3oiIHN0eWxlPSJmaWxsOiMzMTMzMzU7Ii8+PC9nPjxnPjxwYXRoIGQ9Ik04NC4zMzYsNzIuNTUzaC0zOC45NWMtMC44MjgsMC0xLjUtMC42NzEtMS41LTEuNXMwLjY3Mi0xLjUsMS41LTEuNWgzOC45NSAgIGMwLjgyOCwwLDEuNSwwLjY3MSwxLjUsMS41Uzg1LjE2NCw3Mi41NTMsODQuMzM2LDcyLjU1M3oiIHN0eWxlPSJmaWxsOiNFRTNFMzY7Ii8+PC9nPjxnPjxwYXRoIGQ9Ik04NC4zMzYsNTguMzUzaC0zOC45NWMtMC44MjgsMC0xLjUtMC42NzEtMS41LTEuNXMwLjY3Mi0xLjUsMS41LTEuNWgzOC45NSAgIGMwLjgyOCwwLDEuNSwwLjY3MSwxLjUsMS41Uzg1LjE2NCw1OC4zNTMsODQuMzM2LDU4LjM1M3oiIHN0eWxlPSJmaWxsOiNFRTNFMzY7Ii8+PC9nPjxnPjxwYXRoIGQ9Ik02Ni4yMTksNDUuNDY5SDQ1LjM4NmMtMC44MjgsMC0xLjUtMC42NzEtMS41LTEuNXMwLjY3Mi0xLjUsMS41LTEuNWgyMC44MzMgICBjMC44MjgsMCwxLjUsMC42NzEsMS41LDEuNVM2Ny4wNDcsNDUuNDY5LDY2LjIxOSw0NS40Njl6IiBzdHlsZT0iZmlsbDojRUUzRTM2OyIvPjwvZz48Zz48cGF0aCBkPSJNODQuMzM2LDg2LjA5NWgtMzguOTVjLTAuODI4LDAtMS41LTAuNjcxLTEuNS0xLjVzMC42NzItMS41LDEuNS0xLjVoMzguOTUgICBjMC44MjgsMCwxLjUsMC42NzEsMS41LDEuNVM4NS4xNjQsODYuMDk1LDg0LjMzNiw4Ni4wOTV6IiBzdHlsZT0iZmlsbDojRUUzRTM2OyIvPjwvZz48cmVjdCBoZWlnaHQ9IjEyOCIgaWQ9Il94M0NfU2xpY2VfeDNFX18xMF8iIHN0eWxlPSJmaWxsOm5vbmU7IiB3aWR0aD0iMTI4IiB4PSIxIiB5PSItMSIvPjwvc3ZnPg=="
          />
          <span>Resources</span>
        </a>
      </nav> -->
      <section class="content">
        <h3>BUSINESS</h3>
        <ul>
          <li v-for="item in pageData.business">
            <div class="img"><img :src="item.photo" alt="" /></div>
            <h5 v-text="item.title">Brand Title</h5>
            <p v-text="item.description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse et commodo velit. Etiam vitae venenatis lorem, eget
              blandit purus.
            </p>
          </li>
        </ul>
        <h3>TRAVEL</h3>
        <ul>
          <li v-for="item in pageData.travel">
            <div class="img"><img :src="item.photo" alt="" /></div>
            <h5 v-text="item.title">Brand Title</h5>
            <p v-text="item.description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse et commodo velit. Etiam vitae venenatis lorem, eget
              blandit purus.
            </p>
          </li>
        </ul>
        <h3>LIFESTYLE</h3>
        <ul>
          <li v-for="item in pageData.lifestyle">
            <div class="img"><img :src="item.photo" alt="" /></div>
            <h5 v-text="item.title">Brand Title</h5>
            <p v-text="item.description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse et commodo velit. Etiam vitae venenatis lorem, eget
              blandit purus.
            </p>
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>
<script>
export default {
  computed: {
    pageData() {
      let pages = this.$store.state.pages;
      for (let i = 0; i < pages.length; ++i) {
        if (pages[i].slug === "learn") {
          console.log(pages[i]);
          return pages[i];
        }
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
nav {
  display: flex;
  justify-content: center;
  margin: 1rem auto 3rem;
  font-weight: 700;
}
nav a {
  display: block;
}
nav img {
  margin: 0 auto;
}
nav span {
  display: block;
  margin: 0 auto;
}
.content ul {
  display: flex;
}
.content .img {
  display: block;
  width: 100%;
  height: 11rem;
  background: #ccc;
  margin-bottom: 1rem;
}
.content ul li {
  list-style: none;
  padding: 1rem 0.5rem;
  text-align: center;
}
</style>
