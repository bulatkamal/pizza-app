import './Page2.css';
import Card from '../../componets/Card/Card'
import { useEffect, useState } from 'react';
import {
  increment,
  selectCount,
} from '../../componets/Card/cardSlice';
import { useSelector, useDispatch } from 'react-redux';
import {
  Link
} from "react-router-dom";

function Page2() {

  const count = useSelector(selectCount);
  //useState нужен для обновления DOM
  const [pizzas, setPizzas] = useState([]);

  //useEffect нужен для того, чтобы fetch был вызван после того как DOM отрендерится
  useEffect(() => {
    if (pizzas.length === 0) {
      fetch('https://react-pizza-93d7b-default-rtdb.europe-west1.firebasedatabase.app/-MQO7AJ91Dj3uLqfd6Ji/pizzas.json')
        //конвертирую ответ сервера в json
        .then(response => response.json())
        .then(data => setPizzas(data));
    }
  });

  const orderPizzas = useSelector(selectCount);

  let orderSum = 0;

  orderPizzas.forEach((pizza)=>{
    orderSum = orderSum + pizza.price;
  });

  console.log(pizzas)
  return (
    <div className="Products">
      <div className="Products-header">
        <h1 className="Products-title">Наша продукция</h1>
        <div className="Products-block">
          <div className="Products-cart">
            <div className="Products-amount">{count.length} товара</div>
            <div>на сумму {orderSum} ₽</div>
          </div>
          <Link to="/page3" className="Products-button" >  </Link>
        </div>
      </div>
      <div className="Products-wrapper">
        {pizzas.map((pizza) =>
          <Card key={pizza.id} name={pizza.name} category={pizza.category} id={pizza.id} imageUrl={pizza.imageUrl} price={pizza.price} rating={pizza.rating} sizes={pizza.sizes} types={pizza.types} />
        )}
      </div>
    </div>
  );
}

export default Page2;
