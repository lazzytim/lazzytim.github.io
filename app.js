// Mobile Menu Opening

const menu = document.querySelector('.sidepanel')
const open = document.querySelector('.burger')
const close = document.querySelector('.cross')

open.addEventListener('click', () => {
    menu.classList.add('active')
})

close.addEventListener('click', () => {
    menu.classList.remove('active')
})

// Scroll Animations

const obeserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('AnimShow')
        } 
        
        // else {
        //     entry.target.classList.remove('AnimShow')
        // }
    })
})

const hiddenElements = document.querySelectorAll('.AnimHidden')
hiddenElements.forEach((el) => obeserver.observe(el))