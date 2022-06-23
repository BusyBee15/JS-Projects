
let count =0

const value = document.getElementById('value')
const buttons = document.querySelectorAll('.btn')
console.log(buttons)

buttons.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const class_ = e.currentTarget.classList
        if(class_.contains('decrease')){
            count--;
        }else if(class_.contains('increase')){
            count++;
        }else{
            count =0;
        }
        value.textContent = count;
        if(count>0){
            value.style.color = 'green'
        }else if(count<0){
            value.style.color = 'red'
        }else{
            value.style.color = '#000'
        }
    })
})