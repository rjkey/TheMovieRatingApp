class Movie {
    constructor(id, title, url) {
        this.id = id;
        this.title = title;
        this.url = url;
    }
}

var movieArray = new Array();

async function getMovieData() {
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => res.json())
    .then((out)=>{
        for (let i = 0; i < 20; i++) {
            var movie = new Movie(out[i].id, out[i].title, out[i].url);
            movieArray.push(movie);
        }
        mapDataToContainer();       
    });
}

function mapDataToContainer(){
    var container = document.getElementById("movie-container-id");
    container.innerHTML = "";
    
    movieArray.forEach(movie => {
        var j = Math.floor(Math.random() * 100);    
        var newBox = createHTMLelement("div", {"class":"movieBox", "innerHTML":""})
        container.appendChild(newBox);  

        var title = createHTMLelement("h4", {"class":"movieTitle"}, {"innerHTML":movie.title});
        newBox.appendChild(title);

        var year = createHTMLelement("h5", {"class":"movieYear"}, {"innerHTML":j});
        newBox.appendChild(year);

        var image = createHTMLelement("img", {"src":movie.url, "class":"movieImage"});
        image.addEventListener("click", ()=>{
            var overlay = document.getElementById("overlay-id");

            applyCSS(overlay, {"visibility":"visible"});

            var movieDetails = document.getElementById("movieDetails-id");

            var movieDetailBox = createHTMLelement("div", {"class":"movieBoxDetails"}, {"innerHTML":""});
            movieDetails.appendChild(movieDetailBox);

            var largeTitle = createHTMLelement("h3", "", {"innerHTML":movie.title});
            movieDetailBox.appendChild(largeTitle);

            var largeImage = createHTMLelement("img", {"src":movie.url},"");
            movieDetailBox.appendChild(largeImage);
        });
        newBox.appendChild(image);
    });
}

function closeImageDetails(){
    var overlay = document.getElementById("overlay-id");
    applyCSS(overlay, {"visibility":"hidden"});
    var movieDetails = document.getElementById("movieDetails-id");
    clearHTML(movieDetails);
}

function createHTMLelement(elementType, attributes, properties){
    var element = document.createElement(elementType);
    for (var key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    for (var key in properties){
        element[key] = properties[key];
    }
    return element;
}

function applyCSS(element, styles){
    for(var key in styles){
        element.style[key] = styles[key];
    }
}

function clearHTML(element){
    element.innerHTML="";
}

function sortMovies(selectedValue){
    switch (selectedValue) {
        case "sort1":
            sortMoviesBasedOnChildElementLevel(0);
            break;
        case "sort2":
            sortMoviesBasedOnChildElementLevel(1);
            break;
        default:
            break;
    }
}

function sortMoviesBasedOnChildElementLevel(childLevel){
    var boxes = document.getElementsByClassName("movieBox");

    var sortedArray = [];

    for (let i = 0; i < boxes.length; i++) {
        sortedArray[i] = boxes[i];
    }

    sortedArray.sort((a, b)=>{
        var one = a.children[childLevel].textContent;
        var two = b.children[childLevel].textContent;

        if(one < two) return -1;
        if(one > two) return 1;
        return 0;
    });

    for (let j = 0; j < sortedArray.length; j++) {
        var element = sortedArray[j];

        applyCSS(element, {"order":j});
    }
}

window.onload = getMovieData;