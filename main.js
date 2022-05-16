let card1 = document.querySelector("#card-1");
let card2 = document.querySelector("#card-2");
let card3 = document.querySelector("#card-3");
let card4 = document.querySelector("#card-4");
let card5 = document.querySelector("#card-5");
let card6 = document.querySelector("#card-6");
let card7 = document.querySelector("#card-7");
let card8 = document.querySelector("#card-8");
let card9 = document.querySelector("#card-9");
let card10 = document.querySelector("#card-10");
let card11 = document.querySelector("#card-11");
let card12 = document.querySelector("#card-12");
let card13 = document.querySelector("#card-13");
let card14 = document.querySelector("#card-14");
let card15 = document.querySelector("#card-15");
let card16 = document.querySelector("#card-16");
let card17 = document.querySelector("#card-17");
let card18 = document.querySelector("#card-18");

//assign front and back card faces to card

//crown 1:
let card1front = document.querySelector("#image1");
card1front.src = "crowns/crown-1.png";

let card18front = document.querySelector("#image18");
card18front.src = "crowns/crown-1.png";

//crown 2:
let card2front = document.querySelector("#image2");
card2front.src = "crowns/crown-2.png";

let card17front = document.querySelector("#image17");
card17front.src = "crowns/crown-2.png";

//crown 3:
let card3front = document.querySelector("#image3");
card3front.src = "crowns/crown-3.png";

let card16front = document.querySelector("#image16");
card16front.src = "crowns/crown-3.png";

//crown 4:
let card4front = document.querySelector("#image4");
card4front.src = "crowns/crown-4.png";

let card15front = document.querySelector("#image15");
card15front.src = "crowns/crown-4.png";

//crown 5:
let card5front = document.querySelector("#image5");
card5front.src = "crowns/crown-5.png";

let card14front = document.querySelector("#image14");
card14front.src = "crowns/crown-5.png";

//crown 6:
let card6front = document.querySelector("#image6");
card6front.src = "crowns/crown-6.png";

let card13front = document.querySelector("#image13");
card13front.src = "crowns/crown-6.png";

//crown 7:
let card7front = document.querySelector("#image7");
card7front.src = "crowns/crown-7.png";

let card12front = document.querySelector("#image12");
card12front.src = "crowns/crown-7.png";

//crown 8:
let card8front = document.querySelector("#image8");
card8front.src = "crowns/crown-8.png";

let card11front = document.querySelector("#image11");
card11front.src = "crowns/crown-8.png";

//crown 9:
let card9front = document.querySelector("#image9");
card9front.src = "crowns/crown-9.png";

let card10front = document.querySelector("#image10");
card10front.src = "crowns/crown-9.png";

//////////////////////////////////////////////////////////////////
//Cards matcing:

let hasFlippedA = false;
let hasFlippedB = false;

let A = 0;
let B = 0;

//////////////////////////////////////////////////////////////////

//Shuffle:
let shuffle = document.querySelector("#shuffle");
let button = document.querySelector("button");

let cards = document.querySelectorAll(".game .play-card");

shuffle.addEventListener("click", function(){
    reset();

    shuffleCards();

    setTimeout(openCards, 900);
    
    setTimeout(changeText, 900);

    setTimeout(closeCards, 5000);
    

})



//////////////////////////////////////////////////////////////////
//Card Event Listener:

card1.addEventListener("click", function(){
    if (card1.classList[1] !== "flip"){
        card1.classList.add("flip");

        if (hasFlippedA === true && hasFlippedB === false){
            hasFlippedB = true;
            B = 1;
        } else if (hasFlippedA === false && hasFlippedB === false){
            hasFlippedA = true;
            A = 1;
        }

        if (hasFlippedA === true && hasFlippedB === true){
            setTimeout(doubleCheck, 800);
        }
        
    }


    
})

card2.addEventListener("click", function(){
    if (card2.classList[1] !== "flip"){
        card2.classList.add("flip");
        
        if (hasFlippedA === true && hasFlippedB === false){
            hasFlippedB = true;
            B= 2;
        } else if (hasFlippedA === false && hasFlippedB === false){
            hasFlippedA = true;
            A = 2;
        }

        if (hasFlippedA === true && hasFlippedB === true){
            setTimeout(doubleCheck, 800);
        }
    
        
    }

    
})

card3.addEventListener("click", function(){
    if (card3.classList[1] !== "flip"){
        card3.classList.add("flip");

        if (hasFlippedA === true && hasFlippedB === false){
            hasFlippedB = true;
            B = 3;
        } else if (hasFlippedA === false && hasFlippedB === false){
            hasFlippedA = true;
            A = 3;
        }

        if (hasFlippedA === true && hasFlippedB === true){
            setTimeout(doubleCheck, 800);
        }
    }
})

