const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];


let slides = "";
let thumbnails = "";

for (let i=0; i<items.length; i++){
    
    slides +=    `<div class="big_item">
                        <img src="${items[i]}">
                        <div class="text">
                            <h4>${title[i]}</h4>
                            <p>${text[i]}</p>
                        </div>
                    </div>
    `;

    thumbnails += `  <div class="small_item smallThumb">
                        <a href="#"><img src="${items[i]}"></a>
                    </div>
    
    `;    

}

const bigThumb = document.querySelector(".big_thumb");
bigThumb.innerHTML = slides;

const smallThumb = document.querySelector(".contenitoreSmallItems");
smallThumb.innerHTML = thumbnails;



// inizializzo variabile che tenga traccia della slide attiva
let currentSlide = 4;

// Inizializzo lo stato iniziale 
const slidesActive = document.getElementsByClassName("big_item");
slidesActive[currentSlide].classList.add("active");

const thumbActive = document.getElementsByClassName("small_item");
thumbActive[currentSlide].classList.add("active");


// gestisco evento di click sulle frecce per scorrere il carosello
const arrowUp = document.getElementById("arrowUp");

arrowUp.addEventListener("click", 

    function(){

        if(currentSlide != 0){
            slidesActive[currentSlide].classList.remove("active");
            thumbActive[currentSlide].classList.remove("active");

            currentSlide = currentSlide -1;

            slidesActive[currentSlide].classList.add("active");
            thumbActive[currentSlide].classList.add("active");

        }else{
            slidesActive[currentSlide].classList.remove("active");
            thumbActive[currentSlide].classList.remove("active");

            currentSlide = items.length -1;

            slidesActive[currentSlide].classList.add("active");
            thumbActive[currentSlide].classList.add("active");
        }   
    }

);

const arrowDown = document.getElementById("arrowDown");

arrowDown.addEventListener("click", 

    function(){

        if(currentSlide != items.length -1){
            slidesActive[currentSlide].classList.remove("active");
            thumbActive[currentSlide].classList.remove("active");

            currentSlide = currentSlide +1;

            slidesActive[currentSlide].classList.add("active");
            thumbActive[currentSlide].classList.add("active");
        }else{
            slidesActive[currentSlide].classList.remove("active");
            thumbActive[currentSlide].classList.remove("active");

            currentSlide = 0;

            slidesActive[currentSlide].classList.add("active");
            thumbActive[currentSlide].classList.add("active");
        }  
    }

);

// gestione evento di click sulle miniature
const clickSmallThumb = document.getElementsByClassName("smallThumb");

for(let i=0; i<items.length; i++){

    clickSmallThumb[i].addEventListener("click",

        function(){
            slidesActive[currentSlide].classList.remove("active");
            thumbActive[currentSlide].classList.remove("active");

            currentSlide = i;

            slidesActive[currentSlide].classList.add("active");
            thumbActive[currentSlide].classList.add("active");
        }

    );

}




