



const selects = document.getElementsByClassName('select');
for(let i = 0; i < selects.length; i++){
	selects[i].addEventListener('click', function(){
		window.location = 'reservation-step3.html';
	})
}