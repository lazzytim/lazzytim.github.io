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