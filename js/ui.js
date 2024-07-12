
import { details } from './details.js';

export class ui {
    constructor() {
    }
    display_data(data) {
        let cartoona = ``;
        for (var i = 0; i < data.length; i++) {
            cartoona += ` <div class="col-xl-3 col-lg-4 p-3 col-md-6 " >
                <div class="inner rounded-3 "data-id="${data[i].id}">
                    <div class="innerimg p-3 data-id="${data[i].id}"">
                        <img src="${data[i].thumbnail}" class="w-100 game-poster rounded-top-2" data-id="${data[i].id}" alt="game-poster">
                        <div class="game-img-info overflow-hidden pt-2 text-center" data-id="${data[i].id}">
                            <div class="d-flex justify-content-between align-items-center" data-id="${data[i].id}">
                                <h3 class="gamename" data-id="${data[i].id}"> ${data[i].title}</h3>
                                <h4 class="free rounded-2" data-id="${data[i].id}">Free</h4>
                            </div>
                            <p data-id="${data[i].id}"> ${data[i].short_description.split(" ", 8).join(" ")} </p>
                        </div>
                    </div>
                    <div class="game-data-footer  " data-id="${data[i].id}">
                        <div class="game-data-footer-inner d-flex justify-content-between align-items-center" data-id="${data[i].id}">
                            <div class="category" data-id="${data[i].id}">
                                <h4 class="rounded-2" data-id="${data[i].id}">MMORPG</h4>
                            </div>
                            <div class="blatform" data-id="${data[i].id}">
                                <h4 class="rounded-2" data-id="${data[i].id}">${data[i].platform}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
        }
        document.querySelector(".row").innerHTML = cartoona;
    }
    display_detail(data) {

        let cartoona = ``;
        cartoona += ` <div class="detalsgame-header d-flex justify-content-between align-items-center">
                    <h2>
                        Details Game
                    </h2>
                    <i class="fa-solid fa-xmark"></i>
                </div>
                <div class="div">
                    <div class="row mt-4">
                        <div class="col-md-4">
                            <div class="innerr">
                                <img src="${data.thumbnail}">
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="innerr">
                                <div class="head-data">
                                    <h2 class="title">
                                        Title: <span>${data.title}</span>
                                    </h2>
                                    <h4 class="pb-3">
                                        Category: <span class="head-data-stuff rounded-3">${data.genre}</span>
                                    </h4>
                                    <h4 class="pb-3">
                                        Platform: <span class="head-data-stuff rounded-3">${data.platform}</span>
                                    </h4>
                                    <h4 class="pb-3">
                                        Status: <span class="head-data-stuff rounded-3">${data.status}</span>
                                    </h4>
                                    <p class="game-draft">
                                        ${data.description}
                                    </p>
                                    <div class="btn btn-outline-warning text-white">Show Game</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
        document.querySelector(".detalsgame").innerHTML = cartoona;
        this.detal = new details();
        document.querySelector(".btn-outline-warning").addEventListener("click", function () {
            open(data.freetogame_profile_url, "_self");
        });

    }
}