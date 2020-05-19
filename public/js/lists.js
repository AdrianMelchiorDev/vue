Vue.component('todo-item', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['todo'],
    template: '<li id="">{{ todo.text }}</li>',
})

var vm = new Vue({
    el: '#app',
    data: {
        topic:'Lists',
        groceryList: [
            {id: 0, text: 'Vegetables'},
            {id: 1, text: 'Cheese'},
            {id: 2, text: 'Whatever else humans are supposed to eat'}
        ],
    }
})




// https://vuejs.org/v2/guide/instance.html