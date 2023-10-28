// start variables
// uncovered cards
let uncoveredCards = 0;
// don't have value 
let card1 = null; 
let card2 = null; 
let firstResult = null;
let secondResult = null;
let movements = 0;
let successes = 0;
let timer = false;
let time = 30;
let initialTime = 30; 
let regressiveTime = null;

let winAudio = new Audio('/assets/sounds/win.wav');
let loseAudio = new Audio('/assets/sounds/lose.wav');
let clickAudio = new Audio('/assets/sounds/click.wav');
let rightAudio = new Audio('/assets/sounds/right.wav');
let wrongAudio = new Audio('/assets/sounds/wrong.wav');

// get the value of the id 'movements'
let showMovements = document.getElementById('movements');

// show successes
let showSuccesses = document.getElementById('successes');

// show time
let showTime = document.getElementById('t-restante');

// an array of even numbers is created for the sixteen buttons in the html
let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

// randomly and disordered elements for this same array
numbers = numbers.sort( ()=> {return Math.random()-0.5 } );

function countTime(){
   regressiveTime = setInterval(() => {
        time--;
        showTime.innerHTML = `Time: ${time} seconds`;
        if(time === 0){
            clearInterval(regressiveTime);
            // disabled cards
            disabledCards();
            loseAudio.play()
        }
    }, 1000);
}

function disabledCards(){
    for (let index = 0; index <= index; index++) {
        let disabledCardss = document.getElementById(index);
        disabledCardss.innerHTML = `<img src="assets/img/${numbers[index]}.png" alt="imagen de las cartas">`;
        disabledCardss.disabled = true;
    }
}

// main function
// this parameter will have the value the press the event onclick of the html
function uncover(idButton){
    if(timer === false){
        countTime();
        timer = true;
    }



    // if the user presses the first button, so
    if(uncoveredCards == 0){
        // show the first number
        // get the value of the element by id
        card1 = document.getElementById(idButton);
        // bind the value of the parameter to the array 
        firstResult = numbers[idButton];
        // insert the value of the array of numbers
        card1.innerHTML = `<img src="assets/img/${firstResult}.png" alt="imagen de las cartas">`;
        clickAudio.play();
        // first button pressed disabled
        card1.disabled = true;
            // the uncovered cards increases by one every time that the user presses a button
    uncoveredCards++;
    }else if(uncoveredCards == 1){
        // show the second number
        card2 = document.getElementById(idButton);
        secondResult = numbers[idButton];
        card2.innerHTML = `<img src="assets/img/${secondResult}.png" alt="imagen de las cartas">`;
        card2.disabled = true;

        // increase the movement
        movements++;
        showMovements.innerHTML = `Movements: ${movements}`;
        
        if(firstResult === secondResult){
            // video 36:12
            uncoveredCards = 0;

            // increase successes
            successes++;
            showSuccesses.innerHTML = `Successes: ${successes}`;
            rightAudio.play();

            

        }else{
            wrongAudio.play();
            // show values for a few seconds
            setTimeout(() => {
                card1.innerHTML = '';
                card2.innerHTML = '';
                card1.disabled = false;
                card2.disabled = false;
                uncoveredCards = 0;
            }, 800);
        }
    }

    if(successes === 8){
        clearInterval(regressiveTime);
        showSuccesses.innerHTML = `Successes ${successes} :o`;
        showTime.innerHTML = `great you took ${initialTime - time} seconds`;
        showMovements.innerHTML =  `Movements ${movements} :o`;
        winAudio.play();
    }
}
console.log(numbers);
