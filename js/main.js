var js = (function () {
    var js = {};

    js.toggleModal = function (modal, button, toggleClass) {
        var m = document.querySelector(modal);
        if(m)
            document.querySelector(button).addEventListener("click", function () {
                m.classList.toggle(toggleClass);
            });
    }

    return js;
} ());




js.toggleModal("#modal-window", "#hotel-search-btn", "hidden-modal");
