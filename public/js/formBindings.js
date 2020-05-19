var vm = new Vue({
    el: '#app',
    data: {
        topic: 'formBindings',
        intro: [
            {text: '<b>Hints:</b>'},
            {text: 'v-model will ignore the initial value, checked, or selected attributes found on any form elements.'},
            {text: 'It will always treat the Vue instance data as the source of truth.'},
            {text: 'You should declare the initial value on the JavaScript side, inside the data option of your component.'},
            {text: 'text and textarea elements use <b>value</b> property and input event;'},
            {text: 'checkboxes and radiobuttons use <b>checked</b> property and <b>change</b> event;'},
            {text: 'select fields use <b>value</b> as a prop and <b>change</b> as an event.'},
            {text: 'Interpolation (txtarea> {{bla}}) /txtarea> on <b>textareas</b> won\'t work. Use v-model instead.'},
        ],
        message: '',
        names: ['Jack', 'John', 'Mike'],
        checkedNames: [],
        picked:'',
        selected:'',
    }
})