<template>
  <div id="app">
    <div id="nav" class="navbar d-flex justify-space between">
      <div class="justify-content-start">
        <router-link id="home" to="/"><h3 id="logo">BitLite</h3></router-link>
      </div>
      <div class="justify-content-end">
        <router-link id="about" to="/about">About</router-link>
        <router-link id="career" to="/career">Career</router-link>
      </div>
    </div>
    <hr>
    <div class="update-dialog" v-if="prompt">
      <div class="update-dialog__content">
        A new version is found. Refresh to load it?
      </div>
      <div class="update-dialog__actions">
        <button
          class="update-dialog__button update-dialog__button--confirm"
          @click="update"
        >
          Update
        </button>
        <button
          class="update-dialog__button update-dialog__button--cancel"
          @click="prompt = false"
        >
          Cancel
        </button>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "App",
  methods: {
    async update() {
      this.prompt = false;
      await this.$workbox.messageSW({ type: "SKIP_WAITING" });
    }
  },
  data() {
    return {
      prompt: false
    };
  },
  created() {
    if (this.$workbox) {
      this.$workbox.addEventListener("waiting", () => {
        this.prompt = true;
      });
    }
  }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#logo {
  color: darkgreen;
  font-size: 32px;
  font-weight: 900;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#home { text-decoration: none; }

#about, #career {
  margin: 2px 20px;
  font-size: 24px;
  text-decoration: none;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
