import { useState } from "react";
import { H4 } from "../../styles/headings";
import { IBrewery } from "../../types/global";
import { ResultItemContainer } from "./styles";

interface IProps {
	classname?: string;
	resultItem: IBrewery;
}

const SearchItem: React.FC<IProps> = ({ classname = '', resultItem }) => {

	const breweryUrl = () => {
		return (
			<p className="brewery-website">{resultItem.website.replace("https://www.", "")
                .replace("http://www.", "")
                .replace("https://", "")
                .replace("http://", "")}</p>
		)
	}

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
		<ResultItemContainer className={classname}>
			{ renderLogo() }
			<H4>{resultItem.name}</H4>
			<p className="brewery-location">{[resultItem.city,', ',resultItem.state]}</p>
			{ breweryUrl() }
		</ResultItemContainer>
	)
}

export default SearchItem;


