let http = require('http');
let url = require('url');
let fs = require('fs');

let pageHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    label, input{
      margin-bottom: 5px;
    }
    input[type="submit"] {
      background-color: green;
      color: white;
    }
    .display-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    button {
      width: 100px;
      margin-bottom: 10px;
    }
    tr:nth-child(even){
      background-color: #f2f2f2;
    }
    th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #04AA6D;
      color: white;
    }
    th, tr {
      min-width: 100px;
    }
  </style>
</head>
<body>
  <div class="main" style="display: flex; flex-direction: column; align-items: center; ">
    <h2>Task Planner</h2>
    <div class="add-container">
      <h3>Add Task</h3>
      <form action="addTask" style="display: flex; flex-direction: column">
        <label for="empID">Employee ID: </label>
        <input type="text" name="empID" id="empID">
        <label for="taskID">Task ID: </label>
        <input type="text" name="taskID" id="taskID">
        <label for="task">Task: </label>
        <textarea name="task" id="task" cols="30" rows="10"></textarea>
        <label for="deadline">Deadline: </label>
        <input type="text" name="deadline" id="deadline"> 
        <input type="submit" value="Submit">
        <input type="reset" value="Reset">
      </form>
    </div>
    <div class="delete-container">
      <h3>Delete Task</h3>
      <form action="deleteTask">
        <label for="taskID">Task ID: </label>
        <input type="text" name="taskID" id="deleteID">
        <input type="submit" value="Submit">
      </form>
    </div>
    <div class="display-container">
      <h3>List Task</h3>
      <form action="display">
        <input type="submit" value="Display Tasks" />
      </form>
    </div>
  </div>
  
  
</body>
</html>`

let taskData = fs.readFileSync('userInfo.json', { flag: 'a+' }).toString();
let taskJson = [];
if (taskData.length > 0){
  taskJson = JSON.parse(taskData);
}
// If the current json file isn't empty, parse it and append current info
// if (userData.length > 0) {
//   userJson = JSON.parse(userData);
//   userJson.push(msg);
// } else {
//   // If empty just push the current user info
//   userJson.push(msg);
// }



let server = http.createServer((request,response) => {
  let urlInfo = url.parse(request.url, true);
  if(urlInfo.path != '/favicon.ico'){
    response.write(pageHTML);
    let pathname = urlInfo.pathname;
    switch(pathname){
      case '/addTask':
        console.log("Adding task...");
        let taskInfo = urlInfo.query;
        taskJson.push(taskInfo)
        fs.writeFileSync('userInfo.json', JSON.stringify(taskJson));
        break;
      case '/deleteTask':
        console.log("Deleteing task...")
        let deleteInfo = urlInfo.query;
        let i = 0;
        while(i < taskJson.length){
          console.log(`Comparing ${deleteInfo.taskID} and ${taskJson[i].taskID}`)
          if (deleteInfo.taskID == taskJson[i].taskID){
            console.log(`Deleting ${deleteInfo.taskID}...`)
            taskJson.splice(i, 1);
            i--;
          }
          i++;
        }
        fs.writeFileSync('userInfo.json', JSON.stringify(taskJson));
        break;
      case '/display':
        let tableHTML = `
        <div style="display: flex; justify-content: center;
  padding: 8px;">
          <table id="display-table">
            <tr>
              <th>Employee ID</th>
              <th>Task ID</th>
              <th>Task</th>
              <th>Deadline</th>
            </tr>`
        
        for(let i in taskJson){
          tableHTML += `
                      <tr> 
                        <td> ${taskJson[i].empID} </td>
                        <td> ${taskJson[i].taskID} </td>
                        <td > ${taskJson[i].task} </td>
                        <td> ${taskJson[i].deadline} </td>
                      </tr>
                      `
        }

        tableHTML += `
          </table>
        </div>
        `
        response.write(tableHTML);
    }
  }
  response.end();
})

server.listen(9090, () => console.log("Server running on port number 9090"))