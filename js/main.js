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

    thumbnails += `  <div class="small_item">
                        <img src="${items[i]}">
                    </div>
    
    `;    

}

let bigThumb = document.querySelector(".big_thumb");
bigThumb.innerHTML = slides;

let smallThumb = document.querySelector(".contenitoreSmallItems");
smallThumb.innerHTML = thumbnails;



// inizializzo una variabile che mi tenga traccia della slide attiva
let currentSlide = 1;


let slidesActive = document.getElementsByClassName("big_item");
slidesActive[currentSlide].classList.add("active");

let thumbActive = document.getElementsByClassName("small_item");
thumbActive[currentSlide].classList.add("active");