let length;
let width;
function calculateArea(){
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(documentg.getElementById('width').value);
    let area= length * width;
    document.getElementById('result').innerText = 'The are of the rectangle is: ${area}';
}