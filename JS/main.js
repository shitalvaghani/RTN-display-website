
//------- arrow bottum to top js-----------


const goTopBtn = document.querySelector('.go-top-btn');
window.addEventListener('scroll', checkHeight)

function checkHeight() {
    if (window.scrollY > 200) {
        goTopBtn.style.display = "flex"
    }
    else {
        goTopBtn.style.display = "none"
    }
}
goTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" })
})


//nav hide
let hem = document.getElementById("hem");
let cross = document.getElementById("cross");
let navBar = document.querySelectorAll('.nav-link');
let button = document.querySelectorAll('.call');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function (a) {
    a.addEventListener('click', function () {
        navCollapse.classList.remove('show');
        hem.style.display = "block";
        cross.style.display = "none";
    })
})
button.forEach(function (a) {
    a.addEventListener('click', function () {
        navCollapse.classList.remove('show');
        hem.style.display = "block";
        cross.style.display = "none";
    })
})

hem.onclick = function () {

    hem.style.display = "none";
    cross.style.display = "block";
}

cross.onclick = function () {

    hem.style.display = "block";
    cross.style.display = "none";

}

   // slider js
   var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    // spaceBetween: 30,
    loop: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});

