var vm = new Vue({
    el: '#app',
    data: {
        topic: 'Computed',
        firstName: 'Hans',
        lastName: 'Wurst'
    },
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        }
    }
})