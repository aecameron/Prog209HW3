//I did not do this within DOM content loaded event because the square function would not work when I placed in DOM content loaded event, it gave me an error. Thus I also had to define the array and add array elements outside the DOM content loaded event.


//Define array 
let origArray = [2, 3, 4];
//write the values of the origArray into the 3 textboxes. 
document.getElementById("number1").value = origArray[0];
document.getElementById("number2").value = origArray[1];
document.getElementById("number3").value = origArray[2];


//function call 1 - from HTML
function squareFunction(event) {
    let squareArray = origArray.map(square);
    //let x = origArray.map(square);
    document.getElementById("number1").value = squareArray[0];
    document.getElementById("number2").value = squareArray[1];
    document.getElementById("number3").value = squareArray[2];
}//squareFunction


function square(oneItem) {
    return oneItem * oneItem;
}




document.addEventListener("DOMContentLoaded", function (event) {


    //function call 2 - anonymous function
    document.getElementById('cubeButton').addEventListener('click', function () {

        let cubeArray = origArray.map(cube);
        document.getElementById("number1").value = cubeArray[0];
        document.getElementById("number2").value = cubeArray[1];
        document.getElementById("number3").value = cubeArray[2];

        function cube(oneItem) {
            return oneItem * oneItem * oneItem;
        }

    })//cube anonymous function



    //function call 3
    document.getElementById('toTheFourthButton').addEventListener('click', toTheFourthFunction);


    function toTheFourthFunction(event) {
        //[5] Now write the code for the named function in the 3rd button’s click event handler.  It must use the array.map capability to make a new array where the values of each element are the 4th power of the values in the origArray. Then it should write out the 3 values in the new array into the HTML 3 textboxes.
        let fourthArray = origArray.map(fourth);

        document.getElementById("number1").value = fourthArray[0];
        document.getElementById("number2").value = fourthArray[1];
        document.getElementById("number3").value = fourthArray[2];

        function fourth(oneItem) {
            return oneItem * oneItem * oneItem * oneItem;
        }
    }//toTheFourthFunction


})//DOM



