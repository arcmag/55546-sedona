var js = (function () {
    var js = {};

    js.toggleModal = function (modal, button, toggleClass) {
        document.querySelector(button).addEventListener("click", function () {
            document.querySelector(modal).classList.toggle(toggleClass);
        });
    }

    return js;
} ());
