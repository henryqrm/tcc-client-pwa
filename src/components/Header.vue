<template>
  <f7-navbar title="My App" back-link="Back">
  </f7-navbar>
  <!-- <header>
    <div class="navbar">
      <div class="navbar-inner">
        <div class="left" v-if="hasBack">
          <a :href="back" class="link icon-only">
            <i class="icon icon-back"></i>
          </a>
        </div>
        <div class="center">Center</div>
        <div class="right">
          <a href="#" class="link icon-only">
            <i class="icon icon-bars"></i>
          </a>
        </div>
      </div>
    </div>
  </header> -->
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      title: '',
      back: '/asd',
      hasBack: true,
    };
  },
  // props: ['title', 'back']
  created() {
    if (this.title) {
      this.hasBack = true;
    }
  },
};
</script>
