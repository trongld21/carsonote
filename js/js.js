function responsiveHeader() {
    var x = document.getElementById("nav");
    if (x.className === "header-item") {
        x.className = "responsive-header";
    } else {
        x.className = "header-item";
    }
}