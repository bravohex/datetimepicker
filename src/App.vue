<template>
    <div id="app">
        <TRVLPicker
            :checkin.sync="checkin"
            :checkout.sync="checkout"
        >
            <template
                v-for="type in ['checkin', 'checkout']"
                :slot="type"
                slot-scope="{ isActive, value }"
            >
                <div
                    :key="type"
                    :class="['demo', { active: isActive }]"
                >
                    <label
                        :for="type"
                        class="demo-label"
                    >
                        Check {{ type === 'checkin' ? 'in' : 'out' }}
                    </label>
                    <div>
                        <font-awesome-icon
                            class="cal-icon"
                            :icon="['far', 'calendar-alt']"
                            size="sm"
                        />
                        <input
                            :id="type"
                            class="demo-input"
                            type="text"
                            :value="value"
                            readonly
                        >
                    </div>
                </div>
            </template>
        </TRVLPicker>
    </div>
</template>

<script>
    import TRVLPicker from '@/TRVLPicker'

    const today = new Date()
    today.setHours(8, 30, 0, 0)

    const dayAfterTomorrow = new Date(today)
    dayAfterTomorrow.setDate(today.getDate() + 2)

    export default {
        name: 'App',
        components: {
            TRVLPicker,
        },
        data() {
            return {
                checkin: today,
                checkout: dayAfterTomorrow,
            }
        },
        mounted() {
            // import theme files:
            const bootstrapLink = document.createElement('link')
            bootstrapLink.setAttribute('rel', 'stylesheet')
            bootstrapLink.setAttribute('href', 'https://cdn.jsdelivr.net/gh/mochapark/theme@v0.0.5/css/theme.min.css')
            document.body.appendChild(bootstrapLink)

            const popperScript = document.createElement('script')
            popperScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js')
            popperScript.setAttribute('integrity', 'sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q')
            popperScript.setAttribute('crossorigin', 'anonymous')
            document.body.appendChild(popperScript)

            const jqueryScript = document.createElement('script')
            jqueryScript.setAttribute('src', 'https://code.jquery.com/jquery-3.3.1.js')
            jqueryScript.setAttribute('integrity', 'sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=')
            jqueryScript.setAttribute('crossorigin', 'anonymous')
            document.body.appendChild(jqueryScript)

            const themeScript = document.createElement('script')
            themeScript.setAttribute('src', 'https://cdn.jsdelivr.net/gh/mochapark/theme@v0.0.5/js/theme.min.js')
            document.body.appendChild(themeScript)
        },
    }
</script>

<style lang="scss">
    .trvl-picker-toggle {
        width: auto;

        + .trvl-picker-toggle {
            margin-left: 8px;
        }
    }

    .demo {
        display: flex;
        flex-direction: column;
        border: 1px solid $gray-light;
        border-radius: 8px;
        padding: 8px 16px;
        transition: border-color $transition;

        &.active {
            border-color: $blue;
        }

        .cal-icon{
          color: $blue;
        }

        &-label {
            margin-bottom: 2px;
            color: $gray;
            font-size: 13px;
            font-weight: 600;
            text-align: left;
            transition: color $transition;

            .active & {
                color: $blue;
            }
        }

        &-input {
            padding: 0;
            width: 142px;
            border: none;
            font-size: 15px;

            &:focus {
                outline: none;
            }
        }
    }
</style>
