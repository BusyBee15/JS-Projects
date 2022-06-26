const btn = document.querySelector('.switch-btn')
const video = document.querySelector('.video-container')


btn.addEventListener('click', function(){
    //  btn.classList.toggle('slide')
    //  console.log('hi')
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide')
        video.pause()
    }else{
        btn.classList.remove('slide')
        video.play()
    }
})

// preloader
const preloader = document.querySelector('.preloader')

window.addEventListener('load',function(){
    preloader.classList.add('hide-preloader')
})
