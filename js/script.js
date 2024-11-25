function userScoll() {
    const navbar = document.querySelector('.navbar')
    const backToTopBtn = document.querySelector('.to-top-btn')

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-sticky')
            backToTopBtn.classList.add('show')
        }
        else {
            navbar.classList.remove('navbar-sticky')
            backToTopBtn.classList.remove('show')
        }
    })
}

function scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function incrementStats() {
    const counters = document.querySelectorAll('.counter')

    counters.forEach(counter => {
        counter.innerHTML = 0;

        const updateCounter = () => {
            /**
             * ? That will return as string "328" but we need number
             * ? we can convert string to number by adding "+" sign begainning
             * ? This will represent as data-target
             */
            const target = +counter.getAttribute('data-target')
            /**
             * ? This will represent as .counter innnerText
             */
            const c = +counter.innerHTML

            /**
             * ? control speed here
             */
            const increment = target / 200;
            
            if(c < target){
                counter.innerHTML = Math.ceil(c + increment)
                setTimeout(updateCounter, 1)
            }
            else{
                counter.innerHTML = target
            }
        }

        updateCounter()
    })
}

//Event Listeners
document.addEventListener('DOMContentLoaded', userScoll)
document.addEventListener('DOMContentLoaded', incrementStats)
document.querySelector('.to-top-btn').addEventListener('click', scrollToTop)
