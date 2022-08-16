<template>
  <div class="body">
    <div id="main" class="lang-en">
      <Header />
      <About />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import PrivacyPolicy from "@/components/PrivacyPolicy.vue";
import About from "@/components/About.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    Footer,
    PrivacyPolicy,
    About,
  },
};
</script>