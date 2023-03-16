import { H1 } from "../../styles/headings";
import { LogoContainer } from "./styles";
import { BeerMug } from './assets/BeerMug';

interface IProps {
  classname?: string;
}

export const AppLogo: React.FC<IProps> = ({ classname = '' }) => {
  return (
    <LogoContainer href='/'>
      <div className='logo-graphic-container'>
        <BeerMug />
      </div>
      <H1><span className="logo-brewery">Brewery</span><span className="logo-companion">Companion</span></H1>
    </LogoContainer>
  )
}