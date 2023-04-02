import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import { CardProps } from '../interfaces/CardTypes';

const Home = () => {
	const [meal, setMeal] = useState([]);
	const [axiosSearch, setAxiosSearch] = useState('Beef');
	console.log(meal);
	useEffect(() => {
		axios.get(`https://themealdb.com/api/json/v1/1/search.php?s=${axiosSearch}`).then((res) => setMeal(res.data.meals));
	}, [axiosSearch]);

	console.log(axiosSearch);

	return (
		<div>
			<h1>Recipe ideas</h1>
			<SearchBar setAxiosSearch={setAxiosSearch} />
			<div className="container">
				{meal ? meal.map((card : CardProps, index) => <Card key={index} card={card}  />) : <p className="noDatas">No dishes found for your search. 😥</p>}
			</div>
		</div>
	);
};

export default Home;
