// Grab Array
let ss: string | null | Array<Item> = sessionStorage.getItem('cart_array');
let total: number = 0;
// Get current sessions data
if (ss == null) {
  (<HTMLInputElement>document.getElementById('cart-container')).innerHTML =
    '<h1> Empty Cart </h1>';
} else {
  let cur_ss: Array<Item> = JSON.parse(ss);
  console.log(cur_ss);
  let teeQty: number = 0;
  let strawQty: number = 0;
  let cupQty: number = 0;
  let glovesQty: number = 0;
  for (let i = 0; i < cur_ss.length; i++) {
    total += cur_ss[i].price;
    switch (cur_ss[i].itemName) {
      case 'T-Shirt':
        teeQty += 1;
        break;
      case 'Cup':
        cupQty += 1;
        break;
      case 'Straw':
        strawQty += 1;
        break;
      case 'Gloves':
        glovesQty += 1;
        break;
    }
  }
  update(teeQty, strawQty, cupQty, glovesQty);
  (<HTMLInputElement>document.getElementById('total')).innerText = total
    .toFixed(2)
    .toString();
}

function update(
  teeQty: number,
  strawQty: number,
  cupQty: number,
  glovesQty: number
): void {
  let cur_table = (<HTMLInputElement>(
    document.getElementById('fin_table')
  )).getElementsByTagName('tbody')[0];
  let arrItem: Array<string> = ['T-Shirt', 'Straw', 'Cup', 'Gloves'];
  for (let i = 0; i < 4; i++) {
    let curItemName: string = arrItem[i];
    let newRow = cur_table.insertRow();
    let newCell = newRow.insertCell();
    newCell.appendChild(document.createTextNode(curItemName));
    switch (curItemName) {
      case 'T-Shirt':
        newRow.insertCell().appendChild(document.createTextNode('$10000.00'));
        newRow
          .insertCell()
          .appendChild(document.createTextNode(teeQty.toString()));
        newRow
          .insertCell()
          .appendChild(
            document.createTextNode(
              '$' + (teeQty * 10000).toFixed(2).toString()
            )
          );
        break;
      case 'Straw':
        newRow.insertCell().appendChild(document.createTextNode('$0.50'));
        newRow
          .insertCell()
          .appendChild(document.createTextNode(strawQty.toString()));
        newRow
          .insertCell()
          .appendChild(
            document.createTextNode(
              '$' + (strawQty * 0.5).toFixed(2).toString()
            )
          );
        break;
      case 'Cup':
        newRow.insertCell().appendChild(document.createTextNode('$10.00'));
        newRow
          .insertCell()
          .appendChild(document.createTextNode(cupQty.toString()));
        newRow
          .insertCell()
          .appendChild(
            document.createTextNode('$' + (cupQty * 10).toFixed(2).toString())
          );
        break;
      case 'Gloves':
        newRow.insertCell().appendChild(document.createTextNode('$1.00'));
        newRow
          .insertCell()
          .appendChild(document.createTextNode(glovesQty.toString()));
        newRow
          .insertCell()
          .appendChild(
            document.createTextNode('$' + (glovesQty * 1).toFixed(2).toString())
          );
        break;
    }
  }
}
