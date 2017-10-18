
var toggleMenu = document.querySelector('.toogle-menu');
var head = document.querySelector('.head');  
toggleMenu.addEventListener('click',function (e) {
    e.preventDefault();
    var dropMenu = document.querySelector('.drop-menu');
    dropMenu.classList.toggle('active');
    head.classList.toggle('active');

});

var sideToggle = document.getElementById('side-toggle')
	sideToggle.addEventListener('click', function (e){
		e.preventDefault();
		var sideMenu = document.querySelector('.side-menu');
		sideMenu.classList.toggle('side-active');
	});


$('.quote-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
});

$('.articles-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    nextArrow: '<a href="#" class="red-left"><img src="red-left.png" alt=""></a>',
    prevArrow: '<a href="#" class="red-right"><img src="red-right.png" alt=""></a>'
});	

$('.services-slider').slick({
    autoplaySpeed: 2000,
    arrows: false,
    mobileFirst: true,
    swipeToSlide: true,
    centerPadding: '20px',
});

var search = document.getElementById('search-btn');
    search.addEventListener('click', function(){
        var searcBtn = document.getElementById('search-in')
        searcBtn.classList.toggle('active')
        // console.log(searcBtn);
    });

var toogleMedia = document.querySelector('.toogle-media')
    toogleMedia.addEventListener('click', function (e){
        e.preventDefault();
        var dropMedia = document.querySelector('.drop-media');
        dropMedia.classList.toggle('media-active');
    });

  

   
