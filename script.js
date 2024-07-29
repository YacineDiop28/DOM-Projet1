document.addEventListener('DOMContentLoaded', () => {
  const plusButtons = document.querySelectorAll('.plus-btn');
  const minusButtons = document.querySelectorAll('.minus-btn');
  const deleteButtons = document.querySelectorAll('.delete-btn');
  const heartButtons = document.querySelectorAll('.heart-btn');
  const quantities = document.querySelectorAll('.quantity');
  const unitPrices = document.querySelectorAll('.unit-price');
  const totalPriceElement = document.querySelector('.total');

// ***********************(+)***********************
  plusButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      let quantity = parseInt(quantities[index].textContent);
      quantity++;
      quantities[index].textContent = quantity;
      TotalPrice();
    });
  });
// *************************(-)**************************
  minusButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      let quantity = parseInt(quantities[index].textContent);
      if (quantity > 0) {
        quantity--;
        quantities[index].textContent = quantity;
        TotalPrice();
      }
    });
  });
// *******************(supprimé)*************************
  deleteButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const product = button.closest('.product');
      product.remove();
      TotalPrice();
    });
  });
// ********************(heart)**************************
  heartButtons.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle('liked');
    });
  });
// *******************(Prix Total)*******************
  function TotalPrice() {
    let totalPrice = 0;
    quantities.forEach((quantityElement, index) => {
      const quantity = parseInt(quantityElement.textContent);
      const unitPrice = parseInt(unitPrices[index].textContent.replace(' $', ''));
      totalPrice += quantity * unitPrice;
    });
    totalPriceElement.textContent = `${totalPrice} $`;
  }
});
