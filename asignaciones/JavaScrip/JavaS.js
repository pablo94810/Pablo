const 3 = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navL');
    const navL = document.querySelectorAll('.navL li');
        
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
       navL.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        }
        else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
           }

       });
        burger.classList.toggle('toggle');
    });

    
}
navSlide();