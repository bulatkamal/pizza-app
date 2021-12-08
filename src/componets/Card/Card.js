import './Card.css';

function Card(props) {
    return (
        <div className="Card">
            <ul className="Card-body">
                <li className="Card-img"><div className="Card-img__inner"><img width="100%" src={props.imageUrl} alt="Изображение пиццы"/></div></li>
                <li className="Card-title">{props.name}</li>
                <li className="Card-description">Вкусно. По вкусу вкусно, по сути тоже вкусно. По вкусу вкусно, по сути тоже вкусно.</li>
                <li className="Card-price">
                    <div className="Card-price__rublesGramms">
                        <span className="Card-price__rubles">{props.price}</span>
                        <span className="Card-price__gramms">/ 500 г.</span>
                    </div>
                    <button className="buy-button">Добавить в корзину</button>
                </li>
            </ul>
        </div>
    );
}

export default Card;
