/* gọi api từ nguồn khác lấy 50 từ đơn giản hơn, chia từng từ thành 1 <char> */
const typingText = document.querySelector("#text-box p");
async function getRandomParagraph() {
      const response = await fetch('https://random-word-api.herokuapp.com/word?number=50&length=5');
      const data = await response.json();
      const randomParagraph = data.join(' ');
      console.log(randomParagraph);
      typingText.innerHTML = "";
      randomParagraph.split("").forEach(char => {
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
}
document.addEventListener('DOMContentLoaded', getRandomParagraph);
/* display key pressed */


let keys = document.querySelectorAll('.keys');

let spaceKey = document.querySelector('.space_key');
let body = document.querySelector('body');
let text_input = document.querySelector('.text');
let keyboard_wrapp = document.querySelector('.keyboard_wrapp');

for(let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyName', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}



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


