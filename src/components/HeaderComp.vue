<template>
  <div class="container-fluid p-0">
      <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand ml-3" href="#">
              <img src="@/assets/img/logo.png" alt="ORPHELIA_LOGO">
          </a>
          <div class="navbar-text text-left">
              <h5>TIME UNTIL NEXT DRAW</h5>
              <h5>0 DAYS, 3 HRS, 10 MINS, 40 SECS</h5>
          </div>
      </nav>
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
