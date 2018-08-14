<template>
  <div class="container-fluid p-0 bg-light">
      <div class="container">
        <nav class="navbar navbar-light">
            <a class="navbar-brand ml-3" href="https://orphelia.eu">
                <img src="@/assets/img/logo.svg" alt="ORPHELIA_LOGO">
            </a>
            <div class="navbar-text text-left">
                <h5>TIME UNTIL NEXT DRAW</h5>
                
                <VueCountdown :time="3 * 24 * 60 * 60 * 1000">
                    <template class="countdown" slot-scope="props">{{ props.days }} DAYS, {{ props.hours }} HRS, {{ props.minutes }} MINS, {{ props.seconds }} SECS</template>
                </VueCountdown>
            </div>
        </nav>
      </div>
  </div>
</template>

<script>
import VueCountdown from '@xkeshi/vue-countdown';

export default {
  name: 'HeaderComp',
  components: {
      VueCountdown
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
