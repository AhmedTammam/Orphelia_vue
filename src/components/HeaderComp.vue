<template>
  <div class="container-fluid p-0 bg-light">
      <div class="container">
        <nav class="navbar navbar-light">
            <a class="navbar-brand ml-3" href="#">
                <img src="@/assets/img/logo.svg" alt="ORPHELIA_LOGO">
            </a>
            <div class="navbar-text text-left">
                <h5>TIME UNTIL NEXT DRAW</h5>
                <CountDown date="2018-09-24 08:15:00" />
            </div>
        </nav>
      </div>
  </div>
</template>

<script>
import CountDown from './CountDown.vue'

export default {
  name: 'HeaderComp',
  components: {
      CountDown
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
