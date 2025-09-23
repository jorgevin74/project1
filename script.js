
const heart = document.getElementById('health');
const heart_2 = document.getElementById('health-2');
const heart_3 = document.getElementById('health-3');
const heart_4 = document.getElementById('health-4');
const heart_5 = document.getElementById('health-5');

const title_card = document.getElementById('title');
const msg = document.getElementById('message');

const main_char = document.getElementById('main_character');

const StartBtn = document.getElementById('start');
const restartBtn = document.getElementById('restart');

var currentSize = parseInt(window.getComputedStyle(main_char).fontSize, 10);

StartBtn.addEventListener('click', function() {
    console.log(currentSize);
    for(let x = 0; x < 5; x++){
        if(main_char.style.fontSize == (1) + "em"){
            heart.style.visibility = 'visible';
            console.log("is it working?");
        }
        if(main_char.style.fontSize == (2) + "em"){
            heart_2.style.visibility = 'visible';
        }
        if(main_char.style.fontSize == (3) + "em"){
            heart_3.style.visibility = 'visible';
        }
        if(main_char.style.fontSize == (4) + "em"){
            heart_4.style.visibility = 'visible';
        }
        if(main_char.style.fontSize == (5) + "em"){
            heart_5.style.visibility = 'visible';
        }
        main_char.style.fontSize = (currentSize + x) + "em";
        console.log(main_char.style.fontSize);
    }
    title_card.style.visibility = 'hidden';
    msg.style.visibility = 'hidden';
});

restartBtn.addEventListener('click', function() {
    heart.style.visibility = 'hidden';
    heart_2.style.visibility = 'hidden';
    heart_3.style.visibility = 'hidden';
    heart_4.style.visibility = 'hidden';
    heart_5.style.visibility = 'hidden';
    title_card.style.visibility = 'visible';
    msg.style.visibility = 'visible';
});

