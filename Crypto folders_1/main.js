const body = document.querySelector('body')
const toggle = document.getElementById('toggle');
toggle.onclick = () => {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
}

const body1 = document.querySelector('body')
const toggle1 = document.getElementById('toggle1');
toggle1.onclick = () => {
    toggle1.classList.toggle('active');
    body1.classList.toggle('active');
}


const connect = document.querySelector('.connect')
const popup = document.querySelector('.modal-popup')
const closeMenu = document.querySelector('.close')


connect.addEventListener('click', ()=> {
    if(popup.style.display = 'none') {
        popup.style.display = 'block'
    }
})

closeMenu.addEventListener('click', ()=> {
   
        popup.style.display ='none'
})