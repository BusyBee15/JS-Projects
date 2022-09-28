
function getElement(selection){
    const element = document.querySelector(selection)
    if(element) return element
    throw new Error(`check "${selection}", no such element exists`)
}



class Counter {
    constructor(element, value){
    this.counter = element
    this.value = value
    this.resetBtn = element.querySelector('.reset')
    this.increaseBtn = element.querySelector('.increase')
    this.decreaseBtn = element.querySelector('.decrease')
    this.valueDOM = element.querySelector('.value')
    this.valueDOM.textContent = this.value
    
    this.increaseBtn.addEventListener('click', this.increase.bind(this))
    this.decreaseBtn.addEventListener('click', this.decrease.bind(this))
    this.resetBtn.addEventListener('click', this.reset.bind(this))
}

increase(){
    this.value++
    this.valueDOM.textContent = this.value
}

decrease(){
    this.value--
    this.valueDOM.textContent = this.value
}

reset(){
    this.value = 0
    this.valueDOM.textContent = this.value 
}
}

const first = new Counter(getElement('.first-counter'), 100)
const second = new Counter(getElement('.second-counter'), 200)



