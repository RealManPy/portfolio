const head2Element = document.querySelector('.head2');

head2Element.addEventListener('click', function (event) {
  const buttonRect = head2Element.getBoundingClientRect();
  const clickX = event.clientX - buttonRect.left;

  if (clickX < buttonRect.width / 2) { //Memes
    window.location.href = "memes.html";

  } else {  //Quotes
    window.location.href = "quotes.html";
  }
});
