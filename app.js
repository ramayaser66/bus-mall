'use strict';

var productsArray = [];
var imageShownArray = []; 

var firstImage = document.getElementById("img-one");
var seconedImage = document.getElementById("img-two");
var thiredImage = document.getElementById("img-three");
var button = document.getElementById('button'); 
var mychart = document.getElementById('categoryChart').getContext('2d');
var clearButton = document.getElementById('Clear');

var productSection = document.getElementById("proudctsList");

var tryNumb = 5;

function Products(name, image) {

    this.name = name;
    this.image = image;
    this.url = 'img/' + image;
    this.imageShown = 0;
    this.count = 0;
    productsArray.push(this);

    // myLocalStorage(); 


}



// maybe i'm calling the function in the wrong place 
// i'm calling the wrong function 
// the count is not pushing to the products array 
// it dosen't take the changes 

console.log(productsArray); 

function renderpics(ImageOne, imageTwo, imageThree) {

    firstImage.setAttribute('src', productsArray[ImageOne].url);
    productsArray[ImageOne].imageShown++;
    seconedImage.setAttribute('src', productsArray[imageTwo].url);
    productsArray[imageTwo].imageShown++;
    thiredImage.setAttribute('src', productsArray[imageThree].url);
    productsArray[imageThree].imageShown++;
}

function checkAvailability (selectedImageName) {

    for (var index = 0; index < imageShownArray.length; index++) {
      if (imageShownArray[index].name === selectedImageName) {
        return true;
      }
    }
    return false;  
  }
function assignApic() {

    do{
        var ImageOne = Math.round(Math.random() * (productsArray.length - 1));
        var imageOneName = productsArray[ImageOne].name;
    }while(checkAvailability (imageOneName))
    

    do {
        var imageTwo = Math.round(Math.random() * (productsArray.length - 1));
        var imageTwoName = productsArray[imageTwo].name;
        var imageThree = Math.round(Math.random() * (productsArray.length - 1));
        var imageThreeName = productsArray[imageThree].name;
    } while (ImageOne === imageTwo || ImageOne === imageThree || imageTwo === imageThree || checkAvailability (imageTwoName)||checkAvailability (imageThreeName));


    imageShownArray= [];

    imageShownArray.push(
        productsArray[ImageOne],
        productsArray[imageTwo],
        productsArray[imageThree]
    );
    //   console.log(ImageOne);
    //   console.log(imageTwo);
    //   console.log(imafeThree);

    renderpics(ImageOne, imageTwo, imageThree);
}
function checkProduct(indicator) {

  console.log(productsArray); 
    for (var i = 0; i < productsArray.length; i++) {

        if (productsArray[i].url === indicator) {
            productsArray[i].count++;
            tryNumb--;
        }
    }
}


function countProducts(event) {
    var targetByid = event.target.id;
    // console.log(targetByid);

    if (tryNumb !== 0) {
        if (targetByid === 'img-one' || targetByid === 'img-two' || targetByid === 'img-three') {
            var indicator = event.target.getAttribute('src');
            checkProduct(indicator);
            assignApic();



        }
    } else {
        productSection.removeEventListener('click', countProducts);
        myLocalStorage();
        // console.log(productsArray);
    }





}





new Products('bag', 'bag.jpg');
new Products('banana', 'banana.jpg');
new Products('bathroom', 'bathroom.jpg');
new Products('boots', 'boots.jpg');
new Products('breakfast', 'breakfast.jpg');
new Products('bubblegum', 'bubblegum.jpg');
new Products('chair', 'chair.jpg');
new Products('cthulhu', 'cthulhu.jpg');
new Products('dog-duck', 'dog-duck.jpg');
new Products('dragon', 'dragon.jpg');
new Products('pen', 'pen.jpg');
new Products('pet-sweep', 'pet-sweep.jpg');
new Products('scissors', 'scissors.jpg');
new Products('shark', 'shark.jpg');
new Products('sweep', 'sweep.png');
new Products('tauntaun', 'tauntaun.jpg');
new Products('unicorn', 'unicorn.jpg');
new Products('usb', 'usb.gif');
new Products('water-can', 'water-can.jpg');
new Products('wine-glass', 'wine-glass.jpg');

console.log(productsArray); 


assignApic();


productSection.addEventListener('click', countProducts);


// console.log(productsArray); 

var resultlist = document.getElementById('resultList'); 






function myLocalStorage() {
  localStorage.setItem('myData', JSON.stringify(productsArray));
}


function clearStorage(){

  localStorage.clear();

}

function restoreData () {
    
  if (localStorage.length > 0 ) { 
     productsArray = JSON.parse(localStorage.getItem('myData'));

    //  checkProduct(); 
  console.log(productsArray); 
   
  }
}



// console.log(localStorage); 















function list(event){
    event.preventDefault();  
    renderChart();

    // myLocalStorage(); 

  

    var ulList = document.createElement('ul'); 
    resultlist.appendChild(ulList); 

    for (var index = 0; index < productsArray.length; index++){

        var li = document.createElement('li'); 
        li.textContent =productsArray[index].name+ ' had '+productsArray[index].count+' votes, and was seen '+ +productsArray[index].imageShown+' times.'
        ulList.appendChild(li);
    }


}







function renderChart() {

    var arrayOfNames = [];
    var arrayOfCount = [];
    var arrayOfShown = [];
  
  
    for (var index = 0; index < productsArray.length; index++) {
        arrayOfNames.push(productsArray[index].name);
      arrayOfCount.push(productsArray[index].count);
      arrayOfShown.push(productsArray[index].imageShown);
      
    }
   
    var categoriesChart = new Chart(mychart, {
      type: 'bar',
      data: {
        labels: arrayOfNames, // array of labels (names of the goats)
        datasets: [
          {
          label: '# of Product Clicks',
          data: arrayOfCount, // array of values (count for each goat when it was clicked)
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)'
           
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        },
        {
          label: 'Times shown for the Product',
          data: arrayOfShown, // array of values (count for each goat when it was clicked)
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
  






button.addEventListener('click', list); 
clearButton.addEventListener('click', clearStorage); 
restoreData(); 
console.log(localStorage); 