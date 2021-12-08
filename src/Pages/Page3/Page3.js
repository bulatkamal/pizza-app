import './Page3.css';
import ShoppingCart from '../../componets/Shopping-cart/Shopping-cart';

function Page3() {

  return (
    <div>
      <div className="cart">
        <header className="cart-header">
          <h1 className="cart-title">Корзина с выбранными товарами</h1>
        </header>
        <ul className="cart-order">
          <ShoppingCart />
        </ul>
        <footer className="footer">
          <div className="footer__wrapper">
            <div>
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
