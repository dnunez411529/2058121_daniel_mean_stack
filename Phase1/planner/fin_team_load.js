// Get table tbody
let cur_table = document
  .getElementById('fin_table')
  .getElementsByTagName('tbody')[0];

// Get current sessions data
let cur_session = sessionStorage.getItem('budget_array');
let cur_parsed = JSON.parse(cur_session);

// Parse through session data
for (let i = 0; i < cur_parsed.length; i++) {
  // Create new row for table
  let newRow = cur_table.insertRow();
  // Go through each data entry (name, project, budget)
  for (let keys in cur_parsed[i]) {
    // Using the for in to get the values...(name, project, budget)

    // Create new cell and insert the appropriate value to cell
    let newCell = newRow.insertCell();
    let newBudgets = document.createTextNode(cur_parsed[i][keys]);
    newCell.appendChild(newBudgets);
  }
}
