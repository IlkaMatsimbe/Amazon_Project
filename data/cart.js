//a variavel cart pode ser usada fora porque ela é exportada.
export let cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity:2,
},
{
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity:1,

}];

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
        quantity: 1
      });
    }
}

 //Para remover um item do carrinho, precisamos criar um novo array, percorer atraves do cart e 
 // adicionar cada produto para o novo array, exceto o que queremos remover.
export function removeFromCart(productId) {
  const newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

}