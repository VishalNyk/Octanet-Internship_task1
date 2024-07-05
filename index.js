document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = document.querySelector('#carouselExampleIndicators');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000, // Interval in milliseconds (2 seconds)
        ride: 'carousel'
    });
});