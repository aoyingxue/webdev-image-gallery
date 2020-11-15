// find number from html and get images
var images = {
    "img-1": "images/img-1.jpg",
    "img-2": "images/img-2.jpg",
    "img-3": "images/img-3.jpg",
    "img-4": "images/img-4.jpg",
    "img-5": "images/img-5.jpg",
    "img-6": "images/img-6.jpg",
    "img-7": "images/img-7.jpg",
    "img-8": "images/img-8.jpg",
    "img-9": "images/img-9.jpg",
    "img-10": "images/img-10.jpg",
    "img-11": "images/img-11.jpg",
    "img-12": "images/img-12.jpg",
};

// get the initial images
function getInitImage() {
    var imgBlocks = document.getElementsByClassName("img");
    for (i = 0; i < imgBlocks.length; i++) {
        var imgBlock = imgBlocks[i];
        var imgBlockId = imgBlock.id;
        var image = images[imgBlockId];
        var imgNode = document.createElement("img")
        imgNode.src = image;
        imgNode.alt = imgBlockId;
        imgBlock.appendChild(imgNode);
    }
}
getInitImage();

// global variable to set the id of the current image
// and refer to the prev/next button
var id = 0;

//get the fullscreen elements
var fullScreen = document.getElementById("imageFullScreen");
var fullScreenContent = document.getElementById("full");


// add event listener to each image div
for (i = 0; i < Object.keys(images).length; i++) {
    var imgObjects = document.getElementById(Object.keys(images)[i]);
    var imgObject = imgObjects.childNodes[0];
    imgObject.addEventListener('click', enlargeImg);
}

function enlargeImg() {
    fullScreen.style.display = 'block';
    fullScreenContent.src = this.src;
    fullScreenContent.alt = this.alt;
    id = Number.parseInt(this.alt.split('-')[1]);
}

// onclick event with the button
function prev() {
    if (id <= 0) {
        id = Object.keys(images).length;
    }
    id--;
    return setImage();
}

function next() {
    if (id >= Object.keys(images).length - 1) {
        id = -1;
    }
    id++;
    return setImage();
}
// set the img of full screen
function setImage() {
    var imgKey = "img".concat("-", id + 1);
    fullScreenContent.setAttribute('src', images[imgKey]);
    fullScreenContent.setAttribute('alt', imgKey);
    return fullScreenContent;
}

// close button
var closeBtn = document.getElementById('closeBtn');
closeBtn.onclick = function () {
    fullScreen.style.display = 'none';
}

