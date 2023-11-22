<<<<<<< HEAD
<<<<<<< HEAD
/* edit */
=======
/* gọi api từ nguồn khác lấy 50 từ đơn giản hơn, chia từng từ thành 1 <char> */
const typingText = document.querySelector("#text-box p");

>>>>>>> 41a3df7 (update)
/* display key pressed */
=======

const typingText = document.querySelector("#text-box p");
>>>>>>> c8f619b (update)


let keys = document.querySelectorAll('.keys');

let spaceKey = document.querySelector('.space_key');
let randomText = document.getElementById('random-text');
let currentPosition = 0;
let originalText = "";
let gameStarted = false;
let startTime = null;
let typedText = [];
let timeElement = document.getElementById('time');
let correctWordsElement = document.getElementById('correct-words');
function reload(){
    location.reload();
    console.log('clicked');
}
async function getRandomParagraph() {
    try {
        const response = await fetch('https://random-word-api.herokuapp.com/word?number=50&length=5');
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
            
            originalText = data.join(' ');
            randomText.innerHTML = originalText.split('').map(char => `<span>${char}</span>`).join('');
        } else {
            console.error('Invalid response from the API');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

document.addEventListener('DOMContentLoaded', getRandomParagraph);

for(let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyName', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}


window.addEventListener('keyup', function(e) {
  if (e.key === 'Enter') {
    gameStarted = true;
    startTime = new Date();
    document.getElementById('start-box').style.backgroundColor= '#34eb43';
    document.getElementById('start-box-p').innerHTML = 'Click or F5 to restart';
    return;
  }

  if (!gameStarted) {
      return;
  }

  for(let i = 0; i < keys.length; i++) {
      if(e.key == keys[i].getAttribute('keyName' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
          keys[i].classList.add('remove')
      }
      if(e.code == 'Space') {
          spaceKey.classList.add('remove');
      }
      setTimeout(()=> {
          keys[i].classList.remove('remove')
      },200)
  }

  if (currentPosition < originalText.length) {
      let spanElements = randomText.getElementsByTagName('span');
      typedText.push(e.key);
      if (originalText[currentPosition].toLowerCase() === e.key.toLowerCase()) {
          // Correct key pressed
          spanElements[currentPosition].style.color = 'green';
      } else {
          // Wrong key pressed
          spanElements[currentPosition].style.color = 'red';
      }
      currentPosition++;

      if (currentPosition === originalText.length) {
        gameStarted = false;
        let endTime = new Date();
        let elapsedTime = (endTime - startTime) / 1000; // in minutes
        let typedWords = typedText.join('').replace(/\s+/g, ' ').trim().split(' ');
        let originalWords = originalText.replace(/\s+/g, ' ').trim().split(' ');
        let correctWords = typedWords.filter((word, index) => word === originalWords[index]).length;
        
        timeElement.textContent = `Time: ${elapsedTime.toFixed(2)} seconds`;
        correctWordsElement.textContent = `Correct words: ${correctWords}`;
    }
  }
})


window.addEventListener('keypress', function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyName' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.add('remove')
        }
        if(e.code == 'Space') {
            spaceKey.classList.add('remove');
        }
        setTimeout(()=> {
            keys[i].classList.remove('remove')
        },200)
    }
})



