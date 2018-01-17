
// FUNCTIONS

function makeFlexDivs(squaresPerSide) {
	const flexContainer = document.querySelector("#flexContainer");
	let numOfPixels = squaresPerSide * squaresPerSide;
	let divHeight = 100/squaresPerSide;
	for(i=1; i<=numOfPixels; i++){
		let flexDiv = document.createElement('div');
		flexDiv.classList.add("flex");
		flexDiv.style.cssText = "height: " + divHeight + "%; width: " + divHeight + "%;" + " background: rgb(252,252,252)" 
		flexContainer.appendChild(flexDiv); 
	}
}

function removeFlexDivs() {
	const flexContainer = document.querySelector("#flexContainer");
	let elementArray = document.querySelectorAll(".flex");
	for(let i=elementArray.length-1; i>=0; i--){
		flexContainer.removeChild(elementArray[i]);
	}
} 

function addListenersToEditStyle(event, elToListen){
	let elArray = document.querySelectorAll(elToListen);
	for (let i=0; i< elArray.length; i++) {
		let backgroundColor = elArray[i].style.background; 
		let a = backgroundColor.substring(4,7) - 25,
			b = backgroundColor.substring(8,12)- 25,
			c = backgroundColor.substring(13,17) -25;
		backgroundColor="rgb(" + a + "," + b + "," + c + ")";
		console.log(backgroundColor);
		elArray[i].addEventListener(event, () => {fadeToBlack(i)});	
	}	
}

function fadeToBlack (i){
	let elArray = document.querySelectorAll(".flex");
	let backgroundColor = elArray[i].style.background; 
	let a = backgroundColor.substring(4,7),
		b = backgroundColor.substring(8,12),
		c = backgroundColor.substring(13,17);
	if(a >=25) {a -= 25} else {a = 0};
	if(b >=25) {b -= 25} else {b = 0};
	if(c >=25) {c -= 25} else {c = 0};	
	backgroundColor="rgb(" + a + "," + b + "," + c + ")";
	console.log(backgroundColor);
	elArray[i].style.background = backgroundColor;	
}

function resetAllClasses(elToMod, defaultClass){
	let elArray = document.querySelectorAll(elToMod);
	for (let i=0; i< elArray.length; i++) {
		elArray[i].classList = "";
		elArray[i].classList.add(defaultClass);
	}
}

function resetHandler(){
	resetAllClasses(".flex", "flex");
	removeFlexDivs();
	makeFlexDivs(prompt("How many squares per side?"));
	addListenersToEditStyle("mouseover" ,".flex", "red" );
}

// FIRST RUN

makeFlexDivs(64);


addListenersToEditStyle("mouseenter" ,".flex", "black" );

// EVENT LISTENERS

const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener("click", resetHandler);

