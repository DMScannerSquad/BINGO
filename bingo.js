var card = document.getElementById("card");
var squares = document.querySelectorAll("td");

const cardText = [];

for (var i = 0; i < 25;){
	var selectedText = text[Math.floor(Math.random() * text.length)];
	if (!cardText.includes(selectedText)){
		cardText.push(selectedText);
		i++;
	}
}

for (var i = 0; i < squares.length; i++){
	squares[i].addEventListener("click", selectSquare);
	squares[i].textContent = cardText[i];
}
squares[12].textContent = "FREE SPACE";
squares[12].style.backgroundColor = "yellow";
	
function selectSquare(){
	if (this.style.backgroundColor != "yellow"){
		this.style.backgroundColor = "yellow";
	} else {
		this.style.backgroundColor = "white";
	}
}
