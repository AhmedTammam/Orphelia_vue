<template id="countdown-template">
    <div class="countdown">
        <h5>{{ days }} DAYS, {{ hours}} HRS, {{ minutes}} MINS, {{ seconds }} SECS</h5>
    </div>
</template>

<script>
export default {
    name: 'CountDown',
    mounted() {
        window.setInterval(() => {
            this.now = Math.trunc((new Date()).getTime() / 1000);
        },1000);
    },
    props: {
        date: {
            type: String
        }
    },
    data() {
        return {
            now: Math.trunc((new Date()).getTime() / 1000)
        }
    },
    computed: {
        dateInMilliseconds() {
            return Math.trunc(Date.parse(this.date) / 1000)
        },
        seconds() {
            return (this.dateInMilliseconds - this.now) % 60;
        },
        minutes() {
            return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
        },
        hours() {
            return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
        },
        days() {
            return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
        }
    }
}
</script>

<style>
.countdown h5{
    font-size: 24px !important;
    color: #02b7b2 !important;
}
@media screen and (max-width: 576px){
    .countdown h5{
        font-size: 16px !important;
    }
}
</style>
