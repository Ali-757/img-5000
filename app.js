let box = document.querySelector(".box");

function fun() {
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(photos => photos.json()).then(photosAll => {
        for (let i = 0; i < photosAll.length; i++) {
            const imgEl = document.createElement("img");
            imgEl.src = photosAll [i].url;
            imgEl.className = "img-element";
            box.appendChild(imgEl);
            
        };
    });
};

fun();