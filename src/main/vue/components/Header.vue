<template>
  <header>
    <div class="inner-wrap">
      <div class="header-pod header-logo">
        <a href="/">
          <img
            src="@/assets/logo.png"
            alt="Studio Aroka"
          />
        </a>
      </div>
      <div class="header-pod header-nav">
        <div class="menu-main-nav-container">
          <ul id="topnav" class="menu">
            <li
              id="menu-item-400"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-400"
            >
              <a href="/games">About Us</a>
            </li>
            <li
              id="menu-item-26409"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-26409"
            >
              <a href="/policy">Privacy Policy</a>
            </li>
            <li
              id="menu-item-402"
              class="menu-item menu-item-type-post_type menu-item-object-page menu-item-402"
            >
              <a href="/term">Terms of Service</a>
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
