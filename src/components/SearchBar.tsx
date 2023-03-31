import React from 'react';

const SearchBar = ({ setAxiosSearch }) => {
	const handleChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
		setAxiosSearch(e.currentTarget.value);
	};

	return (
		<div className="searchbar">
			<input onChange={(e) => handleChangeInput(e)} type="search" placeholder="search meal" />
		</div>
	);
};

export default SearchBar;
