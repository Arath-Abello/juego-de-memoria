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
        }
    }, 1000);
}

function disabledCards(){
    for (let index = 0; index <= index; index++) {
        let disabledCardss = document.getElementById(index);
        disabledCardss.innerHTML = numbers[index];
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

    // the uncovered cards increases by one every time that the user presses a button
    uncoveredCards++;

    // if the user presses the first button, so
    if(uncoveredCards === 1){
        // show the first number
        // get the value of the element by id
        card1 = document.getElementById(idButton);
        // bind the value of the parameter to the array 
        firstResult = numbers[idButton];
        // insert the value of the array of numbers
        card1.innerHTML = firstResult;

        // first button pressed disabled
        card1.disabled = true;
    }else if(uncoveredCards === 2){
        // show the second number
        card2 = document.getElementById(idButton);
        secondResult = numbers[idButton];
        card2.innerHTML = secondResult;
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

            if(successes === 8){
                clearInterval(regressiveTime);
                showSuccesses.innerHTML = `Successes ${successes} :o`;
                showTime.innerHTML = `great you took ${initialTime - time} seconds`;
                showMovements.innerHTML =  `Movements ${movements} :o`;
            }

        }else{
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
}
console.log(numbers);