card4.addEventListener("click", function(){
    if (card4.classList[1] !== "flip"){
        card4.classList.add("flip");

        if (hasFlippedA === true && hasFlippedB === false){
            hasFlippedB = true;
            B = 4;
        } else if (hasFlippedA === false && hasFlippedB === false){
            hasFlippedA = true;
            A = 4;
        }

        if (hasFlippedA === true && hasFlippedB === true){
            setTimeout(doubleCheck, 800);
        }
    }
})

card5.addEventListener("click", function(){
    if (card5.classList[1] !== "flip"){
        card5.classList.add("flip");

        if (hasFlippedA === true && hasFlippedB === false){
            hasFlippedB = true;
            B = 5;
        } else if (hasFlippedA === false && hasFlippedB === false){
            hasFlippedA = true;
            A = 5;
        }

        if (hasFlippedA === true && hasFlippedB === true){
            setTimeout(doubleCheck, 800);
        }
    }
})

card6.addEventListener("click", function(){
    if (card6.classList[1] !== "flip"){
        card6.classList.add("flip");

        if (hasFlippedA === true && hasFlippedB === false){
            hasFlippedB = true;
            B = 6;
        } else if (hasFlippedA === false && hasFlippedB === false){
            hasFlippedA = true;
            A = 6;
        }

        if (hasFlippedA === true && hasFlippedB === true){
            setTimeout(doubleCheck, 800);
        }
    }
})

card7.addEventListener("click", function(){
    if (card7.classList[1] !== "flip"){
        card7.classList.add("flip");

        if (hasFlippedA === true && hasFlippedB === false){
            hasFlippedB = true;
            B = 7;
        } else if (hasFlippedA === false && hasFlippedB === false){
            hasFlippedA = true;
            A = 7;
        }

        if (hasFlippedA === true && hasFlippedB === true){
            setTimeout(doubleCheck, 800);
        }
    }
})

card8.addEventListener("click", function(){
    if (card8.classList[1] !== "flip"){
        card8.classList.add("flip");

        if (hasFlippedA === true && hasFlippedB === false){
            hasFlippedB = true;
            B = 8;
        } else if (hasFlippedA === false && hasFlippedB === false){
            hasFlippedA = true;
            A = 8;
        }

        if (hasFlippedA === true && hasFlippedB === true){
            setTimeout(doubleCheck, 800);
        }
    }
})

card9.addEventListener("click", function(){
    if (card9.classList[1] !== "flip"){
        card9.classList.add("flip");

        if (hasFlippedA === true && hasFlippedB === false){
            hasFlippedB = true;
            B = 9;
        } else if (hasFlippedA === false && hasFlippedB === false){
            hasFlippedA = true;
            A = 9;
        }

        if (hasFlippedA === true && hasFlippedB === true){
            setTimeout(doubleCheck, 800);
        }
    }
})

card10.addEventListener("click", function(){
    if (card10.classList[1] !== "flip"){
        card10.classList.add("flip");

        if (hasFlippedA === true && hasFlippedB === false){
            hasFlippedB = true;
            B = 10;
        } else if (hasFlippedA === false && hasFlippedB === false){
            hasFlippedA = true;
            A = 10;
        }

        if (hasFlippedA === true && hasFlippedB === true){
            setTimeout(doubleCheck, 800);
        }
    }
})

card11.addEventListener("click", function(){
    if (card11.classList[1] !== "flip"){
        card11.classList.add("flip");

        if (hasFlippedA === true && hasFlippedB === false){
            hasFlippedB = true;
            B = 11;
        } else if (hasFlippedA === false && hasFlippedB === false){
            hasFlippedA = true;
            A = 11;
        }

        if (hasFlippedA === true && hasFlippedB === true){
            setTimeout(doubleCheck, 800);
        }
    }
})

card12.addEventListener("click", function(){
    if (card12.classList[1] !== "flip"){
        card12.classList.add("flip");

        if (hasFlippedA === true && hasFlippedB === false){
            hasFlippedB = true;
            B = 12;
        } else if (hasFlippedA === false && hasFlippedB === false){
            hasFlippedA = true;
            A = 12;
        }

        if (hasFlippedA === true && hasFlippedB === true){
            setTimeout(doubleCheck, 800);
        }
    }
})

