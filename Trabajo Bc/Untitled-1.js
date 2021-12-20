const yesBtn = document.querySelector('#yesBtn');
const p = document.getElementById("parrafo");
const img = document.getElementById("img")

yesBtn.addEventListener('click', function () {
    p.style.display = "none";
    img.style.display = "block"    
});


const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', () => {
    const randomX = parseInt(Math.random()*600);
    const randomY = parseInt(Math.random()*600);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})