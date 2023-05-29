'use strict';

//We can get the elements of the class html on JS (Like we can do it with HTML and CSS)
//Before learning DOM, let's do an easy way

console.log(document.querySelector('.message').textContent);
//Start guessing...

//What is DOM manipulation?

//- Interact a webpage with JS is DOM manipulation
//DOM (Document Object Model) Structured representation of html documents. Allows
//JS to acces HTML elements and style them
//It is a connection point between HTML and JS
//DOM !== JavaScript!!!! JS is just the dialect and DOM is part of the WEB APIs (Are libraries that
//browsers implement and can have access to our JS)

//-------------------------START THE PROJECT---------------------------------------------------------

//Manipulating text in the browser
        //document.querySelector('.message').textContent = 'Correct Number!';
        //document.querySelector('.number').textContent = 13;
        //document.querySelector('.score').textContent = 3;
//In an input field to get the value we use the value property
        //document.querySelector('.guess').value = 23;




//Create a random number from 0 to 20 without decimals
let secretNumber = Math.trunc(Math.random()*20)+1;
//It should be hidden, but as it is a test let's show it
//document.querySelector('.number').textContent = secretNumber;

//Set the beggining score
let score = 20;
document.querySelector('.score').textContent = score;

//Set the high score
let highScore = 0;
document.querySelector('.highscore').textContent = highScore;

//To make the app to do something (For example when we click on a button)
//So it will react to something that happens, we have to use the 'eventlistener'
//Event is something that happens in the page (Mouse moving, mouse clicking, keypress)
//with an event listener we can wait for an event to happen and then react to it
//The event listener will expect as arguments the type(For example 'click') and
//a listener which is the function to be called once it happens.

document.querySelector('.check').addEventListener(
    'click', function (){

        //Whenever we get an input from the user from an input it will be a String
        //So we have to convert it to a number
        const guess = Number(document.querySelector('.guess').value);

        //if we do not have any number
        if(!guess){
            document.querySelector('.message').textContent = 'Not a value';

        }

        //If we guess the number
        else if (guess === secretNumber){
            document.querySelector('.message').textContent = 'Correct number!!';
            //Change the css
            document.querySelector('body').style.backgroundColor = '#60B347';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = secretNumber;
            if (score > highScore){
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
        }

        //If the number is too high
        else if(guess > secretNumber){
            if (score > 1){
                document.querySelector('.message').textContent = 'Too high!';
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You lost the game!';
                document.querySelector('.score').textContent = 0;
            }

        }

        //If the number is too low
        else if (guess < secretNumber){
            if (score > 1){
                document.querySelector('.message').textContent = 'Too low!';
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You lost the game!';
                document.querySelector('.score').textContent = 0;
            }

        }
})

document.querySelector('.again').addEventListener('click',
    function (){
        secretNumber = Math.trunc(Math.random()*20)+1;
        document.querySelector('.guess').value = '';
        score = 20;
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.number').textContent = '?'
        document.querySelector('.highscore').textContent = highScore;


    })

















