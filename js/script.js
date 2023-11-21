let keys = document.querySelectorAll('.keys');
let spaceKey = document.querySelector('.space_key');
let body = document.querySelector('body');
let text_input = document.querySelector('.text');
let keyboard_wrapp = document.querySelector('.keyboard_wrapp');

for(let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyName', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

window.addEventListener('keydown', function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyName' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.add('active')
        }
        if(e.code == 'Space') {
            spaceKey.classList.add('active')
        }
    }
})

window.addEventListener('keyup', function(e) {
    for(let i = 0; i < keys.length; i++) {
        if(e.key == keys[i].getAttribute('keyName' ) || e.key == keys[i].getAttribute('lowerCaseName')) {
            keys[i].classList.remove('active')
            keys[i].classList.add('remove')
        }
        if(e.code == 'Space') {
            spaceKey.classList.remove('active');
            spaceKey.classList.add('remove');
        }
        setTimeout(()=> {
            keys[i].classList.remove('remove')
        },200)
    }
})