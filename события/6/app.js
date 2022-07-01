const lock = document.querySelector('.lock');
const unlock = document.querySelector('.unlock');

lock.addEventListener('click', () => {
    document.querySelector('.inp').setAttribute('readonly', 'readonly');
})

unlock.addEventListener('click', () => {
    document.querySelector('.inp').removeAttribute('readonly', 'readonly');
})

