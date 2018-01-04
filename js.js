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