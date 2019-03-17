<template>
    <p class="trvl-picker-summary">
        {{ format(checkin) }} - {{ format(checkout) }}
        <span class="trvl-picker-summary-duration">
          {{ duration.days > 0 ? (duration.days + (duration.days === 1 ? ' day' : ' days') ) : ''}}
          {{ duration.days > 0 && duration.hours > 0 ? ', ' : '' }}
          {{ duration.hours > 0 ? (duration.hours + (duration.hours === 1 ? 'hour': 'hours') ) : ''}}
        </span>
    </p>
</template>

<script>
    export default {
        name: 'Summary',
        props: {
            checkin: {
                required: true,
                type: Date,
            },
            checkout: {
                required: true,
                type: Date,
            },
        },
        computed: {
            duration(){
              const msToDays = 1000 * 60 * 60 * 24 // 1000 ms in a sec, 60 sec in a min, 60 min in an hour, 24 hours in a day
              const msToHours = 1000 * 60 * 60 // 1000 ms in a sec, 60 sec in a min, 60 min in an hour
              // return {days: days, hours: hours}
              var days = Math.floor((this.checkout - this.checkin) / msToDays)
              var hours = Math.round(((this.checkout - this.checkin) - (days * msToDays)) / msToHours * 4) / 4 // round to nearest 0.25 hour.
              return {days: days, hours: hours}
            },
            nights() {
                return Math.ceil((this.checkout - this.checkin) / (1000 * 60 * 60 * 24))
            },
        },
        methods: {
            format(date) {
                return date.toLocaleDateString('en-us', {
                    day: 'numeric',
                    month: 'short',
                    weekday: 'short',
                })
            },
        },
    }
</script>

<style lang="scss">
    .trvl-picker-summary {
        margin: 0;
        font-size: 15px;
        font-weight: 600;

        &-nights {
            margin-left: 8px;
            color: $gray;
            font-size: 13px;
            font-weight: normal;
        }
        &-duration {
          margin-left: 8px;
          color: $gray;
          font-size: 13px;
          font-weight: normal;
        }
    }
</style>
