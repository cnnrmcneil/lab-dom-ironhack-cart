// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let calculate = price*quantity
  product.querySelector('.subtotal span').innerHTML = calculate
  return calculate
}

function calculateAll() {
  let total = 0
  const allProducts = document.getElementsByClassName('product');
  for (let i=0;i<allProducts.length;i++) {
    updateSubtotal(allProducts[i])
    total += updateSubtotal(allProducts[i])
    console.log(total)
  }
  document.querySelector('#total-value span').innerHTML = total


  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2


  // ITERATION 3\
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  event.target.parentNode.parentNode.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeBtn = document.querySelectorAll('.btn-remove')
  for (let i=0;i<removeBtn.length;i++){
  removeBtn[i].addEventListener('click', removeProduct)
  }

  const createProductBtn = documentElementById('')
});