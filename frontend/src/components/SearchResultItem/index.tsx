import { useState } from "react";

interface IProps {
	classname?: string;
	resultItem: any;
}

const renderLogo = (resultItem: any) => {
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

const SearchItem: React.FC<IProps> = ({ classname = '', resultItem }) => {
	return (
		<div className={classname}>
			{renderLogo(resultItem)}
			<h1>{resultItem.name}</h1>
			<p>{resultItem.website}</p>
		</div>
	)
}

export default SearchItem;


