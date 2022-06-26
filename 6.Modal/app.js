const openModal = document.querySelector('.modal-btn')
const closeModal = document.querySelector('.close-btn')
const modal = document.querySelector('.modal-overlay')

openModal.addEventListener('click', function(){
    // console.log('hi'0
        modal.classList.add('open-modal')
    
})

closeModal.addEventListener('click', function(){
    modal.classList.remove('open-modal')
})