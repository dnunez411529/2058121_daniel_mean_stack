let fs = require('fs');
let readline = require('readline-sync');

// Used a do while loop to do an initial entry and then prompt the user to continue or quit
let input = '';
do {
  // Used readline-sync to take input from user
  let fname = readline.question('Enter first name: ');
  let lname = readline.question('Enter last name: ');
  let gender = readline.question('Enter gender: ');
  let email = readline.questionEMail('Enter email: ');
  let date = new Date();

  // Create a object with the users information and also the current date and time
  let msg = {
    fname: fname,
    lname: lname,
    gender: gender,
    email: email,
    date: date.toDateString(),
    time: date.toLocaleDateString(),
  };

  debugger;

  // Read the current userInfo.json file, if it doesn't exist the 'a+' flag creates one, and then stored the data in userData.
  let userData = fs.readFileSync('userInfo.json', { flag: 'a+' }).toString();
  let userJson = [];
  // If the current json file isn't empty, parse it and append current info
  if (userData.length > 0) {
    userJson = JSON.parse(userData);
    userJson.push(msg);
  } else {
    // If empty just push the current user info
    userJson.push(msg);
  }

  // Replace previous json info with updated one
  fs.writeFileSync('userInfo.json', JSON.stringify(userJson));
  console.log('New user entry created!');
  input = readline.question('Enter q to quit or enter to add another entry: ');
} while (input != 'q');
