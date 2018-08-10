<template>
  <div class="container-fluid cus">
    <HeaderComp/>
    <div class="wrapper">
      <Content />
      <Share />
      <Shipping />
    </div>
  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import Content from './components/Content.vue'
import Share from './components/ShareComp.vue'
import Shipping from './components/Shipping.vue'

export default {
  name: 'app',
  components: {
    HeaderComp,
    Content,
    Share,
    Shipping
  }
}
</script>

<style>
@import './assets/css/bootstrap.min.css';
@import './assets/css/style.css';

</style>
