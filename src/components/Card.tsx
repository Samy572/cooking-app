import React from 'react';

const Card = ({ card }) => {
	console.log(card);
	return (
		<div className="card">
      <h2>{card.strMeal}</h2>
			<h3>{card.strArea}</h3>
			<img src={card.strMealThumb} alt={card.strMeal} />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquid velit ipsam? Debitis molestias modi aliquid cumque, voluptatem quaerat. Necessitatibus ad deserunt labore eligendi, quasi iusto nemo perspiciatis velit placeat sunt distinctio numquam modi nisi.</p>
		</div>
	);
};

export default Card;
