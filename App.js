const screen = document.querySelector('.tvOff');
const tvSwitch = document.querySelector('.switch');

console.log(tvSwitch);

tvSwitch.addEventListener('click', () => {
    screen.style.zIndex = '0';
    tvSwitch.style.transform = 'rotate(45deg)';
});