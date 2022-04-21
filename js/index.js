// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('input').value;
  const sub = parseInt(price.innerText)*parseInt(quantity);
  console.log(sub);
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = sub;
  return parseInt(sub);
}
function calculateAll() {
  
  
// ITERATION 2
  let total= 0
  const multiProduct = Array.from(document.getElementsByClassName('product'));
  for(let counter of multiProduct){
   total += updateSubtotal(counter);
  }
  document.querySelector('#total-value span').innerText = total;
}


// ITERATION 4
function removeProduct(event) {
  
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const deleteP = target.parentNode.parentNode;

  deleteP.remove();
  
  return calculateAll();
  
  //... your code goes here
}


// ITERATION 5
function createProduct() {
  const createP  =  .addEventListener("click",  )//... your code goes here
}
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeP = Array.from(document.getElementsByClassName('btn-remove'))
  removeP.forEach(button => {
    button.addEventListener('click', removeProduct)
  });
});
