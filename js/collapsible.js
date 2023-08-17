
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach( (collapsible) => {
        collapsible.addEventListener("click", function() {
        this.classList.toggle("collapsible__expanded");
    });
});

console.log(window.innerWidth)
console.log(window.innerHeight)