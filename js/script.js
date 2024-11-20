function userScoll() {
    const navbar = document.querySelector('.navbar')

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) navbar.classList.add('navbar-sticky')
        else navbar.classList.remove('navbar-sticky')
    })
}


function incrementStats() {
    const counters = document.querySelectorAll('.counter')

    counters.forEach(counter => {
        counter.innerHTML = 0;

        const updateCounter = () => {
            /**
             * ? That will return as string "328" but we need number
             * ? we can convert string to number by adding "+" sign begainning
             */
            const target = +counter.getAttribute('data-target')
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


document.addEventListener('DOMContentLoaded', userScoll)
document.addEventListener('DOMContentLoaded', incrementStats)
