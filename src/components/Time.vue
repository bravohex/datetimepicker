<template>
    <div>
        <b-form-select
            v-model="checkinIndex"
            :options="checkinOptions"
        />
        <b-form-select
            v-model="checkoutIndex"
            :options="checkoutOptions"
        />
    </div>
</template>

<script src='./timeOptions.js'></script>
<script>
    import BFormSelect from 'bootstrap-vue/es/components/form-select/form-select'
    import { defaultTimeOptions } from './timeOptions'

    export default {
        name: 'Time',
        components: {
            BFormSelect,
        },
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
        data() {
            return {
                defaultOptions: defaultTimeOptions,
                checkinIndex: 0, // default to 0
                checkoutIndex: 0, // default to 0
            }
        },
        computed: {
            checkinOptions() {
                return this.defaultOptions
            },
            checkoutOptions() {
                return this.defaultOptions
            },
        },
        methods: {
          hoursToIndex(hours){
            return (hours * 4)
          }
        },
        mounted() {
          // update default checkinIndex and checkoutIndex based on checkin and checkout

          // combine hours and minutes and round to neared 0.25 hours
          var checkinHours = Math.round((this.checkin.getHours() +
                (this.checkin.getMinutes() / 60) ) * 4 ) / 4
          var checkoutHours = Math.round((this.checkout.getHours() +
                (this.checkout.getMinutes() / 60) ) * 4 ) / 4

          this.checkinIndex = this.hoursToIndex(checkinHours)
          this.checkoutIndex = this.hoursToIndex(checkoutHours)

        },
    }
</script>

<style lang="scss">
    .mp-picker-time {

    }
</style>
