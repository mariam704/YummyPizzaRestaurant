import React from 'react';
import MultiplePizzas from "../assets/ingredients1.png";
import "../styless/Quality.css";
function Quality() {
  return (
    <div className="about">
    <div className="aboutTop"
    style={{ backgroundImage: `url(${MultiplePizzas})` }}>
    </div>
    <div className="aboutBottom">
      <h1> Our Pizza</h1>
      <p>
      In 1984, kariam's pizza  opened its doors with one goal in mind: 
      your dreams will turned into a   Better Pizza. 
      We knew that with better ingredients we would create better pizzas. 
      That goal and the promise of "Better ingredients. 
      Better pizza." remain true to this day.
<br/>
<br/>
Our fundamental belief is simple: 
take care of your people and give them the best to work with and you will make superior quality pizza.
 This is what drives us and it's why we invest more than many others in the industry in our effort to 
 consistently deliver superior pizza and superior service.
      </p>
    </div>
  </div>
  );
}

export default Quality;
