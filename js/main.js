var js = (function () {
    var js = {};

    js.toggleClass = function (elementSelector, className) {
        document.querySelector(elementSelector).classList.toggle(className);
    }

    js.initDataForm = function (data) {
        for (var i in data) data[i].value = localStorage.getItem(i) ? localStorage.getItem(i) : "";
    }

    js.saveDataForm = function (e, formSelector, data) {
        e.preventDefault();

        for (var i in data) localStorage.setItem(i, data[i].value);

        document.querySelector(formSelector).submit();
    }

    return js;
} ());

if(document.querySelector(".modal-animation-wrapper")) {
    js.toggleClass(".modal-animation-wrapper", "hidden-modal");

    document.querySelector("#hotel-search-btn").addEventListener("click", function (e) {
        e.preventDefault();
        js.toggleClass(".modal-animation-wrapper", "hidden-modal");
    });

    var dataFields = {
        occupancyDate: document.querySelector("#occupancy-date"),
        evictionDate: document.querySelector("#eviction-date"),
        childrens: document.querySelector("#childrens-sum"),
        adults: document.querySelector("#adults-sum"),
    };

    document.querySelector("#modal-window form").addEventListener("submit", function (e) {
        js.saveDataForm(e, "#modal-window form", dataFields);
    });

    js.initDataForm(dataFields);
}
