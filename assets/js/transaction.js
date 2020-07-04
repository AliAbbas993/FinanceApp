let date = new Date();
var monthNames = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];

let monthBox = document.getElementById('month_filter'); 
for(let i = 0; i< monthNames.length; i++){
	let monthEle = document.createElement('OPTION');
	monthEle.setAttribute( 'id', monthNames[i]);
	monthEle.innerHTML = monthNames[i];
	monthBox.appendChild(monthEle)

	//set current month initiallly
	if( i == (monthNames.length - 1)){
		let currentMonth = date.getMonth();
		let defaultMonth = monthNames[currentMonth];
		document.getElementById(defaultMonth).selected = "true";
	}
}

let yearBox = document.getElementById('year_filter');
var lastFiveYear = date.getFullYear() - 5;
for(let i = 0; i< 6; i++){
	lastFiveYear = lastFiveYear + 1; 
	let yearEle = document.createElement('OPTION');
	yearEle.setAttribute( 'id', lastFiveYear);
	yearEle.innerHTML = lastFiveYear;
	yearBox.appendChild(yearEle)

	//set current month initiallly
	if( i == 5){
		let currentYear = date.getFullYear();
		document.getElementById(currentYear).selected = "true";
	}
}

var formBlock = document.getElementById('income-expense-forms');
var incomeForm = document.getElementById('income_form');
var expenseForm = document.getElementById('expense_form');

function toggleIncome(){
	formBlock.classList.add('show');
	incomeForm.classList.add('show');
}

function toggleExpense(){
	formBlock.classList.add('show');
	expenseForm.classList.add('show');
}

function closeForm(event){
	event.target.parentElement.classList.remove('show');
}