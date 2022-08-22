<template>
  <header>
    <div class="inner-wrap">
      <Menu></Menu>
    </div>
  </header>
</template>

<script>
import Menu from "./Menu.vue";

export default {
  name: "Header",
  components: {
    Menu,
  }
};
</script>
