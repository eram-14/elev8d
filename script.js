const serviceParallax = document.getElementsByClassName('service-section-background-parallax')
const seoParallax = document.getElementsByClassName("section-seo-background");
const professionalParallax = document.getElementsByClassName("professional-background-img");

window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    serviceParallax.backgroundPositionY = offset * 0.7 + "px"
    seoParallax.backgroundPositionY = offset * 0.7 + "px";
    professionalParallax.backgroundPositionY = offset * 0.7 + "px";
})

