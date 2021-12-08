import './Card.css';

function Card() {
    return (
      <div className="Card">
                <ul className="Card-body">
                    <li className="Card-img"><div className="Card-img__inner"></div></li>
                    <li className="Card-title">Устрицы по-рокфеллерски</li>
                    <li className="Card-description">Вкусно. По вкусу вкусно, по сути тоже вкусно. По вкусу вкусно, по сути тоже вкусно.</li>
                    <li className="Card-price">
                        <div className="Card-price__rublesGramms">
                            <span className="Card-price__rubles">2700 Р</span>
                            <span className="Card-price__gramms">/ 500 г.</span>
                        </div>
                        <button className="buy-button">Добавить в корзину</button>
                    </li>
                </ul>
      </div>
    );
  }
  
  export default Card;
  