<template>
    <div class="row pl-4">
        <div class="col-4">
            <b-form-group
                label="Check In"
                label-for="checkinTimeInput"
            >
                <b-form-select
                    id="checkinTimeInput"
                    v-model="checkinIndex"
                    :disabled="picker === 'checkout'"
                    :options="checkinOptions"
                    @change="$emit('updateCheckin', newCheckin)"
                />
            </b-form-group>
        </div>
        <div class="col-4">
            <b-form-group
                label="Check Out"
                label-for="checkoutTimeInput"
            >
                <b-form-select
                    id="checkoutTimeInput"
                    v-model="checkoutIndex"
                    :disabled="picker === 'checkin'"
                    :options="checkoutOptions"
                    @change="$emit('updateCheckout', newCheckout)"
                />
            </b-form-group>
        </div>
    </div>
</template>

<script src='./timeOptions.js'></script>
<script>
    import BFormSelect from 'bootstrap-vue/es/components/form-select/form-select'
    import BFormGroup from 'bootstrap-vue/es/components/form-group/form-group'
    import { defaultTimeOptions } from './timeOptions'

    export default {
        name: 'Time',
        components: {
            BFormSelect,
            BFormGroup,
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
            picker: {
                required: true,
                type: String,
            }
        },
        data() {
            return {
                defaultOptions: defaultTimeOptions,
                checkinIndex: 0, // default to 0
                checkoutIndex: 0, // default to 0
            }
        },
        computed: {
            newCheckin() {
                return new Date(this.checkin.setHours(this.indexToHours(this.checkinIndex),
                    this.indexToMinutes(this.checkinIndex)))
            },
            newCheckout() {
                return new Date(this.checkout.setHours(this.indexToHours(this.checkoutIndex),
                    this.indexToMinutes(this.checkoutIndex)))
            },
            checkinOptions() {
                return this.defaultOptions
            },
            checkoutOptions() {
                return this.defaultOptions
            },
        },
        methods: {
          indexToHours(index) {
              return Math.floor(index / 4)
          },

          indexToMinutes(index) {
              return (index % 4) * 15
          },

          timeToIndex(hours){
              // hours: a float in units of hours
              return (hours * 4)
          },
        },
        mounted() {
          // update default checkinIndex and checkoutIndex based on checkin and checkout

          // combine hours and minutes and round to neared 0.25 hours
          var checkinHours = Math.round((this.checkin.getHours() +
                (this.checkin.getMinutes() / 60) ) * 4 ) / 4
          var checkoutHours = Math.round((this.checkout.getHours() +
                (this.checkout.getMinutes() / 60) ) * 4 ) / 4

          this.checkinIndex = this.timeToIndex(checkinHours)
          this.checkoutIndex = this.timeToIndex(checkoutHours)

        },
    }
</script>

<style lang="scss">
    .mp-picker-time {

    }
</style>
