<template>
  <div class="body">
    <div id="main" class="lang-en">
      <Header />
      <TermsOfService />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import TermsOfService from "@/components/TermsOfService.vue";

export default {
  name: "TermView",
  components: {
    Header,
    Footer,
    TermsOfService,
  },
};
</script>
