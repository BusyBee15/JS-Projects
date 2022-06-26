const toggle = document.querySelector('.sidebar-toggle')

const closeSidebar = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')

toggle.addEventListener('click', function(){
    // console.log('hi')
    sidebar.classList.toggle('show-sidebar')
})

closeSidebar.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar')
})