/* 
1.user will input a number
2.create number*number cells
create a div element inside the container
add the class list .box to that container
appendchild
*/

const button = document.getElementById('reset');
const container = document.querySelector('#container');
window.addEventListener('load',setDefaultBox);
button.addEventListener('click', changeSize);
function setDefaultBox() {
    setBoxSize(11);
    fillBox(11);
}
function setBoxSize(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}
function fillBox(size) {
    for (let i = 0; i< Math.pow(size,2); i++) {
        const boxElement = document.createElement('div');
        boxElement.classList = 'box';
        container.appendChild(boxElement);
        boxElement.addEventListener('mouseover',changeColor);
    }

}
function changeColor(event) {
    const randomRedColor = Math.floor(Math.random() * 256);
    const randomGreenColor = Math.floor(Math.random() * 256);
    const randomBlueColor = Math.floor(Math.random() * 256);
    event.target.style.backgroundColor = `rgb(${randomRedColor},${randomGreenColor},${randomBlueColor})`
}
function changeSize() {
    let manualSize = prompt('enter a size:');
    if(manualSize!== null) {
        manualSize = parseInt(manualSize);
        if (manualSize < 1 || manualSize > 64 || Number.isNaN(manualSize)) {
            alert('Enter a number from 1-64 range');
            changeSize();
        } else {
            clearBox();
            setBoxSize(manualSize);
            fillBox(manualSize);
        }
    }
}
function clearBox() {
    const boxArrays = Array.from(container.childNodes);
    boxArrays.forEach(boxArray => {
        container.removeChild(boxArray);
    });
}