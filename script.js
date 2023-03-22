const serviceParallax = document.getElementsByClassName('service-section-background-parallax')
const seoParallax = document.getElementsByClassName("section-seo-background");

window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    serviceParallax.backgroundPositionY = offset * 0.7 + "px"
    seoParallax.backgroundPositionY = offset * 0.7 + "px";
})

