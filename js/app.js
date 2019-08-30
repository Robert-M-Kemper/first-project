// Writeour JavaScript in here

var pics = [
    "imgs/buddies.jpeg",    //0
    "imgs/bed_kitty.jpeg",  //1
    "imgs/lazy_kitty.jpeg",  //2
    "imgs/pretty_kitty.jpeg"  //3
                              //4  
]

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
    if(counter === 4){
        counter = 0
    }
    img.src = pics[counter];
    counter = counter + 1;

});

