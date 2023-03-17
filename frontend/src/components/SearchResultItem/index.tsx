import { useState } from "react";
import { IBrewery } from "../../types/global";

interface IProps {
	classname?: string;
	resultItem: IBrewery;
}

const SearchItem: React.FC<IProps> = ({ classname = '', resultItem }) => {

	const renderLogo = () => {
		return (
			<img
				src={!!resultItem.website ?
					`https://logo.clearbit.com/${resultItem.website}` :
					`https://dummyimage.com/128x128/ffffff/000000.jpg&text=${resultItem.name}`}
				alt='ksksk'
				onError={(e: any) =>
					e.target.src = `https://dummyimage.com/128x128/ffffff/000000.jpg&text=${resultItem.website}`} />
		)
	}

	return (
		<div className={classname}>
			{ renderLogo() }
			<h1>{resultItem.name}</h1>
			<h1>{[resultItem.city,' ',resultItem.state]}</h1>
			<p>{resultItem.website}</p>
		</div>
	)
}

export default SearchItem;


