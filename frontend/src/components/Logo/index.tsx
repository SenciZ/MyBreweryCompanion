import { H1 } from "../../styles/headings";
import { LogoContainer } from "./styles";


interface IProps {
    classname?: string;
}

export const AppLogo: React.FC<IProps> = ({ classname='' }) => {
    return (
        <LogoContainer>
            <H1><span className="logo-brewery">Brewery</span><span className="logo-companion">Companion</span></H1>
        </LogoContainer>
    )
}