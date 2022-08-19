<template>
  <Nav class="nav" :navLinks="navLinks" :navConfig="navConfig" :btnConfig="btnConfig">
    <!-- <img class="img" src="logo" alt="" srcset="" /> -->

    <div class="logo">
      <a href="/">
        <img class="logo" src="../assets/favicon.png" alt="Studio Aroka" />
      </a>
    </div>
  </Nav>
</template>

<script>
import Nav from "vue-nav-ui";

export default {
  name: "Menu",
  components: {
    Nav,
  },
  data() {
    return {
      /* FOR YOUR NAVIGATION LINKING NAMES AND PATHS */
      navLinks: [
        {
          name: "HOME",
          path: "/",
        },
        {
          name: "ABOUT US",
          path: "/about",
        },
        {
          name: "PRIVACY POLICY",
          path: "/policy",
        },
        {
          name: "TERMS OF SERVICE",
          path: "/term",
        },
      ],
      navConfig: {
        whitespace: true /* GIVES PADDING TO YOUR NAV, IF SET TO FALSE, REMOVES PADDING */,
        navBg: "#f6f7f9" /* BACKGROUND COLOR OF YOUR NAV  */,
        navBorderRadius: "30px" /* BORDER RADIUS OF YOUR NAV */,
        linkFont: "Aroka-Black" /* FONT FAMILY OF YOUR NAV */,
        linkColor: "black" /* FONT COLOR OF YOUR NAV */,
        responsivePosition:
          "top or bottom" /* FOR CHANGING THE POSITION OF YOUR NAV WHEN RESPONSIVE. BOTTOM or TOP | The only two options */,
      },
      btnConfig: {
        btnLink: false /* FOR INITIALIZING NAV BUTTON USAGE, IF SET TO FALSE, REMOVES THE NAV BUTTON  */,
        btnUrl: "https://dhaniel.disha.page" /* LINK URL OF YOUR NAV BUTTON */,
        btnText: "Download app" /* NAV BUTTON TEXT */,
        btnBg: "#40269E" /* BACKGROUND COLOR OF YOUR NAV BUTTON  */,
        btnTextColor: "white" /* FONT COLOR OF YOUR NAV BUTTON*/,
        btnBorderWidth: "0" /* BORDER WIDTH OF YOUR NAV BUTTON */,
        btnBorderColor: "black" /* BORDER COLOR OF YOUR NAV BUTTON */,
        btnBorderRadius: "20px" /* BORDER RADIUS OF YOUR NAV BUTTON */,
      },
    };
  },
};
</script>
