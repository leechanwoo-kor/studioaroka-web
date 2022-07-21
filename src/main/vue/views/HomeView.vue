<template>
  <div class="body">
    <div id="main" class="lang-en">
      <Header />
      <PrivacyPolicy />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import PrivacyPolicy from "@/components/PrivacyPolicy.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    PrivacyPolicy,
    Footer,
  },
};
</script>

<style lang="scss">
@import "@styles/scss/common.scss";
</style>
