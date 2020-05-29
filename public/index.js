'use strict'

window.onload = function () {
  this.getFetchData();
}

function getFetchData() {
  console.log('in fetch function');
  fetch ('https://my-json-server.typicode.com/jubs16/Products/Products')

  .then (function(response){
    return response.json();
  })

  .then(function(data) {
    console.log(data);
    printProducts(data);
  })
}

let div = document.getElementById('main-container');
let ul = document.createElement('ul');
ul.style.listStyleType = 'none';
div.appendChild(ul);

function printProducts(arr) {
  for (let i=0; i< arr.length; i++) {
    let li = document.createElement('li');
    li.style.margin = '20px';
    ul.appendChild(li);

    let img = document.createElement('img');
    img.setAttribute('src', `${arr[i].imgUrl}`);
    img.style.width = '150px';

    li.innerHTML = `Product name: ${arr[i].name}<br>Price: ${arr[i].price}<br>`;
    li.style.fontWeight = '600';
    li.style.fontFamily = 'Verdana, Geneva, sans-serif';
    li.style.backgroundColor = 'lightgray';
    li.style.padding = '10px';
    li.appendChild(img);
  }
}