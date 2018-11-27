//JSON
var navData;
var request = new XMLHttpRequest();
 
loadData();
 
function loadData() {
    request.open("GET", "sass.json");
    request.onload = loadComplete;
    request.send();
}
 
function loadComplete(evt) {
    navData = JSON.parse(request.responseText);
    console.log(navData);
    createNavbar(navData);
    createNavbarWithDropdown(navData);
    futuramaQuotes(navData);
    createSlideshow(navData);
    showSlides(slideIndex);
}

//Navbar
function createNavbar(json_content){
    var nav = document.getElementById("z-navbar");

    var content = '<ul>';
    for (i = 0; i < navData.nav.length; i++){
        content += '<li class="z-nav-obj"><a href="' + navData.nav[i][1] + '">' + navData.nav[i][0] + '</a></li>';
    }
    content += '</ul>';

    if (document.body.contains(nav)){
        nav.innerHTML = content;
    }
}

function createNavbarWithDropdown(json_content){
    var nav = document.getElementById("z-navbar-dropdown");

    var content = '<div class="z-dropdown-container">';
    content += '<li class="z-nav-obj"><a onclick="activateDropdown()" class="dropdown-btn">';
    content += '<div class="icon"></div>';
    content += '<div class="icon"></div>';
    content += '<div class="icon"></div>';
    content += '</a></li>';
    content += '<div id="z-dropdown-content" class="z-dropdown-content">';
    for (i = 0; i < navData.nav.length; i++){
        content += '<li class="z-nav-obj"><a href="' + navData.nav[i][1] + '">' + navData.nav[i][0] + '</a></li>';
    }
    content += '</div>';
    content += '</div>';

    if (document.body.contains(nav)){
        nav.innerHTML = content;
    }
}

//Quotes
function futuramaQuotes(json_content){
    var nav = document.getElementById("fut-quotes");
    
    var day = new Date().getDay();

    var content = '<h3>';
    content += navData.quotes[day];
    content += '</h3>';

    if (document.body.contains(nav)){
        nav.innerHTML = content;
    }
}

//Dropdown
var menu = true;
function activateDropdown(){

    if(menu == true){
        document.getElementById("z-dropdown-content").style.display = "inline-block";
        menu = false;
    }else{
        document.getElementById("z-dropdown-content").style.display = "none";
        menu = true;
    }
}
/*
if(documnet.body.contains(drop)){
    window.onclick = function(event) {
        if(!event.target.matches(".z-dropdown-btn")){

        }
    }
}
*/

//Modal
var modal = document.getElementById('z-modal');
var button = document.getElementById('modalBtn');
var span = document.getElementsByClassName("close-modal")[0];
if(document.body.contains(modal)){
    button.onclick = function() {
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function() {
        if (event.target == modal){
            modal.style.display = 'none';
        }
    }
}

//snackbar
function activateSnackbar(){
    var snack = document.getElementById("z-snackbar-content");
    console.log('hi');

    if(snack.style.visibility = "visible"){
        setTimeout(function(){
            snack.style.visibility = "hidden";
        }, 2000);
    }
}

//slideshow
function createSlideshow(json_content){
    var slide = document.getElementById("z-slideshow");
    var content = '<div class="z-slides-container">';

    for(i = 0; i < navData.slideImages.length; i++){
        content += '<div class="z-slides"><img src="' + navData.slideImages[i] + '"></div>';
        content += '<div class="z-slide-text">' + navData.slideCaption[i] + '</div>';
    }

    content += '</div>';

    content += '<a class="prev-slide" onclick="changeSlide(-1)">&#10094;</a>';
    content += '<a class="next-slide" onclick="changeSlide(1)">&#10095;</a>';

    content += '<div class="z-dot-container">';
    for(i = 0; i < navData.slideImages.length; i++){
        content += '<span class="z-slide-dot" onclick="currentSlide('+i+')"></span>';
    }
    content += '</div>';

    if (document.body.contains(slide)){
        slide.innerHTML = content;
    }
}

var slideIndex = 1;

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("z-slides");
    var slidesText = document.getElementsByClassName("z-slide-text");
    var dots = document.getElementsByClassName("z-slide-dot");
    if (n > slides.length) {
        slideIndex = 1
    };

    if (n < 1) {
        slideIndex = slides.length
    };

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };

    for (i = 0; i < slidesText.length; i++) {
        slidesText[i].style.display = "none";
    };

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    };

    slides[slideIndex-1].style.display = "block";
    slidesText[slideIndex-1].style.display = "block";
    dots[slideIndex].className
    += " active";
}

//tooltip/popup
var popup1 = true;
var popup2 = true;
var popup3 = true;
var popup4 = true;

function activatePopupTop(){
    var pop = document.getElementById("z-popup-text");

    if(popup1 == true){
        document.getElementById("z-popup-text-top").style.display = "inline-block";
        popup1 = false;
    }else{
        document.getElementById("z-popup-text-top").style.display = "none";
        popup1 = true;
    }
}

function activatePopupLeft(){
    var pop = document.getElementById("z-popup-text");

    if(popup2 == true){
        document.getElementById("z-popup-text-left").style.display = "inline-block";
        popup2 = false;
    }else{
        document.getElementById("z-popup-text-left").style.display = "none";
        popup2 = true;
    }
}

function activatePopupRight(){
    var pop = document.getElementById("z-popup-text");

    if(popup3 == true){
        document.getElementById("z-popup-text-right").style.display = "inline-block";
        popup3 = false;
    }else{
        document.getElementById("z-popup-text-right").style.display = "none";
        popup3 = true;
    }
}

function activatePopupBot(){
    var pop = document.getElementById("z-popup-text");

    if(popup4 == true){
        document.getElementById("z-popup-text-bot").style.display = "inline-block";
        popup4 = false;
    }else{
        document.getElementById("z-popup-text-bot").style.display = "none";
        popup4 = true;
    }
}