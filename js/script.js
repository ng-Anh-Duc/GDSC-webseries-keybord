
async function getRandomParagraph() {
    try {
      const response = await fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=1');
      const data = await response.json();
  
      if (Array.isArray(data) && data.length > 0) {
        const randomParagraph = data[0];
  
        document.getElementById("random-text").textContent = randomParagraph;
      } else {
        console.error('Invalid response from the API');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  document.addEventListener('DOMContentLoaded', getRandomParagraph);


let keys = document.querySelectorAll('.keys');

let spaceKey = document.querySelector('.space_key');
let body = document.querySelector('body');
let text_input = document.querySelector('.text');
let keyboard_wrapp = document.querySelector('.keyboard_wrapp');

for(let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyName', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}



window.addEventListener('keyup', function(e) {
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


