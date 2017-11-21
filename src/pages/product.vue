<template>
    <f7-page>
      <f7-navbar title="Produto" back-link="Back" sliding></f7-navbar>
      <f7-block inner>
        <p>Here is Product page!</p>
      </f7-block>
    </f7-page>
</template>

<script>
export default {
  mounted() {
    console.log(this.$f7);
  },
};
</script>
