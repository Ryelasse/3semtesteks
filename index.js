Vue.createApp({
    data() {
        return {
            countries: [
                {id: 1, Name: "Danmark", population: 5700000, continent: Europa},
                {id: 2, Name: "Tyskland", population: 65000000, continent: Europa},
                {id: 3, Name: "Kina", population: 1600000000, continent: Asien},
                {id: 4, Name: "Sydafrika", population: 100000000, continent: Afrika}
               
            ],
            selected: null
        }
    },
    methods: {
        clicked(id) {
            console.log("clicked id: " + id)
            element = this.countries.find(element => element.id == id)
            if (element == null) {
                this.selected = null
            } else {
                // https://www.javascripttutorial.net/object/3-ways-to-copy-objects-in-javascript/
                this.selected = Object.assign({}, element)
            }
        },
        update() {
            //console.log("update id, name " + id + " " + this.selected.name)
            // https://linuxhint.com/update-object-in-javascript/
            index = this.countries.findIndex(element => element.id == this.selected.id)
            this.countries[index].name = this.selected.name
        }
    }
}).mount("#app")