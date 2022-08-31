<template>
  <div class="app-pod" v-for="game in gameList" :key="game.id">
    <div class="app-icon">
      <img :src="game.icon" alt="Game icon" />
    </div>
    <div class="app-overlay">
      <h6 class="app-title">{{ game.title }}</h6>
      <div class="app-button-wrap">
        <div class="app-button">
          <a class="btnAppStore" @click="btnAppStore">
            <img
              src="../assets/btn-app-store.svg"
              alt="Download on the App Store"
          /></a>
        </div>
        <div class="app-button">
          <a :href="game.playGoogle"
            ><img
              src="../assets/btn-google-play.svg"
              alt="Get it on Google Play"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    btnAppStore: function (event) {
      alert("Coming Soon!");
    },
  },
  computed: {
    gameList() {
      return this.$store.state.gameList;
    },
  },
};
</script>