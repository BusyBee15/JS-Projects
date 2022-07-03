// set up the daata
const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()



//close links 
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')
// console.log(linksContainer)
// console.log(links)

navToggle.addEventListener('click', function(){
    // linksContainer.classList.toggle('show-links')
    // console.log("hi")
    const containerHeight = linksContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height
    if(containerHeight===0){
        // console.log("hi")  
        linksContainer.style.height = `${linksHeight}px`
    }else{
        linksContainer.style.height = 0
    }
})


const navbar = document.getElementById('nav')
const toplink = document.querySelector('.top-link')
// fixed navbar
window.addEventListener('scroll', function(){
    // console.log(window.pageYOffset)
    const scrollHeight = window.pageYOffset
    const navHeight = navbar.getBoundingClientRect().height
    if(scrollHeight > navHeight){
        navbar.classList.add('fixed-nav')
    }else{
        navbar.classList.remove('fixed-nav')
    }

    if(scrollHeight > 500 ){
        toplink.classList.add('show-link')
    }else{
        toplink.classList.remove('show-link')
    }
})


//smooth scroll
const scrollLinks = document.querySelectorAll('.scroll-link')
// console.log(scrollLinks)
scrollLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault()
        const id = e.currentTarget.getAttribute('href').slice(1)
        const element = document.getElementById(id)
        // calculate heights
        const navHeight = navbar.getBoundingClientRect().height
        const containerHeight = linksContainer.getBoundingClientRect().height
        const fixedNav = navbar.classList.contains('fixed-nav')

        let position = element.offsetTop - navHeight

        if(!fixedNav){
            position=position-navHeight
        }
        if(navHeight > 82){
            position = position + containerHeight
        }
        
        window.scrollTo({
            left:0,
            top:position
        })
        linksContainer.style.height = 0 
       
    })
})