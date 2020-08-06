document.addEventListener('DOMContentLoaded' , ()=>{
    var elemen = document.querySelectorAll('.carousel');
    M.Carousel.init(elemen, {
        duration:1200,
        dis:100,
        shift:5,
        padding:5,
        numVisible:3,
        indicators:true,
        noWrap:true
    });
});