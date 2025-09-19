import { renderOrderSummary } from './checkout/orderSummary.js'; 
import { renderPaymentSummary } from './checkout/paymentSummary.js';  
import { loadProducts } from '../data/products.js'; 
import { loadCart } from '../data/cart.js';
//import '../data/cart-class.js';
//import '../data/car.js';
//import '../data/backend-practice.js';


//Promise.all() - corre multiplos promises ao mesmo tempo e espera todos serem resolvidos antes de continuar
Promise.all([
  new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1');
  });
}),


  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })
]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});




/*
// Usando Promises para carregar os produtos e o carrinho antes de renderizar a pagina
// Promises e uma forma boa de lidar com codigo assincrono e e similar ao done() e ao resolve() que tambem e similar ao done()
// A diferenca e que com Promises podemos encadear varios passos de codigo assincrono juntos.
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value1');
  });




}).then((value) => {
  console.log(value);


  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });



}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/


/*
loadProducts(() => {  
  loadCart(() => {
     renderOrderSummary();
     renderPaymentSummary();
  });
});
*/



