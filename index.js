//------------------------Question 1 ---------------------------
/*Is time to create things in the DOM!!. We want you to create a new 'div' Element
and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
All right, our new element needs style. For that, assign to the new element the className 'square'!. 
Each time the user clicks on the new element it has to respond changing the displayed text 'x' to 'o'
*/

//resolve // QUESTION 1 here
let divElement = document.createElement('div');
let a1Element = document.getElementById('a-1')
divElement.className = 'square';
a1Element.appendChild(divElement);

divElement.addEventListener('click', () =>{ 
if(divElement.textContent === 'x'){
    divElement.textContent = 'o';
}else{
    divElement.textContent = 'x';
}
});



//------------------------Question 2 ---------------------------
/*Write a JavaScript program to remove items from a dropdown list.
In order to create the list we are providing you with the array below,
those items are the ones you need to add to the dropdown list as the select options
you also need to create a button that makes the remove action of the element selected
append the new list as a child of the element with the 'id = a-2'
append the button as a child of the element with the 'id = a-2'
*/

const colors = [ 'red' , 'white', 'black' , 'green' , 'orange'];

//resolve // QUESTION 2 here

let dropDown = document.createElement('select');
dropDown.id = 'colors'
let option;
let a2Element = document.getElementById('a-2');
a2Element.appendChild(dropDown);

//make loop to show colors in dropdown list in html
for (let i = 0; i<colors.length; i++){
    option = document.createElement('option');
    option.value = colors[i];
    option.textContent = (colors[i]);
    console.log(option);
    dropDown.appendChild(option);
}

let removeButton = document.createElement('button');
removeButton.innerText = 'Remove Color';
a2Element.appendChild(removeButton);

function removingColor () {
    let choice = document.getElementById('colors');
    console.log('choice', choice.selectedIndex);
    choice.remove(choice.selectedIndex);
};

removeButton.addEventListener('click', removingColor );


//------------------------Question 3 ---------------------------
/*Now lets mix some maths and programming.
In the function below (calculate_sphere) write a JavaScript program to
calculate the volume and surface area of a sphere.
Take the radius from the input value element with the 'id=radius' in the index.html file
And display the results in the elements with the 'id = volume' and 'id = area' respectively
hint: the volume of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)
*/

const calculateSphere = () =>{
    let radius = document.getElementById('radius');
    //used parseInt so value isn't a string
    radius = parseInt(radius.value);
    console.log('Radius is: ', radius);
    
    let circleVolume = ((4/3) * Math.PI * Math.pow(radius, 3)).toFixed(2);
    console.log('Volume of Sphere: ', circleVolume);

    let circleArea = (4 * Math.PI * Math.pow(radius, 2)).toFixed(2);
    console.log('Area of Sphere is: ', circleArea);

    //connect values to the html id
    document.getElementById('volume').value = circleVolume;
    document.getElementById('area').value = circleArea;
};



//------------------------Question 4 ---------------------------
/*Now in this exercise we want you to create 3 buttons, 
each with a click action that will hide the respective question's answer above.
So if you click the "Hide Question 1" button it will hide from the DOM the
answer to your first exercise. If you click it again it will show the answer. */

//resolve // QUESTION 4 here

//create teh buttons
let button1 = document.createElement('button');
let button2 = document.createElement('button');
let button3 = document.createElement('button');

//button text
button1.innerHTML = 'Hide Answer 1';
button2.innerHTML = 'Hide Answer 2';
button3.innerHTML = 'Hide Answer 3';

let a4Element = document.getElementById('a-4');
a4Element.appendChild(button1);
a4Element.appendChild(button2);
a4Element.appendChild(button3);


//make reusable function to remove answers
let removeAnswer = (num) => {
    let question = document.getElementById(`a-${num}`);
    question.style.display = 'none';
    //console.log('clicked button');
};

let makeBlock = (i) =>{
    let aBlock = document.getElementById(`a-${i}`);
    aBlock.style.display = 'block';
   // console.log(`a-${i}`)
};

//make a-1, a-2, and a-3 displays to block so we have a comparison to start
makeBlock(1);
makeBlock(2);
makeBlock(3);

//is a-1 a block style right now? yes.
//console.log('did we change a-1 to display block?', document.getElementById('a-1').style.display);

//hide and display buttons via event listener
button1.addEventListener('click', () => {
    if(a1Element.style.display === 'block'){
        removeAnswer(1);
        button1.innerHTML = 'Display Answer 1';
    }else{
        makeBlock(1);
        button1.innerHTML = 'Hide Answer 1';
    }
});

button2.addEventListener('click', () => {
    if(a2Element.style.display === 'block'){
        removeAnswer(2);
        button2.innerHTML = 'Display Answer 2';
    }else{
        makeBlock(2);
        button2.innerHTML = 'Hide Answer 2';
    }
});

let a3Element = document.getElementById('a-3');
button3.addEventListener('click', () =>{
    if(a3Element.style.display === 'block'){
        removeAnswer(3);
        button3.innerHTML = 'Display Answer 3';
    }else{
        makeBlock(3);
        button3.innerHTML = 'Hide Answer 3';
    }
});