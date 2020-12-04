const parallax = document.getElementById
("parallax");

window.addEventListener("scroll", function()
{
    parallax.style.backgroundPositionY = offset
    * 0.7 + "px";
})
