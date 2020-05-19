Vue.component('link-item', {
    props: ['href', 'styledHref'],
    template: '<li><a :href="href">{{ styledHref }}</a></li>'
})

var vm = new Vue({
    el: '#app',
    data: {
        topic:'Index of Vue.js Tutorials',
        linkList: [
            {id: 0, name: 'lists'},
            {id: 1, name: 'computed'},
            {id: 2, name: 'components'},
            {id: 3, name: 'listRendering'},
            {id: 4, name: 'todo'},
            {id: 5, name: 'clickCounter'},
            {id: 6, name: 'formBindings'},
        ],
    },
    computed: {
        formattedData(){
            if (!this.linkList) return []

            return this.linkList.map(ll => {
                return {
                    href: 'templates/' + ll.name + '.html',
                    id: ll.id,
                    styledHref: ll.name.charAt(0).toUpperCase()+ll.name.slice(1),
                }
            })
        }
    }
})