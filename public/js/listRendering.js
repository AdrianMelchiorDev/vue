var vm = new Vue({
    el: '#app',
    data: {
        topic: 'List Rendering',
        messageItems: [
            {message: 'Hi there!'},
            {message: 'I am using Vue.js'},
            {message: 'Just sayin\'!'}
        ],
        object: {
            title: 'Title',
            author: 'Author',
            published: '2020-05-19',
        }
    },
    methods: {
        pushItUp: function () {
            this.messageItems.push({message: 'PushItUp!'})
        }
    }


})