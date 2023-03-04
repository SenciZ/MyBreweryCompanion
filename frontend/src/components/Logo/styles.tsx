import styled from "styled-components";
import { SecondaryFont } from "../../styles/styles";

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    
    h1 {
        ${SecondaryFont}
        font-weight: 400;
        font-size: 1.35rem;
        align-text: center;

        .logo-brewery {
            color: ${({ theme }) => theme.colors.primary};
        }
        
        .logo-companion {
            color: #FFF;
        }
}`;