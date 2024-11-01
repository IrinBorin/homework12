const h1Element = document.querySelector('.header');
console.log(h1Element);
h1Element.textContent = 'Document Object Model';
h1Element.classList.add ('red');
h1Element.classList.remove ('blue');
h1Element.classList.toggle ('blue');
const linkToDelete = document.querySelector('.link');
linkToDelete.remove();