import './Page2.css';
import Card from '../../componets/Card/Card'
import { useEffect, useState } from 'react';

function Page2() {
  const [pizzas, setPizzas] = useState(0);
  useEffect(() => {
    fetch('https://react-pizza-93d7b-default-rtdb.europe-west1.firebasedatabase.app/-MQO7AJ91Dj3uLqfd6Ji/pizzas.json')
      .then(response => response.json())
      .then(data => console.log(data));
  });
  return (
    <div>
      <Card />
    </div>
  );
}

export default Page2;
