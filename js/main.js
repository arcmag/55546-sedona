var js = (function () {
    var js = {};

    js.createMessage = function (type, text) {
        var mBlock = document.createElement("div");
        mBlock.className = "message-block " + type;
        mBlock.textContent = text;
        document.body.appendChild(mBlock);

        setTimeout(function () {
            mBlock.parentNode.removeChild(mBlock);
        }, 5000);
    }

    js.toggleClass = function (elementSelector, className) {
        document.querySelector(elementSelector).classList.toggle(className);
    }

    js.initDataForm = function (data) {
        for (var i in data) data[i].value = localStorage.getItem(i) ? localStorage.getItem(i) : 0;
    }

    js.checkDataForm = function (data) {
        for (var i in data)
            if(data[i].value == "") {
                js.createMessage("error", "Вы заполнили не все поля!");
                return false;
            }
        return true;
    }

    js.saveDataForm = function (e, formSelector, data) {
        e.preventDefault();

        if(!js.checkDataForm(data) || typeof data !== "object") return;

        for (var i in data) localStorage.setItem(i, data[i].value);

        document.querySelector(formSelector).submit();
    }

    return js;
} ());

if(document.querySelector(".modal-animation-wrapper")) {

    document.querySelector("#hotel-search-btn").addEventListener("click", function (e) {
        e.preventDefault();
        js.toggleClass(".modal-animation-wrapper", "hidden-modal");
    });

    var dataFields = {
        childrens: document.querySelector("#childrens-sum"),
        adults: document.querySelector("#adults-sum"),
    };

    document.querySelector(".start-hotel-search-btn").addEventListener("click", function (e) {
        js.saveDataForm(e, "#modal-window form", dataFields);
    });

    js.initDataForm(dataFields);
}
