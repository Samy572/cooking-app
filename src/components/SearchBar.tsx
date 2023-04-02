import React from 'react';

const SearchBar = ({ setAxiosSearch }: any) => {
	const handleChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
		setAxiosSearch(e.currentTarget.value);
	};

	return (
		<div className="searchbar">
			<input onChange={(e) => handleChangeInput(e)} type="search" placeholder="search" />
		</div>
	);
};

export default SearchBar;
