const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function(){
    // 6 time we need to run the loop  - 6 hex digits for a color representation
     let hexColor = '#'
     for(let i=0; i<6; i++){
        const randomNumber = randomNumber_()
        hexColor += hex[randomNumber]
     }
     document.body.style.backgroundColor = hexColor
     color.textContent = hexColor
})

function randomNumber_(){
    return Math.floor(Math.random()*hex.length)
}