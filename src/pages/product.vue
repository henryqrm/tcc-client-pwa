<template>
  <f7-page name="product">
    <f7-navbar :title="name" back-link="Back" sliding></f7-navbar>
    <SliderImage :images="images"></SliderImage>
  </f7-page>
</template>
<script>
import SliderImage from '@/components/slide-images';

export default {
  props: ['product'],
  components: {
    SliderImage,
  },
  data() {
    return {
      name: String,
      isActive: Boolean,
      images: [String],
      description: String,
      value: Number,
      category: String,
      amount: Number,
      amountUnit: String,
      rated: Number,
    };
  },
  created() {
    this.name = 'Petisco';
    this.images = [
      './static/img/background.jpg',
      './static/img/background.jpg',
      './static/img/background.jpg',
    ];
  },
};
</script>

<style>
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
