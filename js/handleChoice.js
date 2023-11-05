const head2Element = document.querySelector('.head2');

head2Element.addEventListener('click', function (event) {
  const buttonRect = head2Element.getBoundingClientRect();
  const clickX = event.clientX - buttonRect.left;

  if (clickX < buttonRect.width / 2) { //Memes
    window.location.href = "HJd35&%23fjs%5Efvq3wF90qMEMES.html";

  } else {  //Quotes
    window.location.href = "w@%2346%23R%23@etgye457yQUOTES.html";
  }
});