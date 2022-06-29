const btns = document.querySelectorAll('.tab-btn')
// console.log(btns)
const about = document.querySelector('.about')
// console.log(about)
const articles = document.querySelectorAll('.content')
// console.log(articles)

about.addEventListener('click', function(e){
    const id = e.target.dataset.id
    if(id){
        btns.forEach(function(btn){
            btn.classList.remove('active')
        })
        e.target.classList.add('active')

       // hide other articles
       articles.forEach(function(article){
           article.classList.remove('active')
       })
       const element = document.getElementById(id)
       element.classList.add('active')
    }
})