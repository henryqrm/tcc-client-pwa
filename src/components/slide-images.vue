<template>
  <f7-block class="images">
    <f7-swiper pagination next-button prev-button scrollbar>
      <f7-swiper-slide class="image" v-for="image in images" :style="{backgroundImage: `url('${image}')`}" :key="image">
      </f7-swiper-slide>
    </f7-swiper>
  </f7-block>
</template>
<script>
export default {
  props: ['images'],
};
</script>

<style scoped>
.images {
  height: 40%;
}

.image {
  background-size: cover !important;
  overflow: hidden;
}
</style>

