var vm = new Vue({
    el: '#app',
    data: {
        topic: 'clickCounter',
        counter: 0,
        noWarning:false,
        warning: 'Form cannot be submitted yet.',
    },
    methods: {
        warn: function (message, event) {
            // now we have access to the native event
            if (event) {
                event.preventDefault()
            }
            this.noWarning=true
            alert(message)
        }
    }

})