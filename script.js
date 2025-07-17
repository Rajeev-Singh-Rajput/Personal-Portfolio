$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Competitve Programmer", "Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Competitve Programmer", "Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // owl carousel script
    $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: true,
    nav: true,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
    ],
    responsive: {
        0:    { items: 1, nav: false },
        600:  { items: 2, nav: false },
        1000: { items: 3, nav: true }
    }
});

});

const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
          successMessage.style.display = "block";

          setTimeout(() => {
            successMessage.style.display = "none";
          }, 3000);
        } else {
          alert("Failed to send message. Please try again.");
        }
      })
      .catch((error) => {
        alert("An error occurred. Please try again.");
      });
  });