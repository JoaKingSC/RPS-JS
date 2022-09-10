const btnPiedra = document.getElementById("piedra");
const btnPapel = document.getElementById("papel");
const btnTijera = document.getElementById("tijera");
const btnPc = document.getElementById("pc");

const userChoice = document.getElementById("user-choice");
const pcChoice = document.getElementById("pc-choice");

const banner = document.getElementById("banner");


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


/* GAME LOGIC FUNCTION */

function game(yourChoice){
    let pc = randomInteger(1, 3);
    const tocar = "<h2>TOCA PARA CONTINUAR JUGANDO</h2>"
    
    if (pc == 1) {
        pc = "PIEDRA"
        pcChoice.innerHTML = pc;

    } else if (pc == 2) {
        pc = "PAPEL"
        pcChoice.innerHTML = pc;
        
    } else if (pc == 3) {
        pc = "TIJERA"
        pcChoice.innerHTML = pc;

    }

    if (yourChoice == pc) {
        console.log("EMPATE");
        banner.innerHTML = "<h1>EMPATE</h1>" + tocar;

    } else if ((yourChoice == "PIEDRA" && pc == "TIJERA") || (yourChoice == "PAPEL" && pc == "PIEDRA") || (yourChoice == "TIJERA" && pc == "PAPEL")) {
        console.log("HAS GANADO!!")
        banner.innerHTML = "<h1>HAS GANADOOOO!!</h1>" + tocar;
    } else {
        console.log("HAS PERDIDO :(")
        banner.innerHTML = "<h1>PERDISTE :(</h1>" + tocar;
    }

    banner.style.display = ""
}

function hideBanner(){
    banner.style.display = "none";
}