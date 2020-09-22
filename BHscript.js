var isClicked = false;
var button = document.getElementsByTagName('button')[0];

 function Btn2() {
  if (isClicked) {
    button.classList = '';
    isClicked = false;
	document.location ='справочник.html' 
  } else {
    button.classList.add('clicked');
    isClicked = true;
  }
}
	function Btn3() {
  if (isClicked) {
    button.classList = '';
    isClicked = false;
	document.location ='материал.html' 
  } else {

    button.classList.add('clicked3');
    isClicked = true;
  }
}

function Btn4() {
  if (isClicked) {
    button.classList = '';
    isClicked = false;
	document.location ='bank.html' 
  } else {

    button.classList.add('clicked4');
    isClicked = true;
  }
}

function Btn5() {
  if (isClicked) {
    button.classList = '';
    isClicked = false;
	document.location ='тест.html' 
  } else {

    button.classList.add('clicked5');
    isClicked = true;
  }
}
