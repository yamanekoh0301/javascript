'use strict';

const images = [
  'images/image000.jpg',
  'images/image001.jpg',
  'images/image002.jpg',
  'images/image003.jpg',
  'images/image004.jpg',
  'images/image005.jpg',
  'images/image006.jpg',
];

let currentindex = 1;

const mainImage = document.getElementById("carousel__main");
mainImage.src = images[currentindex];
// console.log(mainImage.src)

for(let [index, image] of images.entries()){
  // console.log(index, image);

  const img = document.createElement('img');
  img.src = image;
  console.log(img.src)

  const li = document.createElement('li');
  if (index === currentindex) {
    li.classList.add('current');
  }

  li.appendChild(img);
  document.querySelector('.carousel__thumbnails').appendChild(li);



}
