module.exports = {
    css: {
        extract: false, // build the library with css inline
        loaderOptions: {
            sass: {
                data: '@import "@/assets/_variables.scss";',
            },
        },
    },
}
