"use strict";

//the img-wrapper
let IMGwindow = document.getElementById("img-window");
//collection of every image thats supposed to be there
let pics = document.querySelectorAll(".myPics");

let aRight = document.getElementById("arrow-right");
let aLeft = document.getElementById("arrow-left");

//controls the image thats currently shown:
let activePic = 0;


//initial display of the very first Picture:
let initialPic = createPic(pics[0].getAttribute("src"));
IMGwindow.append(initialPic);

function slide_right() {
    let oldPic = IMGwindow.querySelector("img:last-child");
    if(activePic + 1 === pics.length)
    {
        activePic = 0;

    }
    else
    {
        activePic++;
    }
    let newPic = createPic(pics[activePic].getAttribute("src"));
    newPic.classList.add("left-pic");
    IMGwindow.insertAdjacentElement("beforeend", newPic);
    setTimeout(() => {
        oldPic.classList.add("right-pic");
        newPic.classList.remove("left-pic");
    },10);
    delete_pictures();
}
function slide_left() {
    let oldPic = IMGwindow.querySelector("img:last-child");
    if(activePic - 1 < 0)
    {
        activePic = pics.length - 1;

    }
    else
    {
        activePic--;
    }
    let newPic = createPic(pics[activePic].getAttribute("src"));
    newPic.classList.add("right-pic");
    IMGwindow.insertAdjacentElement("beforeend", newPic);
    setTimeout(() => {
        oldPic.classList.add("left-pic");
        newPic.classList.remove("right-pic");
    },10);
    delete_pictures();
}

aRight.addEventListener("click", slide_right);
aLeft.addEventListener("click", slide_left);


function createPic(src) {
    let pic = document.createElement("img");
    pic.setAttribute("src", src);
    return pic;
}
function delete_pictures() {
    let rights = document.querySelectorAll(".right-pic");
    let lefts = document.querySelectorAll(".left-pic");
    if(rights.length > 5)
    {
        rights[0].remove();
        rights[1].remove();
        rights[2].remove();
        rights[3].remove();
        rights[4].remove();
    }
    if(lefts.length > 5)
    {
        lefts[0].remove();
        lefts[1].remove();
        lefts[2].remove();
        lefts[3].remove();
        lefts[4].remove();
    }
}