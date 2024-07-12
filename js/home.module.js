import { ui } from './ui.js';
import { details } from './details.js';

export class home {
    constructor() {
        document.querySelector(".loaderdiv").classList.remove("d-none")
        document.querySelector("body").classList.add("overflow-hidden")
        this.changelink(document.querySelector(".first"))
        this.getdata(document.querySelector(".first").getAttribute("data-category"))
        this.uii = new ui();
        document.querySelectorAll(".nav-link").forEach((navlink) => {
            navlink.addEventListener("click", () => {
                document.querySelector(".loaderdiv").classList.remove("d-none")
                document.querySelector("body").classList.add("overflow-hidden")
                this.changelink(navlink)
                this.getdata(navlink.getAttribute("data-category"))
            })
        })
    }

    changelink(navlink) {
        document.querySelector(".active").classList.remove("active");
        navlink.classList.add("active");
    }

    async getdata(cat) {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'e0574767cemsh8badd41186c959cp1258f8jsn31c3466d1919',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let data = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`, options)
        var JSON_DATA = await data.json()
        document.querySelector(".loaderdiv").classList.add("d-none")
        document.querySelector("body").classList.remove("overflow-hidden")
        console.log(JSON_DATA);
        this.uii.display_data(JSON_DATA)
        document.querySelectorAll(".row .inner").forEach((card) => {
            card.addEventListener("click", (e) => {
                document.querySelector(".game-details").classList.remove("d-none")
                document.querySelector(".site").classList.add("d-none")
                this.detal = new details();
                console.log(e.target.getAttribute("data-id"));
                this.detal.fetchdetails(e.target.dataset.id);
            })
        })
    }
}