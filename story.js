// DOM MANIPULATION Visual Novel Game
// Create a new event
// Select the button you want to edit
// Run a function when it is clicked

/***************
 innerHTML REPLACES the HTML code inside the element
 **************/

//  Opening Text
document.querySelector('.story').innerHTML = '<p>Today when I wake up, I found out that I was not in my house. The place was dark. I called my mom and my dad but no ne answered me the only sound I heared was my voice. I was terrified. But i tried to be claimed.</p>'


document.querySelector(".start-btn").addEventListener
("click", function() {
    // 1. Story 1 text
document.querySelector(".story").innerHTML =
 '<p>I decide to check this place. I open the light from my phone and saw two roads I can go, I decided to go...';
    // 2. Erase old button     add dot                     no dot
document.querySelector(".start-btn").classList.add("invisible");
    // 3. Show next button
document.querySelector(".right-btn").classList.remove("invisible");
document.querySelector(".left-btn").classList.remove("invisible");
} );

document.querySelector(".left-btn").addEventListener
("click", function() {
    // 1. Story 1 text
document.querySelector(".story").innerHTML = '<p> A monster come I need to run. I see the window and a door but I am not sure if one of them are lock or open. But I just have only one chance where should I go...';
    // 2. Erase old button     add dot                     no dot
document.querySelector(".left-btn").classList.add("invisible");
document.querySelector(".right-btn").classList.add("invisible");
    // 3. Show next button
document.querySelector(".door-btn").classList.remove("invisible");
document.querySelector(".window-btn").classList.remove("invisible");
} );


document.querySelector(".right-btn").addEventListener
("click", function() {
    // 1. Story 1 text
document.querySelector(".story").innerHTML = '<p> Oh... A bag...But it is so dirty...There is a bag should I open it?';
    // 2. Erase old button     add dot                     no dot
document.querySelector(".left-btn").classList.add("invisible");
document.querySelector(".right-btn").classList.add("invisible");
    // 3. Show next button
document.querySelector(".open-btn").classList.remove("invisible");
document.querySelector(".close-btn").classList.remove("invisible");
} );

document.querySelector(".door-btn").addEventListener
("click", function() {
    // 1. Story 1 text
document.querySelector(".story").innerHTML = '<p> Oh No.....tht door is lock!! I can not get out!';
    // 2. Erase old button     add dot                     no dot
document.querySelector(".door-btn").classList.add("invisible");
document.querySelector(".window-btn").classList.add("invisible");
    // 3. Show next button
document.querySelector(".GameOver-btn").classList.remove("invisible");
} );

document.querySelector(".window-btn").addEventListener
("click", function() {
    // 1. Story 1 text
document.querySelector(".story").innerHTML = '<p> You got it!!! The window is open now you need to jump out the window and you win!!!';
    // 2. Erase old button     add dot                     no dot
document.querySelector(".door-btn").classList.add("invisible");
document.querySelector(".window-btn").classList.add("invisible");
    // 3. Show next button
document.querySelector(".Win-btn").classList.remove("invisible");
} );

document.querySelector(".open-btn").addEventListener
("click", function() {
    // 1. Story 1 text
document.querySelector(".story").innerHTML = '<p> Oh there is a map and a flashlight I can use it to find the way out!!!';
    // 2. Erase old button     add dot                     no dot
document.querySelector(".open-btn").classList.add("invisible");
document.querySelector(".close-btn").classList.add("invisible");
    // 3. Show next button
document.querySelector(".Successfully-get-out-btn").classList.remove("invisible");
} );

document.querySelector(".close-btn").addEventListener
("click", function() {
    // 1. Story 1 text
document.querySelector(".story").innerHTML = '<p> Oh no you are stuck in the place...Game Over...';
    // 2. Erase old button     add dot                     no dot
document.querySelector(".open-btn").classList.add("invisible");
document.querySelector(".close-btn").classList.add("invisible");
    // 3. Show next button
document.querySelector(".YouLost-btn").classList.remove("invisible");
} );






var IoseSound = new Audio('sounds/jingle-lose-00.wav')
themeSound.play();

