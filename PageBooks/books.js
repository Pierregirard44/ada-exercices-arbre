let pics = [
    "photos/1.jpg",
    "photos/2.jpg",
    "photos/3.jpg",
    "photos/4.jpg",
    "photos/5.jpg",
    "photos/6.jpg",
    "photos/7.jpg",
    "photos/8.jpg",
    "photos/9.jpg",
    "photos/10.jpg",
    "photos/11.jpg",
    "photos/12.jpg",
    "photos/13.jpg",
    "photos/14.jpg"
];

let btn = document.querySelector("button");
let img = document.querySelector("img");
let counter = 1;

btn.addEventListener("click", function(){
    if (counter===13){
        counter=0;
    };
    img.src=pics[counter];
    counter = counter + 1;
});

