const screen = document.querySelector('.tvOff');
const tvSwitch = document.querySelector('.switchBt');
const fullscreenBT = document.querySelector('.switch2');
const youTub = document.querySelector('.youTub')

tvSwitch.addEventListener('click', () => {
    screen.style.zIndex = '0';
    tvSwitch.style.transform = 'rotate(45deg)';
});

//fullscreen

fullscreenBT.addEventListener('click', () => {
    youTub.webkitRequestFullscreen(); //wywołuje fullscreen
})