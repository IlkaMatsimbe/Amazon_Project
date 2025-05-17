//a variavel cart pode ser usada fora porque ela é exportada.
export const cart = [];

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
