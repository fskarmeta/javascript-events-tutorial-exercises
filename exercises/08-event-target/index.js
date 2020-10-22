window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		//you code here
		let btn = document.querySelector("button");
		let img = document.querySelector("img");
		let a = document.querySelector("a");
		if (event.target === btn) {
			alert(event.target.id);
		}
		if (event.target === img) {
			alert(event.target.id);
		}
		if (event.target === a) {
			alert(event.target.id);
		}
	});
};
