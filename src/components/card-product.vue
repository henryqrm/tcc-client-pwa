<template>
  <div class="card card-header-pic">
    <div style="background-image:url('./static/img/background.jpg')" valign="bottom" class="card-header color-white no-border">
      Petisco
      <f7-fab class="btn-add-product">
        <f7-icon icon="icon-plus"></f7-icon>
      </f7-fab>
    </div>
    <div class="card-content">
      <div class="card-content-inner">
        <div>
          <p class="row color-gray">
            <span class="col-30">{{ item.amount }} unidades</span>
            <span class="col-30 text-right">R$ {{ item.amount }}</span>
          </p>
        </div>
        <p>{{ item.description }}</p>
      </div>
    </div>
    <div class="card-footer">
      <div>
        <i class="f7-icons size-20 color-yellow">star_fill</i>{{ item.rated }}
      </div>
      <f7-button>Informações</f7-button>
      <div>
        <f7-chip text="0" bg="green" color="white"></f7-chip>
      </div>
    </div>
    <Popup></Popup>
  </div>
</template>
<script>
import Popup from '@/components/Popup';

export default {
  name: 'card-product',
  props: ['item'],
  components: {
    Popup,
  },
  mounted() {
    setTimeout(() => {
      console.log(this.$f7Router.framework7.views.main.router.load('/product/'));
    }, 500);
  },
};
</script>
<style scoped>
.card-header-pic .card-header {
  height: 40vw;
  background-size: cover;
  background-position: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, .8);
  color: #fff;
  font-size: 1.8em;
}

.text-right {
  text-align: right;
}

.btn-add-product {
  bottom: -15px;
}
</style>
