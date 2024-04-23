var database = [
	{
		username: "Anna",
		password: "Anna"
	},
	{
		username: "Sally",
		password: "Sally"
	},
	{
		username: "Ingrid",
		password: "Ingrid"
	},
];

var newsfeed = [
	{
		username: "Anna",
		timeline: "Woop Woop"
	},
	{
		username: "Sally",
		timeline: "Tjoho woho"
	},
	{
		username: "Ingrid",
		timeline: "Vädret är bra"
	},
];

function isUserValid(username, password) {
	for (var i = 0; i < database.length; i++) {
	if (database[i].username === username && database[i].password === password) {
		return true;
	} else {
		alert("Tyvärr, fel användarnamn eller lösenord!");
	}

	}
	if (username === database[0].username &&
		password === database[0].password) {
		console.log(newsfeed);
	} else {
		alert("Tyvärr, fel användarnamn eller lösenord!");
	}
}

function signIn(username, password) {
	if (isUserValid(username, password)) {
		console.log(newsfeed);
	} else {
		alert("Tyvärr, fel användarnamn eller lösenord!");
	}
}

var userNamePrompt = prompt("Vad ar ditt anvandarnamn?");
var passwordPrompt = prompt("Vad är ditt losenord?");

signIn(userNamePrompt, passwordPrompt);