function add_budget() {
  let client_name = document.getElementById('client_name').value;
  let project_name = document.getElementById('prog_name').value;
  let budget_val = document.getElementById('budget').value;

  // Create new budget object
  let new_budget = {
    client: client_name,
    project: project_name,
    budget: budget_val,
  };
  // Get current array as JSON
  let cur_array = sessionStorage.getItem('budget_array');

  // Check if session exists
  // Push new budget to session
  if (cur_array == null) {
    cur_array = [];
    cur_array.push(new_budget);
  } else {
    let cur_parsed = JSON.parse(cur_array);
    cur_parsed.push(new_budget);
    cur_array = cur_parsed;
  }

  // Store new budget array in session
  sessionStorage.setItem('budget_array', JSON.stringify(cur_array));
}

function clear_form() {
  // Replace all input fields with empty string
  document.getElementById('client_name').value = '';
  document.getElementById('prog_name').value = '';
  document.getElementById('budget').value = '';
}
