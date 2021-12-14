import { useSelector, useDispatch } from 'react-redux';

import {
    decrement,
    selectCount,
} from '../Card/cardSlice';
import './Shopping-cart.css';

// return <ShoppingCart key={pizza.id} name={pizza.name} category={pizza.category} id={pizza.id} imageUrl={pizza.imageUrl} price={pizza.price} rating={pizza.rating} sizes={pizza.sizes} types={pizza.types}/>

function ShoppingCart(props) {
    const dispatch = useDispatch();
    const pizzas = useSelector(selectCount);// [{id: 0}, {id: 0}, {id:1}]
    
    let sumPrice = 0;

    const groupPizza = pizzas.filter(pizza => pizza.id === props.id);// [{id: 0, price: 123}, {id: 0, price: 123}] фильтруем по айди

    groupPizza.forEach((pizza)=> {
        // суммируем 
        sumPrice = sumPrice + pizza.price;
    })

    
    return (
        <li className="shopppingCart">
            <div className="shoppingCart-description">
                <div className="shoppingCart-img"><img width="100%" src={props.imageUrl}/></div>
                <div className="shoppingCart-item">{props.name}</div>
            </div>
            <div className="shoppingCart-action">
                <div  className="shoppingCart-price">{sumPrice}</div>
                <div ><button onClick={() => dispatch(decrement(props))} className="shoppingCart-remove"></button></div>
            </div>
        </li>
    );
}

export default ShoppingCart;
