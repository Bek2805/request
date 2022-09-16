const openBtn = document.querySelector('.request')
openBtn.addEventListener('click', () => {
    const div = document.querySelector('.popup')
    div.style.display = 'block'
})
const closeBtn = document.querySelector('.popup__close')
closeBtn.addEventListener('click', () => {
    const div = document.querySelector('.popup')
    div.style.display = 'none'
})
const closeBack = document.querySelector('.popup__overlay')
closeBack.addEventListener('click', () => {
    const div = document.querySelector('.popup')
    div.style.display = 'none'
})