card13.addEventListener("click", function(){
    if (card13.classList[1] !== "flip"){
        card13.classList.add("flip");

        if (hasFlippedA === true && hasFlippedB === false){
            hasFlippedB = true;
            B = 13;
        } else if (hasFlippedA === false && hasFlippedB === false){
            hasFlippedA = true;
            A = 13;
        }

        if (hasFlippedA === true && hasFlippedB === true){
            setTimeout(doubleCheck, 800);
        }
    }
})

card14.addEventListener("click", function(){
    if (card14.classList[1] !== "flip"){
        card14.classList.add("flip");

        if (hasFlippedA === true && hasFlippedB === false){
            hasFlippedB = true;
            B = 14;
        } else if (hasFlippedA === false && hasFlippedB === false){
            hasFlippedA = true;
            A = 14;
        }

        if (hasFlippedA === true && hasFlippedB === true){
            setTimeout(doubleCheck, 800);
        }
    }
})

card15.addEventListener("click", function(){
    if (card15.classList[1] !== "flip"){
        card15.classList.add("flip");

        if (hasFlippedA === true && hasFlippedB === false){
            hasFlippedB = true;
            B = 15;
        } else if (hasFlippedA === false && hasFlippedB === false){
            hasFlippedA = true;
            A = 15;
        }

        if (hasFlippedA === true && hasFlippedB === true){
            setTimeout(doubleCheck, 800);
        }
    }
})

card16.addEventListener("click", function(){
    if (card16.classList[1] !== "flip"){
        card16.classList.add("flip");

        if (hasFlippedA === true && hasFlippedB === false){
            hasFlippedB = true;
            B = 16;
        } else if (hasFlippedA === false && hasFlippedB === false){
            hasFlippedA = true;
            A = 16;
        }

        if (hasFlippedA === true && hasFlippedB === true){
            setTimeout(doubleCheck, 800);
        }
    }
})

card17.addEventListener("click", function(){
    if (card17.classList[1] !== "flip"){
        card17.classList.add("flip");

        if (hasFlippedA === true && hasFlippedB === false){
            hasFlippedB = true;
            B = 17;
        } else if (hasFlippedA === false && hasFlippedB === false){
            hasFlippedA = true;
            A = 17;
        }

        if (hasFlippedA === true && hasFlippedB === true){
            setTimeout(doubleCheck, 800);
        }
    }
})

card18.addEventListener("click", function(){
    if (card18.classList[1] !== "flip"){
        card18.classList.add("flip");
        
        if (hasFlippedA === true && hasFlippedB === false){
            hasFlippedB = true;
            B = 18;
        } else if (hasFlippedA === false && hasFlippedB === false){
            hasFlippedA = true;
            A = 18;
        }

        if (hasFlippedA === true && hasFlippedB === true){
            setTimeout(doubleCheck, 800);
        }
        
        
    }


})


function doubleCheck() {

    let sum = A + B;
    
    if (sum === 19){
        
        for (element of cards){
            if (element.classList[1] === "flip"){
                element.classList.add("match");
                setTimeout(element.classList.add("disappear"), 1800);
            }
        }
    }

    if (sum !== 19){
        for (element of cards){
            if (element.classList[1] === "flip"){
                element.classList.remove("flip");
            }
        }         
    }

    hasFlippedA = false;
    hasFlippedB = false;

    A = 0;
    B = 0;
} 

finished();


//////////////////////////////////////////////////////////////////
//when all cards are gone:

function finished(){
    let count = 0;
    for (element of cards){
        if (element.classList.contains("disappear")){
            count++;
        }
    }

    if (count === 18){
        alert(`Congratulations! You have finished the game!\nClick the "Shuffle Again" button to play again!`);
    }
}

//////////////////////////////////////////////////////////////////

//Shuffle cards:

function changeText() {
    button.innerText = "Shuffle Again!";
    button.style.backgroundColor = "rgb(255, 154, 171)";
    button.style.border = "rgb(255, 154, 171)";
}

function shuffleCards(){
    for (element of cards){
        let random = Math.ceil(Math.random()*18);

        element.style.order = random;
    }

}


function openCards(){
    for (element of cards){
        element.classList.add("flip");
    } 
}

function closeCards(){
    for (element of cards){
        element.classList.remove("flip");
    }
}

function reset(){
    hasFlippedA = false;
    hasFlippedB = false;

    for (element of cards){
        if (element.classList.contains("flip") === true ||
            element.classList.contains("match") === true || 
            element.classList.contains("disappear") === true){
                
            element.classList.remove("flip", "match", "disappear");
        }

    }

}