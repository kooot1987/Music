const music = new Audio('Wang.mp3');

let masterPlay = document.getElementById('masterPlay');

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-play-fill');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-play-fill');
    }
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }

    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }

    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})


const songs = [
    {
        id:'1',
        songName:`3LAU, Bright Lights — How You Love Me`
    },
    {
        id:'2',
        songName:`Bright Lights, Kaleena Zanders, Kandy — War For Love
        `
    },
    {
        id:'3',
        songName:`Pink Is Punk, Benny Benassi, Bright Lights — Ghost`
    },
    {
        id:'4',
        songName:`Hardwell, Dyro, Bright Lights — Never Say Goodbye`
    },
    {
        id:'5',
        songName:`Zeds Dead, Dirtyphonics, Bright Lights — Where Are You Now`
    },
    {
        id:'6',
        songName:`Zedd, Bright Lights — Follow You Down
        `
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay2 = document.getElementById('masterPlay2');

masterPlay2.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay2.classList.remove('bi-play-fill');
        masterPlay2.classList.add('bi-play-fill');
    } else {
        music.pause();
        masterPlay2.classList.add('bi-play-fill');
        masterPlay2.classList.remove('bi-play-fill');
    }
})


let currentStart2 = document.getElementById('currentStart2');
let currentEnd2 = document.getElementById('currentEnd2');
let seek2 = document.getElementById('seek2');
let bar22 = document.getElementById('bar22');
let dot2 = document.getElementsByClassName('dot2')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }

    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }

    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar22.style.width = `${seekbar}%`;
    dot2.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})
/*karusel*/
function scrollEv(leftArrow, rightArrow, carousel) {
    if (carousel.scrollLeft <= 0) {
      leftArrow.classList.add("arrow-inactive");
    } else {
      leftArrow.classList.remove("arrow-inactive");
    }
    if (carousel.scrollLeft >= carousel.scrollWidth - carousel.offsetWidth - 1) {
      rightArrow.classList.add("arrow-inactive");
    } else {
      rightArrow.classList.remove("arrow-inactive");
    }
  }
  function clicleftArrow(carousel, rectList) {
    let shiftScroll;
    for (let i = 0; i < rectList.length; i++) {
      if (carousel.scrollLeft > rectList[rectList.length - 1]) {
        shiftScroll = rectList[rectList.length - 1];
      } else if (
        carousel.scrollLeft > rectList[i] &&
        carousel.scrollLeft <= rectList[i + 1]
      ) {
        shiftScroll = rectList[i];
      }
    }
    carousel.scrollTo({
      left: shiftScroll,
      behavior: "smooth"
    });
  }
  function clickRight(carousel, rectList) {
    let shiftScroll;
    for (let i = 0; i < rectList.length; i++) {
      if (
        carousel.scrollLeft >= rectList[i] - 1 &&
        carousel.scrollLeft < rectList[i + 1]
      ) {
        shiftScroll = rectList[i + 1];
      }
    }
    carousel.scrollTo({
      left: shiftScroll,
      behavior: "smooth"
    });
  }
  function listRectCarousel(carouselNumber, carousels) {
    let divs = carousels[carouselNumber].getElementsByClassName("carousel-item");
    let rectList = [];
    let rectGauche = carousels[carouselNumber].getBoundingClientRect().left;
    for (let i = 0; i < divs.length; i++) {
      let rect = divs[i].getBoundingClientRect();
      rectList.push(rect.left - rectGauche);
    }
    for (let i = rectList.length - 1; i >= 0; i--) {
      rectList[i] = rectList[i] - rectList[0];
    }
    return rectList;
  }
  function autoSlidePosLeft(carouselNumber, carousels, leftArrows) {
    let rectList = listRectCarousel(carouselNumber, carousels);
    leftArrows[carouselNumber].addEventListener("click", () => {
      clicleftArrow(carousels[carouselNumber], rectList);
    });
  }
  function autoSlidePosRight(carouselNumber, carousels, rightArrows) {
    let rectList = listRectCarousel(carouselNumber, carousels);
    rightArrows[carouselNumber].addEventListener("click", () => {
      clickRight(carousels[carouselNumber], rectList);
    });
  }
  window.onload = () => {
    let leftArrows = document.getElementsByClassName("left-arrow");
    let rightArrows = document.getElementsByClassName("right-arrow");
    let carousels = document.getElementsByClassName("carousel");
    for (let i = 0; i < leftArrows.length; i++) {
      autoSlidePosLeft(i, carousels, leftArrows);
      window.onresize = () => {
        autoSlidePosLeft(i, carousels, leftArrows);
      };
    }
    for (let i = 0; i < rightArrows.length; i++) {
      autoSlidePosRight(i, carousels, rightArrows);
      window.onresize = () => {
        autoSlidePosRight(i, carousels, rightArrows);
      };
    }
    for (let i = 0; i < carousels.length; i++) {
      carousels[i].addEventListener("scroll", () => {
        scrollEv(leftArrows[i], rightArrows[i], carousels[i]);
      });
    }
    for (let i = 0; i < carousels.length; i++) {
      scrollEv(leftArrows[i], rightArrows[i], carousels[i]);
      window.onresize = () => {
        scrollEv(leftArrows[i], rightArrows[i], carousels[i]);
      };
    }
    
  };

  

 
