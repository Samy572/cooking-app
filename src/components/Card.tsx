import React from 'react';

const Card = ({ card }: any) => {
	console.log(card);
	return (
		<a href={card.strSource} target="_blank" className="card">
			<h2>{card.strMeal}</h2>
			<h3>{card.strArea}</h3>
			<img src={card.strMealThumb} alt={card.strMeal} />
			<p className='txt-wrap'>
			{card.strInstructions}
			</p>
		</a>
	);
};

export default Card;
