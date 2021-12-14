import './Page3.css';
import ShoppingCart from '../../componets/Shopping-cart/Shopping-cart';
import {
  increment,
  selectCount,
} from '../../componets/Card/cardSlice';
import { useSelector, useDispatch } from 'react-redux';

function Page3() {
  const pizzas = useSelector(selectCount);// [{id: 0}, {id: 0}, {id:1}]
  const unique = [...new Set(pizzas.map(item => item.id))]; // [ '0', '1']

  const orderPizzas = [];

  unique.forEach((id)=> {
    const pizza = pizzas.find(x => x.id === id);
    orderPizzas.push(pizza)
  })

  //// [{id: 0}, {id:1}]
  
  return (
    <div>
      <div className="cart">
        <header className="cart-header">
          <h1 className="cart-title">Корзина с выбранными товарами</h1>
        </header>
        <ul className="cart-order">
          {orderPizzas.map((pizza => {
            return <ShoppingCart key={pizza.id} name={pizza.name} category={pizza.category} id={pizza.id} imageUrl={pizza.imageUrl} price={pizza.price} rating={pizza.rating} sizes={pizza.sizes} types={pizza.types} />
          }))}

        </ul>
        <footer className="footer">
          <div className="footer__wrapper">
            <div className="footer-amount">
              <span className="footer-description">Заказ на сумму:</span>
              <span className="footer-total">6 220 ₽</span>
            </div>
            <div><button className="footer-button">Оформить заказ</button></div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Page3;
