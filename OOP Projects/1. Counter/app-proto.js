
function getElement(selection){
    const element = document.querySelector(selection)
    if(element) return element
    throw new Error(`check "${selection}", no such element exists`)
}

function Counter(element, value){
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

Counter.prototype.increase = function(){
    console.log(this)
    this.value++
    this.valueDOM.textContent = this.value
}
Counter.prototype.decrease = function(){
    this.value--
    this.valueDOM.textContent = this.value
}
Counter.prototype.reset = function(){
    this.value = 0
    this.valueDOM.textContent = this.value
}

const first = new Counter(getElement('.first-counter'), 100)
const second = new Counter(getElement('.second-counter'), 200)


// first.increase()
// first.increase()
// first.reset()
// first.decrease()