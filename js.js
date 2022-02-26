var checkbox = document.querySelector("#menu_check");
var icon = document.querySelector("#menu-icon i");
var listener = function (e) {
    if (e.target != checkbox) {
        checkbox.checked = false;
        document.removeEventListener("click", listener);
    }
};

checkbox.addEventListener("click", function () {
    if (this.checked) {
        document.addEventListener("click", listener);
    }
});
