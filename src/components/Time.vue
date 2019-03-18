<template>
    <div>
        <b-form-select
            v-model="selected"
            :options="options"
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
            }
        },
        computed: {
            checkinOptions() {
                return []
            },
            checkinSelected() {
                return 0
            },
            checkoutOptions() {
                return []
            },
            checkoutSelected() {
                return 0
            },
        },
    }
</script>

<style lang="scss">
    .mp-picker-time {

    }
</style>
