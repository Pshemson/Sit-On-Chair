document.addEventListener("DOMContentLoaded", function () {

    //Rozsuwane menu
    var menu = document.querySelector(".menu:first-of-type");
    var submenu = document.querySelector(".submenu");

    function showSubmenu() {
        if (menu.firstElementChild !== null) {
            submenu.classList.add('show');
        }
    }

    function hideSubmenu() {
        submenu.classList.remove('show');
    }

    menu.addEventListener('mouseover', showSubmenu);
    menu.addEventListener('mouseout', hideSubmenu);


//Najezdzanie myszą na obrazki

    var box1 = document.querySelector('.boxes__box');
    var box2 = document.querySelector('.boxes__box:nth-child(2)');

    var title = document.querySelectorAll('.boxes__box');

    function hideTitle() {
        for (var i = 0; i < title.length; i++) {
            this.firstElementChild.classList.add('box_hide');
        }
    }

    function showTitle() {
        for (var i = 0; i < title.length; i++) {
            this.firstElementChild.classList.remove('box_hide');
        }
    }

    box1.addEventListener('mouseover', hideTitle);
    box1.addEventListener('mouseout', showTitle);
    box2.addEventListener('mouseover', hideTitle);
    box2.addEventListener('mouseout', showTitle);

//Ruchomy slider

    var sliderContainer = document.querySelector('.slider');
    var nextSlide = document.querySelector('.nextSlide');
    var prevSlide = document.querySelector('.prevSlide');
    var allSlides = [...sliderContainer.querySelectorAll('.slider-content')];
    var counter = 0;

    prevSlide.style.color = "#c6c6c6";

    nextSlide.addEventListener('click', function(event) {
        if (counter <= allSlides.length - 2) {
            allSlides[counter].style.marginLeft = "-100%";
            counter++;
            if (counter < allSlides.length - 1) {
                prevSlide.style.color = "24ba9f";
            } else {
                this.style.color = "c6c6c6";
            }
        }
    });

    prevSlide.addEventListener('click', function(event) {
        if (counter <= (allSlides.length - 1) && counter >= 1) {
            --counter;
            allSlides[counter].style.marginLeft = "0";
            if (counter < allSlides.length && counter >= 1) {
                nextSlide.style.color = "24ba9f";
            } else {
                this.style.color = "c6c6c6";
            }
        }
    });










    //var test = document.querySelector('.boxes__box');
//
    //test.addEventListener('mouseover', function(event) {
    //    event.target.style.display = 'none';
//
    //    test.addEventListener('mouseout', function(event) {
    //        event.target.style.display = '';
    //    }, );
    //}, false);






});