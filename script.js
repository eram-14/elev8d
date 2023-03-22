const serviceParallax = document.getElementsByClassName('service-section-background-parallax')

window.addEventListener('scroll', function() {
    let offset = window.pageYOffset;
    serviceParallax.backgroundPositionY = offset * 0.7 + "px"
})