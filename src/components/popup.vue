<template>
  <f7-popup id="popup">
    <f7-view navbar-fixed>
        <!-- iOS Theme Navbar -->
        <f7-navbar v-if="$theme.ios">
          <f7-nav-center sliding>Cardápio</f7-nav-center>
          <f7-nav-right>
            <span>Menu</span>
            <f7-link icon="icon-bars" open-panel="right"></f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-pages>
          <f7-page>
            <!-- Material Theme Navbar -->
            <f7-navbar v-if="$theme.material">
              <f7-nav-center sliding>Cardápio</f7-nav-center>
              <f7-nav-right>
                <span>Menu</span>
                <f7-link icon="icon-bars" open-panel="right"></f7-link>
              </f7-nav-right>
            </f7-navbar>
            <f7-swiper pagination next-button prev-button scrollbar>
              <f7-swiper-slide>
                <f7-button open-popup="#popup">Informações</f7-button>
              </f7-swiper-slide>
              <f7-swiper-slide>Slide 2</f7-swiper-slide>
              <f7-swiper-slide>Slide 3</f7-swiper-slide>
            </f7-swiper>
          </f7-page>
        </f7-pages>
      </f7-view>
  </f7-popup>
</template>

<script>

</script>

<style scoped>
.swiper-container {
  height: 100%;
}

.swiper-slide {
  background: #fff;
}

.swiper-slide span {
  text-align: center;
  display: block;
  margin: 20px;
  font-size: 21px;
}
</style>
