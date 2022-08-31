<template>
  <div class="home-page lang-en">
    <div class="hero minimal-height">
      <div class="inner-wrap">
        <div class="hero-intro">
          <h1>Studio Aroka<br />Games</h1>
        </div>
      </div>
    </div>

    <div class="games-table" id="games-table">
      <div id="tabs" class="ui-tabs ui-corner-all ui-widget ui-widget-content">
        <div class="games-filter-outer-wrap">
          <div class="wrapper">
            <div
              id="featured"
              aria-labelledby="ui-id-1"
              role="tabpanel"
              class="ui-tabs-panel ui-corner-bottom ui-widget-content"
              aria-hidden="false"
              style="" >
              <h3><br /><br />Featured Games</h3>

              <Game></Game>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Game from './Game.vue'

export default {
  name: 'Games',
  components: {
    Game,
  },
};
</script>
