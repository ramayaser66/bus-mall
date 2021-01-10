'use strict';

var productsArray = [];

var firstImage = document.getElementById("img-one");
var seconedImage = document.getElementById("img-two");
var thiredImage = document.getElementById("img-three");
var button = document.getElementById('button'); 

var productSection = document.getElementById("proudctsList");

var tryNumb = 5;
// var imageShown = 0;




function Products(name, image) {

    this.name = name;
    this.image = image;
    this.url = 'img/' + image;
    this.imageShown = 0;
    this.count = 0;



    productsArray.push(this);

}








function renderpics(ImageOne, imageTwo, imageThree) {

    firstImage.setAttribute('src', productsArray[ImageOne].url);
    productsArray[ImageOne].imageShown++;
    seconedImage.setAttribute('src', productsArray[imageTwo].url);
    productsArray[imageTwo].imageShown++;
    thiredImage.setAttribute('src', productsArray[imageThree].url);
    productsArray[imageThree].imageShown++;






}








function assignApic() {

    var ImageOne = Math.round(Math.random() * (productsArray.length - 1));

    do {
        var imageTwo = Math.round(Math.random() * (productsArray.length - 1));
        var imageThree = Math.round(Math.random() * (productsArray.length - 1));
    } while (ImageOne === imageTwo || ImageOne === imageThree || imageTwo === imageThree);



    //   console.log(ImageOne);
    //   console.log(imageTwo);
    //   console.log(imafeThree);

    renderpics(ImageOne, imageTwo, imageThree);





}



function checkProduct(indicator) {

    for (var i = 0; i < productsArray.length; i++) {

        if (productsArray[i].url === indicator) {
            productsArray[i].count++;
            tryNumb--;

        }



    }

}


function countProducts(event) {
    var targetByid = event.target.id;
    console.log(targetByid);

    if (tryNumb !== 0) {
        if (targetByid === 'img-one' || targetByid === 'img-two' || targetByid === 'img-three') {
            var indicator = event.target.getAttribute('src');
            checkProduct(indicator);
            assignApic();



        }
    } else {
        productSection.removeEventListener('click', countProducts);
        console.log(productsArray);
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



assignApic();


productSection.addEventListener('click', countProducts);


// console.log(productsArray); 

var resultlist = document.getElementById('resultList'); 







function list(event){
    event.preventDefault();  

    var ulList = document.createElement('ul'); 
    resultlist.appendChild(ulList); 

    for (var index = 0; index < productsArray.length; index++){

        var li = document.createElement('li'); 
        li.textContent =productsArray[index].name+ ' had '+productsArray[index].count+' votes, and was seen '+ +productsArray[index].imageShown+' times.'
        ulList.appendChild(li);
    }


}







button.addEventListener('click', list); 