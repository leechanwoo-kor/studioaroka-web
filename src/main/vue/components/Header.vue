<template>
  <header>
    <div class="inner-wrap">
      <div class="header-pod header-logo">
        <a href="/">
          <img src="@/assets/logo.png" alt="Studio Aroka" />
        </a>
      </div>
      <div class="header-pod header-nav">
        <div class="menu-main-nav-container">
          <ul id="topnav" class="menu">
            <li
              id="menu-item-400"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-400"
            >
              <!-- <a href="/about">About Us</a> -->
              <router-link :to="{ name: 'about' }"> About Us </router-link>
            </li>
            <li
              id="menu-item-26409"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-26409"
            >
              <!-- <a href="/policy">Privacy Policy</a> -->
              <router-link :to="{ name: 'policy' }">
                Privacy Policy
              </router-link>
            </li>
            <li
              id="menu-item-402"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-402"
            >
              <!-- <a href="/term">Terms of Service</a> -->
              <router-link :to="{ name: 'term' }">
                Terms of Service
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
