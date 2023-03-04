import { LogoContainer } from "./styles";


interface IProps {
    classname?: string;
}

export const AppLogo: React.FC<IProps> = ({ classname='' }) => {
    return (
        <LogoContainer>
            <h1><span className="logo-brewery">Brewery</span><span className="logo-companion">Companion</span></h1>
        </LogoContainer>
    )
}