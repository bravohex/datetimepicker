<template>
    <div>
        <b-form-select
            v-model="selected"
            :options="options"
        />
    </div>
</template>


<script>
    import BFormSelect from 'bootstrap-vue/es/components/form-select/form-select'

    export default {
        name: 'Time',
        components: {
            BFormSelect,
        },
        data() {
            return {
                selected: null,
                options: [
                    { value: null, text: 'Please select an option' },
                    { value: 'a', text: 'This is First option' },
                    { value: 'b', text: 'Selected Option' },
                    { value: { C: '3PO' }, text: 'This is an option with object value' },
                    { value: 'd', text: 'This one is disabled', disabled: true },
                ],
            }
        },
    }
</script>

<style lang="scss">
    .mp-picker-time {

    }
</style>
