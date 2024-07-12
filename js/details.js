import { ui } from './ui.js';
export class details {

    constructor() {
        document.querySelector(".fa-xmark").addEventListener("click", function () {
            document.querySelector(".game-details").classList.add("d-none")
            document.querySelector(".site").classList.remove("d-none")
        })
    }
    async fetchdetails(id) {
        document.querySelector(".loaderdiv").classList.remove("d-none")
        document.querySelector("body").classList.add("overflow-hidden")
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'e0574767cemsh8badd41186c959cp1258f8jsn31c3466d1919',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let detail2 = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
        let detail = await detail2.json();
        document.querySelector(".loaderdiv").classList.add("d-none")
        document.querySelector("body").classList.remove("overflow-hidden")
        console.log(detail);
        new ui().display_detail(detail)
    }
}