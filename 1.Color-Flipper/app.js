const colors = ['pink', 'green', 'rgba(90,80,140)', '#f145e5']

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function(){
    // get random number between 0-3 (we have 4 elements in the array)
    const randomNumber = randomNumber_()
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

function randomNumber_(){
    return Math.floor(Math.random()*colors.length)
}









