function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

class Gallery{
  constructor(element){
    this.container = element
    // this.list =  
    // console.log(this.list);
    this.list = [...element.querySelectorAll('.img')]
    this.modal = getElement('.modal')
    this.modalImg = getElement('.main-img')
    this.imageName = getElement('.image-name')
    this.modalImages = getElement('.modal-images')
    this.closeBtn = getElement('.close-btn')
    this.prevBtn = getElement('.prev-btn')
    this.nextBtn = getElement('.next-btn')
    // self reference
    // let self = this

    // binding functions
    this.closeModal = this.closeModal.bind(this)
    this.nextImage = this.nextImage.bind(this)
    this.prevImage = this.prevImage.bind(this)
    this.selectImageFromModal = this.selectImageFromModal.bind(this)


// container event
    this.container.addEventListener('click',
      function(e){
        if(e.target.classList.contains('img')){
              this.openModal(e.target, this.list)
        }
       
      }.bind(this))
}

  openModal(selectedImage, list){
  this.setMainImage(selectedImage)
  this.modalImages.innerHTML = list.map(function(image){
    return `<img
        src="${image.src}"
        title="${image.title}"
        data-id="${image.dataset.id}"
        class="${selectedImage.dataset.id === image.dataset.id?"modal-img selected":"modal-img"}"
      />`
  }).join('')
  console.log('open modal');
  this.modal.classList.add('open')
  this.closeBtn.addEventListener('click', this.closeModal)
  this.nextBtn.addEventListener('click', this.nextImage)
  this.prevBtn.addEventListener('click', this.prevImage)
  this.modalImages.addEventListener('click', this.selectImageFromModal)
}

setMainImage(selectedImage){
  this.modalImg.src = selectedImage.src
  this.imageName.textContent = selectedImage.title
}

closeModal(){
  this.modal.classList.remove('open')
  this.closeBtn.removeEventListener('click', this.closeModal)
  this.nextBtn.removeEventListener('click', this.nextImage)
  this.prevBtn.removeEventListener('click', this.prevImage)
  this.modalImages.removeEventListener('click', this.selectImageFromModal)

}
nextImage(){
  const selected = this.modalImages.querySelector('.selected')
  const next = selected.nextElementSibling || this.modalImages.firstElementChild
  selected.classList.remove('selected')
  next.classList.add('selected')
  this.setMainImage(next)

}

prevImage(){
  const selected = this.modalImages.querySelector('.selected')
  const prev = selected.previousElementSibling || this.modalImages.lastElementChild
  selected.classList.remove('selected')
  prev.classList.add('selected')
  this.setMainImage(prev)

}

selectImageFromModal(event){
 if(event.target.classList.contains('modal-img')){
   const selected = this.modalImages.querySelector('.selected')
  selected.classList.remove('selected')
  event.target.classList.add('selected')
  this.setMainImage(event.target)
 }
}

}

const nature = new Gallery(getElement('.nature'))
const city = new Gallery(getElement('.city'))
// console.log(nature, city)