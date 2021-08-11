// Item class with title and price
class Item {
  constructor(public itemName: string, public price: number) {}
  getItemName(): string {
    return this.itemName;
  }
  getPrice(): number {
    return this.price;
  }
}
// addCart function that grabs current session and pushes a new Item onto it
function addCart(item: string, price: number): void {
  let newItem: Item = new Item(item, price);
  let ss: string | null | Array<Item> = sessionStorage.getItem('cart_array');
  if (ss == null) {
    ss = [];
    ss.push(newItem);
  } else {
    let cur_ss: Array<Item> = JSON.parse(ss);
    cur_ss.push(newItem);
    ss = cur_ss;
  }
  // Store new budget array in session
  sessionStorage.setItem('cart_array', JSON.stringify(ss));
  updateCounter(ss.length.toString());
}

function updateCounter(count: string): void {
  (<HTMLInputElement>document.getElementById('cart-size')).innerText = count;
}
