getUser();

// const user = {name: 'AliAbbas'}
// localStorage.setItem('user', JSON.stringify(user));

function getUser(){
	const user = JSON.parse(localStorage.getItem('user'));
	const userEle = document.getElementById('user-name');
	userEle.innerHTML = user.name;
}