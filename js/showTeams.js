const mainDiv2 = document.getElementById('divMain');
const namesArray = ["Команда 1","Команда 2","Команда 3","Команда 4"];
const buttonQuiz2 = document.querySelector('.buttonQuiz');
const logo2 = document.querySelector(".logoQuiz");
let counter = 1;

const makeTeamName = () => {
	logo2.style.filter = "opacity(0)";
	mainDiv2.innerHTML += `<h1 class="textTeam"> НАЗВАНИЯ НАШИХ КОМАНД</h1>`;
	const h1Team = document.querySelector('.textTeam');
	h1Team.style.transition = "all 3s";
	h1Team.style.filter = "opacity(1)";
	
	for(let i = 0;i < namesArray.length;i++) {
		let makeH2 = `<h2 class="nameTeams" style="top:${i*12}%;marginTop:${i*5}%">${namesArray[i]}</h2>`;
		mainDiv2.innerHTML += makeH2;
	}
	
	const arrayNames = document.querySelectorAll(".nameTeams");
	
	for(let prop of arrayNames) {
	console.log(prop);
	setTimeout(() => prop.style.marginLeft = "5%",counter*1000);
	setTimeout(() => prop.style.filter = "opacity(1)",counter*1000);
	setTimeout(() => prop.style.fontSize = "500%",counter*1000);
	++counter;
}
}
//makeTeamName(namesArray);


buttonQuiz2.addEventListener('click',()=>makeTeamName(namesArray));