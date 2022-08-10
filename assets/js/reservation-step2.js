const btns = document.querySelectorAll('.btn');

for(let i = 0; i <= btns.length; i++){
  btns[i].classList.add("select");
}



const selects = document.getElementsByClassName('select');
for(let i = 0; i < selects.length; i++){
	selects[i].addEventListener('click', function(){
		window.location = 'reservation-step3.html';
	})
}