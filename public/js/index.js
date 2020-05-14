Vue.component('todo-item', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['todo'],
    template: '<li id="">{{ todo.text }}</li>',
})

var data = {
    dump: '',
    groceryList: [
        {id: 0, text: 'Vegetables'},
        {id: 1, text: 'Cheese'},
        {id: 2, text: 'Whatever else humans are supposed to eat'}
    ]
};

var app = new Vue({
    el: '#app',
    data: data
})

app.$watch('dump', function (newValue, oldValue) {
    alert(newValue)
})
// data.dump = 'Dummy';
c = console;
c.log(app.groceryList[0] == data.groceryList[0]);
