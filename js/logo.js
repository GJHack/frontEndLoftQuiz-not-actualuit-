const [buttonQuiz,mainDiv,logo] = [document.querySelector(".buttonQuiz"),document.getElementById("mainDiv"),document.querySelector(".logoQuiz")]
console.log(buttonQuiz);
const makeText = (txt,tag,cssClass) => {
	document.write(`<${tag} class=${cssClass}>${txt}</${tag}>`);
	switch(cssClass) {
		case "present0": 
			setTimeout(()=> document.querySelector(`.${cssClass}`).style.left = "30%",1000);
			setTimeout(()=> document.querySelector(`.${cssClass}`).style.filter = "opacity(0)",1500);
			break;
		case "present1": 
			setTimeout(()=> document.querySelector(`.${cssClass}`).style.left = "35%",1000);
			setTimeout(()=> document.querySelector(`.${cssClass}`).style.filter = "opacity(0)",1500);
			break;
	}
}
setTimeout(()=> logo.style.filter = 'opacity(1)',1800);
setTimeout(()=> logo.style.transform = `scale(${50}%)`,1800);
setTimeout(()=> logo.style.filter = 'opacity(0)',2800);

setTimeout(()=> buttonQuiz.style.filter = 'opacity(1)',1800);
setTimeout(()=> buttonQuiz.style.transform = `scale(${10}%) rotate(90deg)`,1800);
setTimeout(()=> buttonQuiz.style.left = `10%`,1800);

makeText("Cafe Loft","h1","present0");
makeText("Present!","h1","present1");
