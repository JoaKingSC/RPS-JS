const btnPiedra = document.getElementById("piedra");
const btnPapel = document.getElementById("papel");
const btnTijera = document.getElementById("tijera");
const btnPc = document.getElementById("pc");

const userChoice = document.getElementById("user-choice");
const pcChoice = document.getElementById("pc-choice");


/*   CHANGE DE BUTTON COLOR   */

//Mouse Hover Piedra
btnPiedra.addEventListener("mouseover", () => {
    btnPiedra.style.backgroundColor = "red";
    btnPiedra.style.color = "white";
})

btnPiedra.addEventListener("mouseout", () => {
    btnPiedra.style.backgroundColor = "white";
    btnPiedra.style.border = "4px solid red";
    btnPiedra.style.color = "red";
})


// Mouse Hover Papel
btnPapel.addEventListener("mouseover", () => {
    btnPapel.style.backgroundColor = "green";
    btnPapel.style.color = "white";
})

btnPapel.addEventListener("mouseout", () => {
    btnPapel.style.backgroundColor = "white";
    btnPapel.style.border = "4px solid green";
    btnPapel.style.color = "green";
})


//Mouse Hover Tijera
btnTijera.addEventListener("mouseover", () => {
    btnTijera.style.backgroundColor = "dodgerblue";
    btnTijera.style.color = "white";
})

btnTijera.addEventListener("mouseout", () => {
    btnTijera.style.backgroundColor = "white";
    btnTijera.style.border = "4px solid dodgerblue";
    btnTijera.style.color = "dodgerblue";
})

//Mouse Hover PC
btnPc.addEventListener("mouseover", () => {
    btnPc.style.backgroundColor = "grey";
    btnPc.style.color = "white";
})

btnPc.addEventListener("mouseout", () => {
    btnPc.style.backgroundColor = "white";
    btnPc.style.border = "4px solid grey";
    btnPc.style.color = "grey";
})



/*   USER CHOICE   */
btnPiedra.addEventListener("click", () => {
    userChoice.innerHTML = btnPiedra.value;
});

btnPapel.addEventListener("click", () => {
    userChoice.innerHTML = btnPapel.value;
});

btnTijera.addEventListener("click", () => {
    userChoice.innerHTML = btnTijera.value;
});


/* GET RANDOM NUMBER */

function randomInteger (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* PC CHOICE */

btnPc.addEventListener("click", () => {
    const num = randomInteger(1, 3);
    
    if (num == 1) {
        pcChoice.innerHTML = "Piedra"

    } else if (num == 2) {
        pcChoice.innerHTML = "Papel"
        
    } else if (num == 3) {
        pcChoice.innerHTML = "Tijera"

    }
});