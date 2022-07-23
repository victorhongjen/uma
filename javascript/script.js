let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let faqs = document.querySelectorAll('.faq-single')

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.onscroll = () => {
     menu.classList.remove('fa-times')
     navbar.classList.remove('nav-toggle')
}

console.log(faqs)

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});