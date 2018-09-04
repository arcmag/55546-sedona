var js = (function () {
    var js = {};

    js.toggleClass = function (elementSelector, className) {
        document.querySelector(elementSelector).classList.toggle(className);
    }

    js.initDataForm = function (data) {
        for (var i in data) data[i].value = localStorage.getItem(i) ? localStorage.getItem(i) : "";
    }

    js.checkDataForm = function (data) {
        for (var i in data) if(data[i].value == "")  return false;
        return true;
    }

    js.saveDataForm = function (e, modalSelector, formSelector, data) {
        e.preventDefault();

        if(!js.checkDataForm(data)) {
            js.toggleClass(modalSelector, "error");
            setTimeout(function () {
                js.toggleClass(modalSelector, "error");
            }, 300);

            return false;
        }

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

    document.querySelector(".start-hotel-search-btn").addEventListener("click", function (e) {
        js.saveDataForm(e, "#modal-window", "#modal-window form", dataFields);
    });

    js.initDataForm(dataFields);
}
