const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if (entry.isIntersecting) {
            entry.target.classList.add('showas')
        }else{
            entry.target.classList.remove('showas')

        }
    })
})


let allAnim = document.querySelectorAll('.animated')
allAnim.forEach((el)=>{
    observer.observe(el)
})

