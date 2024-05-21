function popup(popboxId) {
    var popbox = document.getElementById(popboxId);
    popbox.style.display = "flex";
}
popup();
function popclose(popboxId) {
    var popbox = document.getElementById(popboxId);
    popbox.style.display = "none";
}
popclose();