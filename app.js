const mainHeading = document.querySelector('#main-heading');
const otherHeading = document.querySelector('#other-heading');
const newPar = document.createElement('p');
newPar.textContent = "hello , this is a new paragraph!!";
mainHeading.appendChild(newPar);
otherHeading.appendChild(newPar);