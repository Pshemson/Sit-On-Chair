document.addEventListener("DOMContentLoaded", function() {

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
        for (var i =0; i < title.length; i++) {
            this.firstElementChild.classList.add('box_hide');
        }
    }

    function showTitle() {
        for (var i=0; i < title.length; i++) {
            this.firstElementChild.classList.remove('box_hide');
        }
    }

    box1.addEventListener('mouseover', hideTitle);
    box1.addEventListener('mouseout', showTitle);
    box2.addEventListener('mouseover', hideTitle);
    box2.addEventListener('mouseout', showTitle);








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