// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((oneMus) => {
    if (state.mushrooms) {
      oneMus.style.visibility = 'visible';
    } else {
      oneMus.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGre) => {
    if (state.greenPeppers) {
      oneGre.style.visibility = 'visible';
    } else {
      oneGre.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauceElement = document.querySelector('.sauce')
  if (state.whiteSauce){
    sauceElement.setAttribute ('class', 'sauce sauce-white')
  } 
  else{
    sauceElement.setAttribute ('class', 'sauce')
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let glutenElement = document.querySelector('.crust')
  if (state.glutenFreeCrust){
    glutenElement.setAttribute ('class', 'crust crust-gluten-free')
  } 
  else{
    glutenElement.setAttribute ('class', 'crust')
  }
}
function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  document.querySelectorAll('.btn').forEach((btn) => {
    switch (btn.innerHTML) {
      case 'Pepperonni':
        state.pepperonni ? btn.classList.add('active') : btn.classList.remove('active');
        break;
      case 'Mushrooms':
        state.mushrooms ? btn.classList.add('active') : btn.classList.remove('active');
        break;
      case 'Green peppers':
        state.greenPeppers ? btn.classList.add('active') : btn.classList.remove('active');
        break;
      case 'White sauce':
        state.whiteSauce ? btn.classList.add('active') : btn.classList.remove('active');
        break;
      case 'Gluten-free crust':
        state.glutenFreeCrust ? btn.classList.add('active') : btn.classList.remove('active');
        break;

      default:
        break;
    }
  })
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const priceList = [...document.querySelectorAll('.price ul li')];
  const totalPrice = document.querySelector('.price strong');
  let price = basePrice;
  for (value in ingredients) {
    let name = ingredients[value].name.toLowerCase();
    let removeList = priceList.filter(li => li.innerHTML.includes(name));
    if (state[value]) {
      price += ingredients[value].price;
      removeList[0].style.display = 'block'
    } else {
      removeList[0].style.display = 'none';
    }
  }
  totalPrice.innerHTML = `$${price}`;
}


renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', function () {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function () {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
