"use script";

const inputText = document.getElementById(`input_text`);
const add = document.querySelector(`.add`);
const adddetText = document.querySelector(`.adddet_text`);
const deleted = document.querySelector(`.delete`);

adddetText.innerHTML = "";

let tekshir = true;

let val = inputText.value;

let id = 0;

function delete2(id) {
  console.log(id);

  document.getElementById(id).remove();
  //console.log(el);
}

const ekrangaSaqlanganlarniChiqarish = function (obj) {
  let key = "i" + id++;
  let saqlangan = `<div class="adddet__text--box" id= ${key}>
  <p class="save_text">${val}</p>
  <button  class="delete"  onclick=delete2("${key}")>Delete</button>
</div>`;

  console.log(key);

  adddetText.insertAdjacentHTML("afterbegin", saqlangan);
};

// const ekrandanOchirish = function (obj) {};

add.addEventListener(`click`, function (e) {
  e.preventDefault();
  console.log(inputText.value);
  val = inputText.value;
  inputText.value = "";

  ekrangaSaqlanganlarniChiqarish(tekshir);
});

deleted.addEventListener(`click`, function (e) {
  e.preventDefault();
  console.log("s");
  // ekrandanOchirish(tekshir);
});
