window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
};

//the listener function here

let btn = document.getElementById("theGreen");
btn.addEventListener("click", e => {
	alert("wuju");
});
