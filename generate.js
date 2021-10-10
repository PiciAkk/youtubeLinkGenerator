const readline = require('readline-sync');
const commandLineArguments = process.argv.slice(2);
if (commandLineArguments.length == 1) {
  var inputURL = commandLineArguments[0];
} else if (commandLineArguments.length == 0) {
  console.log("Can't read command-line arguments...")
  var inputURL = readline.question("Enter input URL: ")
} else {
  console.log("Error: Too many command-line arguments...")
  process.exit()
}
encodedURL = encodeURI(inputURL);
for (i = 0; i < 212; i++) {
	var randomToken;
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  	const charactersLength = characters.length;
	randomToken += characters.charAt(Math.floor(Math.random() * charactersLength));
}
randomToken = randomToken.slice(10)
outputURL = ("https://www.youtube.com/redirect?redir_token=" + randomToken + "&q=" + encodedURL)
console.log(outputURL)
