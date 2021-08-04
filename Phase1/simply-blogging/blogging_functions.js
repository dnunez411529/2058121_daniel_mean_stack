function add() {
  let title = document.getElementById('title_name').value;
  let article = document.getElementById('articles_name').value;
  let img_url = document.getElementById('image_name').value;

  let cont_div = document.getElementById('card-container');

  let new_card = `<div class="card grid-item" style="width:18rem; margin-bottom:30px; margin-right:25px"> <img src="${img_url}" class="card-img-top" alt="${title} image"> <div class="card-body"> <h5 class="card-title"> ${title} </h5> <p class="card-text"> ${article} </p> </div> </div> </div>`;

  cont_div.innerHTML += new_card;
}
