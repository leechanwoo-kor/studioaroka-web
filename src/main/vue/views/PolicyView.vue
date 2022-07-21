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
import Footer from "@/components/Footer.vue";
import PrivacyPolicy from "@/components/PrivacyPolicy.vue";

export default {
  name: "PolicyView",
  components: {
    Header,
    Footer,
    PrivacyPolicy,
  },
};
</script>
