let emenys = [];

function spawnEmeny() {
    const emeny = document.createElement("div");

    emeny.classList.add("emeny");
    emeny.style.position = "absolute";
    emeny.style.width = "100px";
    emeny.style.height = "100px";
    emeny.style.backgroundColor = "red";
    emeny.style.borderRadius = "50%";
}