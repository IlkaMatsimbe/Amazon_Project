//a variavel cart pode ser usada fora porque ela é exportada.
export let cart = JSON.parse(localStorage.getItem('cart'));


loadFromStorage();

 export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem('cart'));
if (!cart) {
  // Se o cart não existir, inicializamos com um array vazio.
 
cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity:2,
  deliveryOptionId: '1',

},{
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity:1,
  deliveryOptionId: '2',
}];

}
}

 
  
// Isso é útil para manter o carrinho de compras mesmo após o usuário fechar o navegador, 
// portanto sempre que atualizarmos o cart, ele precisara salvar no localStorage.
function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}


export function addToCart(productId) {
   let matchingItem;

 
    cart.forEach((cartitem) => {
      if (productId === cartitem.productId) {
        matchingItem = cartitem;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productId: productId,
        quantity: 1,
        deliveryOptionId: '1'
      });
    }

    saveToStorage();
}



 // Para remover um item do carrinho, precisamos criar um novo array, percorer atraves do cart e 
 // adicionar cada produto para o novo array, exceto o que queremos remover.
export function removeFromCart (productId) {
  const newCart = [];
  
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
 
  saveToStorage();

}

export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;

  cart.forEach((cartitem) => {
    if (productId === cartitem.productId) {
      matchingItem = cartitem;
    }
  });

    matchingItem.deliveryOptionId = deliveryOptionId;
    saveToStorage();
  }

